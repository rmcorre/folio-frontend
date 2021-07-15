const loadThemeMinJs = (callback) => {
  const existingScript = document.getElementById('themeScript');

  // If no existingScript, create script.
  // On script load, if callback is passed in,
  // execute callback
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = '../assets/js/theme.min.js';

    script.id = 'themeScript';
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  // Otherwise, if both existingScript and callback exist,
  // execute callback.
  if (existingScript && callback) callback();
};

export default loadThemeMinJs;
