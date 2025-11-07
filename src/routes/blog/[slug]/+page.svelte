<svelte:head>
    <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css"
    >
</svelte:head>
<script lang="ts">
    export let data;
</script>
<section class="main-container">
<article class="post-content">
 		<h1 class="poppins">{data.metadata.title}</h1>
 		
 		<p class="post-info">
 			Publicado el: {new Date(data.metadata.date).toLocaleDateString()}
 		</p>
 		
 		<div class="tags">
 			{#each data.metadata.tags as tag}
 				<span class="tag">{tag}</span>
 			{/each}
 		</div>

 		<hr />

 		<div class="markdown-body">
 			{@html data.content}
 		</div>

 	</article>
</section>
<style>
    .main-container {
    width: 70%;
    max-width: 800px;
    margin: 100px auto;
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
    background-color: #1a1a2e;
    padding: 30px;
    border: 1px solid #632fdd;
    
    
  }
  
  .post-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #d1d1d1;
    /* divide palabras con '-' usando las reglas del español*/
    hyphens: auto;
  }

  .post-info {
    font-size: 0.9rem;
    color: #a0a0a0;
    margin-bottom: 20px;
  }

  .tags {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
  }

  .tag {
    display: inline-block;
    background-color: #632fdd;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  hr {
    border: 0;
    height: 1px;
    background: #444;
    margin: 40px 0;
  }

  .markdown-body {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #c0c0c0;
    /*crea un salto de linea para palabras muy grandes*/
    overflow-wrap: break-word;
  }

  /* Usamos :global() para forzar a Svelte a aplicar estos estilos
    al contenido que viene de {@html} 
  */

  :global(.markdown-body h2){
    font-size: 2.2rem;
  }

  :global(.markdown-body h3) {
    font-size: 1.8rem;
  }
  :global(.markdown-body h4) {
    font-size: 1.4rem;
  }
  :global(.markdown-body a) {
    color: #8a5cf6;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  :global(.markdown-body a:hover) {
    color: #a881f7;
  }
  :global(.markdown-body code){
    background-color: #2a2a3e;
    padding: 3px 6px;
    font-family: "Montserrat";
  }
  :global(.markdown-body pre){
    background-color: #2a2a3e;
    overflow-x: auto;
    padding: 20px;
    margin: 10px 0;
  }
  :global(.markdown-body pre code) {
    padding: 0;
    background-color: transparent; 
  }
  :global(.markdown-body table){
    display: block;
    overflow-x: auto;
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    background-color: #2a2a3e;
    border: 1px solid #444;
  }
  :global(.markdown-body th),
  :global(.markdown-body td){
    padding: 12px 18px;
    text-align: left;
    border: 1px solid #444;
  }
  :global(.markdown-body th){
    background-color: #1a1a2e;
    font-weight: 600;
    color: #e0e0e0;
    border-bottom: 2px solid #632fdd;
  }
  :global(.markdown-body tr:nth-of-type(even)) {
    background-color: #2f2f42; 
  }

  :global(.markdown-body tr:hover) {
    background-color: #3a3a52;
  }

  @media (width < 800px){
    .post-content h1{
  font-size: 2.1rem;
}
:global(.markdown-body h2){
    font-size: 1.9rem;
  }

  :global(.markdown-body h3) {
    font-size: 1.7rem;
  }
  :global(.markdown-body h4) {
    font-size: 1.4rem;
  }
.main-container{
  width: 75%;
}
:global(.markdown-body tr:nth-of-type(even)) {
    background-color: #2f2f42; 
  }

  }
</style>