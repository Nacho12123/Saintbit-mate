window.addEventListener('DOMContentLoaded', async () => {
  // Traducciones
  const idioma = window.AppLang.getIdioma();
  const tr = await window.AppLang.ready();

  document.getElementById('nav-home').textContent = tr["nav_home"];
  document.getElementById('nav-gamificacion').textContent = tr["nav_gamificacion"];
  document.getElementById('nav-analitica').textContent = tr["nav_analitica"];
  document.getElementById('nav-interactiva').textContent = tr["nav_interactiva"];
  document.getElementById('user-role').textContent = tr["profile_user"];
  document.getElementById('profile-name').textContent = localStorage.getItem('siteUserName') || "Usuario";
  document.getElementById('logout-btn').textContent = tr["logout_btn"];

  document.getElementById('ia-title').textContent = tr["ia_title"] || "IA Adaptativa de Matemáticas";
  document.getElementById('ia-desc').textContent = tr["ia_desc"] || "Recibe consejos, preguntas y tips de matemáticas para tu nivel.";

  // Selector de idioma global (en la IA)
  const langSel = document.getElementById('language-ia');
  langSel.value = idioma;
  langSel.addEventListener('change', async e => {
    await window.AppLang.setIdioma(e.target.value);
    location.reload();
  });

  // Nivel IA
  const nivelSelect = document.getElementById('nivel-ia');
  nivelSelect.options[0].textContent = tr["preescolar_title"];
  nivelSelect.options[1].textContent = tr["grade1_title"];
  nivelSelect.options[2].textContent = tr["grade2_title"];
  nivelSelect.options[3].textContent = tr["grade3_title"];
  nivelSelect.options[4].textContent = tr["grade4_title"];
  let nivel = localStorage.getItem('nivel') || "preescolar";
  nivelSelect.value = nivel;
  nivelSelect.addEventListener('change', e => {
    nivel = e.target.value;
    localStorage.setItem('nivel', nivel);
    renderConsejo();
    renderPregunta();
  });

  // Consejos y preguntas multilingües (amplía este array por nivel e idioma)
  const consejos = [
    { nivel: "preescolar", es: "Cuenta usando objetos o tus dedos.", en: "Count using objects or your fingers.", fr: "Compte à l'aide d'objets ou de tes doigts.", ar: "عد باستخدام الأشياء أو أصابعك." },
    { nivel: "1", es: "Suma agrupando elementos visualmente.", en: "Add by grouping objects visually.", fr: "Additionne en groupant des objets.", ar: "اجمع عن طريق تجميع الأشياء." },
    { nivel: "2", es: "Divide una cantidad en partes iguales para entender la mitad.", en: "Split a quantity in equal parts to understand halves.", fr: "Partage en parts égales pour comprendre la moitié.", ar: "قسّم الكمية لأجزاء متساوية لفهم النصف." }
    // ... agrega consejos para cada nivel ...
  ];

  const preguntasIA = [
    { nivel: "preescolar", es: "¿Cuánto es 2+1?", en: "What is 2+1?", fr: "Combien font 2+1 ?", ar: "ما ناتج ٢+١؟", respuesta: { es: "3", en: "3", fr: "3", ar: "٣" } },
    { nivel: "1", es: "¿Cuánto es 4+2?", en: "What is 4+2?", fr: "Combien font 4+2 ?", ar: "ما ناتج ٤+٢؟", respuesta: { es: "6", en: "6", fr: "6", ar: "٦" } }
    // ... más preguntas según nivel ...
  ];

  // Render consejo
  function renderConsejo() {
    const consejoObj = consejos.find(c => c.nivel === nivel);
    document.getElementById('ia-consejo').textContent = consejoObj ? consejoObj[idioma] : '';
  }

  // Render pregunta
  function renderPregunta() {
    const questionArea = document.getElementById('ia-pregunta-area');
    const preguntaHeader = document.getElementById('ia-question-header');
    const preguntaDiv = document.getElementById('ia-question');
    const answerDiv = document.getElementById('ia-answer');
    const preguntaObj = preguntasIA.find(p => p.nivel === nivel);
    if (preguntaObj) {
      preguntaHeader.textContent = tr["select_game"] || "Pregunta:";
      preguntaDiv.textContent = preguntaObj[idioma];
      answerDiv.innerHTML = `<button id="show-answer">${tr["button_play"] || "Ver respuesta"}</button>`;
      answerDiv.querySelector("#show-answer").onclick = () => {
        answerDiv.innerHTML = `<span class="ia-respuesta">${preguntaObj.respuesta[idioma]}</span>`;
      };
      questionArea.style.display = "block";
    } else {
      preguntaHeader.textContent = '';
      preguntaDiv.textContent = '';
      answerDiv.textContent = '';
      questionArea.style.display = "none";
    }
  }

  renderConsejo();
  renderPregunta();
});
