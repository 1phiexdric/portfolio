<script>
  import { fly } from 'svelte/transition';
  import { typewriter } from "../lib/typewriter";
  import { onMount } from 'svelte';
    let show = $state(false)
    onMount(()=>{
        show = true
    })
</script>

<section
    id="introPage"
    class="main-container"
>
    <div
      in:fly={{ y: 20, duration: 600, delay: 200 }}
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8
    lg:gap-10 text-white margin"
    >
    {#if show}
        <h2
          class="font-semibold text-4xl sm:text-5xl md:text-6xl"
          transition:typewriter={{speed: 0.3}}
        >
              Soy <span class="poppins text-violet-400">Friedrich Ruiz</span><br>
    Frontend <span class="poppins text-violet-400">Developer</span>
        </h2>
        {/if}
      <p class="text-base sm:text-lg md:text-xl text">
        Hago cosas geniales usando <!--Mis <span class="text-violet-400"> tecnologias favoritas</span> incluyen --><span style="color: #f7df1e;" class="">JavaScript</span>,
        <span style="color: #ff3e00;">SvelteKit</span>, <span style="color: #06b6d4;">TailwindCSS</span>, <span style="color: #68a063;">Node.js</span> y 
        <span style="color: #4db33d;">MongoDB</span>
      </p>
        <a href="https://wa.me/+584121379204" target="_blank" class="Specialbtn poppins">
          Contactame &rArr;
        </a>
    </div>
    {#if show}
        <div 
      in:fly={{ y: 50, duration: 700, delay: 500 }}
      class="relative grid place-items-center max-h-[50vh] aspect-square rounded-full shadow-2xl shadow-violet-400/50 bg-slate-900 p-4 img-container"
    >
      <img
        src="foto.webp"
        alt="profile of Friedrich Ruiz"
        class="object-cover z-[2] w-full h-full aspect-square rounded-full"
      />
    </div>
    {/if}
  </section>

  <style>
    section{
        display: grid;
        min-height: 100vh;
        align-items: center;
        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr;
        gap: 10px;
        padding: 8px;
        margin: 0 75px;
    }

    @media (width < 800px){
        section{

            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            align-items: center;
            margin: auto;
            gap: 0;
            justify-items: center;
            overflow: hidden;
        }
        .img-container{
            width: 250px;
            margin-bottom: 70px;
            overflow: hidden;
        }
        .text{
          margin: 0 20px;
        }
        .margin{
          margin-top: 70px;
        }
    }
  </style>