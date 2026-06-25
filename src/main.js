import './style.css'

const icons = {
  leadership: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7l13 6v10c0 8.5-5.4 15.9-13 18-7.6-2.1-13-9.5-13-18V13l13-6Z"/><path d="M18 25l4 4 8-10"/></svg>',
  system: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="6"/><path d="M24 5v8M24 35v8M5 24h8M35 24h8M10.6 10.6l5.7 5.7M31.7 31.7l5.7 5.7M37.4 10.6l-5.7 5.7M16.3 31.7l-5.7 5.7"/></svg>',
  sales: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 35l10-10 8 8 16-20"/><path d="M31 13h10v10"/></svg>',
  team: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="15" r="6"/><circle cx="11" cy="21" r="5"/><circle cx="37" cy="21" r="5"/><path d="M14 41c1-7 5-11 10-11s9 4 10 11M3 39c.7-5 3.7-8 8-8M45 39c-.7-5-3.7-8-8-8"/></svg>',
  growth: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 38h32"/><path d="M12 34V22M24 34V14M36 34V8"/><path d="M10 18l14-8 14 6"/></svg>',
  clock: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><path d="M24 13v12l8 5"/></svg>',
  target: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3"/><path d="M35 13l6-6M35 13h7v7"/></svg>',
  trophy: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 7h14v9c0 8-3 13-7 13s-7-5-7-13V7Z"/><path d="M17 11H8v4c0 5 3 8 9 8M31 11h9v4c0 5-3 8-9 8M24 29v8M17 41h14"/></svg>',
  interview: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 10h32v22H19l-9 7v-7H8V10Z"/><path d="M16 18h16M16 25h11"/></svg>',
  training: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 11h14c5 0 8 3 8 8v18c0-5-3-8-8-8H8V11Z"/><path d="M40 11h-8c-5 0-8 3-8 8"/><path d="M32 21h8M32 28h8"/></svg>',
  values: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40s-15-8.7-15-21a8.5 8.5 0 0 1 15-5.5A8.5 8.5 0 0 1 39 19c0 12.3-15 21-15 21Z"/></svg>',
}

const navItems = [
  ['Inicio', '#inicio'],
  ['Manual', '#manual'],
  ['Historia', '#historia'],
  ['Misión y valores', '#mision'],
  ['Sistema gerencial', '#sistema'],
  ['Ventas', '#ventas'],
  ['Reclutamiento', '#reclutamiento'],
  ['Contacto', '#contacto'],
]

const card = ({ title, text, icon = 'system', list }) => `
  <article class="card reveal">
    <div class="icon">${icons[icon]}</div>
    <h3>${title}</h3>
    ${text ? `<p>${text}</p>` : ''}
    ${list ? `<ul>${list.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
  </article>
`

const processItem = ({ title, text }, index) => `
  <article class="process-step reveal">
    <span>${String(index + 1).padStart(2, '0')}</span>
    <div>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  </article>
`

const table = (headers, rows) => `
  <div class="table-wrap reveal">
    <table>
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  </div>
`

const sectionHeader = (eyebrow, title, text = '') => `
  <div class="section-header reveal">
    <p class="eyebrow">${eyebrow}</p>
    <h2>${title}</h2>
    ${text ? `<p>${text}</p>` : ''}
  </div>
`

const habits = [
  ['Tener una excelente actitud', 'Aceptar que tú eres el dueño.'],
  ['Estar preparado', 'De cada quince "no", hay un "sí", según la ley de probabilidades.'],
  ['Trabajar bien el territorio', 'Todos son compradores.'],
  ['Saber dónde estoy y hacia dónde voy', 'Tener claro el objetivo y el puesto que se busca lograr.'],
  ['No perder la excelente actitud', 'Cuidar el logro de la meta como algo propio.'],
  ['Puntualidad', 'Siempre a la misma hora.'],
  ['Trabajar al 100%', 'Mantener entrega total durante el trabajo.'],
  ['Tomar control', 'Es la capacidad de seguir decisiones propias y no las de los demás.'],
]

document.querySelector('#app').innerHTML = `
  <header class="site-header" data-header>
    <a class="brand" href="#inicio" aria-label="RC Communications, inicio">
      <span class="brand-mark">RC</span>
      <span>RC Communications</span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span>
    </button>
    <nav class="main-nav" aria-label="Navegación principal">
      ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      <a class="nav-cta" href="#sistema">Conocer el sistema</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-noise" aria-hidden="true"></div>
      <div class="hero-content reveal">
        <p class="eyebrow">RC Communications</p>
        <h1>Manual para Gerentes</h1>
        <p class="hero-subtitle">Una guía para el éxito</p>
        <p>RC Communications presenta una guía diseñada para ayudar a los gerentes a tomar decisiones acertadas, aplicar procesos claros y desarrollar correctamente las actividades de la gerencia.</p>
        <p>El manual tiene como propósito facilitar, educar y orientar a los integrantes de la organización, garantizando calidad, eficiencia operativa, continuidad del negocio y mejores resultados en cada proceso.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#sistema">Ver sistema gerencial</a>
          <a class="button button-secondary" href="#mision">Conocer misión y valores</a>
        </div>
      </div>
      <div class="hero-panel reveal" aria-label="Composición corporativa del sistema gerencial">
        <div class="panel-topline"><span>Sistema gerencial</span><i></i></div>
        <div class="leadership-visual" aria-hidden="true">
          <div class="leader-node">${icons.leadership}</div>
          <div class="node node-a">${icons.team}</div>
          <div class="node node-b">${icons.sales}</div>
          <div class="node node-c">${icons.training}</div>
        </div>
        <div class="panel-metrics">
          <span>Actitud</span><span>Capacitación</span><span>Resultados</span>
        </div>
      </div>
    </section>

    <section class="section" id="manual">
      ${sectionHeader('Manual', '¿Por qué es necesario un manual?', 'Un manual ayuda a tomar decisiones acertadas, evitando el uso de criterios personales. También evita excusas relacionadas con el desconocimiento de los procesos gerenciales, facilita las tareas de auditoría y evaluación del control interno, e incrementa la eficiencia de los gerentes al indicar qué hacer y cómo hacerlo.')}
      <div class="grid three">
        ${card({ icon: 'training', title: '¿Qué es un manual?', text: 'Es una recopilación en forma de texto que detalla las instrucciones que se deben seguir para desarrollar correctamente los procesos de la gerencia.' })}
        ${card({ icon: 'target', title: '¿Cuál es su propósito?', list: ['Facilitar y educar a los integrantes con las reglas y procesos de la gerencia.', 'Garantizar la calidad y eficiencia operativa.', 'Asegurar la continuidad del negocio.', 'Servir como guía para la mejora continua.', 'Garantizar el logro de resultados en cada proceso.'] })}
        ${card({ icon: 'trophy', title: 'Beneficio de aplicarlo', list: ['Tener más de 20 personas.', 'Abrir una oficina cada 6 meses como mínimo.', 'Lograr la vicepresidencia en 3 años.', 'Tener libertad financiera.'] })}
      </div>
    </section>

    <section class="section split" id="historia">
      ${sectionHeader('Historia', 'La historia detrás del sistema', 'En 1980, en Toronto, Canadá, Murray Reinhart trabajó en ventas directas. Después de que la compañía para la que trabajaba cayó, decidió iniciar su propia empresa. Su idea no se basaba únicamente en las ventas, sino en oportunidades, actitud, liderazgo y en trabajar con la ley de los promedios.')}
      <div class="story-grid">
        <article class="feature-block reveal">
          <h3>Larry y Avie se unen a Murray</h3>
          <p>Murray reclutó a Larry Tannenbaum y Avie Roth. La idea principal era que cualquier persona, independientemente de su raza, credo o sexo, podía hacer dinero vendiendo productos de puerta en puerta, siempre que viera a tanta gente como fuera posible, fuera indiferente hacia los negativos y tuviera una gran actitud.</p>
          <blockquote>Actitud vende, no el producto.</blockquote>
        </article>
        <article class="feature-block reveal">
          <h3>Crecimiento de la organización</h3>
          <p>Con el tiempo, Murray, Larry y Avie comenzaron a entrenar personas, construir equipo y abrir oficinas. El crecimiento se apoyó en la actitud, la ley de los promedios, la capacitación y la duplicación del sistema.</p>
        </article>
      </div>
    </section>

    <section class="section" id="mision">
      ${sectionHeader('Fundamentos', 'Misión, visión y valores', 'Toda empresa necesita una misión, una visión y valores para definir su razón de existir, su dirección y el comportamiento correcto de su gente.')}
      <div class="grid three">
        ${card({ icon: 'target', title: 'Misión', text: 'Ser la oportunidad más grande del mundo, capacitando a todo nuestro equipo como gerentes hasta llegar a ser empresarios.' })}
        ${card({ icon: 'growth', title: 'Visión', text: 'Representar a nuestros clientes con el más alto estándar de calidad para ser su mejor opción con nuestro reconocido sistema "Face to Face", que tiene el más alto grado de penetración de mercado en el mundo.' })}
        ${card({ icon: 'values', title: 'Valores', list: ['Valorar a las personas.', 'Trabajo en equipo.', 'Compromiso realista.', 'Mentoría y aprendizaje.', 'Resiliencia y solución de problemas.', 'Orientación a resultados.'] })}
      </div>
      <p class="gold-statement reveal">El conocimiento y aplicación de la misión, visión y valores de la organización lleva a ser la mejor opción para los clientes y para el desarrollo de sus miembros.</p>
    </section>

    <section class="section">
      ${sectionHeader('Sistema', 'Definición de un sistema', 'Un sistema es un conjunto de pasos que trabajan en unión para cumplir una función o para lograr un objetivo.')}
      <p class="wide-copy reveal">El sistema es abstracto porque está compuesto por hipótesis e ideas que funcionan a través del aprendizaje y aplicación de las personas. Los límites del sistema se determinan por las personas que lo aplican y por la calidad de cómo lo aprenden.</p>
      <div class="grid three compact">
        ${['Si el sistema se aprende y se aplica mal, los resultados serán malos.', 'Si el sistema se aprende y se aplica bien, los resultados serán buenos.', 'Si el sistema se aprende y se aplica de manera excelente, los resultados serán excelentes.'].map((text) => card({ icon: 'system', title: text })).join('')}
      </div>
    </section>

    <section class="section" id="sistema">
      ${sectionHeader('Gerencia', 'Nuestro sistema gerencial', 'El sistema gerencial de RC Communications tiene cinco componentes esenciales.')}
      <div class="grid five">
        ${[
          ['Ley de probabilidades', 'Conocer las expresiones de esta ley según el territorio es fundamental para mantener el ánimo y la persistencia.', 'target'],
          ['Tres ingredientes', 'Sonrisa, entusiasmo y contacto visual.', 'team'],
          ['Cuatro factores de impulso', 'Pérdida, codicia, exclusividad y urgencia.', 'growth'],
          ['Ocho hábitos de éxito', 'Hábitos que ayudan a formar disciplina, actitud, preparación y resultados.', 'trophy'],
          ['Cinco pasos para la venta', 'Introducción, breve historia, presentación, cierre y rehash.', 'sales'],
        ].map(([title, text, icon]) => card({ title, text, icon })).join('')}
      </div>
    </section>

    <section class="section" id="ventas">
      ${sectionHeader('Probabilidades', 'Ley de probabilidades', 'Según el territorio tendremos varias expresiones de esta ley. Conocerlas es fundamental para mantener el ánimo y la persistencia.')}
      ${table(['Territorio', 'Tipo de economía', 'Probabilidad de compra'], [
        ['A', 'Economía baja', 'De cada 20 personas una compra.'],
        ['B', 'Economía media', 'De cada 15 personas una compra.'],
        ['C', 'Economía alta', 'De cada 10 personas una compra.'],
      ])}
    </section>

    <section class="section">
      ${sectionHeader('Actitud', 'Los tres ingredientes', 'Estos tres ingredientes se refieren a la actitud que se debe mostrar ante un cliente.')}
      <div class="grid three">
        ${card({ icon: 'team', title: 'Sonrisa', text: 'Cuando sonríes, transmites seguridad, bienestar y confianza. La sonrisa incrementa las posibilidades de conectar con el prospecto y facilitar la venta.' })}
        ${card({ icon: 'growth', title: 'Entusiasmo', text: 'La persona entusiasmada disfruta lo que hace, tiene interés vivo por hacerlo y está dispuesta a enfrentar retos y resolver los problemas que se presenten.' })}
        ${card({ icon: 'target', title: 'Contacto visual', text: 'El contacto visual muestra emociones, autenticidad y seguridad. Ayuda a proyectar confianza y facilita la conexión con las personas.' })}
      </div>
    </section>

    <section class="section">
      ${sectionHeader('Decisión', 'Cuatro factores de impulso', 'Estos factores determinan que una persona tome la decisión de comprar.')}
      <div class="grid four">
        ${card({ icon: 'clock', title: 'Impulso de pérdida', text: 'Hace sentir que solo hay una oportunidad, que se agotará la existencia o que hay un plazo límite para aprovechar.' })}
        ${card({ icon: 'trophy', title: 'Impulso de codicia', text: 'Hace sentir la emoción de ser afortunado o privilegiado.' })}
        ${card({ icon: 'leadership', title: 'Impulso de exclusividad', text: 'Estimula una sensación de ser importante y único.' })}
        ${card({ icon: 'target', title: 'Impulso de urgencia', text: 'Crea atención inmediata y deseo de adquirir algo ya, porque puede acabarse o perderse.' })}
      </div>
    </section>

    <section class="section">
      ${sectionHeader('Venta', 'Cinco pasos para la venta', 'El sistema de venta se estructura en cinco pasos claros.')}
      <div class="timeline">
        ${[
          ['Introducción', 'Debe causar curiosidad. Consiste en saludar como si fuera un gran amigo.'],
          ['Breve historia', 'Debe causar interés. Se explica la idea principal y el beneficio para la persona.'],
          ['Presentación', 'Debe causar deseo. Se presenta el folleto o la información y se mencionan beneficios importantes.'],
          ['Cierre', 'Consiste en pedir que la persona decida.'],
          ['Rehash', 'Aprovecha que la puerta emocional está abierta para dejar más paquetes, beneficios o recomendaciones.'],
        ].map(([title, text], index) => processItem({ title, text }, index)).join('')}
      </div>
    </section>

    <section class="section">
      ${sectionHeader('Hábitos', 'Ocho hábitos al éxito', 'Un hábito es algo que ya no requiere razonamiento y se hace de manera automática. Los hábitos se crean mediante repetición.')}
      <div class="grid four">
        ${habits.map(([title, text], index) => card({ icon: index % 2 ? 'clock' : 'trophy', title, text })).join('')}
      </div>
    </section>

    <section class="section">
      ${sectionHeader('Capacitación', 'Impactos', 'Un impacto es un mensaje corto que habla del sistema para lograr la matraca.')}
      <div class="two-column">
        <p class="wide-copy reveal">Los impactos sirven para enseñar la efectividad del sistema. Se deben dar diariamente y pueden ser para gente nueva, supervisores, niveles bajos o para todos en general.</p>
        ${card({ icon: 'training', title: 'Puntos clave', list: ['Los impactos los da el gerente o supervisor.', 'Pueden darse antes de la junta matutina.', 'También pueden darse individualmente en campo.', 'No hay límite de impactos; mientras más se den, mejor.', 'Cuando un supervisor da un impacto, contagia.'] })}
      </div>
      <p class="gold-statement reveal">Los impactos fortalecen el sistema y ayudan a identificar qué necesita cada persona o grupo.</p>
    </section>

    <section class="section">
      ${sectionHeader('Juntas', 'Estructura de la junta matutina', 'En la junta matutina, el gerente tiene la oportunidad de capacitar y enseñar a su gente para lograr metas de ventas y vender su puesto gerencial.')}
      ${table(['Horario', 'Actividad'], [
        ['7:40 am', 'Entrada del gerente y líderes para tener todo arreglado.'],
        ['8:00 am', 'Entrada de promotores y supervisores en general.'],
        ['8:00 - 8:30 am', 'Entrega de material publicitario y áreas para trabajar.'],
        ['8:30 - 8:55 am', 'Prácticas de speech, pláticas individuales y por equipo.'],
        ['9:00 - 9:45 am', 'Junta general con impactos, anuncios, matraqueros y tema principal.'],
        ['9:45 - 10:00 am', 'Entrega de días de observación y salida a territorios.'],
      ])}
      <p class="gold-statement reveal">La calidad de la escuela que das como gerente determina la calidad de los resultados.</p>
    </section>

    <section class="section" id="reclutamiento">
      ${sectionHeader('Reclutamiento', 'La base del crecimiento de tu organización', 'La única manera de que el negocio crezca y mejoren las ventas es reclutar. La urgencia y necesidad de hacer crecer el negocio determinan la publicidad que se pone para atraer candidatos potenciales.')}
      <div class="question-row reveal">
        <span>¿Cuántas vacantes hay en mi negocio?</span>
        <span>¿Qué puestos vacantes tengo?</span>
      </div>
      <div class="timeline">
        ${[
          ['Entrevistar', 'Entrevistar mínimo a 30 personas por día.'],
          ['Capacitar', 'Capacitar a 10 personas por día.'],
          ['Seleccionar', 'Seleccionar 3 personas para el negocio en un día.'],
          ['Reclutar', 'Reclutar 3 personas diarias.'],
          ['Retener', 'De 72 reclutamientos por mes, quedarse con el 10%.'],
        ].map(([title, text], index) => processItem({ title, text }, index)).join('')}
      </div>
      ${table(['Mes', 'Personas'], [
        ['Mes 1', '7 personas.'],
        ['Mes 2', '14 personas.'],
        ['Mes 3', '21 personas.'],
        ['Mes 4', '28 personas.'],
        ['Mes 5', '35 personas.'],
        ['Mes 6', '42 personas.'],
      ])}
      <p class="gold-statement reveal">Con base en estos números, estarás abriendo una oficina cada 6 meses.</p>
    </section>

    <section class="section">
      ${sectionHeader('Entrevistas', 'Entrevistas a nuevos candidatos', 'Proceso basado en cinco pasos')}
      <article class="feature-block reveal">
        <h3>Primera entrevista</h3>
        <div class="mini-grid">
          ${[
            ['Introducción', 'Saludo.'],
            ['Breve historia', 'Revisión de solicitud o currículum.'],
            ['Presentación', 'Hablar de los beneficios de pertenecer a la organización.'],
            ['Cierre', 'Citar al candidato para un día de observación.'],
            ['Rehash', 'Agendar una llamada en la tarde con quienes quieran trabajar con la organización.'],
          ].map(([title, text]) => `<div><strong>${title}</strong><p>${text}</p></div>`).join('')}
        </div>
      </article>
      <div class="grid three">
        ${card({ icon: 'interview', title: 'Qué debe ver el candidato', list: ['La junta matutina y la energía del equipo.', 'Prácticas de speech y trabajo en equipo.', 'El ejemplo de su supervisor en campo.', 'Las oportunidades reales de crecimiento.', 'La importancia de divertirse mientras aprende.'] })}
        ${card({ icon: 'leadership', title: 'Qué debe hacer el supervisor', list: ['Recibirlo con actitud positiva.', 'Explicarle el plan del día.', 'Presentarle al equipo.', 'Enseñarle con el ejemplo.', 'Mostrarle los tres ingredientes y los cinco pasos en acción.', 'Resolver dudas.', 'Dar retroalimentación breve.'] })}
        ${card({ icon: 'target', title: 'Qué debes evaluar', list: ['Excelente actitud.', 'Capacidad de aprender rápido.', 'Comunicación y seguridad.', 'Puntualidad y disciplina.', 'Afinidad con la gente y el sistema.', 'Deseo real de crecer.'] })}
      </div>
      <p class="gold-statement reveal">Si el candidato muestra buena actitud, interés y disciplina, avanza al examen y a la tercera entrevista.</p>
    </section>

    <section class="section">
      ${sectionHeader('Entrevistas', 'Segunda y tercera entrevista')}
      <div class="story-grid">
        <article class="feature-block reveal">
          <h3>Segunda entrevista: día de observación</h3>
          <p>En el segundo día se puede recibir a los candidatos de uno en uno o en grupo. Se debe confirmar que vean cómo se logran resultados con el sistema, explicar oportunidades de crecimiento, presentar supervisores y recalcar que solo el 10% será seleccionado.</p>
        </article>
        <article class="feature-block reveal">
          <h3>Tercera entrevista: examen</h3>
          <p>La tercera entrevista es individual y se realiza después del día de observación y de haber llenado el examen. El gerente debe calificar lo que el entrevistado entendió, su interés en el programa de desarrollo y si el supervisor vendió correctamente los puestos de la organización.</p>
        </article>
      </div>
      ${card({ icon: 'interview', title: 'Preguntas sugeridas', list: ['¿Qué opinas de todo lo que has visto y escuchado?', 'Si eres aceptado, ¿qué aportaciones harías a la empresa?', 'Si eres aceptado, ¿te gustaría trabajar como tu supervisor?', '¿Te consideras buen estudiante para aprender el puesto de gerente?', '¿Por qué deberíamos confiar en ti?', '¿Tu supervisor te habló de sus metas?', '¿Cómo aplicó los cinco pasos tu supervisor?', '¿Cómo aplicó los tres ingredientes tu supervisor?', '¿Crees que tu supervisor logre ser gerente?'] })}
    </section>

    <section class="section contact" id="contacto">
      ${sectionHeader('Contacto', 'Conoce el sistema de RC Communications', 'Comunícate para conocer más sobre el sistema gerencial, los procesos de capacitación, reclutamiento, juntas, entrevistas y desarrollo de RC Communications.')}
      <form class="contact-form reveal">
        <label>Nombre<input type="text" name="nombre" autocomplete="name" /></label>
        <label>Teléfono<input type="tel" name="telefono" autocomplete="tel" /></label>
        <label>Correo<input type="email" name="correo" autocomplete="email" /></label>
        <label class="full">Mensaje<textarea name="mensaje" rows="5"></textarea></label>
        <button class="button button-primary" type="submit">Enviar mensaje</button>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <div>
      <a class="brand" href="#inicio"><span class="brand-mark">RC</span><span>RC Communications</span></a>
      <p>Una guía para el éxito basada en sistema, actitud, capacitación y resultados.</p>
    </div>
    <nav aria-label="Enlaces rápidos">
      ${['Inicio', 'Manual', 'Historia', 'Sistema gerencial', 'Reclutamiento', 'Contacto'].map((label) => {
        const href = navItems.find(([item]) => item === label)?.[1] || '#sistema'
        return `<a href="${href}">${label}</a>`
      }).join('')}
    </nav>
    <small>© ${new Date().getFullYear()} RC Communications</small>
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
    menuToggle.setAttribute('aria-label', 'Abrir menú')
  })
})

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24)
}, { passive: true })

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault()
})
