import './style.css'

const whatsappLink = 'https://wa.me/520000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20VVMC%20International.'

document.querySelector('#app').innerHTML = `
  <div class="ambient ambient-one" aria-hidden="true"></div>
  <div class="ambient ambient-two" aria-hidden="true"></div>

  <header class="site-header" data-header>
    <a class="brand" href="#inicio" aria-label="VVMC International, inicio">
      <span class="brand-mark">V</span>
      <span class="brand-copy">VVMC <small>INTERNATIONAL</small></span>
    </a>

    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span>
    </button>

    <nav class="main-nav" aria-label="Navegación principal">
      <a href="#nosotros">Quiénes somos</a>
      <a href="#servicios">Qué hacemos</a>
      <a href="#movistar">Distribuidor autorizado</a>
      <a class="nav-cta" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">Contáctanos <span>↗</span></a>
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
          <a class="button button-primary" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
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
            En <strong>VVMC International</strong> acercamos las mejores
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
          <img src="/imagenes/movistar-logo-blanco-01.png" alt="Movistar" />
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

    <section class="section company-story" id="quienes-somos">
      <div class="section-index reveal">03 / Quiénes somos</div>
      <div class="story-layout">
        <div>
          <p class="eyebrow reveal">VVMC International</p>
          <h2 class="section-title reveal">
            Una cultura basada en<br /><span>oportunidad y equipo.</span>
          </h2>
        </div>
        <div class="story-copy reveal">
          <p>
            VVMC International fue fundada en 1980 en Toronto, Canadá,
            por Murray Reinhart.
          </p>
          <p>
            La compañía se basa en oportunidades y en el desarrollo de
            personas para crear su propia empresa. Su enfoque no se centra
            únicamente en la capacidad de vender, sino en la capacidad de
            trabajar en equipo con una gran actitud.
          </p>
          <div class="story-proof">
            <strong>+100</strong>
            <span>Países con gerentes actualmente, de acuerdo con el material.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section development" id="avance">
      <div class="section-index reveal">04 / Avance</div>
      <div class="development-header">
        <p class="eyebrow reveal">Avance y desarrollo</p>
        <h2 class="section-title reveal">
          Formación para crecer<br /><span>paso a paso.</span>
        </h2>
      </div>
      <div class="development-grid">
        <div class="quote-card reveal">
          <span>“La oportunidad más grande del mundo”</span>
          <p>Frase destacada del documento sobre el programa de desarrollo.</p>
          <a class="text-link" href="#ruta">Explora la ruta de crecimiento <span>↓</span></a>
        </div>
        <div class="milestone-list reveal">
          <article>
            <span>01</span>
            <strong>Entrenamiento gerencial</strong>
            <p>Periodo presentado en el documento: 6 meses.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Asistente de vicepresidente</strong>
            <p>Referencia del plan de desarrollo: 2 años.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Vicepresidente</strong>
            <p>Referencia del plan de desarrollo: 3 años.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section growth-route" id="ruta">
      <div class="section-index reveal">05 / Ruta</div>
      <div class="services-heading">
        <div>
          <p class="eyebrow reveal">Ruta de crecimiento</p>
          <h2 class="section-title reveal">
            Niveles de desarrollo<br /><span>del programa.</span>
          </h2>
        </div>
        <p class="services-intro reveal">
          Los montos se presentan como ejemplos, proyecciones o referencias
          del material del programa, no como resultados garantizados.
        </p>
      </div>

      <div class="route-timeline">
        <article class="route-card reveal">
          <span class="route-step">01</span>
          <h3>Asesor</h3>
          <p class="route-note">Ejemplo presentado en el programa.</p>
          <ul>
            <li>1 portabilidad = $120.</li>
            <li>5 portabilidades por día = $600.</li>
            <li>Total al mes = $14,400.</li>
            <li>Ingredientes: sonrisa, entusiasmo y contacto visual.</li>
            <li>Factores de impulso: pérdida, codicia, exclusividad y urgencia.</li>
            <li>Conversación: introducción, breve historia, presentación, cierre y rehash.</li>
          </ul>
        </article>
        <article class="route-card reveal">
          <span class="route-step">02</span>
          <h3>Supervisor</h3>
          <p class="route-note">Modelo mostrado en el material.</p>
          <ul>
            <li>Duración aproximada: 2 meses.</li>
            <li>Capacita con el ejemplo.</li>
            <li>$600 x día + overs.</li>
            <li>Del 10% al 20% de su gente.</li>
            <li>Referencia mensual: $2,400 con 1 persona y $19,200 con 8 personas.</li>
          </ul>
        </article>
        <article class="route-card reveal">
          <span class="route-step">03</span>
          <h3>Subgerente</h3>
          <p class="route-note">Referencia del plan de desarrollo.</p>
          <ul>
            <li>Gana del 10% al 50% de la utilidad.</li>
            <li>Trabajo en oficina.</li>
            <li>Aprende administración, recursos humanos, SAT y capacitación.</li>
            <li>Utilidad al mes con 8 personas: $115,200.</li>
            <li>10% = $11,520 / 50% = $57,600.</li>
          </ul>
        </article>
        <article class="route-card reveal">
          <span class="route-step">04</span>
          <h3>Gerente</h3>
          <p class="route-note">Ejemplos presentados en el documento.</p>
          <ul>
            <li>Supervisa y enseña las responsabilidades de gerente diariamente.</li>
            <li>A) 8 personas x 5 ventas = 40 x $120 = $4,800 x 26 = $124,800.</li>
            <li>B) 30 personas x 5 ventas = 150 x $120 = $18,000 x 26 = $468,000.</li>
          </ul>
        </article>
        <article class="route-card reveal">
          <span class="route-step">05</span>
          <h3>Gerente Promotor</h3>
          <p class="route-note">Proyección del documento.</p>
          <ul>
            <li>1ª generación: $13 con ITX y $5 sin ITX.</li>
            <li>2ª generación: $3 con ITX y $1.5 sin ITX.</li>
            <li>Total 1ª generación: $48,800.</li>
            <li>Total 2ª generación: $1,350.</li>
          </ul>
        </article>
        <article class="route-card reveal">
          <span class="route-step">06</span>
          <h3>Asistente de V.P.</h3>
          <p class="route-note">Total presentado: $116,000.</p>
          <ul>
            <li>1ª generación por venta: $15 con ITX y $8 sin ITX.</li>
            <li>2ª generación por venta: $5 con ITX y $3 sin ITX.</li>
            <li>3ª generación por venta: $3 con ITX y $1 sin ITX.</li>
          </ul>
        </article>
        <article class="route-card reveal">
          <span class="route-step">07</span>
          <h3>Vicepresidente</h3>
          <p class="route-note">Total presentado: $525,000.</p>
          <ul>
            <li>1ª, 2ª, 3ª y 4ª generación ganan por cada venta: $25.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section success-habits" id="habitos">
      <div class="section-index reveal">06 / Hábitos</div>
      <div class="habit-heading">
        <p class="eyebrow reveal">Hábitos al éxito</p>
        <h2 class="section-title reveal">
          Disciplina diaria para<br /><span>mantener el avance.</span>
        </h2>
      </div>
      <div class="habit-grid">
        <article class="habit-card reveal"><span>01</span><p>Tener una excelente actitud.</p></article>
        <article class="habit-card reveal"><span>02</span><p>No perder la actitud.</p></article>
        <article class="habit-card reveal"><span>03</span><p>Estar preparado.</p></article>
        <article class="habit-card reveal"><span>04</span><p>Puntualidad.</p></article>
        <article class="habit-card reveal"><span>05</span><p>Trabajar bien el territorio.</p></article>
        <article class="habit-card reveal"><span>06</span><p>Trabajar 100% las 8 horas o lo necesario para lograr las metas.</p></article>
        <article class="habit-card reveal"><span>07</span><p>Saber dónde estás y hacia dónde vas.</p></article>
        <article class="habit-card reveal"><span>08</span><p>Tomar control.</p></article>
      </div>
    </section>

    <section class="section conversation" id="conversacion">
      <div class="section-index reveal">07 / Conversación</div>
      <div class="conversation-layout">
        <div>
          <p class="eyebrow reveal">Pasos a la conversación</p>
          <h2 class="section-title reveal">
            Una guía clara<br /><span>para presentar.</span>
          </h2>
        </div>
        <div class="conversation-steps reveal">
          <span>Introducción</span>
          <span>Breve historia</span>
          <span>Presentación</span>
          <span>Cierre</span>
          <span>Rehash</span>
        </div>
      </div>
    </section>

    <section class="section goals" id="metas-2026">
      <div class="section-index reveal">08 / 2026</div>
      <div class="goals-panel reveal">
        <p class="eyebrow">Metas 2026</p>
        <h2>Objetivos destacados<br /><span>del documento.</span></h2>
        <p>
          El material presenta metas aspiracionales vinculadas al avance,
          desempeño mensual y desarrollo dentro del programa.
        </p>
        <div class="goal-list">
          <span>Bonos por ventas mensuales</span>
          <span>Viajes todo pagado para 2 personas</span>
          <span>Anillos de oro</span>
          <span>Brazaletes de oro</span>
          <span>Relojes Omega</span>
          <span>Relojes Rolex</span>
          <span>Autos</span>
          <span>Tesla</span>
        </div>
        <a class="button button-primary" href="#avance">Conoce el plan de desarrollo <span>↗</span></a>
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
          <a class="button button-primary" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
            Enviar WhatsApp <span>↗</span>
          </a>
        </div>
        <div class="contact-details reveal">
          <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
            <span>WhatsApp</span>
            <strong>+52 000 000 0000</strong>
          </a>
          <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
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
      <span class="brand-mark">V</span>
      <span class="brand-copy">VVMC <small>INTERNATIONAL</small></span>
    </a>
    <p>Conectando personas. Impulsando posibilidades.</p>
    <a href="#inicio">Volver arriba ↑</a>
    <small>© ${new Date().getFullYear()} VVMC International</small>
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
