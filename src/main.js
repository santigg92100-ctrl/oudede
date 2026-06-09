import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="ambient ambient-one" aria-hidden="true"></div>
  <div class="ambient ambient-two" aria-hidden="true"></div>

  <header class="site-header" data-header>
    <a class="brand" href="#inicio" aria-label="Oudede International, inicio">
      <span class="brand-mark">O</span>
      <span class="brand-copy">OUDEDE <small>INTERNATIONAL</small></span>
    </a>

    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span>
    </button>

    <nav class="main-nav" aria-label="Navegación principal">
      <a href="#nosotros">Quiénes somos</a>
      <a href="#servicios">Qué hacemos</a>
      <a href="#movistar">Distribuidor autorizado</a>
      <a class="nav-cta" href="#contacto">Contáctanos <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="eyebrow reveal">Conectividad que mueve negocios</p>
        <h1 class="reveal">
          Conectamos tu mundo.<br />
          <span>Impulsamos tu futuro.</span>
        </h1>
        <p class="hero-description reveal">
          Soluciones de comunicación Movistar con atención cercana,
          asesoría especializada y el respaldo que necesitas.
        </p>
        <div class="hero-actions reveal">
          <a class="button button-primary" href="#contacto">
            Habla con un asesor <span>↗</span>
          </a>
          <a class="text-link" href="#servicios">Conoce lo que hacemos <span>↓</span></a>
        </div>
      </div>

      <div class="hero-orbit" aria-hidden="true">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="orbit-core">
          <span>Siempre</span>
          <strong>conectados</strong>
        </div>
      </div>

      <div class="scroll-cue" aria-hidden="true">
        <span>Descubre</span>
        <i></i>
      </div>
    </section>

    <section class="section about" id="nosotros">
      <div class="section-index reveal">01 / Nosotros</div>
      <div class="about-layout">
        <div>
          <p class="eyebrow reveal">Quiénes somos</p>
          <h2 class="section-title reveal">
            Más que conexión,<br /><span>creamos confianza.</span>
          </h2>
        </div>
        <div class="about-copy reveal">
          <p>
            En <strong>Oudede International</strong> acercamos las mejores
            soluciones de telecomunicaciones a personas y empresas.
          </p>
          <p>
            Combinamos la cobertura y tecnología de Movistar con un servicio
            humano, ágil y enfocado en encontrar la opción adecuada para cada cliente.
          </p>
          <div class="stat-row">
            <div><strong>100%</strong><span>Atención personalizada</span></div>
            <div><strong>360°</strong><span>Acompañamiento comercial</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section services" id="servicios">
      <div class="section-index reveal">02 / Soluciones</div>
      <div class="services-heading">
        <div>
          <p class="eyebrow reveal">Qué hacemos</p>
          <h2 class="section-title reveal">Soluciones que te<br /><span>mantienen cerca.</span></h2>
        </div>
        <p class="services-intro reveal">
          Te ayudamos a elegir y gestionar los servicios de conectividad que
          mejor se adaptan a tus necesidades.
        </p>
      </div>

      <div class="service-list">
        <article class="service-card reveal">
          <span class="service-number">01</span>
          <div class="service-icon">
            <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="14" y="5" width="20" height="38" rx="5"/><path d="M21 37h6"/></svg>
          </div>
          <h3>Planes móviles</h3>
          <p>Opciones flexibles para que siempre tengas datos, llamadas y la mejor cobertura.</p>
          <span class="card-arrow">↗</span>
        </article>
        <article class="service-card reveal">
          <span class="service-number">02</span>
          <div class="service-icon">
            <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 19a24 24 0 0 1 34 0M13 25a16 16 0 0 1 22 0M19 31a7 7 0 0 1 10 0"/><circle cx="24" cy="38" r="2"/></svg>
          </div>
          <h3>Internet y conectividad</h3>
          <p>Conexiones estables y veloces para tu hogar, negocio o equipo de trabajo.</p>
          <span class="card-arrow">↗</span>
        </article>
        <article class="service-card reveal">
          <span class="service-number">03</span>
          <div class="service-icon">
            <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 39V15l16-8 16 8v24"/><path d="M4 39h40M18 19h12M18 27h12M18 35h12"/></svg>
          </div>
          <h3>Soluciones empresariales</h3>
          <p>Servicios pensados para optimizar la comunicación y productividad de tu empresa.</p>
          <span class="card-arrow">↗</span>
        </article>
      </div>
    </section>

    <section class="authorized" id="movistar">
      <div class="authorized-inner reveal">
        <div class="signal-lines" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="movistar-logo" aria-label="Movistar">
          <svg viewBox="0 0 120 80" role="img" aria-hidden="true">
            <path d="M15 20c7-16 23-14 34 5 7 12 15 13 23-1 12-21 29-18 34 0 5 20-11 46-25 44-9-1-12-13-21-13-10 0-13 12-23 13C20 70 8 37 15 20Z"/>
          </svg>
          <span>movistar</span>
        </div>
        <div class="authorized-copy">
          <p class="eyebrow">Respaldo oficial</p>
          <h2>Distribuidor<br /><span>autorizado Movistar</span></h2>
          <p>
            Trabajamos bajo los estándares de una marca líder para ofrecerte
            productos originales, procesos confiables y atención respaldada.
          </p>
          <div class="authorized-badge"><i>✓</i> Canal autorizado</div>
        </div>
      </div>
    </section>

    <section class="section contact" id="contacto">
      <div class="contact-heading">
        <p class="eyebrow reveal">Hablemos</p>
        <h2 class="section-title reveal">
          Tu próxima conexión<br /><span>empieza aquí.</span>
        </h2>
      </div>

      <div class="contact-grid">
        <div class="contact-copy reveal">
          <p>Cuéntanos qué necesitas. Nuestro equipo está listo para ayudarte a encontrar la mejor solución.</p>
          <a class="button button-primary" href="mailto:contacto@oudedeinternational.com">
            Enviar un correo <span>↗</span>
          </a>
        </div>
        <div class="contact-details reveal">
          <a href="mailto:contacto@oudedeinternational.com">
            <span>Correo</span>
            <strong>contacto@oudedeinternational.com</strong>
          </a>
          <a href="tel:+520000000000">
            <span>Teléfono</span>
            <strong>+52 000 000 0000</strong>
          </a>
          <div>
            <span>Horario</span>
            <strong>Lun — Vie / 9:00 — 18:00</strong>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <a class="brand footer-brand" href="#inicio">
      <span class="brand-mark">O</span>
      <span class="brand-copy">OUDEDE <small>INTERNATIONAL</small></span>
    </a>
    <p>Conectando personas. Impulsando posibilidades.</p>
    <a href="#inicio">Volver arriba ↑</a>
    <small>© ${new Date().getFullYear()} Oudede International</small>
  </footer>
`

const header = document.querySelector('[data-header]')
const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.main-nav')

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
})

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open')
    menuToggle.setAttribute('aria-expanded', 'false')
  })
})

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40)
}, { passive: true })

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.14 })

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

const hero = document.querySelector('.hero')
const orbit = document.querySelector('.hero-orbit')

hero.addEventListener('pointermove', (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const x = (event.clientX / window.innerWidth - 0.5) * 18
  const y = (event.clientY / window.innerHeight - 0.5) * 18
  orbit.style.transform = `translate(${x}px, ${y}px)`
})
