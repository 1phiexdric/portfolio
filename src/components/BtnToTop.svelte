<script lang="ts">
  import { blur } from "svelte/transition";

  let y: number = $state(0)
  let innerHeight: number = $state(0)
  let innerWidth: number = $state(0)
  function goTop(){
	document.body.scrollIntoView()
  }
</script>
<!-- 
	Usé 'right-0' y 'justify-end' para pegar el botón a la derecha.
	'fixed bottom-0 right-0' posiciona el contenedor en la esquina inferior derecha.
	'justify-end' en el flex asegura que el contenido se alinee a la derecha.
-->
<div class="fixed bottom-0 w-full right-0 flex justify-end p-3 z-[10] duration-200
	{y > 0 ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'}">
	{#if y >= 0 }
		<button transition:blur onclick={goTop} class="bg-violet-700 text-white p-3 px-5 rounded-full  shadow-lg hover:bg-violet-500 transition-colors" aria-label="Ir arriba">
			<i class="fa-solid fa-arrow-up"></i>
		</button>
		
	{/if}
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>
<style>
</style>