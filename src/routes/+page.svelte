<script>
  import About from "../components/About.svelte";
  import Hero from "../components/hero.svelte";
  import Projects from "../components/Projects.svelte";

</script>

<Hero/>
<div class="separator" id="projects"></div>
<Projects/>
<div class="separator" id="about"></div>
<About/>
<div class="separator" id="about"></div>
<style>
  #projects{
    margin-bottom: 90px;
  }
  @media(width < 640px) {
    #projects{
      margin-bottom: 50px;
    }
  }
</style>