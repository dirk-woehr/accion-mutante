const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    btn.style.setProperty("--x", x + "%");
    btn.style.setProperty("--y", y + "%");
  });
});

// erstellt eine SVG-Maske mit ausgefranstem Rand
// plus ein zweites SVG für den Schatten, das als Hintergrundbild im #gigsShadow-Element verwendet wird
function generateTornPaperWithShadowSVG() {
  const windowWidth = window.innerWidth;
  const maxTornHeight = Math.min(128, Math.max(48, Math.round(windowWidth * 0.08)));
  const pointsCount = Math.ceil(windowWidth / 30);

  let pathD = `M 0 ${maxTornHeight} `;
  for (let i = 0; i <= pointsCount; i++) {
    const x = (i / pointsCount) * windowWidth;
    const y = (i === 0 || i === pointsCount)
      ? Math.round(maxTornHeight * 0.5)
      : Math.floor(Math.random() * (maxTornHeight - 10)) + 10;
    pathD += `L ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  pathD += `L ${windowWidth} ${maxTornHeight + 20} L 0 ${maxTornHeight + 20} Z`;

  // Erstes SVG für die Maske (ohne Schatten):
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${windowWidth} ${maxTornHeight}"><path d="${pathD}" fill="black"/></svg>`;

  // Zweites SVG enthält einen Filter für den Schatten:
  const svgStringShadow = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${windowWidth} ${maxTornHeight + 20}">
        <defs>
            <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                <feOffset dx="0" dy="6" />
                <feComponentTransfer><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
            </filter>
        </defs>
        <!-- Schatten-Pfad (leicht nach unten versetzt durch den Filter) -->
        <path d="${pathD}" fill="black" filter="url(#shadowFilter)" />
        <!-- Normaler Pfad für die scharfe Kante (optional, falls das :before-Element rein als Schatten dient) -->
    </svg>`;

  return {
    url: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`,
    urlShadow: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgStringShadow)}")`,
    height: `${maxTornHeight}px`,
    heightShadow: `${maxTornHeight + 20}px`,
  };
}

function updateMask() {
  const section = document.getElementById('gigs');
  const shadowData = generateTornPaperWithShadowSVG();
  // CSS Variablen für Pfade & Höhen setzen
  document.documentElement.style.setProperty('--svg-mask', shadowData.url);
  document.documentElement.style.setProperty('--mask-height', shadowData.height);
  document.documentElement.style.setProperty('--shadow-svg', shadowData.urlShadow);
  document.documentElement.style.setProperty('--shadow-height', shadowData.heightShadow);
}

// Beim Laden ausführen
updateMask();

let lastWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;

  // Prüfen, ob sich die Breite tatsächlich geändert hat 
  // (ignoriert das nervige Höhen-Resize durch die mobile Adressleiste beim Scrollen)
  if (currentWidth !== lastWidth) {
    lastWidth = currentWidth;
    updateMask(); // Hier wird neu gerendert
  }
});

// Prüfen, ob es ein reines Touch-Gerät ist
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('isTouchDevice');
}