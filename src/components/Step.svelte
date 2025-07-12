<script>
    let {step} = $props()

</script>

<div class="container_link" data-aos="fade-up" 
     data-aos-duration="1000" data-aos-once="true">
    <div class="logo_container">
        <i class="{step.icon}"></i>
    </div>
    <h3 class="poppins">{step.name}</h3>
    <p class="description-content">{@html step.description}</p>
    <div class="abajo">
        <a href="{step.linkGithub}" class="ver-button" target="_blank">
            <p class="ver-text">GITHUB <i class="fa-brands fa-github"></i>
            </p>
        </a>
        <a class="ver-button" href="{step.href}" target="_blank">
            <p class="ver-text">ver &rarr;</p>
        </a>
    </div>
</div>

<style>
    .abajo{
        display: flex;
        justify-content: space-between;
    }
    .container_link{
        border: 1px solid #632fdd;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 20px; /* Añadido padding para que el contenido no esté pegado al borde */
        background-color: #1a1a2e; /* Color de fondo similar al de tu imagen oscura */
        color: white; /* Color de texto general */
        text-decoration: none; /* Elimina el subrayado por defecto de los enlaces */
        gap: 15px; /* Espacio entre elementos */
        transition: all 0.1s;
    }
    .container_link:hover{
        border: 1px solid white;
        transform: translateY(-3px);
    }

    h3{
        font-size: 1.7rem;
        margin: 0; /* Elimina el margen por defecto de h3 */
        color: white; /* Asegura que el título sea blanco */
    }

    .logo_container{
        background-color: #334155; 
        border-radius: 50%; 
        height: 80px;
        width: 80px;  
        display: flex;
        justify-content: center; 
        align-items: center;     
        margin-top: -55px; 
        margin-bottom: 10px; 
    }
    .logo_container i {
        font-size: 2.7rem; 
        color: white; 
    }
        .description-content {
        /* Permite que este div ocupe todo el espacio disponible,
           empujando los elementos siguientes (como 'abajo') al final */
        flex-grow: 1;
        color: #b0b0b0; /* Color más claro para la descripción */
        line-height: 1.3; /* Espaciado entre líneas *//* Espacio entre descripción y el botón */
    }

    .ver-button {
        min-width: 15%;
        max-width: 36%;
        padding: 5px;
        text-align: center;
        cursor: pointer;
        color: white;
        position: relative;
        bottom: 0;
        overflow: hidden;
    }

    .ver-button .ver-text {
        position: relative;
        z-index: 10;
        padding: 5px;
    }

    /* Efecto hover del botón "ver" */
    .ver-button::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: white;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    .ver-button:hover::after {
        transform: scaleX(1);
    }

    .ver-button:hover .ver-text {
        color: #1a1a2e; /* Cambia el color del texto al hacer hover */
    }
</style>