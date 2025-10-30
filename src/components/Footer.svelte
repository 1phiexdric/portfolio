<script>
  // Variable para el año actual
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer-container" id="contact">
  <p class="contact-title">
    Contactame &darr;
  </p>
  
  <address class="contact-list">
    <p class="contact-item">
      <i class="fa-solid fa-envelope"></i>
      <b class="contact-label">Email</b>
      <a
        href="mailto:ruizfriedrich904@gmail.com"
        target="_blank"
        class="contact-link"
      >
        ruizfriedrich904@gmail.com
        <sup class="contact-icon-sup">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </sup>
      </a>
    </p>
    <p class="contact-item">
      <i class="fa-brands fa-square-whatsapp"></i>
      <b class="contact-label">Whatsapp</b>
      <a
        href="https://wa.me/584121379204"
        target="_blank"
        class="contact-link"
      >
        +584121379204
        <sup class="contact-icon-sup">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </sup>
      </a>
    </p>
    <p class="contact-item">
      <i class="fa-brands fa-github-square"></i>
      <b class="contact-label">GitHub</b>
      <a
        href="https://github.com/fiedri"
        target="_blank"
        class="contact-link"
      >
        1phiexdric
        <sup class="contact-icon-sup">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </sup>
      </a>
    </p>
    <p class="contact-item">
      <i class="fa-brands fa-square-x-twitter"></i>
      <b class="contact-label">X</b>
      <a
        href="https://x.com/@Friedrichruz"
        target="_blank"
        class="contact-link"
      >
        @Friedrichruz
        <sup class="contact-icon-sup">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </sup>
      </a>
    </p>
  </address>

  <p class="copyright">
    &copy; {currentYear} Friedrich Ruiz. Todos los derechos reservados.
  </p>
</footer>

<style>
  .footer-container {
    /* py-20, bg-black, border-t, flex */
    padding-top: 5rem; /* 80px */
    padding-bottom: 5rem;
    background-color: #000;
    border-top: 1px solid rgb(76 29 149); /* border-violet-950 */

    display: flex;
    flex-direction: column;
    gap: 1rem; /* gap-4 */
    justify-content: center;
    align-items: center;
    color: white; /* Color base asumido */
  }

  .contact-title {
    /* px-4 py-2, bg-white, text-slate-950, font-medium, text-2xl */
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: rgb(2 6 23);
    font-weight: 500;
    font-size: 1.5rem; /* 24px */
    line-height: 2rem;
    margin: 0; /* Reseteo */
  }

  .contact-list {
    /* flex, flex-col, items-center, justify-center, not-italic */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: normal;
    gap: 0.5rem; /* Añadido un gap para separar los items */
  }

  .contact-item {
    font-size: 1.1rem;
    margin: 0; /* Reseteo */
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Espacio entre icono, label y link */
  }
  
  .contact-label {
    padding-right: 0.5rem; /* pr-2 */
  }

  .contact-link {
    color: rgb(139 92 246); /* text-violet-500 */
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .contact-link:hover {
    color: rgb(167 139 250); /* Un poco más claro */
  }

  .contact-icon-sup {
    /* text-xs, scale-75, pl-0.5 */
    font-size: 0.75rem; /* 12px */
    padding-left: 0.125rem; /* 2px */
    
    /* 'transform: scale(0.75)' es redundante 
      ya que el ícono interno también lo tiene.
      Lo aplicamos al 'i' de adentro.
    */
  }
  
  .contact-icon-sup i {
    transform: scale(0.75); /* scale-[75%] */
    display: inline-block; /* Para que el transform aplique bien */
  }

  .copyright {
    /* text-center, text-slate-400, font-medium */
    text-align: center;
    color: rgb(148 163 184);
    font-weight: 500;
    margin: 0; /* Reseteo */
    margin-top: 1rem; /* Espacio extra */
  }

  /* --- Media Query (sm: 640px) --- */
  @media (min-width: 640px) {
    .footer-container {
      padding-top: 6.5rem; /* sm:py-26 (104px) */
      padding-bottom: 6.5rem;
      gap: 2rem; /* sm:gap-8 */
    }
  }
</style>