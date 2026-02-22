import './style.css'


document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      navHome: "Home",
      navServices: "Services",
      navContact: "Contact",
      heroTitle: "Transform Your Experience With Professional Care",
      heroSubtitle: "Experience the difference with Oreo's Cleaning. We provide top-tier residential and commercial cleaning services tailored to your needs.",
      heroBtn: "Book Now",
      statsSatisfaction: "Satisfaction",
      statsSupport: "Support",
      statsExperience: "Years Experience",
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive cleaning solutions for every need",
      service1Title: "Residential Cleaning",
      service1Desc: "Keep your home pristine with our regular housekeeping, deep cleaning, and move-in/move-out services.",
      service2Title: "Commercial Cleaning",
      service2Desc: "Create a professional environment for your business with our reliable office and commercial space cleaning.",
      service3Title: "Deep Cleaning",
      service3Desc: "A thorough top-to-bottom clean that targets hard-to-reach areas and stubborn grime.",
      areaTitle: "Service Area",
      areaSubtitle: "Proudly serving Ocala & Haines City, FL and surrounding communities",
      areaDesc: "We bring premium cleaning services directly to your doorstep. Whether you're in Ocala, Haines City, or another city within our radius, Oreo's Cleaning is just a call away.",
      areaRadius: "📍 Ocala & Haines City + 20 Mile Radius",
      areaZip: "Covering zip codes throughout Marion and Polk County",
      footerDesc: "Providing excellence in every sweep. Your cleanliness is our priority.",
      footerQuickLinks: "Quick Links",
      footerGetInTouch: "Get in Touch",
      changeLang: "Change Language",
      footerLocation: "Location: Ocala, FL",
      zipPlaceholder: "Enter your Zip Code",
      zipCheckBtn: "Check Availability",
      zipSuccess: "Great news! We serve your area. Please call or book now.",
      zipError: "Sorry, we might not serve this area yet. Please ",
      zipTicketLink: "open a ticket",
      zipErrorEnd: " and we'll check!",
      ticketTitle: "Submit a Ticket",
      ticketDesc: "How can we help you today?",
      ticketName: "Name",
      ticketEmail: "Email",
      ticketMessage: "Message",
      ticketSubmitBtn: "Submit Ticket"
    },
    es: {
      navHome: "Inicio",
      navServices: "Servicios",
      navContact: "Contacto",
      heroTitle: "Transforme su experiencia con cuidado profesional",
      heroSubtitle: "Experimente la diferencia con Oreo's Cleaning. Ofrecemos servicios de limpieza residencial y comercial de primer nivel adaptados a sus necesidades.",
      heroBtn: "Reservar ahora",
      statsSatisfaction: "Satisfacción",
      statsSupport: "Soporte",
      statsExperience: "Años de experiencia",
      servicesTitle: "Nuestros Servicios",
      servicesSubtitle: "Soluciones integrales de limpieza para cada necesidad",
      service1Title: "Limpieza Residencial",
      service1Desc: "Mantenga su hogar impecable con nuestros servicios regulares de limpieza, limpieza profunda y mudanza.",
      service2Title: "Limpieza Comercial",
      service2Desc: "Cree un entorno profesional para su negocio con nuestra limpieza confiable de oficinas y espacios comerciales.",
      service3Title: "Limpieza Profunda",
      service3Desc: "Una limpieza completa de arriba a abajo que se enfoca en áreas difíciles de alcanzar y suciedad persistente.",
      areaTitle: "Área de servicio",
      areaSubtitle: "Sirviendo con orgullo a Ocala y Haines City, FL y las comunidades circundantes",
      areaDesc: "Llevamos nuestros servicios de limpieza premium directamente a su puerta. Ya sea que esté en Ocala, Haines City u otra ciudad dentro de nuestro radio, Oreo's Cleaning está a solo una llamada de distancia.",
      areaRadius: "📍 Ocala y Haines City + Radio de 20 Millas",
      areaZip: "Cubriendo códigos postales en los condados de Marion y Polk",
      footerDesc: "Brindando excelencia en cada barrida. Su limpieza es nuestra prioridad.",
      footerQuickLinks: "Enlaces rápidos",
      footerGetInTouch: "Ponerse en contacto",
      changeLang: "Cambiar Idioma",
      footerLocation: "Ubicación: Ocala, FL",
      zipPlaceholder: "Ingrese su código postal",
      zipCheckBtn: "Consultar Disponibilidad",
      zipSuccess: "¡Buenas noticias! Servimos a su área. Por favor llame o reserve ahora.",
      zipError: "Lo sentimos, es posible que aún no sirvamos en esta área. Por favor ",
      zipTicketLink: "abra un ticket",
      zipErrorEnd: " y lo revisaremos.",
      ticketTitle: "Enviar un Ticket",
      ticketDesc: "¿Cómo podemos ayudarle hoy?",
      ticketName: "Nombre",
      ticketEmail: "Correo electrónico",
      ticketMessage: "Mensaje",
      ticketSubmitBtn: "Enviar Ticket"
    }
  };

  const splash = document.getElementById('language-splash');
  const langButtons = document.querySelectorAll('[data-lang]');

  const savedLang = localStorage.getItem('oreos-lang');
  if (savedLang) {
    applyLanguage(savedLang);
    splash.classList.add('hidden');
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem('oreos-lang', lang);
      applyLanguage(lang);

      splash.style.opacity = '0';
      setTimeout(() => {
        splash.classList.add('hidden');
      }, 500);
    });
  });


  const changeLangBtn = document.getElementById('change-lang-btn');
  if (changeLangBtn) {
    changeLangBtn.addEventListener('click', (e) => {
      e.preventDefault();
      splash.classList.remove('hidden');
      // Force reflow
      void splash.offsetWidth;
      splash.style.opacity = '1';
    });
  }

  function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;


    const update = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    const updateBySelector = (selector, text) => {
      const el = document.querySelector(selector);
      if (el) el.textContent = text;
    };


    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (key === 'heroTitle') {
          if (lang === 'es') {
            el.innerHTML = `<span class="oreo-text">${t[key]}</span>`;
          } else {
            el.innerHTML = `<span class="oreo-text">${t[key]}</span>`;
          }
        } else {
          el.textContent = t[key];
        }
      }
    });
  }
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = navLinks.classList.contains('active') ? '✕' : '☰';
      mobileBtn.textContent = icon;
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileBtn.textContent = '☰';
        }
      }
    });
  });

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .hero-stats').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // --- Zip Code Checker Logic ---
  // Comprehensive list for Ocala (Marion County) & Haines City (Polk County) + ~20mi radius
  const validZips = [
    // Ocala & Marion County (approx 20 mi)
    '34470', '34471', '34472', '34473', '34474', '34475', '34476', '34477', '34478', '34479', '34480', '34481', '34482', '34483', // Ocala
    '34420', '34421', '34432', // Belleview / Dunnellon
    '32113', '32134', '32179', // Citra / Fort McCoy / Ocklawaha
    '32182', '32183', '32195', // Orange Springs / Reddick / Silver Springs
    '32192', '34491', '34492', '34431', // Sparr / Summerfield / Eastlake Weir

    // Haines City & Polk County / Osceola County borders (approx 20 mi)
    '33844', '33845', // Haines City
    '33837', '33838', '33896', '33897', // Davenport
    '33850', '33853', '33859', // Lake Wales
    '33880', '33881', '33882', '33883', '33884', '33885', '33888', // Winter Haven
    '33839', '33840', '33841', '33843', // Eagle Lake / Dundee / Frostproof
    '33868', '34758', '34759', // Poinciana / Kissimmee outskirts
    '34741', '34742', '34743', '34744', '34745', '34746', '34747' // Kissimmee
  ];

  const zipInput = document.getElementById('zip-input');
  const checkZipBtn = document.getElementById('check-zip-btn');
  const zipResult = document.getElementById('zip-result');
  const ticketModal = document.getElementById('ticket-modal');
  const closeTicketBtn = document.getElementById('close-ticket');
  const ticketForm = document.getElementById('ticket-form');

  if (checkZipBtn && zipInput && zipResult) {
    checkZipBtn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('oreos-lang') || 'en';
      const t = translations[currentLang];
      const val = zipInput.value.trim();

      if (!val) {
        zipResult.textContent = '';
        return;
      }

      if (validZips.includes(val)) {
        zipResult.style.color = 'green';
        zipResult.textContent = t.zipSuccess || translations.en.zipSuccess;
      } else {
        zipResult.style.color = '#d9534f'; // red-ish
        zipResult.innerHTML = `
          ${t.zipError || translations.en.zipError} 
          <a href="#" id="open-ticket-link" style="text-decoration: underline; color: var(--primary-color);">${t.zipTicketLink || translations.en.zipTicketLink}</a>
          ${t.zipErrorEnd || translations.en.zipErrorEnd}
        `;

        const ticketLink = document.getElementById('open-ticket-link');
        if (ticketLink) {
          ticketLink.addEventListener('click', (e) => {
            e.preventDefault();
            openTicketModal();
          });
        }
      }
    });

    zipInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkZipBtn.click();
      }
    });
  }

  function openTicketModal() {
    if (ticketModal) {
      ticketModal.classList.remove('hidden');
      void ticketModal.offsetWidth;
      ticketModal.classList.add('active');
    }
  }

  function closeTicketModal() {
    if (ticketModal) {
      ticketModal.classList.remove('active');
      setTimeout(() => {
        ticketModal.classList.add('hidden');
      }, 300);
    }
  }

  if (closeTicketBtn) {
    closeTicketBtn.addEventListener('click', closeTicketModal);
  }

  if (ticketModal) {
    ticketModal.addEventListener('click', (e) => {
      if (e.target === ticketModal) {
        closeTicketModal();
      }
    });
  }

  if (ticketForm) {
    ticketForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = ticketForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const FORMSPREE_URL = "https://formspree.io/f/xdalwlrn";

      try {
        const formData = new FormData(ticketForm);
        const response = await fetch(FORMSPREE_URL, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert("Ticket submitted successfully! We'll be in touch soon.");
          ticketForm.reset();
          closeTicketModal();
        } else {
          // If the URL is just a placeholder, it will likely fail or return 404/400.
          // Fallback to simulation if they haven't set it up yet to avoid breaking the UX completely during dev.
          console.warn("Formspree URL is likely not setup yet. Simulating success.");
          alert("Ticket submitted (Simulated - please update Formspree URL)!");
          ticketForm.reset();
          closeTicketModal();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        // Fallback simulation as above
        alert("Ticket submitted (Simulated - please update Formspree URL)!");
        ticketForm.reset();
        closeTicketModal();
      } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }
});
