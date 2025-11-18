<script>
    export let data
</script>
<section class="main">
    <div class="main-container">
        <h1 class="poppins">Blog</h1>
        <div class="articles">
            {#each data.posts as article}
            {#if article}
            <article class="container_article">
                <h3 class="poppins">{article.title}</h3>
                <span class="date">Fecha: {article.date}</span>
                <p class="description-content">{article.description}</p>
                <div class="tags">
                    {#each article.tags as tag}
                    <span class="tag">{tag}</span>
                    {/each}
                </div>
                <a class="button" href="blog/{article.slug}">Leer</a>
            </article>
            {/if}
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
        padding: 40px 0;
        flex-direction: column;
    }
    .main-container{
        width: 80%;
        max-width: 12000px;
        margin: 20px auto;
    }
    
    h1{
        font-size: 4rem;
        text-align: center;
        margin-bottom: 40px;
        color: #e0e0e0;
    }
    .date{
        margin: -20px 0 0;
        font-size: 0.9rem;
    }
    .tags{
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
        width: 100%;
    }
.tag{
        /* Estilo "Outline" */
 		background-color: transparent;
 		border: 1px solid #632fdd; /* Usamos tu morado principal */
 		color: #a9a9d4; /* Un color de texto más sutil */
        
        /* Ajustes de tipografía para "look" de tag */
 		font-size: 0.75rem; /* Un poco más pequeño */
 		font-weight: 600;
 		text-transform: uppercase; /* Clave para que parezcan tags */
 		letter-spacing: 0.5px; /* Le da "aire" al texto */

 		padding: 4px 10px; /* Ajustamos padding vertical */
 		border-radius: 20px;
 		cursor: default;
 		
        /* Transición suave para el efecto hover */
 		transition: all 0.2s ease-in-out;
 	}
 	.tag:hover{
        /* Efecto de "relleno" */
 		background-color: #632fdd;
 		color: #ffffff; /* Texto blanco para máximo contraste */
 	}
    .articles{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }
    .container_article{
        border: 1px solid #632fdd;
        border-radius: 10px;
        padding: 25px;
        background-color: #1a1a2e;
        color: white;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        transition: all 0.3s ease;
    }
    .container_article:hover {
    border-color: white;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
  .container_article h3 {
    font-size: 1.5rem;
    margin: 0;
  }
  .container_article .description-content {
    font-size: 1rem;
    color: #b0b0b0;
    flex-grow: 1;
  }
  .container_article .button {
    background-color: #632fdd;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: flex-start;
  }

  .container_article .button:hover {
    background-color: #7b4fe3;
  }
</style>