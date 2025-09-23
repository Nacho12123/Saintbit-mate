window.addEventListener('DOMContentLoaded', async () => {
  const selector = document.getElementById('language-home');
  const idioma = window.AppLang.getIdioma();
  selector.value = idioma;
  let tr = await window.AppLang.ready();

  // Función para traducir todos los textos
  function actualizarTraducciones() {
    // Barra menú y usuario
    if (document.getElementById('nav-home')) {
      document.getElementById('nav-home').textContent = tr["nav_home"] || "Inicio";
    }
    if (document.getElementById('nav-gamificacion')) {
      document.getElementById('nav-gamificacion').textContent = tr["nav_gamificacion"] || "Gamificación";
    }
    if (document.getElementById('nav-analitica')) {
      document.getElementById('nav-analitica').textContent = tr["nav_analitica"] || "Analítica";
    }
    if (document.getElementById('nav-interactiva')) {
      document.getElementById('nav-interactiva').textContent = tr["nav_interactiva"] || "IA Interactiva";
    }
    if (document.getElementById('user-role')) {
      document.getElementById('user-role').textContent = tr["profile_user"] || "Usuario";
    }
    if (document.getElementById('profile-name')) {
      document.getElementById('profile-name').textContent = localStorage.getItem('siteUserName') || tr["profile_user"] || "Usuario";
    }
    if (document.getElementById('logout-btn')) {
      document.getElementById('logout-btn').textContent = tr["logout_btn"] || "Cerrar sesión";
    }

    // Traduce textos principales
    const titleElement = document.querySelector('.math-desc-title');
    if (titleElement) {
      titleElement.textContent = tr["description_title"] || "¡Aprende matemáticas jugando!";
    }
    
    const descElement = document.querySelector('.math-desc');
    if (descElement) {
      descElement.innerHTML = (tr["description_text"] || "Descripción") +
        '<br><span class="math-desc-highlight">' + (tr['description_highlight'] || "¡Comienza a aprender!") + '</span>';
    }

    // TRADUCIR TODAS LAS CARDS DE GRADOS
    traducirTodasLasCards();
  }

  function traducirTodasLasCards() {
    // Mapeo completo de todas las cards con sus clases CSS
    const cardsConfig = [
      // Cards activas (preescolar a 4°)
      { clase: 'preescolar', titulo: 'preescolar_title', desc: 'preescolar_desc', link: 'preescolar_link' },
      { clase: 'grado1', titulo: 'grade1_title', desc: 'grade1_desc', link: 'grade1_link' },
      { clase: 'grado2', titulo: 'grade2_title', desc: 'grade2_desc', link: 'grade2_link' },
      { clase: 'grado3', titulo: 'grade3_title', desc: 'grade3_desc', link: 'grade3_link' },
      { clase: 'grado4', titulo: 'grade4_title', desc: 'grade4_desc', link: 'grade4_link' },
      
      // Cards bloqueadas (5° a 8°)
      { clase: 'grado5', titulo: 'grade5_title', desc: 'grade5_descLocked', link: 'grade5_linkLocked', locked: true },
      { clase: 'grado6', titulo: 'grade6_title', desc: 'grade6_descLocked', link: 'grade6_linkLocked', locked: true },
      { clase: 'grado7', titulo: 'grade7_title', desc: 'grade7_descLocked', link: 'grade7_linkLocked', locked: true },
      { clase: 'grado8', titulo: 'grade8_title', desc: 'grade8_descLocked', link: 'grade8_linkLocked', locked: true },
      
      // SIMCE
      { clase: 'simce', titulo: 'simce_title', desc: 'simce_desc', link: 'simce_link' }
    ];

    cardsConfig.forEach(config => {
      // Buscar la card por clase
      const cardElement = document.querySelector(`.${config.clase}`);
      
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

        // Traducir enlace
        const linkElement = cardElement.querySelector('.grade-link');
        if (linkElement && tr[config.link]) {
          linkElement.textContent = tr[config.link];
        }

        console.log(`Card ${config.clase} traducida:`, {
          titulo: tr[config.titulo],
          desc: tr[config.desc],
          link: tr[config.link]
        });
      }
    });
  }

  // Aplicar traducciones iniciales
  actualizarTraducciones();

  // Manejar cambio de idioma
  selector.addEventListener('change', async e => {
    const nuevoIdioma = e.target.value;
    console.log('Cambiando idioma a:', nuevoIdioma);
    
    try {
      // Actualizar idioma y obtener nuevas traducciones
      tr = await window.AppLang.setIdioma(nuevoIdioma);
      console.log('Traducciones cargadas:', tr);
      
      // Aplicar traducciones inmediatamente
      actualizarTraducciones();
      
    } catch (error) {
      console.error('Error al cambiar idioma:', error);
    }
  });

  // Configurar botones del menú de usuario
  const userProfile = document.getElementById('user-profile');
  const profileDropdown = document.getElementById('profile-dropdown');

  if (userProfile && profileDropdown) {
    userProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!userProfile.contains(e.target)) {
        profileDropdown.style.display = 'none';
      }
    });
  }

  // Botón de logout
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('siteUserName');
      window.location.href = 'login.html';
    });
  }

  // Debug: mostrar traducciones cargadas
  console.log('Idioma actual:', idioma);
  console.log('Traducciones disponibles:', tr);
});
