<script>
  import About from "../components/About.svelte";
  import Hero from "../components/hero.svelte";
  import Projects from "../components/Projects.svelte";

</script>

<Hero/>
<div class="separator"></div>
<Projects/>
<div class="separator"></div>
<About/>
<style>
  .separator{
    margin-bottom: 90px;
  }
  @media(width < 640px) {
    .separator{
      margin-bottom: 50px;
    }
  }
</style>