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

// --- Grid Sliders (Neighbor2Inverse Figure 6) ---
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

for (let i = 1; i <= gridRows; i++) {
  for (let j = 1; j <= gridCols; j++) {
    const idx = `r${i}c${j}`;
    setupRevealSlider(`slider${idx}`, `fg${idx}`, `line${idx}`, `circle${idx}`);
  }
}

// --- Projection Denoising Sliders (Figure 2) ---
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

// --- Slice Denoising Sliders (Figure 3) ---
const sliceLabels = [
  "200ms", "15ms", "Nei2Nei", "RecoFakeNoiseNet", "Noise2Inverse", "Neighbor2Inverse"
];
const sliceRows = [
  ["200ms", "15ms", "Nei2Nei", "RecoFakeNoiseNet", "Noise2Inverse", "Neighbor2Inverse"],
  ["200ms_zoom", "15ms_zoom", "Nei2Nei_zoom", "RecoFakeNoiseNet_zoom", "Noise2Inverse_zoom", "Neighbor2Inverse_zoom"],
  ["200ms2", "15ms2", "Nei2Nei2", "RecoFakeNoiseNet2", "Noise2Inverse2", "Neighbor2Inverse2"],
  ["200ms2_zoom", "15ms2_zoom", "Nei2Nei2_zoom", "RecoFakeNoiseNet2_zoom", "Noise2Inverse2_zoom", "Neighbor2Inverse2_zoom"]
];
const sliceLeftImages = [
  "15ms", "15ms_zoom", "15ms2", "15ms2_zoom"
];

const sliceGrid = document.querySelector('.slice-denoising-grid');

for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 6; col++) {
    const cell = document.createElement('div');
    cell.className = 'slice-cell';
    // First two columns: just show image, no slider
    if (col < 2) {
      cell.innerHTML = `
        <img src="./SliceDenoisingCompMethods/${sliceRows[row][col]}.png" class="slice-img" alt="${sliceRows[row][col]}">
      `;
    } else {
      // Slider: left image is 15ms/zoom/2/2_zoom, right image is current method
      cell.innerHTML = `
        <img src="./SliceDenoisingCompMethods/${sliceLeftImages[row]}.png" class="slice-img">
        <img src="./SliceDenoisingCompMethods/${sliceRows[row][col]}.png" class="slice-img-fg" id="slice-fg-${row}-${col}">
        <div class="slice-slider">
          <input type="range" min="0" max="100" value="50" id="slice-slider-${row}-${col}">
          <div class="slice-drag-line" id="slice-line-${row}-${col}"></div>
          <div class="slice-drag-circle" id="slice-circle-${row}-${col}"></div>
        </div>
      `;
    }
    sliceGrid.appendChild(cell);
  }
}

// Setup sliders for columns 2-5 (index 2-5)
function setupSliceSlider(row, col) {
  const slider = document.getElementById(`slice-slider-${row}-${col}`);
  const fg = document.getElementById(`slice-fg-${row}-${col}`);
  const line = document.getElementById(`slice-line-${row}-${col}`);
  const circle = document.getElementById(`slice-circle-${row}-${col}`);

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

for (let row = 0; row < 4; row++) {
  for (let col = 2; col < 6; col++) {
    setupSliceSlider(row, col);
  }
}