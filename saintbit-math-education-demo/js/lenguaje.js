// js/lenguaje.js
window.AppLang = (() => {
  let idioma = localStorage.getItem('lang') || 'es'; // Cambié 'siteLanguage' por 'lang'
  let traducciones = {};

  async function setIdioma(nuevo) {
    idioma = nuevo;
    localStorage.setItem('lang', idioma); // Cambié 'siteLanguage' por 'lang'
    traducciones = await fetchTraduccionJSON(idioma);
    return traducciones;
  }

  async function fetchTraduccionJSON(lang) {
    try {
      const res = await fetch(`locales/${lang}.json`);
      if (!res.ok) throw new Error('Archivo no encontrado');
      return await res.json();
    } catch (error) {
      console.warn(`Error cargando ${lang}.json, usando español por defecto`);
      const res = await fetch('locales/es.json');
      return await res.json();
    }
  }

  return {
    getIdioma: () => idioma,
    setIdioma,
    getTraducciones: () => traducciones,
    async ready() {
      if (Object.keys(traducciones).length === 0) {
        traducciones = await fetchTraduccionJSON(idioma);
      }
      return traducciones;
    }
  };
})();
