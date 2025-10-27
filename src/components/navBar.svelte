<script>
  import { blur, fade } from "svelte/transition";
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

<nav
  class="poppins {position} top-3 z-50 w-[90%] h-[60px] left-0 right-0 mx-auto flex items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md ring-1 ring-white/10 shadow-lg"
>
  <div class="social-links">
    <a
      href="https://www.linkedin.com/in/friedrich-ruiz-097a6832a/"
      target="_blank"><i class="fa-brands fa-linkedin-in  hover:text-violet-400"></i></a
    >
    <a href="https://github.com/1phiexdric" target="_blank"
      ><i class="fa-brands fa-github hover:text-violet-400"></i></a
    >
    <a href="https://x.com/@Friedrichruz" target="_blank"
      ><i class="fa-brands fa-x-twitter hover:text-violet-400"></i>
    </a>
  </div>
  <ul id="link_desktop" class="flex items-center gap-x-10 text-lg uppercase">
    {#each links as link}
    <li>
      <a
        href={link.href}
        class="transition-colors hover:text-violet-400"
      >
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
  /* All styles moved to Tailwind classes for consistency */
  nav {
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  ul {
    font-size: 1.5rem;
    
  }
  .social-links {
    font-size: 1.7rem;
    min-width: 23%;
    display: flex;
    justify-content: space-evenly;
  }
  .btn-div {
    display: none;
    font-size: 1.7rem;
  }
  .mobile_links {
    display: none;
    list-style: none;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #632fdd;
    padding: 1rem 1rem 0 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
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
  }

  @media (width < 800px) {
    nav {
      justify-content: space-between;
      padding: 0 20px;
    }
    #link_desktop {
      display: none;
    }
    .social-links {
      gap: 10px;
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
