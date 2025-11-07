---
title: 'Automatización: Organizador de carpetas hecho en python'
description: 'Te enseño cómo crear un organizador de carpetas con python'
date: '11/06/2025'
tags: ['programacion', 'python', 'automatización']
published: true
---

Seguramente al abrir tu carpeta de descargas o cualquier otra te encuentras con una cantidad incontable de archivos de diferente tipos (imagenes, documentos, instaladores, etc) mezclados y te ha tocado buscar desesperadamente ese pdf que contiene la tarea que te hizo **chatgpt**, tardando un tiempo considerable y pensando *'que flojera'*, o teniendo que ordenar 20 pdf, 10 imagenes y 5 instaladores manualmente. Yo tambien habia pasado por esto, y por eso decedí crear un script que me permitiera seguir vagueando mientras mis archivos estan perfectamente ordenados.
Este script que utiliza python hace ese trabajo por mi. Puedes verlo directamente [Github](https://github.com/fiedri/fiedric-toolbox/blob/master/organizador%20de%20archivos/src/organizer_downloads_auto.py)

## Como funciona el script
Para construir esta herramienta use varias librerias de Python, algunas que ya vienen incluidas ("biblioteca éxtandar") y una externa para que me notifique cuando el script se esta ejecutando.

### Paso 1: las importacines
```Python
import os
import shutil
import sys
from win10toast import ToastNotifier
```

- `os` (Operating System): Nos permite verificar si un archivo o carpeta existe (`os.path.exists`), crear carpetas (`os.makedirs`), listar todos los archivos (`os.listdir`) y obtener la extensión de un archivo (`os.path.splitext`).
- `shutil` (Shell Utilities): Nos permite mover archivos de un lugar a otro (`shutil.move()`).
- `sys` (System): `sys.executable` me permite saber dónde se está ejecutando el script, lo cual es muy útil si se compila en un archivo .exe.
- `ToastNotifier` (de `win10toast`): Esta es la librería externa. Es la que nos permite enviar notificaciones nativas a Windows. Se instala con `pip install wintoast`.

### Paso 2: Mapa de archivos
Se crea un diccionario que actúa como un mapa, donde cada clave es el nombre de la carpeta que queremos crear (ej. "imagenes") y el valor es una lista de todas las extensiones de archivo que deben ir dentro de dicha carpeta.
```Python
notificar = ToastNotifier() # Inicializamos el notificador
tipos_de_archivo = {
    "imagenes": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
    "videos": [".mp4", ".avi", ".mov", ".mkv", ".webm"],
    "documentos": [".pdf", ".doc", ".docx", ".txt", ".xls", ".xlsx"],
    "ejecutables y sistema": [".exe", ".msi", ".bat", ".dll"],
    "comprimidos": [".zip", ".rar", ".7z", ".iso"],
    # ...y así con todas las demás categorías...
    "Otros": [] # Una categoría especial para lo que no coincida
}
```
### Paso 3: Configuración Flexible (Leer el rutas.txt)
No quería editar el script cada vez que quisiera añadir una carpeta nueva para organizar. Por eso, hice que el script leyera un archivo de configuración `rutas.txt`.

Esta función abre ese archivo, lee cada línea, y si la ruta escrita existe de verdad, la añade a una lista.
```Python
def obtener_rutas(ruta_actual, archivo='rutas.txt'):
    """
    Obtener rutas escritas en el archivo config/rutas.txt
    """
    rutas_validas = []
    # Busca el archivo .txt en una carpeta 'config'
    archivo_rutas = os.path.join(ruta_actual, 'config', archivo) 
    with open(archivo_rutas, 'r', encoding='utf-8') as rutas:
        for linea in rutas:
            ruta = linea.strip() # .strip() quita espacios en blanco
            # Si la ruta no está vacía Y existe...
            if ruta and os.path.exists(ruta):
                rutas_validas.append(os.path.abspath(ruta))
    
    return rutas_validas
```

### Paso 4: Manejo de duplicados
Esta es la parte más importante. ¿Qué pasa si muevo `tarea.pdf` a "Documentos" y ya existe un `tarea.pdf` dentro?

Para eso, esta la función mover_archivo.

- Intenta moverlo: Si el archivo no existe en el **destino**, simplemente lo mueve (`shutil.move`).

- Si ya existe:

    1- Crea una carpeta llamada "DUPLICADOS".
    2- Le cambia el nombre al archivo nuevo (ej. de `tarea.pdf` a `tarea (1).pdf`).
    3- Busca un nombre libre (si `tarea (1).pdf` existe, prueba con `tarea (2).pdf`, y así...).
    4- Mueve el archivo renombrado a la carpeta "DUPLICADOS".
```Python
def mover_archivo(origen, destino):
    try:
        if not os.path.exists(destino):
            # Ruta libre, mover normalmente
            shutil.move(origen, destino)
        else:
            # ¡Conflicto! El archivo ya existe
            carpeta_duplicados = os.path.join(os.path.dirname(destino), "DUPLICADOS")
            os.makedirs(carpeta_duplicados, exist_ok=True)
            
            # Lógica para encontrar un nuevo nombre (ej. "archivo (1).ext")
            contador = 1
            base, ext = os.path.splitext(os.path.basename(origen))
            nuevo_nombre = f"{base} ({contador}){ext}"
            nuevo_destino = os.path.join(carpeta_duplicados, nuevo_nombre)
            
            while os.path.exists(nuevo_destino):
                contador += 1
                nuevo_nombre = f"{base} ({contador}){ext}"
                nuevo_destino = os.path.join(carpeta_duplicados, nuevo_nombre)
                
            shutil.move(origen, nuevo_destino)
    except Exception:
        # Si algo falla (ej. archivo en uso), simplemente lo ignora
        # para que el script no se detenga.
        pass
```

### Paso 5: Organización
Esta función es la que recorre la carpeta que le pasamos:
1. Lista todo con `os.listdir(ruta)`.
2. Si es un archivo, busca su extensión en nuestro "mapa" (`tipos_de_archivo`) y lo manda a la función `mover_archivo`. Si no encuentra la extensión, lo manda a "Otros".
3. Si es una carpeta (y no es una de nuestras carpetas de categorías, como "Imagenes"), la mueve toda a una carpeta llamada "Carpetas".
```Python
def organizar_carpeta(ruta, tipos):
    for archivo in os.listdir(ruta):
        archivo_path = os.path.join(ruta, archivo)
        
        if os.path.isfile(archivo_path):
            # Es un archivo, buscar extensión
            extension = os.path.splitext(archivo_path)[1]
            for categoria, extensiones in tipos.items():
                if extension.lower() in extensiones:
                    destino = os.path.join(ruta, categoria, archivo)
                    break # Encontramos categoría, rompemos el bucle
            else:
                # No se encontró, va a "Otros"
                destino = os.path.join(ruta, "Otros", archivo)
            mover_archivo(archivo_path, destino)
            
        elif os.path.isdir(archivo_path) and not archivo in tipos.keys():
            # Es una carpeta, mover a "Carpetas"
            destino = os.path.join(ruta, "Carpetas", archivo)
            mover_archivo(archivo_path, destino)
```

### Paso 6: Ponerlo en marcha
El bloque if __name__== "__main__": es lo que realmente ejecuta todo.
1. Primero, obtiene todas las rutas a organizar de nuestro rutas.txt.
2. Luego, hace un bucle for por cada una de esas rutas y llama a organizar_carpeta.
3. Al terminar, usa notificar.show_toast() para enviarme una notificación de que se ha completado la ejecución.
```Python
if __name__== "__main__":
    # ... (código para encontrar ruta_script y ruta_icon) ...
    
    # 1. Obtenemos las rutas del .txt
    rutas = obtener_rutas(ruta_script)
    
    # 2. Organizamos cada una
    for rt in rutas:
        organizar_carpeta(rt, tipos_de_archivo)
        
    # 3. Notificacion
    notificar.show_toast(
        "Organizador de archivos",
        "✅ ¡Archivos de la carpeta descargas organizados!",
        icon_path= ruta_icon,
        duration=10,
    )
```
**Nota:** En mi caso utilizo **windows**, por lo que `wintoast` me funciona para las notificaciones, si utilizas **linux**, podrias intentar utilizar otra libreria o herramienta o simplemente saltarte este paso y la importacion de `wintoast`.
## Cómo Usarlo
1. Ve a mi repositorio [fiedri's Toolbox](https://github.com/fiedri/fiedric-toolbox/tree/master/organizador%20de%20archivos) en GitHub.
2. Asegúrate de tener Python y las librerías necesarias: pip install wintoast
3. Crea una carpeta config al lado del script, y dentro de ella un archivo rutas.txt.
4. En rutas.txt, escribe las rutas completas de las carpetas que quieres organizar (ej. C:\Users\fiedri\Downloads), una por línea.
5. Ejecútar

## Como automatizar el script (windows)
Para hacer que el script se ejecutara solo, sin tener que hacer nada. La forma más fácil es usar el Programador de Tareas (Task Scheduler).
1. Busca "Programador de Tareas" en el menú de inicio de Windows.
2. En el panel de la derecha, haz clic en "Crear Tarea Básica...".
3. Le pones un nombre y eliges cuándo quieres que se ejecute. Yo lo configuré para que corra semanalmente a una hora en la que sé que la PC estará encendida.
4. Elige "Iniciar un programa".
5. Configuración:
    - En "Programa/script", busca y selecciona tu python.exe (suele estar en C:\Python310\python.exe).
    - En "Agregar argumentos", pega la ruta completa al script: C:\ruta\a\tu\organizer_downloads_auto.py.
    - Opcional: Si compilaste el script a un .exe (lo que yo hice), solo tienes que poner la ruta a ese .exe en "Programa/script" y listo.