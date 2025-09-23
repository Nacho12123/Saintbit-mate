// Datos de juegos por nivel con traducción integrada
const juegosPorNivel = {
  preescolar: [
    { es: "¿Cuántos círculos hay? ⚪⚪⚪", en: "How many circles? ⚪⚪⚪", fr: "Combien de cercles ? ⚪⚪⚪", ar: "كم عدد الدوائر؟ ⚪⚪⚪", respuestas: [2,3,4,5], correcta: 1 },
    { es: "¿Cuál figura es un triángulo? ⬛🔺⚫⬤", en: "Which shape is triangle? ⬛🔺⚫⬤", fr: "Quelle est la forme triangle ? ⬛🔺⚫⬤", ar: "أي شكل مثلث؟ ⬛🔺⚫⬤", respuestas: ["⬛","🔺","⚫","⬤"], correcta: 1 },
    { es: "¿Cuántos objetos ves? 🍎🍎", en: "How many objects? 🍎🍎", fr: "Combien d'objets ? 🍎🍎", ar: "كم عدد العناصر؟ 🍎🍎", respuestas: [1,2,3,4], correcta: 1 },
    { es: "¿Cuál grupo tiene 4 elementos? 🐶🐶 👻👻👻 🎲🎲🎲🎲 🍌🍌", en: "Which group has 4? 🐶🐶 👻👻👻 🎲🎲🎲🎲 🍌🍌", fr: "Quel groupe a 4 ? 🐶🐶 👻👻👻 🎲🎲🎲🎲 🍌🍌", ar: "أي مجموعة فيها 4؟ 🐶🐶 👻👻👻 🎲🎲🎲🎲 🍌🍌", respuestas: ["🐶🐶","👻👻👻","🎲🎲🎲🎲","🍌🍌"], correcta: 2 }
  ],
  "1": [
    { es: "¿Cuánto es 4 + 3?", en: "How much is 4 + 3?", fr: "Combien fait 4 + 3 ?", ar: "كم مجموع 4 + 3؟", respuestas: [5,7,8,6], correcta: 1 },
    { es: "¿Cuál es la decena de 23?", en: "Which is the ten in 23?", fr: "Quelle est la dizaine de 23 ?", ar: "ما هي العشرة في 23؟", respuestas: [2,3,20,30], correcta: 0 },
    { es: "¿Qué número falta? 1,2,__ ,4,5", en: "Which number is missing? 1,2,__ ,4,5", fr: "Quel chiffre manque ? 1,2,__ ,4,5", ar: "ما الرقم المفقود؟ 1,2,__ ,4,5", respuestas: [3,5,6,0], correcta: 0 },
    { es: "Si tengo 8 caramelos y doy 2, ¿cuántos quedan?", en: "I have 8 candies, give 2, how many left?", fr: "J'ai 8 bonbons, j'en donne 2, combien reste-t-il ?", ar: "معي 8 حلويات، أعطي 2، كم بقي؟", respuestas: [10,6,7,5], correcta: 1 },
    { es: "¿Cuál es el siguiente número después de 17?", en: "What comes after 17?", fr: "Quel est le nombre après 17 ?", ar: "ما العدد بعد 17؟", respuestas: [16,18,15,20], correcta: 1 },
    { es: "¿Cuánto es 5 + 5?", en: "How much is 5 + 5?", fr: "Combien fait 5 + 5 ?", ar: "كم مجموع 5 + 5؟", respuestas: [10,15,5,8], correcta: 0 },
    { es: "¿Cuántas patas tiene un gato?", en: "How many legs does a cat have?", fr: "Combien de pattes a un chat ?", ar: "كم ساق للقط؟", respuestas: [2,4,3,5], correcta: 1 },
    { es: "¿Cuánto es 9 - 4?", en: "How much is 9 - 4?", fr: "Combien fait 9 - 4 ?", ar: "كم ناتج 9 - 4؟", respuestas: [3,4,5,6], correcta: 2 }
  ],
  "2": [
    { es: "¿Cuánto es 12 - 5?", en: "How much is 12 - 5?", fr: "Combien fait 12 - 5 ?", ar: "كم ناتج 12 - 5؟", respuestas: [8,6,7,5], correcta: 2 },
    { es: "¿Cuánto es 5 x 2?", en: "What is 5 x 2?", fr: "Combien fait 5 x 2 ?", ar: "كم ناتج 5 x 2؟", respuestas: [7,9,10,12], correcta: 2 },
    { es: "¿Qué número es mayor, 32 o 29?", en: "Which number is bigger, 32 or 29?", fr: "Quel chiffre est plus grand, 32 ou 29 ?", ar: "أي رقم أكبر، 32 أو 29؟", respuestas: [29,32,"Iguales",30], correcta: 1 },
    { es: "¿Cuántos lados tiene un rectángulo?", en: "How many sides a rectangle has?", fr: "Combien de côtés un rectangle ?", ar: "كم ضلع للمستطيل؟", respuestas: [3,6,5,4], correcta: 3 },
    { es: "¿Cuánto es 7 + 8?", en: "How much is 7 + 8?", fr: "Combien fait 7 + 8 ?", ar: "كم مجموع 7 + 8؟", respuestas: [12,15,13,16], correcta: 1 },
    { es: "¿Cuánto es 18 - 9?", en: "How much is 18 - 9?", fr: "Combien fait 18 - 9 ?", ar: "كم ناتج 18 - 9؟", respuestas: [7,8,9,10], correcta: 2 },
    { es: "¿Cuánto es 3 x 4?", en: "How much is 3 x 4?", fr: "Combien fait 3 x 4 ?", ar: "كم ناتج 3 x 4؟", respuestas: [7,12,9,11], correcta: 1 },
    { es: "¿Qué número es menor: 25 o 14?", en: "Which is less: 25 or 14?", fr: "Quel est le plus petit: 25 ou 14 ?", ar: "ما الأصغر: 25 أم 14؟", respuestas: [25,14,"Iguales",10], correcta: 1 }
  ],
  "3": [
    { es: "¿Cuál es el doble de 15?", en: "What is double of 15?", fr: "Quel est le double de 15 ?", ar: "كم ضعف 15؟", respuestas: [25,30,20,35], correcta: 1 },
    { es: "Resuelve: 5 x 6", en: "Solve: 5 x 6", fr: "Résoudre: 5 x 6", ar: "احسب 5 x 6", respuestas: [30,11,35,25], correcta: 0 },
    { es: "¿Cuál es una fracción equivalente a 1/2?", en: "Which fraction is equivalent to 1/2?", fr: "Quelle fraction équivaut à 1/2 ?", ar: "أي كسر يكافئ 1/2؟", respuestas: ["4/8", "2/3", "2/2", "1/3"], correcta: 0 },
    { es: "¿Cuántos grados tiene un ángulo recto?", en: "How many degrees in a right angle?", fr: "Combien de degrés pour un angle droit ?", ar: "كم درجة للزاوية القائمة؟", respuestas: [90,45,180,360], correcta: 0 },
    { es: "¿Cuánto es 36 ÷ 6?", en: "How much is 36 ÷ 6?", fr: "Combien fait 36 ÷ 6 ?", ar: "كم ناتج 36 ÷ 6؟", respuestas: [7,5,6,9], correcta: 2 },
    { es: "¿Cuál es el resultado de 14 + 17?", en: "Result of 14 + 17?", fr: "Résultat de 14 + 17 ?", ar: "ما ناتج 14 + 17؟", respuestas: [31,28,33,27], correcta: 0 },
    { es: "Si tienes 4 docenas de huevos, ¿cuántos huevos tienes?", en: "4 dozens of eggs, how many?", fr: "4 douzaines d'œufs, combien ?", ar: "معك 4 دزن بيض، كم بيضة؟", respuestas: [24,36,12,48], correcta: 0 },
    { es: "¿Cuánto es 3 x 9?", en: "How much is 3 x 9?", fr: "Combien fait 3 x 9 ?", ar: "كم ناتج 3 x 9؟", respuestas: [27,18,21,30], correcta: 0 }
  ],
  "4": [
    { es: "¿Cuánto es 100 ÷ 4?", en: "How much is 100 ÷ 4?", fr: "Combien fait 100 ÷ 4 ?", ar: "كم ناتج 100 ÷ 4؟", respuestas: [25,20,30,40], correcta: 0 },
    { es: "Perímetro de un cuadrado de 3cm de lado", en: "Perimeter of a 3cm square?", fr: "Périmètre d'un carré de 3cm ?", ar: "محيط مربع بطول ضلع 3 سم؟", respuestas: ["12cm","9cm","6cm","3cm"], correcta: 0 },
    { es: "¿Qué polígono tiene 8 lados?", en: "Which polygon has 8 sides?", fr: "Quel polygone a 8 côtés ?", ar: "أي مضلع له 8 أضلاع؟", respuestas: ["Hexágono", "Triángulo", "Octágono", "Pentágono"], correcta: 2 },
    { es: "¿Cuánto es 2,5 x 4?", en: "How much is 2.5 x 4?", fr: "Combien fait 2,5 x 4 ?", ar: "كم ناتج 2.5 x 4؟", respuestas: [10,12,8,6], correcta: 0 },
    { es: "¿Cuánto es 18 + 27?", en: "How much is 18 + 27?", fr: "Combien fait 18 + 27 ?", ar: "كم ناتج 18 + 27؟", respuestas: [43,45,44,41], correcta: 0 },
    { es: "¿Cuál es la mitad de 36?", en: "Half of 36?", fr: "La moitié de 36 ?", ar: "نصف 36؟", respuestas: [12,16,18,20], correcta: 2 },
    { es: "Resuelve: 7 x 8", en: "Solve: 7 x 8", fr: "Résoudre: 7 x 8", ar: "احسب 7 x 8", respuestas: [54,56,63,49], correcta: 1 },
    { es: "¿Cuánto es 48 ÷ 6?", en: "How much is 48 ÷ 6?", fr: "Combien fait 48 ÷ 6 ?", ar: "كم ناتج 48 ÷ 6؟", respuestas: [8,9,7,6], correcta: 0 }
  ]
};

// Sistema de traducción simple
async function cargarTraducciones(idioma) {
  try {
    const response = await fetch(`locales/${idioma}.json`);
    if (!response.ok) throw new Error('Archivo de idioma no encontrado');
    return await response.json();
  } catch (error) {
    console.warn(`Error cargando ${idioma}.json, usando español por defecto`);
    const response = await fetch('locales/es.json');
    return await response.json();
  }
}

let idioma = localStorage.getItem('lang') || 'es';
let nivelActual = localStorage.getItem('nivel') || 'preescolar';
let puntaje = 0; // Siempre inicia en 0
let recompensas = []; // Siempre inicia vacío
let tr = {};

// Nueva función para guardar progreso en analítica
function guardarProgresoAnalitica(nivel, puntajeFinal, recompensasObtenidas) {
  const progreso = JSON.parse(localStorage.getItem('analitica_progreso')) || {};
  const fecha = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  if (!progreso[nivel]) progreso[nivel] = [];
  
  progreso[nivel].push({
    fecha: fecha,
    puntaje: puntajeFinal,
    recompensas: recompensasObtenidas.length,
    completado: new Date().toISOString()
  });
  
  localStorage.setItem('analitica_progreso', JSON.stringify(progreso));
}

// Inicialización al cargar la página
window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Cargar traducciones
    tr = await cargarTraducciones(idioma);
    
    // Configurar idioma inicial
    const languageSelect = document.getElementById('language-gamificacion');
    if (languageSelect) {
      languageSelect.value = idioma;
    }
    
    // Actualizar textos del menú y UI
    actualizarTextos();
    
    // Configurar eventos
    configurarEventos();
    
    // Renderizar juegos iniciales
    renderizarJuegos();
    
    // Inicializar animación de fondo
    inicializarFondoAnimado();
    
  } catch (error) {
    console.error('Error al inicializar:', error);
  }
});

// Actualizar todos los textos de la interfaz
function actualizarTextos() {
  // Menú de navegación
  const elementos = [
    { id: 'nav-home', key: 'nav_home' },
    { id: 'nav-gamificacion', key: 'nav_gamificacion' },
    { id: 'nav-analitica', key: 'nav_analitica' },
    { id: 'nav-interactiva', key: 'nav_interactiva' },
    { id: 'user-role', key: 'profile_user' },
    { id: 'logout-btn', key: 'logout_btn' },
    { id: 'nivel-label', key: 'nivelLabel' },
    { id: 'titulo-gamificacion', key: 'description_title' },
    { id: 'desc-gamificacion', key: 'description_text' }
  ];
  
  elementos.forEach(elemento => {
    const el = document.getElementById(elemento.id);
    if (el && tr[elemento.key]) {
      el.textContent = tr[elemento.key];
    }
  });
  
  const nivelSelect = document.getElementById('nivel-selector');
if (nivelSelect) {
  nivelSelect.value = nivelActual;
  nivelSelect.addEventListener('change', (e) => {
    // Guardar progreso actual antes de cambiar
    if (puntaje > 0 || recompensas.length > 0) {
      guardarProgresoAnalitica(nivelActual, puntaje, recompensas);
    }
    
    // Cambiar al nuevo nivel y resetear
    nivelActual = e.target.value;
    localStorage.setItem('nivel', nivelActual);
    
    // RESETEAR puntaje y recompensas para el nuevo nivel
    puntaje = 0;
    recompensas = [];
    
    renderizarJuegos();
  });
}

  }
  
  // Actualizar perfil de usuario
  const profileName = document.getElementById('profile-name');
  if (profileName) {
    const username = localStorage.getItem('siteUserName') || tr['profile_user'] || 'Usuario';
    profileName.textContent = username;
  }


// Configurar todos los eventos
function configurarEventos() {
  // Navegación del menú
  document.querySelectorAll('.menu-nav a').forEach(item => {
    item.addEventListener('click', function(e) {
      // Permitir navegación normal
      window.location.href = this.getAttribute('href');
    });
  });
  
  // Dropdown del usuario
  const userProfile = document.getElementById('user-profile');
  const profileDropdown = document.getElementById('profile-dropdown');
  
  if (userProfile && profileDropdown) {
    userProfile.addEventListener('mouseenter', () => {
      profileDropdown.style.display = 'block';
    });
    
    userProfile.addEventListener('mouseleave', () => {
      profileDropdown.style.display = 'none';
    });
  }
  
  // Botón de logout
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('siteUserName');
      localStorage.removeItem('puntaje');
      localStorage.removeItem('recompensas');
      localStorage.removeItem('nivel');
      window.location.href = 'login.html';
    });
  }
  
  // Selector de idioma
  const languageSelect = document.getElementById('language-gamificacion');
  if (languageSelect) {
    languageSelect.addEventListener('change', async (e) => {
      idioma = e.target.value;
      localStorage.setItem('lang', idioma);
      // Recargar traducciones y actualizar
      tr = await cargarTraducciones(idioma);
      actualizarTextos();
      renderizarJuegos();
    });
  }
  
  // Selector de nivel
  const nivelSelect = document.getElementById('nivel-selector');
  if (nivelSelect) {
    nivelSelect.value = nivelActual;
    nivelSelect.addEventListener('change', (e) => {
      nivelActual = e.target.value;
      localStorage.setItem('nivel', nivelActual);
      renderizarJuegos();
    });
  }
}

// Renderizar juegos según el nivel actual
function renderizarJuegos() {
  const grid = document.getElementById('games-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const juegos = juegosPorNivel[nivelActual] || [];
  
  if (juegos.length === 0) {
    const mensaje = document.createElement('div');
    mensaje.className = 'sin-juegos';
    mensaje.style.cssText = 'color:#ddd;text-align:center;font-size:1.1em;margin:30px auto;padding:20px;';
    mensaje.textContent = tr['sinJuegos'] || 'No hay juegos para este nivel.';
    grid.appendChild(mensaje);
    return;
  }
  
  juegos.forEach((juego, idx) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    // Header con puntaje
    const header = document.createElement('div');
    header.className = 'game-card-header';
    
    const pregunta = document.createElement('div');
    pregunta.className = 'game-card-title';
    pregunta.textContent = juego[idioma] || juego['es'];
    
    const puntos = document.createElement('div');
    puntos.className = 'game-card-points';
    puntos.innerHTML = `<span>${tr['score_points'] || 'Puntaje'}: ${puntaje}</span>`;
    
    header.appendChild(pregunta);
    header.appendChild(puntos);
    
    // Opciones de respuesta
    const opciones = document.createElement('div');
    opciones.className = 'game-card-options';
    
    juego.respuestas.forEach((respuesta, i) => {
      const btn = document.createElement('button');
      btn.className = 'game-card-option';
      btn.textContent = respuesta;
      btn.onclick = () => evaluarRespuesta(idx, i, btn, card, juego);
      opciones.appendChild(btn);
    });
    
    // Área de feedback
    const feedback = document.createElement('div');
    feedback.className = 'game-card-status';
    feedback.id = `game-card-status-${nivelActual}-${idx}`;
    
    // Agregar recompensa si ya existe
    if (recompensas.includes(`${nivelActual}-${idx}`)) {
      const recompensa = document.createElement('div');
      recompensa.className = 'recompensa-view';
      recompensa.textContent = tr['congrats_badge_bronze'] || '¡Ganaste!';
      recompensa.style.cssText = 'background:#4caf50;color:#fff;padding:5px 10px;border-radius:15px;font-size:0.9em;margin-top:10px;text-align:center;';
      card.appendChild(recompensa);
      card.classList.add('con-recompensa');
    }
    
    card.appendChild(header);
    card.appendChild(opciones);
    card.appendChild(feedback);
    
    grid.appendChild(card);
  });
}

// Evaluar respuesta del jugador
function evaluarRespuesta(idxJuego, idxResp, btn, card, juego) {
  const feedback = card.querySelector('.game-card-status');
  const recompensaKey = `${nivelActual}-${idxJuego}`;
  
  // Limpiar feedback anterior
  feedback.textContent = '';
  
  if (idxResp === juego.correcta) {
    // Respuesta correcta
    feedback.textContent = tr['feedback_correct'] || '¡Correcto!';
    feedback.style.color = '#4caf50';
    
    // Añadir puntos y recompensa solo si es la primera vez
    if (!recompensas.includes(recompensaKey)) {
      puntaje += 10;
      recompensas.push(recompensaKey);
      
      // Guardar en localStorage
      localStorage.setItem('puntaje', puntaje);
      localStorage.setItem('recompensas', JSON.stringify(recompensas));
      
      // Mostrar recompensa visual
      setTimeout(() => {
        const recompensa = document.createElement('div');
        recompensa.className = 'recompensa-view';
        recompensa.textContent = tr['congrats_badge_bronze'] || '¡Ganaste!';
        recompensa.style.cssText = 'background:#4caf50;color:#fff;padding:5px 10px;border-radius:15px;font-size:0.9em;margin-top:10px;text-align:center;animation:fadeIn 0.5s;';
        card.appendChild(recompensa);
        card.classList.add('con-recompensa');
        
        // Actualizar puntaje en todas las cards
        actualizarPuntajes();
      }, 500);
    }
    
    // Deshabilitar botones para esta pregunta
    card.querySelectorAll('.game-card-option').forEach(b => b.disabled = true);
    
  } else {
    // Respuesta incorrecta
    feedback.textContent = tr['feedback_incorrect'] || 'Intenta de nuevo';
    feedback.style.color = '#f44336';
    
    // Deshabilitar temporalmente solo el botón incorrecto
    btn.disabled = true;
    btn.style.opacity = '0.5';
    
    setTimeout(() => {
      btn.disabled = false;
      btn.style.opacity = '1';
      feedback.textContent = '';
    }, 1500);
  }
}

// Actualizar puntajes en todas las cards
function actualizarPuntajes() {
  document.querySelectorAll('.game-card-points span').forEach(span => {
    span.textContent = `${tr['score_points'] || 'Puntaje'}: ${puntaje}`;
  });
}
// Definir arriba del todo, fuera de cualquier función:
let fondoAnimadoInterval = null;

function inicializarFondoAnimado() {
  const canvas = document.getElementById('math-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Solo crear los dígitos una sola vez
  const digits = [];
  for (let i = 0; i < 44; i++) {
    digits.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      digit: Math.floor(Math.random() * 10),
      speed: 1 + Math.random() * 2,
      size: 22 + Math.random() * 10
    });
  }

  function drawDigits() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    digits.forEach(d => {
      ctx.save();
      ctx.globalAlpha = 0.16;
      ctx.font = d.size + 'px Segoe UI, Montserrat, Arial';
      ctx.fillStyle = "#adff2f";
      ctx.fillText(d.digit, d.x, d.y);
      ctx.restore();
      d.y += d.speed;
      if (d.y > canvas.height) {
        d.y = -20;
        d.x = Math.random() * canvas.width;
      }
    });
  }

  // --- Solución: evita duplicar intervalos ---
  if (fondoAnimadoInterval) clearInterval(fondoAnimadoInterval);
  fondoAnimadoInterval = setInterval(drawDigits, 60);
}

  
  // Crear dígitos flotantes
  const digits = [];
  for (let i = 0; i < 44; i++) {
    digits.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      digit: Math.floor(Math.random() * 10),
      speed: 1 + Math.random() * 2,
      size: 22 + Math.random() * 10
    });
  }
  
  function drawDigits() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    digits.forEach(d => {
      ctx.save();
      ctx.globalAlpha = 0.16;
      ctx.font = d.size + 'px Segoe UI, Montserrat, Arial';
      ctx.fillStyle = "#adff2f";
      ctx.fillText(d.digit, d.x, d.y);
      ctx.restore();
      d.y += d.speed;
      if (d.y > canvas.height) {
        d.y = -20;
        d.x = Math.random() * canvas.width;
      }
    });
  }
  
  // Animar a 60 FPS aproximadamente
  setInterval(drawDigits, 60);


// CSS adicional para animaciones
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.game-card.con-recompensa {
  border-color: #4caf50 !important;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3) !important;
}
`;
document.head.appendChild(style);
