<script>
  import Skills from "./Skills.svelte";

  let benefits = [
    {
      name: "Autodidacta",
      description:
        "Aunque estudio en la universidad, lo que más he aprendido ha sido por mi cuenta, haciendo proyectos reales, equivocándome y mejorando poco a poco.",
    },
    {
      name: "Apasionado por crear cosas útiles",
      description:
        "No programo por programar. Me gusta hacer cosas que realmente sirvan, aunque sean simples. Si puedo compartirlas con otros, mejor.",
    },
    {
      name: "Creativo",
      description:
        "Me gusta experimentar y darle mi toque a todo lo que hago. Ya sea una página de sorteos o una barbería falsa, siempre intento que se vea cool.",
    },
  ];
</script>

<section
  
  class="py-20 pt-10
  lg:pt-16 lg:py-32 flex flex-col items-center gap-16 sm:gap-20 md:gap-24 relative
  px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
  
>
  <div
    class="flex flex-col gap-4 text-center relative w-full
           before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
           after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700
           py-8 px-4 sm:px-6 md:px-8"
  >
    <h6 class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-2">
      ¿Quieres saber más?
    </h6>
    <h3
      class="font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
    >
      Un poco <span class="poppins text-violet-400">sobre</span> mí.
    </h3>
  </div>
  <p class="mx-auto poppins font-semibold text-lg sm:textxl md:text-2xl">
    Soy . . .
  </p>
  <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]" >
    {#each benefits as benefit, index}
      <div class="flex gap-6 sm:gap-8" data-aos="zoom-in" data-aos-duration="1000"
  data-aos-once="true">
        <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500
        font-semibold">
    0{index+1}</p>
    <div class="flex flex-col gap-6 sm:gap-8">
        <h3 class="text-2xl sm:text-3xl md:text-5xl font-bold">
            {benefit.name}
        </h3>
        <p>{benefit.description}</p>
    </div>
      </div>
    {/each}
  </div>
</section>
<Skills/>

<style>
</style>
