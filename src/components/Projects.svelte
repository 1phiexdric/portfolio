<script>
  import Step from "./Step.svelte";

      let steps=[{
        name: "BarberHero", icon: "fa-solid fa-scissors",
        href: "https://barberhero.netlify.app/",
        linkGithub: "https://github.com/1phiexdric/barberHero.git",
        description: `BarberHero es una moderna landing page diseñada para una barbería, destacando sus servicios y estilo. Fue construida utilizando <strong class="text-violet-500">JavaScript, Sveltet, HTML, y CSS</strong/>`
      },{name: "Pokédex", icon: "fa-solid fa-diagram-project", href: "https://pokephiexd.netlify.app/", linkGithub: "https://github.com/1phiexdric/pokedex.git",
    description: `
            Una <strong class="text-violet-500">Pokédex</strong>
            para explorar información detallada sobre tus Pokémon favoritos.
            Desarrollada con <strong class="text-violet-500">JavaScript</strong>,
            <strong class="text-violet-500">HTML</strong> y
            <strong class="text-violet-500">CSS</strong>.
        
    `
  },{name: "Anime Beats",
    icon: "fa-solid fa-music",href: "https://animebeats.netlify.app/",linkGithub: "https://github.com/1phiexdric/AnimeBeats",
    description: `
        Plataforma de *streaming* de OP/ED curados.
        Stack: <strong class="text-violet-500">SvelteKit</strong>, <strong class="text-violet-500">GraphQL (AniList)</strong> y <strong class="text-violet-500">MongoDB</strong>.
        Destaca por la curación de nicho (<strong class="text-green-500">Donghua/Aeni</strong>) y la solución de problemas de <strong class="text-violet-500">copyright/embedding</strong>.
    `
  }]
</script>

<section class="main-container " id="projects" aria-labelledby="projects-title">
    <div id="title-container">
        <h2 class="poppins" id="projects-title">Proyectos</h2>
    </div>
    <div class="projects_container grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {#each steps as step}
            <Step {step}/>
        {/each}
    </div>
    {#if steps.length >3}

    <button class="showMore Specialbtn">
        Mostrar Mas
    </button>
    {/if}
</section>
<style>
    .main-container{
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
        
    }
    .showMore{
        max-width: 40%;
        padding: 10px;
        margin: -40px auto 0;
    }
    @media (width <640px){
        #title-container{
            padding: 20px 0;
        }
        .projects_container{
            margin-top: 25px;
        }
    }
</style>