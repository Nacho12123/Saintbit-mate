// Configuración global para animaciones y traducciones
const CONFIG = {
  animationSpeed: 2,
  particleCount: 30,
  mathSymbols: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '×', '÷', '=', '<', '>', '△', '○', '◇'],
  colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#38f9d7']
};

let particles = [];
let animationId;
let tr = {}; // Traducciones

// ===== INICIALIZACIÓN PRINCIPAL =====
window.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Inicializando Saintbit Math Home...');
  
  try {
    await initializeLanguageSystem();
    initializeApp();
    console.log('✅ Aplicación inicializada correctamente');
  } catch (error) {
    console.error('❌ Error en la inicialización:', error);
    // Continuar con funcionalidad básica aunque falle el sistema de idiomas
    initializeApp();
  }
});

// ===== SISTEMA DE IDIOMAS Y TRADUCCIONES =====
async function initializeLanguageSystem() {
  const selector = document.getElementById('language-selector');
  
  // Verificar si existe el sistema de idiomas
  if (window.AppLang) {
    const idioma = window.AppLang.getIdioma();
    if (selector) selector.value = idioma;
    
    tr = await window.AppLang.ready();
    console.log('🌍 Sistema de idiomas cargado:', idioma);
    
    // Aplicar traducciones iniciales
    actualizarTraducciones();
    
    // Configurar listener para cambio de idioma
    if (selector) {
      selector.addEventListener('change', handleLanguageChange);
    }
  } else {
    console.warn('⚠️ Sistema AppLang no disponible, usando textos por defecto');
    // Fallback con textos por defecto
    tr = getDefaultTranslations();
    actualizarTraducciones();
  }
}

async function handleLanguageChange(e) {
  const nuevoIdioma = e.target.value;
  console.log('🔄 Cambiando idioma a:', nuevoIdioma);
  
  try {
    if (window.AppLang) {
      tr = await window.AppLang.setIdioma(nuevoIdioma);
      console.log('✅ Traducciones cargadas para:', nuevoIdioma);
    } else {
      // Fallback para cuando no hay sistema de idiomas
      tr = getDefaultTranslations(nuevoIdioma);
      localStorage.setItem('preferredLanguage', nuevoIdioma);
    }
    
    actualizarTraducciones();
    
    // Efecto visual de actualización
    showLanguageChangeEffect();
    
  } catch (error) {
    console.error('❌ Error al cambiar idioma:', error);
  }
}

function actualizarTraducciones() {
  console.log('🔤 Actualizando traducciones...');
  
  // Navegación
  updateNavTranslations();
  
  // Contenido principal
  updateMainContentTranslations();
  
  // Tarjetas de grado
  traducirTodasLasCards();
  
  // Perfil de usuario
  updateUserProfileTranslations();
  
  console.log('✅ Traducciones actualizadas');
}

function updateNavTranslations() {
  const navTranslations = {
    'nav-home': tr["nav_home"] || "Inicio",
    'nav-gamificacion': tr["nav_gamificacion"] || "Gamificación",
    'nav-analitica': tr["nav_analitica"] || "Analítica",
    'nav-interactiva': tr["nav_interactiva"] || "IA Interactiva"
  };
  
  Object.entries(navTranslations).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) {
      // Mantener el ícono, solo cambiar el texto
      const icon = element.querySelector('i');
      const iconHtml = icon ? icon.outerHTML + ' ' : '';
      element.innerHTML = iconHtml + text;
    }
  });
}

function updateMainContentTranslations() {
  // Hero title
  const titleElement = document.querySelector('.hero-title');
  if (titleElement) {
    const highlight = titleElement.querySelector('.highlight');
    if (highlight) {
      titleElement.innerHTML = (tr["hero_title_prefix"] || "Bienvenido a") + 
        ' <span class="highlight">' + (tr["hero_title_highlight"] || "Saintbit Math") + '</span>';
    }
  }
  
  // Hero description
  const descElement = document.querySelector('.hero-description');
  if (descElement) {
    descElement.textContent = tr["hero_description"] || 
      "Explora competencias matemáticas por grado y comienza tu aventura de aprendizaje.";
  }
  
  // Section header
  const sectionTitle = document.querySelector('.section-header h2');
  if (sectionTitle) {
    sectionTitle.textContent = tr["section_title"] || "Elige tu Nivel Educativo";
  }
  
  const sectionDesc = document.querySelector('.section-header p');
  if (sectionDesc) {
    sectionDesc.textContent = tr["section_description"] || 
      "Selecciona el grado correspondiente para acceder a contenidos especializados";
  }
}

function updateUserProfileTranslations() {
  const userRole = document.getElementById('user-role');
  if (userRole) {
    const icon = userRole.querySelector('i');
    const span = userRole.querySelector('span');
    if (span) {
      span.textContent = tr["profile_user"] || "Usuario";
    }
  }
  
  const profileName = document.getElementById('profile-name');
  if (profileName) {
    const userName = localStorage.getItem('siteUserName') || localStorage.getItem('username') || tr["profile_user"] || "Usuario";
    const icon = profileName.querySelector('i');
    const iconHtml = icon ? icon.outerHTML + ' ' : '';
    profileName.innerHTML = iconHtml + userName;
  }
  
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    const icon = logoutBtn.querySelector('i');
    const iconHtml = icon ? icon.outerHTML + ' ' : '';
    logoutBtn.innerHTML = iconHtml + (tr["logout_btn"] || "Cerrar sesión");
  }
}

function traducirTodasLasCards() {
  console.log('📚 Traduciendo tarjetas de grado...');
  
  const cardsConfig = [
    // Cards activas
    { clase: 'preescolar', titulo: 'preescolar_title', desc: 'preescolar_desc', link: 'preescolar_link', competencias: 'preescolar_competencias' },
    { clase: 'grado1', titulo: 'grade1_title', desc: 'grade1_desc', link: 'grade1_link', competencias: 'grade1_competencias' },
    { clase: 'grado2', titulo: 'grade2_title', desc: 'grade2_desc', link: 'grade2_link', competencias: 'grade2_competencias' },
    { clase: 'grado3', titulo: 'grade3_title', desc: 'grade3_desc', link: 'grade3_link', competencias: 'grade3_competencias' },
    { clase: 'grado4', titulo: 'grade4_title', desc: 'grade4_desc', link: 'grade4_link', competencias: 'grade4_competencias' },
    
    // Cards bloqueadas
    { clase: 'grado5', titulo: 'grade5_title', desc: 'grade5_desc', link: 'locked_text', competencias: 'coming_soon', locked: true },
    { clase: 'grado6', titulo: 'grade6_title', desc: 'grade6_desc', link: 'locked_text', competencias: 'coming_soon', locked: true },
    { clase: 'grado7', titulo: 'grade7_title', desc: 'grade7_desc', link: 'locked_text', competencias: 'coming_soon', locked: true },
    { clase: 'grado8', titulo: 'grade8_title', desc: 'grade8_desc', link: 'locked_text', competencias: 'coming_soon', locked: true },
    
    // SIMCE
    { clase: 'simce', titulo: 'simce_title', desc: 'simce_desc', link: 'simce_link', competencias: 'simce_competencias', special: true }
  ];

  cardsConfig.forEach(config => {
    const cardElement = document.querySelector(`.grade-card.${config.clase}`);
    
    if (cardElement) {
      // Traducir título
      const titleElement = cardElement.querySelector('.grade-title');
      if (titleElement && tr[config.titulo]) {
        titleElement.textContent = tr[config.titulo];
      }

      // Traducir descripción
      const descElement = cardElement.querySelector('.grade-desc');
      if (descElement && tr[config.desc]) {
        descElement.textContent = tr[config.desc];
      }

      // Traducir competencias
      const competencyElement = cardElement.querySelector('.competency-count');
      if (competencyElement && tr[config.competencias]) {
        const icon = competencyElement.querySelector('i');
        const iconHtml = icon ? icon.outerHTML + ' ' : '';
        competencyElement.innerHTML = iconHtml + tr[config.competencias];
      }

      // Traducir enlace
      const linkElement = cardElement.querySelector('.grade-link');
      if (linkElement && tr[config.link]) {
        if (config.locked) {
          // Para elementos bloqueados
          const icon = linkElement.querySelector('i');
          const iconHtml = icon ? icon.outerHTML + ' ' : '';
          linkElement.innerHTML = iconHtml + '<span>' + tr[config.link] + '</span>';
        } else {
          // Para elementos activos
          const span = linkElement.querySelector('span');
          if (span) {
            span.textContent = tr[config.link];
          }
        }
      }

      console.log(`✅ Card ${config.clase} traducida`);
    }
  });
}

// ===== INICIALIZACIÓN DE LA APLICACIÓN =====
function initializeApp() {
  initCanvas();
  initNavigation();
  initUserProfile();
  initAnimations();
  initMobileMenu();
  startBackgroundAnimation();
  initGradeCards();
}

// ===== CANVAS Y ANIMACIONES =====
function initCanvas() {
  const canvas = document.getElementById('math-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }
  
  function initParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(createParticle());
    }
  }
  
  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      symbol: CONFIG.mathSymbols[Math.floor(Math.random() * CONFIG.mathSymbols.length)],
      size: 18 + Math.random() * 22,
      speed: 0.4 + Math.random() * 1.0,
      opacity: 0.1 + Math.random() * 0.2,
      color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1
    };
  }
  
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.translate(particle.x + particle.size / 2, particle.y + particle.size / 2);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.fillStyle = particle.color;
      ctx.font = `bold ${particle.size}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(particle.symbol, 0, 0);
      ctx.restore();
      
      // Actualizar posición
      particle.y += particle.speed;
      particle.rotation += particle.rotationSpeed;
      
      // Resetear si sale de pantalla
      if (particle.y > canvas.height + particle.size) {
        particle.y = -particle.size;
        particle.x = Math.random() * canvas.width;
      }
    });
  }
  
  function animate() {
    drawParticles();
    animationId = requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  window.startBackgroundAnimation = animate;
}

// ===== NAVEGACIÓN =====
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remover clase active de todos
      navLinks.forEach(l => l.classList.remove('active'));
      // Agregar clase active al actual
      this.classList.add('active');
      
      // Efecto visual
      this.style.transform = 'translateY(-2px)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
}

// ===== PERFIL DE USUARIO =====
function initUserProfile() {
  const userProfile = document.getElementById('user-profile');
  const profileDropdown = document.getElementById('profile-dropdown');
  const logoutBtn = document.getElementById('logout-btn');

  if (userProfile && profileDropdown) {
    userProfile.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', function(e) {
      if (!userProfile.contains(e.target)) {
        userProfile.classList.remove('active');
      }
    });
  }

  // Configurar logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      // Efecto visual
      this.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        localStorage.removeItem('siteUserName');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
      }, 200);
    });
  }
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.menu-nav');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
      
      const icon = this.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });
  }
}

// ===== ANIMACIONES DE TARJETAS =====
function initAnimations() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Animación escalonada para las tarjetas
        if (entry.target.classList.contains('grade-card')) {
          const cards = document.querySelectorAll('.grade-card');
          const index = Array.from(cards).indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.grade-card, .hero-content, .section-header').forEach(el => {
    observer.observe(el);
  });
}

// ===== TARJETAS DE GRADO INTERACTIVAS =====
function initGradeCards() {
  const gradeCards = document.querySelectorAll('.grade-card:not(.locked)');
  
  gradeCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
    
    // Efecto de click
    card.addEventListener('click', function(e) {
      if (!e.target.closest('.grade-link')) {
        const link = this.querySelector('.grade-link');
        if (link && link.href) {
          window.location.href = link.href;
        }
      }
    });
  });
}

// ===== EFECTOS VISUALES =====
function showLanguageChangeEffect() {
  const indicator = document.createElement('div');
  indicator.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #43e97b, #38f9d7);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    z-index: 10000;
    animation: slideInRight 0.5s ease;
  `;
  indicator.innerHTML = '<i class="fas fa-check"></i> ' + (tr["language_updated"] || "Idioma actualizado");
  
  document.body.appendChild(indicator);
  
  setTimeout(() => {
    indicator.remove();
  }, 3000);
}

// ===== TRADUCCIONES POR DEFECTO =====
function getDefaultTranslations(lang = 'es') {
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_gamificacion: "Gamificación", 
      nav_analitica: "Analítica",
      nav_interactiva: "IA Interactiva",
      hero_title_prefix: "Bienvenido a",
      hero_title_highlight: "Saintbit Math",
      hero_description: "Explora competencias matemáticas por grado y comienza tu aventura de aprendizaje.",
      section_title: "Elige tu Nivel Educativo",
      section_description: "Selecciona el grado correspondiente para acceder a contenidos especializados",
      profile_user: "Usuario",
      logout_btn: "Cerrar sesión",
      locked_text: "Bloqueado",
      coming_soon: "Próximamente",
      language_updated: "Idioma actualizado"
    },
    en: {
      nav_home: "Home",
      nav_gamificacion: "Gamification",
      nav_analitica: "Analytics", 
      nav_interactiva: "Interactive AI",
      hero_title_prefix: "Welcome to",
      hero_title_highlight: "Saintbit Math",
      hero_description: "Explore mathematical competencies by grade and start your learning adventure.",
      section_title: "Choose Your Educational Level",
      section_description: "Select the corresponding grade to access specialized content",
      profile_user: "User",
      logout_btn: "Sign out",
      locked_text: "Locked",
      coming_soon: "Coming Soon",
      language_updated: "Language updated"
    }
  };
  
  return translations[lang] || translations.es;
}

// ===== UTILIDADES =====
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', function(e) {
  console.error('❌ Error en la aplicación:', e.error);
});

// ===== EXPORTAR PARA USO GLOBAL =====
window.SaintbitHome = {
  CONFIG,
  updateTranslations: actualizarTraducciones,
  showLanguageChangeEffect
};