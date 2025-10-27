<script>
    let articles = [
        {
            title: 'Servidor casero en venezuela',
            tag: ''
        }
    ]
</script>
<section class="main">
    <div class="main-container">
        <h1 class="poppins">Blog</h1>
    <div class="articles">
    {#each articles as article }
        <article class="container_article">
            <h3 class="poppins">{article.title}</h3>
            <p class="description-content">pequeña descripcion</p>
            <button>Leer</button>
        </article>
    {/each}
    </div>
    </div>
</section>
<style>
    .main{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-container{
        width: 60%;

    }
    h1{
        font-size: 4rem;
    }
       .container_article{
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
    .container_article:hover{
        border: 1px solid white;
        transform: translateY(-3px);
    }
</style>