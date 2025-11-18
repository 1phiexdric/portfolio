<script lang="ts">
  import { blur } from "svelte/transition";

  let y: number = $state(0)
  let innerHeight: number = $state(0)
  let innerWidth: number = $state(0)
  function goTop(){
    document.body.scrollIntoView()
  }
</script>

<div 
  class="go-top-container"
  class:visible={y > 0}
>
  {#if y >= 0 }
    <button 
      transition:blur 
      onclick={goTop} 
      class="go-top-button" 
      aria-label="Ir arriba"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  {/if}
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>

<style>
  .go-top-container {
    /* Posicionamiento (fixed, bottom-0, right-0) */
    position: fixed;
    bottom: 0;
    right: 0;
    
    /* Layout (w-full, flex, justify-end) */
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    /* Espaciado y Z-index (p-3, z-[10]) */
    padding: 0.75rem; /* 12px */
    z-index: 10;
    
    /* Estado inicial (pointer-events-none, opacity-0) */
    opacity: 0;
    pointer-events: none;
    
    /* Transición (duration-200) */
    transition: opacity 200ms ease-in-out;
  }

  /* Clase 'visible' que se activa cuando y > 0 */
  .go-top-container.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .go-top-button {
    /* Colores (bg-violet-700, text-white) */
    background-color: rgb(109 40 217);
    color: white;
    
    /* Espaciado (p-3, px-5) */
    padding: 0.75rem 1.25rem; /* 12px vertical, 20px horizontal */
    
    /* Forma (rounded-full) */
    border-radius: 9999px;
    
    /* Sombra (shadow-lg) */
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    
    /* Transición (transition-colors) */
    transition: background-color 0.15s ease;
    
    /* Reseteos de botón */
    border: none;
    cursor: pointer;
  }

  .go-top-button:hover {
    /* Interacción (hover:bg-violet-500) */
    background-color: rgb(139 92 246);
  }
</style>