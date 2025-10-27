<script lang="ts">
	import '../app.css';
  import BtnToTop from '../components/BtnToTop.svelte';
  import Footer from '../components/Footer.svelte';
  import NavBar from '../components/navBar.svelte';
	import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import AOS from 'aos'
	let { children } = $props();

  let y = $state(0);
  let outerHeight = $state(0)
  onMount(()=>{
    AOS.init();
  })
</script>
<svelte:window bind:scrollY={y} bind:outerHeight />
<header>
  <NavBar/>
</header>
<BtnToTop/>
{#if y > outerHeight - 100}
<div transition:fade={{ duration: 300 }}>
  <header>
    <NavBar position="fixed"/>
  </header>
</div>
{/if}
<main>
  {@render children()}
</main>
<Footer/>