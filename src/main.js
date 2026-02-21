import './style.css'

document.querySelector('#app').innerHTML = `
  <nav id="navbar">
    <a href="#" class="logo">Web<span>Pro</span></a>
    <ul class="nav-links">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#proceso">Cómo trabajamos</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <div style="display: flex; gap: 15px; align-items: center;">
      <button id="theme-toggle" class="btn" style="padding: 10px; background: rgba(255,255,255,0.1); color: var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid var(--glass-border);">
        <i data-lucide="moon"></i>
      </button>
      <a href="https://wa.me/542995499836" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.9rem;">Chat WhatsApp</a>
    </div>
  </nav>

  <header id="inicio" class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>¡Tu empresa necesita una <span>PÁGINA WEB!</span></h1>
        <p>Diseño de Páginas Web Profesionales y Rápidas. Elevamos tu negocio al siguiente nivel con tecnología de vanguardia.</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          <a href="#contacto" class="btn btn-primary">Empieza Ahora</a>
          <a href="#servicios" class="btn btn-outline">Ver Servicios</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card">
          <div style="position: absolute; top: 40px; right: 20px; background: var(--accent); color: var(--secondary); padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; z-index: 10; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">LIVE PREVIEW</div>
          <div class="mockup-header">
            <div class="mockup-dot" style="background: #ff5f56;"></div>
            <div class="mockup-dot" style="background: #ffbd2e;"></div>
            <div class="mockup-dot" style="background: #27c93f;"></div>
          </div>
          <div class="mockup-content">
            <div class="mockup-nav">
              <div class="mockup-logo"></div>
              <div style="display: flex; gap: 8px;">
                <div style="width: 20px; height: 6px; background: rgba(255,255,255,0.2); border-radius: 3px;"></div>
                <div style="width: 20px; height: 6px; background: rgba(255,255,255,0.2); border-radius: 3px;"></div>
              </div>
            </div>
            <div class="mockup-hero">
              <div class="mockup-line" style="width: 60%; background: var(--accent);"></div>
              <div class="mockup-line" style="width: 40%;"></div>
              <div class="mockup-line" style="width: 80%; height: 4px; margin-top: 10px;"></div>
            </div>
            <div class="mockup-grid">
              <div class="mockup-box"></div>
              <div class="mockup-box"></div>
              <div class="mockup-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="servicios" class="features">
    <div class="container">
      <div class="section-title">
        <h2>Lo que incluye tu página</h2>
        <div class="line"></div>
      </div>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="layout"></i></div>
          <h3>Diseño Moderno</h3>
          <p>Estética premium adaptada a tu marca, con las últimas tendencias de diseño UX/UI.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="message-square"></i></div>
          <h3>Botón de WhatsApp</h3>
          <p>Comunicación directa y sencilla con tus clientes desde cualquier dispositivo.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="server"></i></div>
          <h3>Dominio + Hosting</h3>
          <p>Nos encargamos de todo lo técnico para que tú solo te preocupes por vender.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="mail"></i></div>
          <h3>Formulario de Contacto</h3>
          <p>Recibe consultas organizadas directamente en tu correo electrónico profesional.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="ideal" style="background: var(--white);">
    <div class="container">
      <div class="section-title">
        <h2>¿Es para mi negocio?</h2>
        <div class="line"></div>
        <p style="margin-top: 20px; color: var(--text-muted);">Especializados en sectores clave con resultados comprobados.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        <div style="padding: 30px; border-radius: 15px; border: 1px solid var(--border-color); text-align: center;">
          <h4 style="margin-bottom: 10px; color: var(--primary);">Empresas & Comercios</h4>
          <p style="font-size: 0.9rem;">Digitaliza tu tienda o servicio físico.</p>
        </div>
        <div style="padding: 30px; border-radius: 15px; border: 1px solid var(--border-color); text-align: center;">
          <h4 style="margin-bottom: 10px; color: var(--primary);">Profesionales & Emprendedores</h4>
          <p style="font-size: 0.9rem;">Crea una marca personal sólida.</p>
        </div>
        <div style="padding: 30px; border-radius: 15px; border: 1px solid var(--border-color); text-align: center;">
          <h4 style="margin-bottom: 10px; color: var(--primary);">Constructoras e Inmobiliarias</h4>
          <p style="font-size: 0.9rem;">Muestra tus proyectos de alto nivel.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="proceso" style="background: var(--bg-section);">
    <div class="container">
      <div class="section-title">
        <h2>Cómo trabajamos</h2>
        <div class="line"></div>
      </div>
      <div class="process-grid">
        <div class="process-step">
          <div class="step-number">1</div>
          <h4>Consulta</h4>
          <p>Hablamos por WhatsApp para entender tu negocio y objetivos.</p>
        </div>
        <div class="process-step">
          <div class="step-number">2</div>
          <h4>Diseño</h4>
          <p>Creamos una propuesta moderna y personalizada para tu marca.</p>
        </div>
        <div class="process-step">
          <div class="step-number">3</div>
          <h4>Lanzamiento</h4>
          <p>Configuramos el dominio, el hosting y ¡tu web está lista!</p>
        </div>
      </div>
    </div>
  </section>


  <section id="contacto" class="contact">
    <div class="container">
      <h2>¿Listo para empezar?</h2>
      <p>Escanea el código o haz clic en el botón para chatear con nosotros ahora.</p>
      <div class="qr-container" style="display: flex; align-items: center; justify-content: center; margin: 40px auto; flex-direction: column;">
        <img src="/qr-whatsapp.png" alt="Escanea para chatear" class="qr-image">
        <p style="color: #333; font-size: 0.8rem; margin-top: 15px; font-weight: bold;">ESCANEA Y CHATEA</p>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <a href="https://wa.me/542995499836" class="btn btn-whatsapp">
          <i data-lucide="message-circle"></i>
          Chatea con nosotros en WhatsApp
        </a>
        <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">¡PRECIOS ACCESIBLES!</p>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2026 WebPro - Diseño de Páginas Web Profesionales</p>
      <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
        <a href="#" style="color: #888;"><i data-lucide="instagram"></i></a>
        <a href="#" style="color: #888;"><i data-lucide="facebook"></i></a>
        <a href="#" style="color: #888;"><i data-lucide="linkedin"></i></a>
      </div>
    </div>
  </footer>
`

// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeToggle.innerHTML = `<i data-lucide="${theme === 'light' ? 'moon' : 'sun'}"></i>`;
  lucide.createIcons();
}

// Navbar transitions
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
