window.addEventListener('DOMContentLoaded', async () => {
  const idioma = window.AppLang.getIdioma();
  const tr = await window.AppLang.ready();

  document.getElementById('nav-home').textContent = tr["nav_home"];
  document.getElementById('nav-gamificacion').textContent = tr["nav_gamificacion"];
  document.getElementById('nav-analitica').textContent = tr["nav_analitica"];
  document.getElementById('nav-interactiva').textContent = tr["nav_interactiva"];
  document.getElementById('user-role').textContent = tr["profile_user"];
  document.getElementById('profile-name').textContent = localStorage.getItem('siteUserName') || "Usuario";
  document.getElementById('logout-btn').textContent = tr["logout_btn"];

  document.getElementById('analitica-title').textContent = tr["analitica"];
  document.getElementById('th-usuario').textContent = tr["thUsuario"];
  document.getElementById('th-puntaje').textContent = tr["thPuntaje"];
  document.getElementById('th-nivel').textContent = tr["thNivel"];

  // Simulación de usuarios (poner tu fuente real aquí)
  const usuarios = [
    { usuario: "Sofía", puntaje: 120, nivel: tr["grade2_title"] },
    { usuario: "Ahmed", puntaje: 200, nivel: tr["grade4_title"] },
    { usuario: "Valérie", puntaje: 90, nivel: tr["preescolar_title"] }
  ];

  const tbody = document.querySelector("#tabla-usuarios tbody");
  tbody.innerHTML = "";
  usuarios.forEach(u => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `<td>${u.usuario}</td><td>${u.puntaje}</td><td>${u.nivel}</td>`;
    tbody.appendChild(trElem);
  });

  document.getElementById('language-gamificacion').value = idioma;
  document.getElementById('language-gamificacion').addEventListener('change', async e => {
    await window.AppLang.setIdioma(e.target.value);
    location.reload();
  });
});
