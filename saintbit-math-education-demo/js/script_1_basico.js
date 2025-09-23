// Configuración y variables globales
const CONFIG = {
  animationSpeed: 2,
  particleCount: 25,
  mathSymbols: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '×', '÷', '=', '<', '>', '△', '○', '◇'],
  colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#38f9d7']
};

let particles = [];
let animationId;

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Función principal de inicialización
function initializeApp() {
  initCanvas();
  initFilters();
  initLanguage();
  initAnimations();
  initMobileMenu();
  initDownloadTracking();
  
  // Iniciar animaciones
  startBackgroundAnimation();
  observeElements();
}

// ===== CANVAS Y ANIMACIONES =====

function initCanvas() {
  const canvas = document.getElementById('math-canvas');
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
      size: 20 + Math.random() * 30,
      speed: 0.5 + Math.random() * 1.5,
      opacity: 0.1 + Math.random() * 0.3,
      color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2
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
  
  // Event listeners
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Guardar funciones globalmente
  window.startBackgroundAnimation = animate;
}

// ===== SISTEMA DE FILTROS =====

function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const materialCards = document.querySelectorAll('.material-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterType = this.getAttribute('data-filter');
      
      // Actualizar botones activos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filtrar tarjetas con animación
      filterCards(materialCards, filterType);
    });
  });
}

function filterCards(cards, filterType) {
  cards.forEach((card, index) => {
    const cardType = card.getAttribute('data-type');
    const shouldShow = filterType === 'all' || cardType === filterType;
    
    if (shouldShow) {
      card.style.display = 'block';
      // Animación de entrada escalonada
      setTimeout(() => {
        card.classList.add('show');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
        card.classList.remove('show');
      }, 300);
    }
  });
}

// ===== SISTEMA DE IDIOMAS =====

function initLanguage() {
  const languageSelector = document.getElementById('language-dropdown');
  const translations = {
    es: {
      title: 'Material Educativo - 1° Básico',
      description: 'Descubre recursos educativos diseñados especialmente para fortalecer el aprendizaje matemático.',
      filterAll: 'Todos',
      filterCuaderno: 'Cuadernos',
      filterEvaluacion: 'Evaluaciones',
      filterGuia: 'Guías',
      download: 'Descargar'
    },
    en: {
      title: 'Educational Material - 1st Grade',
      description: 'Discover educational resources specially designed to strengthen mathematical learning.',
      filterAll: 'All',
      filterCuaderno: 'Workbooks',
      filterEvaluacion: 'Assessments',
      filterGuia: 'Guides',
      download: 'Download'
    },
    fr: {
      title: 'Matériel Éducatif - 1ère Année',
      description: 'Découvrez des ressources éducatives spécialement conçues pour renforcer l\'apprentissage mathématique.',
      filterAll: 'Tous',
      filterCuaderno: 'Cahiers',
      filterEvaluacion: 'Évaluations',
      filterGuia: 'Guides',
      download: 'Télécharger'
    },
    ar: {
      title: 'المواد التعليمية - الصف الأول',
      description: 'اكتشف الموارد التعليمية المصممة خصيصاً لتعزيز تعلم الرياضيات.',
      filterAll: 'الكل',
      filterCuaderno: 'كتب العمل',
      filterEvaluacion: 'التقييمات',
      filterGuia: 'الأدلة',
      download: 'تحميل'
    }
  };
  
  languageSelector.addEventListener('change', function() {
    const selectedLang = this.value;
    const texts = translations[selectedLang];
    
    if (texts) {
      // Actualizar textos principales
      document.querySelector('.hero-title').innerHTML = 
        texts.title.includes('1°') ? 
        `Matemáticas para <span class="highlight">${texts.title.split(' - ')[1]}</span>` :
        `Mathematics for <span class="highlight">${texts.title.split(' - ')[1]}</span>`;
      
      document.querySelector('.hero-description').textContent = texts.description;
      
      // Actualizar filtros
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons[0].innerHTML = `<i class="fas fa-th"></i> ${texts.filterAll}`;
      filterButtons[1].innerHTML = `<i class="fas fa-book"></i> ${texts.filterCuaderno}`;
      filterButtons[2].innerHTML = `<i class="fas fa-clipboard-check"></i> ${texts.filterEvaluacion}`;
      filterButtons[3].innerHTML = `<i class="fas fa-map"></i> ${texts.filterGuia}`;
      
      // Actualizar botones de descarga
      document.querySelectorAll('.download-btn span').forEach(span => {
        span.textContent = texts.download;
      });
    }
    
    // Guardar preferencia
    localStorage.setItem('preferredLanguage', selectedLang);
  });
  
  // Cargar idioma guardado
  const savedLang = localStorage.getItem('preferredLanguage') || 'es';
  languageSelector.value = savedLang;
  languageSelector.dispatchEvent(new Event('change'));
}

// ===== ANIMACIONES DE SCROLL =====

function initAnimations() {
  // Animación de parallax para el hero
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.2 + (index * 0.1);
      element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
  });
}

// ===== INTERSECTION OBSERVER PARA ANIMACIONES =====

function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Animación especial para las tarjetas
        if (entry.target.classList.contains('material-card')) {
          const cards = document.querySelectorAll('.material-card');
          const index = Array.from(cards).indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }
      }
    });
  }, observerOptions);
  
  // Observar elementos
  document.querySelectorAll('.material-card, .hero-content, .filters-wrapper').forEach(el => {
    observer.observe(el);
  });
}

// ===== MENÚ MÓVIL =====

function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
      
      // Cambiar ícono
      const icon = this.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });
    
    // Cerrar menú al hacer clic en un enlace
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.querySelector('i').className = 'fas fa-bars';
      });
    });
  }
}

// ===== TRACKING DE DESCARGAS =====

function initDownloadTracking() {
  const downloadButtons = document.querySelectorAll('.download-btn');
  
  downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const fileName = this.getAttribute('href').split('/').pop();
      
      // Efecto visual
      this.classList.add('downloading');
      
      // Tracking (aquí puedes agregar analytics)
      console.log(`Descarga iniciada: ${fileName}`);
      
      // Feedback visual
      showDownloadFeedback(this, fileName);
      
      // Remover clase después de un tiempo
      setTimeout(() => {
        this.classList.remove('downloading');
      }, 2000);
    });
  });
}

function showDownloadFeedback(button, fileName) {
  const feedback = document.createElement('div');
  feedback.className = 'download-feedback';
  feedback.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>Descarga iniciada</span>
  `;
  
  // Posicionar relative al botón
  button.style.position = 'relative';
  button.appendChild(feedback);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    feedback.remove();
  }, 3000);
}

// ===== EFECTOS VISUALES ADICIONALES =====

// Efecto de brillo en las tarjetas
document.addEventListener('mousemove', function(e) {
  const cards = document.querySelectorAll('.material-card');
  
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.classList.add('hover-effect');
    } else {
      card.classList.remove('hover-effect');
    }
  });
});

// ===== UTILIDADES =====

// Función para generar números aleatorios en rango
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Función para interpolar colores
function interpolateColor(color1, color2, factor) {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

// Función para detectar dispositivo móvil
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ===== PERFORMANCE Y OPTIMIZACIÓN =====

// Throttle para eventos de scroll
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

// Debounce para resize
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// ===== ERROR HANDLING =====

window.addEventListener('error', function(e) {
  console.error('Error en la aplicación:', e.error);
});

// ===== EXPORTAR FUNCIONES PARA USO GLOBAL =====

window.SaintbitMath = {
  filterCards,
  showDownloadFeedback,
  CONFIG
};