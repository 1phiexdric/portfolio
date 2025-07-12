<script>
  import Step from "./Step.svelte";

      let steps=[{
        name: "BarberHero", icon: "fa-solid fa-scissors",
        href: "https://barberhero.netlify.app/",
        linkGithub: "https://github.com/1phiexdric/barberHero.git",
        description: `BarberHero es una moderna landing page diseñada para una barbería, destacando sus servicios y estilo. Fue construida utilizando <strong class="text-violet-500">JavaScript, Sveltet, HTML, y CSS</strong/>`
      },{name: "Ultimate Todos", icon: "fa-solid fa-list-check",href: "",linkGithub: "",
      description: `
            "Ultimate Todos" es una aplicación de gestión de tareas robusta y moderna, diseñada para optimizar
            tu productividad diaria. Permite a los usuarios organizar sus pendientes, establecer prioridades y
            seguir el progreso de sus objetivos de manera intuitiva.

      `

  },{name: "Pokédex", icon: "fa-solid fa-diagram-project", href: "", linkGithub: "",
    description: `
            Una <strong class="text-violet-500">Pokédex interactiva</strong>
            para explorar información detallada sobre tus Pokémon favoritos.
            Desarrollada con <strong class="text-violet-500">JavaScript</strong>,
            <strong class="text-violet-500">Svelte</strong>,
            <strong class="text-violet-500">HTML</strong> y
            <strong class="text-violet-500">CSS</strong>.
        
    `
  }]
</script>

<div class="main-container ">
    <div id="title-container">
        <h2 class="poppins">Proyectos</h2>
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
</div>
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