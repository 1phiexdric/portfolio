<script lang="ts">
	import '../app.css';
  import BtnToTop from '../components/BtnToTop.svelte';
  import Footer from '../components/Footer.svelte';
  import NavBar from '../components/navBar.svelte';
	import { fade } from 'svelte/transition';
	let { children } = $props();

  let y = $state(0);
  let outerHeight = $state(0)

</script>
<svelte:window bind:scrollY={y} bind:outerHeight />
<NavBar/>
<BtnToTop/>
{#if y > outerHeight - 100}
<div transition:fade={{ duration: 300 }}>

  <NavBar position="fixed"/>
</div>

{/if}
{@render children()}
<Footer/>