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

 		<div class="markdown-body prose">
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
  }

  .markdown-body h2 {
    font-size: 2.2rem;
  }

  .markdown-body h3 {
    font-size: 1.8rem;
  }

  .markdown-body h4 {
    font-size: 1.4rem;
  }

  .markdown-body a {
    color: #8a5cf6;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .markdown-body a:hover {
    color: #a881f7;
  }

  .markdown-body code {
    background-color: #2a2a3e;
    padding: 3px 6px;
    border-radius: 5px;
    font-family: 'monospace';
  }

  .markdown-body pre {
    background-color: #2a2a3e;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
  }

  .markdown-body pre code {
    padding: 0;
    background-color: transparent;
  }
  @media (width < 800px){
.post-content h1{
  font-size: 2.5rem;
}
  }
</style>