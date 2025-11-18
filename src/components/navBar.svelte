<script>
  import { fade } from "svelte/transition";
  let showMenu = $state(false);
  let { position = "absolute" } = $props();
  let links = [{
    name: "Inicio",
    href:"/"
  },{
    name:"Proyectos",
    href: "#projects"
  },{
    name: "Sobre Mi",
    href: "#about"
  },{
    name: "Contacto",
    href: "#contact"
  }, {
    name: "Blog",
    href: "/blog"
  }]
  function closeMenu() {
    showMenu = !showMenu;
  }
</script>

<nav style:position={position}>
  <div class="social-links">
    <a
      href="https://www.linkedin.com/in/friedrich-ruiz-097a6832a/"
      target="_blank"><i class="fa-brands fa-linkedin-in"></i></a
    >
    <a href="https://github.com/fiedri" target="_blank"
      ><i class="fa-brands fa-github"></i></a
    >
    <a href="https://x.com/@Friedrichruz" target="_blank"
      ><i class="fa-brands fa-x-twitter"></i>
    </a>
  </div>
  
  <ul id="link_desktop">
    {#each links as link}
    <li>
      <a href={link.href} style="font-weight: 700;" class="link_page">
        {link.name}
      </a>
    </li>
    {/each}
  </ul>

  <div class="btn-div">
    <button onclick={closeMenu} aria-label="Abrir menú lateral">
      {#if !showMenu}
        <i class="fa-solid fa-bars"></i>
      {:else}
        <i class="fa-solid fa-x"></i>
      {/if}
    </button>
  </div>
  
  {#if showMenu}
    <ul class="mobile_links" transition:fade={{ duration: 200 }}>
      {#each links as link }
      <li><a href="{link.href}" onclick={()=> showMenu = !showMenu}>{link.name}</a></li>
      {/each}
    </ul>
  {/if}
</nav>

<style>
  /* --- Estilos del NAV principal (Traducidos de Tailwind) --- */
  nav {
    font-family: 'Poppins', sans-serif; /* poppins */
    top: 0.75rem; /* top-3 */
    z-index: 50; /* z-50 */
    width: 90%; /* w-[90%] */
    height: 60px; /* h-[60px] */
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    
    display: flex;
    align-items: center; /* items-center */
    justify-content: space-around; /* Mantenido de tu CSS original */
    
    border-radius: 9999px; /* rounded-full */
    background-color: rgb(15 23 42 / 0.6); /* bg-slate-900/60 */
    color: white; /* text-white */
    backdrop-filter: blur(12px); /* backdrop-blur-md */
    border: 1px solid rgb(255 255 255 / 0.1); /* ring-1 ring-white/10 */
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
  }

  /* --- Links Sociales --- */
  .social-links {
    font-size: 1.7rem;
    min-width: 23%;
    display: flex;
    justify-content: space-evenly;
  }
  .social-links a {
    color: white;
    text-decoration: none;
  }
  .social-links a i {
    transition: color 0.15s ease;
  }
  .social-links a:hover i {
    color: #8b5cf6; /* hover:text-violet-400 */
  }

  /* --- Links de Escritorio --- */
  #link_desktop {
    display: flex;
    align-items: center; /* items-center */
    column-gap: 2.5rem; /* gap-x-10 */
    font-size: 1.5rem; /* Mantenido de tu CSS original (más grande que text-lg) */
    text-transform: uppercase; /* uppercase */
    list-style: none;
    padding: 0;
    margin: 0;
  }
  #link_desktop li a {
    text-decoration: none;
    color: inherit;
    transition: color 0.15s ease; /* transition-colors */
    
  }
  #link_desktop li a:hover {
    color: #8b5cf6; /* hover:text-violet-400 */
  }

  /* --- Botón del Menú Móvil --- */
  .btn-div {
    display: none;
    font-size: 1.7rem;
  }
  .btn-div button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0;
    font-size: inherit;
  }

  /* --- Links del Menú Móvil --- */
  .mobile_links {
    display: none;
    list-style: none;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #632fdd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0; /* Reseteo */
  }
  .mobile_links li {
    margin-bottom: 1rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
    border-bottom: 1px solid black;
    font-size: 1.4rem;
    padding: 5px 0;
    width: 100%;
  }
  .mobile_links li a {
    width: 100%;
    display: block;
    text-decoration: none;
    color: white;
  }
  @media(width < 1000px){
    #link_desktop{
      gap: 1rem;
      /* font-size: 1.3rem; */
    }
  }
  @media(width < 880px){
    #link_desktop{
      font-size: 1.4rem;
    }
  }
  /* --- Media Query para Móvil --- */
  @media (width < 810px) {
    nav {
      justify-content: space-between;
      width: 85%;
      padding: 0 20px;
    }
    #link_desktop {
      display: none;
    }
    .social-links {
      gap: 10px;
      min-width: auto; /* Permitir que se encoja */
      justify-content: flex-start;
    }
    .mobile_links {
      display: flex;
      flex-direction: column;
    }
    .btn-div {
      display: block;
    }
  }
</style>