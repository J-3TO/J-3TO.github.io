<div class="header-content">
  <h1>Neighbor2Inverse: Self-Supervised Denoising
for Low-Dose ROI Phase Contrast CT</h1>
</div>

<hr>

<style>
.header-content h1 {
  font-size: 3.2em;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 8px;
  font-weight: bold;
  letter-spacing: 1px;
}
.grid-description {
  font-size: 1.5em;
  text-align: center;
  margin: 32px 0 24px 0;
  color: #eee;
}
.row-labels {
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  height: 100%;
  align-items: center;
}
.row-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  font-size: 1em;
  color: #444;
  padding: 8px 0;
  white-space: nowrap;
}
.col-labels {
  grid-row: 1;
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  align-items: end;
}
.col-label {
  text-align: center;
  font-size: 1em;
  color: #444;
  padding-bottom: 8px;
  white-space: nowrap;
}
.grid-container {
  grid-row: 2;
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  width: 100%;
}
.reveal-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  min-height: 120px;
  background: #222;
  border-radius: 0;
  box-shadow: 0 1px 4px #0002;
  overflow: hidden;
}
.reveal-images {
  position: relative;
  width: 100%;
  height: 100%;
}
.reveal-img-bg, .reveal-img-fg {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
  border-radius: 0;
}
.reveal-img-fg {
  z-index: 2;
  clip-path: inset(0 50% 0 0);
  transition: clip-path 0.1s;
}
.reveal-slider {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}
.reveal-slider input[type="range"] {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: auto;
  cursor: col-resize;
}
.reveal-slider .drag-line {
  position: absolute;
  top: 0;
  height: 100%;
  width: 3px;
  background: #fff;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  pointer-events: none;
  transition: left 0.1s;
}
.reveal-slider .drag-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #888;
  transform: translate(-50%, -50%);
  z-index: 11;
  pointer-events: none;
  box-shadow: 0 1px 4px #0002;
  transition: left 0.1s;
}
main, .container {
  width: 100vw !important;
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0 !important;
}

body > div.container, .container {
  width: 100vw !important;
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0 !important;
}

body, html {
  width: 100vw !important;
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow-x: hidden;
}
body > div.container, .container, main {
  width: 100vw !important;
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0 !important;
}

.grid-labels-wrapper {
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: 48px 1fr;
  width: calc(100vw - 72px);
  margin: 0 auto;
}
.row-labels {
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  height: 100%;
  align-items: center;
}
.row-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  font-size: 1.1em;
  color: #444;
  padding: 8px 0;
  white-space: nowrap;
}
.col-labels {
  grid-row: 1;
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  align-items: end;
}
.col-label {
  text-align: center;
  font-size: 1.1em;
  color: #444;
  padding-bottom: 8px;
  white-space: nowrap;
}
.grid-container {
  grid-row: 2;
  grid-column: 2;
}

body, html {
  background: #181a1b !important;
  color: #eee !important;
}

.grid-labels-wrapper {
  background: #181a1b;
}

.row-label, .col-label {
  color: #eee;
}

.reveal-wrapper {
  background: #222;
  box-shadow: 0 2px 8px #0008;
}

.reveal-slider .drag-line {
  background: #eee;
}

.reveal-slider .drag-circle {
  background: #222;
  border: 2px solid #eee;
  box-shadow: 0 2px 8px #0008;
}

.proj-denoising-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 12px; /* Add space between images */
  width: calc(100vw - 72px);
  margin: 8px auto 24px auto;
  min-height: 180px;
}
.proj-cell {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #222;
  overflow: hidden;
}
.proj-img, .proj-img-fg {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
  border-radius: 0;
}
.proj-img-fg {
  z-index: 2;
  clip-path: inset(0 50% 0 0);
  transition: clip-path 0.1s;
}
.proj-slider {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}
.proj-slider input[type="range"] {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: auto;
  cursor: col-resize;
}
.proj-slider .proj-drag-line {
  position: absolute;
  top: 0;
  height: 100%;
  width: 3px;
  background: #fff;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  pointer-events: none;
  transition: left 0.1s;
}
.proj-slider .proj-drag-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #888;
  transform: translate(-50%, -50%);
  z-index: 11;
  pointer-events: none;
  box-shadow: 0 1px 4px #0002;
  transition: left 0.1s;
}

.proj-labels-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 12px;
  width: calc(100vw - 72px);
  margin: 0 auto 8px auto;
}
.proj-label {
  text-align: center;
  color: #eee;
  font-size: 1.1em;
  margin-top: 4px;
  white-space: nowrap;
}
</style>

<div class="grid-description">
  <h3 style="margin-bottom: 8px;">Denoising results of different methods on projections measured with 15 ms exposure time.</h3>
  Interactive version of Figure 2. <b>Drag each slider to reveal the denoised image.</b>
</div>

<div class="proj-labels-grid">
  <div class="proj-label">200ms</div>
  <div class="proj-label">Gaussian Filter</div>
  <div class="proj-label">BM3D</div>
  <div class="proj-label">ProjFakeNoiseNet</div>
  <div class="proj-label">Nei2Nei U-Net L2</div>
  <div class="proj-label">Nei2Nei U-Net L1</div>
  <div class="proj-label">Nei2Nei KBNet L2</div>
  <div class="proj-label">Nei2Nei KBNet L1</div>
</div>

<div class="proj-denoising-grid">
  <div class="proj-cell">
    <img src="./ProjDenoisingImages/denoisingProj_0.png" class="proj-img" alt="Reference">
  </div>
  <!-- The next 7 cells will be filled by JS -->
</div>

<hr>



<div class="grid-description">
  <h3 style="margin-bottom: 8px;">Denoising results of Neighbor2Inverse with different exposure times and projection views.</h3>
  Interactive version of Figure 6. <b>Drag each slider to reveal the denoised image.</b>
</div>

<div class="grid-labels-wrapper">
  <div class="row-labels">
    <div class="row-label">1800 proj.</div>
    <div class="row-label">900 proj.</div>
    <div class="row-label">600 proj.</div>
    <div class="row-label">450 proj.</div>
    <div class="row-label">360 proj.</div>
    <div class="row-label">300 proj.</div>
    <div class="row-label">225 proj.</div>
  </div>
  <div class="col-labels">
    <div class="col-label">200ms</div>
    <div class="col-label">100ms</div>
    <div class="col-label">67ms</div>
    <div class="col-label">50ms</div>
    <div class="col-label">33ms</div>
    <div class="col-label">25ms</div>
    <div class="col-label">15ms</div>
  </div>
  <div class="grid-container">
  </div>
</div>

<script>
const gridRows = 7;
const gridCols = 7;
const gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= gridRows; i++) {
  for (let j = 1; j <= gridCols; j++) {
    const idx = `r${i}c${j}`;
    const noisyPath = `./GridImages/gridImagNoisy_${j-1}_${i-1}.png`;
    const denoisedPath = `./GridImages/gridImageDenoised_${j-1}_${i-1}.png`;

    const wrapper = document.createElement('div');
    wrapper.className = 'reveal-wrapper';
    wrapper.innerHTML = `
      <div class="reveal-images">
        <img src="${noisyPath}" class="reveal-img-bg">
        <img src="${denoisedPath}" class="reveal-img-fg" id="fg${idx}">
      </div>
      <div class="reveal-slider">
        <input type="range" min="0" max="100" value="50" id="slider${idx}">
        <div class="drag-line" id="line${idx}"></div>
        <div class="drag-circle" id="circle${idx}"></div>
      </div>
    `;
    gridContainer.appendChild(wrapper);
  }
}

function setupRevealSlider(sliderId, fgId, lineId, circleId) {
  const slider = document.getElementById(sliderId);
  const fg = document.getElementById(fgId);
  const line = document.getElementById(lineId);
  const circle = document.getElementById(circleId);

  function update() {
    const val = slider.value;
    fg.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
    line.style.left = val + '%';
    circle.style.left = val + '%';
  }
  slider.addEventListener('input', update);
  window.addEventListener('resize', update);
  update();
}

for (let i = 1; i <= gridRows; i++) {
  for (let j = 1; j <= gridCols; j++) {
    const idx = `r${i}c${j}`;
    setupRevealSlider(`slider${idx}`, `fg${idx}`, `line${idx}`, `circle${idx}`);
  }
}


const projGrid = document.querySelector('.proj-denoising-grid');

// Add 7 slider cells (columns 2–8)
for (let n = 2; n <= 8; n++) {
  const cell = document.createElement('div');
  cell.className = 'proj-cell';
  cell.innerHTML = `
    <img src="./ProjDenoisingImages/denoisingProj_1.png" class="proj-img">
    <img src="./ProjDenoisingImages/denoisingProj_${n}.png" class="proj-img-fg" id="proj-fg${n}">
    <div class="proj-slider">
      <input type="range" min="0" max="100" value="50" id="proj-slider${n}">
      <div class="proj-drag-line" id="proj-line${n}"></div>
      <div class="proj-drag-circle" id="proj-circle${n}"></div>
    </div>
  `;
  projGrid.appendChild(cell);
}

function setupProjSlider(n) {
  const slider = document.getElementById(`proj-slider${n}`);
  const fg = document.getElementById(`proj-fg${n}`);
  const line = document.getElementById(`proj-line${n}`);
  const circle = document.getElementById(`proj-circle${n}`);

  function update() {
    const val = slider.value;
    fg.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
    line.style.left = val + '%';
    circle.style.left = val + '%';
  }
  slider.addEventListener('input', update);
  window.addEventListener('resize', update);
  update();
}

for (let n = 2; n <= 8; n++) {
  setupProjSlider(n);
}

</script>
