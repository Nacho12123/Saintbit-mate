// Elementos de login para traducción dinámica
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const roleSelect = document.getElementById('role');
const languageSelect = document.getElementById('language');
const loginTitle = document.querySelector('.login-title');
const loginBtn = document.querySelector('.btn-login-math');
const registerLink = document.getElementById('register-link');
const forgotLink = document.getElementById('forgot-password-link');
const helpLink = document.getElementById('help-link');

// Labels
const usernameLabel = document.querySelector('label[for="username"]');
const passwordLabel = document.querySelector('label[for="password"]');
const roleLabel = document.querySelector('label[for="role"]');
const languageLabel = document.querySelector('label[for="language"]');

// Texto lateral (para que todo sea coherente)
const mathDescTitle = document.querySelector('.math-desc-title');
const mathDesc = document.querySelector('.math-desc');
const mathDescHighlight = document.querySelector('.math-desc-highlight');

// --- Renderizado dinámico del select de rol ---
function renderRoleSelect(tr) {
  const prevValue = roleSelect.value;
  roleSelect.innerHTML = `
    <option value="">${tr.role_placeholder || "-- Select --"}</option>
    <option value="student">${tr.role_student || "Student"}</option>
    <option value="admin">${tr.role_admin || "Administrator"}</option>
  `;
  if (prevValue) roleSelect.value = prevValue;
}

// --- Traduce todo el formulario de login y el bloque lateral ---
function renderLoginTexts(tr) {
  loginTitle.textContent   = tr.login_title || "Bienvenido";
  usernameLabel.textContent = tr.username_label || "Usuario o correo";
  passwordLabel.textContent = tr.password_label || "Contraseña";
  roleLabel.textContent     = tr.role_label || "Rol";
  languageLabel.textContent = tr.language_label || "Idioma";
  usernameInput.placeholder = tr.username_placeholder || "Usuario o correo";
  passwordInput.placeholder = tr.password_placeholder || "Contraseña";
  loginBtn.textContent      = tr.login_button || "Ingresar";
  registerLink.textContent  = tr.register_link || "Registrarse";
  forgotLink.textContent    = tr.forgot_password_link || "Olvidé mi contraseña";
  helpLink.textContent      = tr.help_link || "¿Necesitas ayuda?";
  // Renderiza select de roles
  renderRoleSelect(tr);

  // Traducción lateral
  if (mathDescTitle && tr.description_title) mathDescTitle.textContent = tr.description_title;
  if (mathDesc && tr.description_text) {
    let html = tr.description_text;
    if (tr.description_highlight)
      html += '<br><span class="math-desc-highlight">' + tr.description_highlight + '</span>';
    mathDesc.innerHTML = html;
  }
}

// --- Cambia el idioma y guarda la selección ---
async function loadLoginLanguage(lang) {
  try {
    const response = await fetch(`locales/${lang}.json`);
    if (!response.ok) throw new Error('Idioma no disponible.');
    const tr = await response.json();
    renderLoginTexts(tr);
  } catch (error) {
    console.error(error);
    alert('Error al cargar idioma.');
  }
}

// --- Evento de idioma al cargar ---
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLanguage') || 'es';
  languageSelect.value = savedLang;
  loadLoginLanguage(savedLang);
});

// --- Evento al cambiar idioma ---
languageSelect.addEventListener('change', () => {
  localStorage.setItem('siteLanguage', languageSelect.value);
  loadLoginLanguage(languageSelect.value);
});

// --- Extra: mostrar/ocultar contraseña ---
window.togglePassword = function() {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
};
// --- Manejo del submit/login para ir a home ---
loginForm.onsubmit = function(e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const role = roleSelect.value; // Esto será "student" o "admin"
  if (!username || !password || !role) {
    alert("Por favor completa todos los campos.");
    return;
  }
  // Puedes poner lógica de seguridad/acceso aquí si quieres (ahora es acceso libre)
  localStorage.setItem('siteRole', role);          // valor: "student" o "admin"
  localStorage.setItem('siteUserName', username);  // valor: lo que escriba el usuario
  window.location.href = 'home.html';              // Redirige después de login correcto
};
