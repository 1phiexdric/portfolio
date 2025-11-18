<script lang="ts">
  import Step from "./Step.svelte";

let steps=[{
    name: "BarberHero", icon: "fa-solid fa-scissors",
    href: "https://barberhero.netlify.app/",
    linkGithub: "https://github.com/fiedri/barberHero.git",
    description: `BarberHero es una moderna landing page diseñada para una barbería, destacando sus servicios y estilo. Fue construida utilizando <strong style="color: rgb(139 92 246);">JavaScript, Sveltet, HTML, y CSS</strong>`
  },{name: "Pokédex", icon: "fa-solid fa-diagram-project", href: "https://pokephiexd.netlify.app/", linkGithub: "https://github.com/fiedri/pokedex.git",
  description: `
        Una <strong style="color: rgb(139 92 246);">Pokédex</strong>
        para explorar información detallada sobre tus Pokémon favoritos.
        Desarrollada con <strong style="color: rgb(139 92 246);">JavaScript</strong>,
        <strong style="color: rgb(139 92 246);">HTML</strong> y
        <strong style="color: rgb(139 92 246);">CSS</strong>.
    
  `
  },{name: "Anime Beats",
    icon: "fa-solid fa-music",href: "https://animebeats.netlify.app/",linkGithub: "https://github.com/fiedri/AnimeBeats",
  description: `
      Plataforma de *streaming* de OP/ED curados.
      Stack: <strong style="color: rgb(139 92 246);">SvelteKit</strong>, <strong style="color: rgb(139 92 246);">GraphQL (AniList)</strong> y <strong style="color: rgb(139 92 246);">MongoDB</strong>.
      Destaca por la curación de nicho (<strong style="color: rgb(34 197 94);">Donghua/Aeni</strong>) y la solución de problemas de <strong style="color: rgb(139 92 246);">copyright/embedding</strong>.
    `
  }]
</script>

<section class="main-container" id="projects" aria-labelledby="projects-title">
  <div id="title-container">
    <h2 class="poppins" id="projects-title">Proyectos</h2>
  </div>
  <div class="projects_container">
    {#each steps as step}
      <Step {step}/>
    {/each}
  </div>
  {#if steps.length > 3}
    <button class="showMore Specialbtn">
      Mostrar Mas
    </button>
  {/if}
</section>

<style>
  .poppins {
    font-family: 'Poppins', sans-serif;
  }
  
  .main-container{
    padding-top: 100px;
    display: grid;
    grid-template-rows: 100px auto;
  }
  
  #title-container{
    width: 90%;
    margin: 0 auto;
  }
  
  h2{
    font-size: 3rem;
  }
  
  .projects_container{
    margin:10px;
    
    /* --- Estilos de Tailwind traducidos --- */
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
    gap: 3rem; /* 48px - gap-12 */
  }

  /* Estilos para .Specialbtn (copiados de tu botón de contacto
    para que este componente funcione)
  */
  .Specialbtn {
    background-color: #632fdd;
    color: white;
    padding: 12px 24px;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    border: 2px solid #632fdd;
    cursor: pointer;
  }
  .Specialbtn:hover {
    background-color: transparent;
    border: 2px solid #632fdd;
    color: #632fdd;
  }

  /* Tus estilos para el botón 'Mostrar Mas' */
  .showMore{
    max-width: 40%;
    padding: 10px; /* Esto sobreescribe el padding de .Specialbtn */
    margin: -40px auto 0;
  }
  
  /* --- Media Queries --- */

  @media (width < 640px){
    #title-container{
        padding: 20px 0;
    }
    .projects_container{
        margin-top: 25px;
    }
  }

  /* Nueva media query para los estilos 'lg:' de Tailwind
    (lg: 1024px)
  */
  @media (min-width: 1024px) {
    .projects_container {
      grid-template-columns: repeat(3, minmax(0, 1fr)); /* lg:grid-cols-3 */
      gap: 2rem; /* 32px - lg:gap-8 */
    }
  }
</style>