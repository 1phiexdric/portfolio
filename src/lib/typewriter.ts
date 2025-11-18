export function typewriter(node: HTMLElement, { speed = 1 }) {
    const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
    let originalNodes: Array<any> = [];
    let fullText = "";

    /**
     * Recorre el árbol DOM de forma recursiva para extraer todos los nodos.
     * Los descompone en una estructura de datos plana (originalNodes) que representa
     * las etiquetas de apertura, el texto y las etiquetas de cierre.
     * @param element - El elemento HTML a procesar.
     */
    function extractNodes(element: any) {
        element.childNodes.forEach((child: any) => {
            if (child.nodeType === Node.TEXT_NODE) {
                // Maneja los nodos de texto
                originalNodes.push({
                    type: 'text',
                    content: child.textContent
                });
                fullText += child.textContent;
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                const tagName = child.tagName.toLowerCase();
                // Maneja los nodos de elementos (etiquetas HTML)
                originalNodes.push({
                    type: 'open_tag',
                    tagName: tagName,
                    attributes: Array.from(child.attributes as NamedNodeMap).map((attr: Attr) => ({
                        name: attr.name,
                        value: attr.value
                    }))
                });
                extractNodes(child); // Llamada recursiva para los hijos
                if(!voidElements.has(tagName)){
                    originalNodes.push({
                        type: 'close_tag',
                        tagName: tagName
                    });
                }
            }
        });
    }

    // Clona el nodo para evitar modificar el original mientras se extrae su contenido
    const tempNode: Node = node.cloneNode(true);
    extractNodes(tempNode);

    // Calcula la duración total de la animación basándose en la longitud del texto y la velocidad
    const duration = fullText.length / (speed * 0.1);

    // Devuelve el objeto de transición de Svelte
    return {
        duration,
        /**
         * La función `tick` es llamada por Svelte en cada fotograma de la animación.
         * @param t - Un valor de 0 a 1 que representa el progreso de la animación.
         */
        tick: (t: any) => {
            // Calcula cuántos caracteres de texto deberían ser visibles en este punto de la animación
            const currentTextLength = Math.trunc(fullText.length * t);
            let generatedHtml = ''; // El HTML que se construirá
            let textProgress = 0; // Un contador para el texto que ya ha sido procesado
            const tagStack: string[] = []; // Una pila para rastrear las etiquetas HTML abiertas

            // Itera sobre la lista plana de nodos
            for (const item of originalNodes) {
                // Si ya hemos mostrado suficiente texto, podemos dejar de construir el HTML
                if (textProgress >= currentTextLength) {
                    break;
                }

                if (item.type === 'text') {
                    const textContent = item.content;
                    const remainingLength = currentTextLength - textProgress;
                    
                    // Añade solo la porción del texto que debe ser visible
                    if (remainingLength > 0) {
                        generatedHtml += textContent.slice(0, Math.min(remainingLength, textContent.length));
                    }
                    textProgress += textContent.length;
                } else if (item.type === 'open_tag') {
                    // Añade la etiqueta de apertura al HTML y a la pila
                    const attrs = item.attributes.map((attr: any) => `${attr.name}="${attr.value}"`).join(' ');
                    generatedHtml += `<${item.tagName}${attrs ? ' ' + attrs : ''}>`;
                    if (!voidElements.has(item.tagName)) {
                        tagStack.push(item.tagName);
                    }
                } else if (item.type === 'close_tag') {
                    // Cierra la etiqueta solo si es la última que se abrió
                    if (tagStack.length > 0 && tagStack[tagStack.length - 1] === item.tagName) {
                        generatedHtml += `</${item.tagName}>`;
                        tagStack.pop();
                    }
                }
            }

            // Al final, cierra cualquier etiqueta que haya quedado abierta en la pila.
            // Esto asegura que el HTML no quede mal formado.
            while (tagStack.length > 0) {
                generatedHtml += `</${tagStack.pop()}>`;
            }

            // Actualiza el contenido del nodo con el HTML generado
            node.innerHTML = generatedHtml;
        }
    };
}