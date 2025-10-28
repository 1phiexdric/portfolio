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
>
  <div
    class="margin"
    in:fly={{ y: 20, duration: 600, delay: 200 }}
  >
  {#if show}
      <h2
        transition:typewriter={{ speed: 0.3 }}
      >
        Soy <span class="poppins highlight">Friedrich Ruiz</span><br />
        <span class="poppins highlight">Desarrollador</span> Web
      </h2>
  {/if}
  <p class="text poppins">
      Hago cosas geniales usando <span
        style="color: #f7df1e;"
        >JavaScript</span
      >,
      <span style="color: #ff3e00;">SvelteKit</span>,
      <span style="color: #68a063;">Node.js</span>
      y
      <span style="color: #4db33d;">MongoDB</span>
  </p>
      <a href="https://wa.me/+584121379204" target="_blank" class="contact-button poppins">
        Contactame &rArr;
      </a>
  </div>
  {#if show}
      <div 
        class="img-container"
        in:fly={{ y: 50, duration: 700, delay: 500 }}
      >
        <img
          src="foto.webp"
          alt="profile of Friedrich Ruiz"
        />
    </div>
  {/if}
  </section>

  <style>
    .poppins {
      font-family: 'Poppins', sans-serif;
    }
    
    /* --- Estilos base (Desktop-first) --- */
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

    .margin { /* Era .text-content */
      display: flex;
      flex-direction: column;
      justify-content: center; /* lg:justify-center */
      text-align: left; /* lg:text-left */
      gap: 2.3rem; /* lg:gap-10 */
      color: white;
    }

    .margin h2 {
      font-weight: 600; /* font-semibold */
      font-size: 3.75rem; /* md:text-6xl (Tomado como base) */
      line-height: 1.1;
    }

    .highlight {
      color: #8b5cf6; /* text-violet-400 */
    }

    .text {
      font-size: 1.25rem; /* md:text-xl (Tomado como base) */
      font-weight: 600; /* font-semibold */
    }

    .contact-button {
      margin: 0;
      background-color: white;
      color: black;
      padding: 12px 24px;
      border-radius: 9999px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      align-self: flex-start; /* Alineado a la izquierda en desktop */
      font-size: 1.1rem;
      text-transform: uppercase;
    }
    .contact-button:hover {
      background-color: #632fdd;
      color: white;
      transform: translateY(-3px);
    }

    .img-container {
      position: relative;
      display: grid;
      place-items: center;
      max-height: 50vh;
      aspect-ratio: 1 / 1;
      border-radius: 9999px; /* rounded-full */
      /* shadow-2xl shadow-violet-400/50 */
      box-shadow: 0 20px 40px -10px rgb(139 92 246 / 0.5); 
      background-color: rgb(15 23 42); /* bg-slate-900 */
      padding: 1rem; /* p-4 */
      overflow: hidden;
    }

    .img-container img {
      object-fit: cover;
      z-index: 2;
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 9999px;
    }

    /* --- Media Queries --- */

    /* Tus estilos originales, combinados con las traducciones de Tailwind */
    @media (width < 800px){
        section{
            grid-template-columns: 1fr;
            grid-template-rows: auto auto; /* Ajustado para mejor flujo */
            align-items: center;
            margin: auto;
            gap: 2rem; /* Añadido un gap */
            justify-items: center;
            overflow: hidden;
            padding: 40px 20px; /* Padding para que no pegue a los bordes */
        }
        
        .img-container{
            width: 250px;
            /* margin-bottom: 70px; (Reemplazado por el gap de la section) */
            overflow: hidden;
            /* order: -1;  <-- LÍNEA ELIMINADA */
        }
        
        .text{
            margin: 0 20px;
            font-size: 1.125rem; /* sm:text-lg */
            text-align: center;
        }

        .margin{
            /* margin-top: 70px; (Reemplazado por el gap) */
            text-align: center;
            gap: 1.5rem; /* gap-6 (móvil) */
        }

        .margin h2 {
          font-size: 3rem; /* sm:text-5xl */
        }

        .contact-button {
          align-self: center; /* Centrar botón en móvil */
        }
        #introPage{
          gap: 0px;
        }
    }

    /* Ajustes para pantallas muy pequeñas,
      donde los tamaños sm: y base: de Tailwind aplicarían 
    */
    @media (width < 640px) {
      .margin h2 {
        font-size: 2.25rem; /* text-4xl */
      }
      .text {
        font-size: 1rem; /* text-base */
      }
    }
  </style>