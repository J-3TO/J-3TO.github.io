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

// --- PE Figure: Comparison of denoising methods on clinical CT pulmonary angiograms ---
const peData = [
  { file: 'full_slice.png',       label: 'Full Slice',               interactive: false },
  { file: 'high_dose.png',        label: 'Normal dose',              interactive: false },
  { file: 'low_dose.png',         label: 'Low dose',                 interactive: false },
  { file: 'Gauss_filter.png',     label: 'Gauss filter',             interactive: true  },
  { file: 'bm3d.png',             label: 'BM3D',                     interactive: true  },
  { file: 'TV.png',               label: 'Total Variation',          interactive: true  },
  { file: 'wavelet.png',          label: 'Wavelet denoising',        interactive: true  },
  { file: 'bilat_filter.png',     label: 'bilateral filter',         interactive: true  },
  { file: 'supervised.png',       label: 'FakeNoise UNetSlice',      interactive: true  },
  { file: 'Nei2Nei.png',          label: 'Nei2Nei Projs',            interactive: true  },
  { file: 'Noise2Inverse.png',    label: 'Noise2Inverse',            interactive: true  },
  { file: 'blind2unblind.png',    label: 'Blind2Unblind',            interactive: true  },
  { file: 'proj2proj.png',        label: 'Proj2Proj',                interactive: true  },
  { file: 'zeroshotn2n.png',      label: 'ZeroShotN2N',              interactive: true  },
  { file: 'filter2noise.png',     label: 'Filter2Noise',             interactive: true  },
  { file: 'neighbor2inverse.png', label: 'Neighbor2Inverse (ours)',  interactive: true  },
];

const peBasePath = './PEImages/';
const peLowDose  = peBasePath + 'low_dose.png';
const peGrid     = document.getElementById('pe-grid');

peData.forEach((item, idx) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'comp-methods-updated-cell-wrapper';

  const label = document.createElement('div');
  label.className = 'comp-methods-updated-label';
  label.textContent = item.label;
  wrapper.appendChild(label);

  const cell = document.createElement('div');
  cell.className = 'comp-methods-updated-cell';

  if (!item.interactive) {
    cell.innerHTML = `<img src="${peBasePath}${item.file}" class="slice-img" alt="${item.label}">`;
  } else {
    cell.innerHTML = `
      <img src="${peLowDose}" class="slice-img">
      <img src="${peBasePath}${item.file}" class="slice-img-fg" id="pe-fg-${idx}">
      <div class="slice-slider">
        <input type="range" min="0" max="100" value="50" id="pe-slider-${idx}">
        <div class="slice-drag-line" id="pe-line-${idx}"></div>
        <div class="slice-drag-circle" id="pe-circle-${idx}"></div>
      </div>
    `;
  }

  wrapper.appendChild(cell);
  peGrid.appendChild(wrapper);
});

peData.forEach((item, idx) => {
  if (!item.interactive) return;
  const slider = document.getElementById(`pe-slider-${idx}`);
  const fg     = document.getElementById(`pe-fg-${idx}`);
  const line   = document.getElementById(`pe-line-${idx}`);
  const circle = document.getElementById(`pe-circle-${idx}`);

  function updatePe() {
    const val = slider.value;
    fg.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
    line.style.left   = val + '%';
    circle.style.left = val + '%';
  }
  slider.addEventListener('input', updatePe);
  window.addEventListener('resize', updatePe);
  updatePe();
});

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

// --- Figure 2: Comparison of denoising methods on CT slices (updated) ---
const compMethodsUpdatedData = [
  { file: 'full_slice.png',       label: 'Full Slice',               interactive: false },
  { file: 'high_dose.png',        label: 'High dose (200ms)',         interactive: false },
  { file: 'low_dose.png',         label: 'Low dose (15ms)',           interactive: false },
  { file: 'Gauss_filter.png',     label: 'Gauss filter',             interactive: true  },
  { file: 'bm3d.png',             label: 'BM3D',                     interactive: true  },
  { file: 'TV.png',               label: 'TV',                       interactive: true  },
  { file: 'wavelet.png',          label: 'wavelet',                  interactive: true  },
  { file: 'bilat_filter.png',     label: 'bilat. filter',            interactive: true  },
  { file: 'fake_noise.png',       label: 'FakeNoise UNetSlice',      interactive: true  },
  { file: 'nei2nei.png',          label: 'Nei2Nei Projs',            interactive: true  },
  { file: 'noise2inverse.png',    label: 'Noise2Inverse',            interactive: true  },
  { file: 'blind2unblind.png',    label: 'Blind2Unblind',            interactive: true  },
  { file: 'proj2proj.png',        label: 'Proj2Proj',                interactive: true  },
  { file: 'zershotN2N.png',       label: 'ZeroShotN2N',              interactive: true  },
  { file: 'filter2noise.png',     label: 'Filter2Noise',             interactive: true  },
  { file: 'neighbor2inverse.png', label: 'Neighbor2Inverse (ours)',  interactive: true  },
];

const cmuBasePath = './SliceDenoisingCompMethods_updated/image_0/';
const cmuLowDose  = cmuBasePath + 'low_dose.png';
const cmuGrid     = document.querySelector('.comp-methods-updated-grid');

compMethodsUpdatedData.forEach((item, idx) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'comp-methods-updated-cell-wrapper';

  const label = document.createElement('div');
  label.className = 'comp-methods-updated-label';
  label.textContent = item.label;
  wrapper.appendChild(label);

  const cell = document.createElement('div');
  cell.className = 'comp-methods-updated-cell';

  if (!item.interactive) {
    cell.innerHTML = `<img src="${cmuBasePath}${item.file}" class="slice-img" alt="${item.label}">`;
  } else {
    cell.innerHTML = `
      <img src="${cmuLowDose}" class="slice-img">
      <img src="${cmuBasePath}${item.file}" class="slice-img-fg" id="cmu-fg-${idx}">
      <div class="slice-slider">
        <input type="range" min="0" max="100" value="50" id="cmu-slider-${idx}">
        <div class="slice-drag-line" id="cmu-line-${idx}"></div>
        <div class="slice-drag-circle" id="cmu-circle-${idx}"></div>
      </div>
    `;
  }

  wrapper.appendChild(cell);
  cmuGrid.appendChild(wrapper);
});

compMethodsUpdatedData.forEach((item, idx) => {
  if (!item.interactive) return;
  const slider = document.getElementById(`cmu-slider-${idx}`);
  const fg     = document.getElementById(`cmu-fg-${idx}`);
  const line   = document.getElementById(`cmu-line-${idx}`);
  const circle = document.getElementById(`cmu-circle-${idx}`);

  function updateCmu() {
    const val = slider.value;
    fg.style.clipPath  = `inset(0 ${100 - val}% 0 0)`;
    line.style.left    = val + '%';
    circle.style.left  = val + '%';
  }
  slider.addEventListener('input', updateCmu);
  window.addEventListener('resize', updateCmu);
  updateCmu();
});

// --- Figure 2 image_1: same methods, second example image ---
const compMethodsUpdatedData2 = [
  { file: 'full_slice.png',       label: 'Full Slice',               interactive: false },
  { file: 'high_dose.png',        label: 'High dose (200ms)',         interactive: false },
  { file: 'low_dose.png',         label: 'Low dose (15ms)',           interactive: false },
  { file: 'Gauss_filter.png',     label: 'Gauss filter',             interactive: true  },
  { file: 'bm3d.png',             label: 'BM3D',                     interactive: true  },
  { file: 'TV.png',               label: 'TV',                       interactive: true  },
  { file: 'wavelet.png',          label: 'wavelet',                  interactive: true  },
  { file: 'bilat_filter.png',     label: 'bilat. filter',            interactive: true  },
  { file: 'fake_noise.png',       label: 'FakeNoise UNetSlice',      interactive: true  },
  { file: 'Nei2Nei.png',          label: 'Nei2Nei Projs',            interactive: true  },
  { file: 'noise2inverse.png',    label: 'Noise2Inverse',            interactive: true  },
  { file: 'blind2unblind.png',    label: 'Blind2Unblind',            interactive: true  },
  { file: 'proj2proj.png',        label: 'Proj2Proj',                interactive: true  },
  { file: 'zeroshotN2N.png',      label: 'ZeroShotN2N',              interactive: true  },
  { file: 'filter2noise.png',     label: 'Filter2Noise',             interactive: true  },
  { file: 'neighbor2inverse.png', label: 'Neighbor2Inverse (ours)',  interactive: true  },
];

const cmuBasePath2 = './SliceDenoisingCompMethods_updated/image_1/';
const cmuLowDose2  = cmuBasePath2 + 'low_dose.png';
const cmuGrid2     = document.getElementById('comp-methods-updated-grid-2');

compMethodsUpdatedData2.forEach((item, idx) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'comp-methods-updated-cell-wrapper';

  const label = document.createElement('div');
  label.className = 'comp-methods-updated-label';
  label.textContent = item.label;
  wrapper.appendChild(label);

  const cell = document.createElement('div');
  cell.className = 'comp-methods-updated-cell';

  if (!item.interactive) {
    cell.innerHTML = `<img src="${cmuBasePath2}${item.file}" class="slice-img" alt="${item.label}">`;
  } else {
    cell.innerHTML = `
      <img src="${cmuLowDose2}" class="slice-img">
      <img src="${cmuBasePath2}${item.file}" class="slice-img-fg" id="cmu2-fg-${idx}">
      <div class="slice-slider">
        <input type="range" min="0" max="100" value="50" id="cmu2-slider-${idx}">
        <div class="slice-drag-line" id="cmu2-line-${idx}"></div>
        <div class="slice-drag-circle" id="cmu2-circle-${idx}"></div>
      </div>
    `;
  }

  wrapper.appendChild(cell);
  cmuGrid2.appendChild(wrapper);
});

compMethodsUpdatedData2.forEach((item, idx) => {
  if (!item.interactive) return;
  const slider = document.getElementById(`cmu2-slider-${idx}`);
  const fg     = document.getElementById(`cmu2-fg-${idx}`);
  const line   = document.getElementById(`cmu2-line-${idx}`);
  const circle = document.getElementById(`cmu2-circle-${idx}`);

  function updateCmu2() {
    const val = slider.value;
    fg.style.clipPath  = `inset(0 ${100 - val}% 0 0)`;
    line.style.left    = val + '%';
    circle.style.left  = val + '%';
  }
  slider.addEventListener('input', updateCmu2);
  window.addEventListener('resize', updateCmu2);
  updateCmu2();
});

// --- Projection Denoising Sliders (Figure 3) ---
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
if (sliceGrid) {

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

} // end if (sliceGrid)

// --- Slice Denoising Sliders (Figure 4) ---
const fig4Labels = [
  "200ms", "15ms", "ProjSubsamplingReg", "ProjSubsamplingNoReg", "SinoSubsampling", "DataFidelityOrigSino", "DataFidelityVirtSino"
];
const fig4Rows = [
  ["200ms", "200ms_zoom", "200ms2", "200ms2_zoom"],
  ["15ms", "15ms_zoom", "15ms2", "15ms2_zoom"],
  ["ProjSubsamplingReg", "ProjSubsamplingReg_zoom", "ProjSubsamplingReg2", "ProjSubsamplingReg2_zoom"],
  ["ProjSubsamplingNoReg", "ProjSubsamplingNoReg_zoom", "ProjSubsamplingNoReg2", "ProjSubsamplingNoReg2_zoom"],
  ["SinoSubsampling", "SinoSubsampling_zoom", "SinoSubsampling2", "SinoSubsampling2_zoom"],
  ["DataFidelityOrigSino", "DataFidelityOrigSino_zoom", "DataFidelityOrigSino2", "DataFidelityOrigSino2_zoom"],
  ["DataFidelityVirtSino", "DataFidelityVirtSino_zoom", "DataFidelityVirtSino2", "DataFidelityVirtSino2_zoom"]
];

// For Figure 4, each row has 4 images, each column is a method
const fig4Grid = document.querySelector('.slice-denoising-grid-fig4');
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 7; col++) {
    const cell = document.createElement('div');
    cell.className = 'slice-cell';
    // First two columns: just show image, no slider
    if (col < 2) {
      cell.innerHTML = `
        <img src="./SliceDenoisingCompNei2Nei/${fig4Rows[col][row]}.png" class="slice-img" alt="${fig4Rows[col][row]}">
      `;
    } else {
      // Slider: left image is 15ms/zoom/2/2_zoom, right image is current method
      cell.innerHTML = `
        <img src="./SliceDenoisingCompNei2Nei/${fig4Rows[1][row]}.png" class="slice-img">
        <img src="./SliceDenoisingCompNei2Nei/${fig4Rows[col][row]}.png" class="slice-img-fg" id="fig4-fg-${row}-${col}">
        <div class="slice-slider">
          <input type="range" min="0" max="100" value="50" id="fig4-slider-${row}-${col}">
          <div class="slice-drag-line" id="fig4-line-${row}-${col}"></div>
          <div class="slice-drag-circle" id="fig4-circle-${row}-${col}"></div>
        </div>
      `;
    }
    fig4Grid.appendChild(cell);
  }
}

// Setup sliders for columns 2-6 (index 2-6)
function setupFig4Slider(row, col) {
  const slider = document.getElementById(`fig4-slider-${row}-${col}`);
  const fg = document.getElementById(`fig4-fg-${row}-${col}`);
  const line = document.getElementById(`fig4-line-${row}-${col}`);
  const circle = document.getElementById(`fig4-circle-${row}-${col}`);

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
  for (let col = 2; col < 7; col++) {
    setupFig4Slider(row, col);
  }
}

// --- Slice Denoising Sliders (Figure 5) ---
const fig5Labels = [
  "15ms", "Sparse", "Nei2Nei", "ProjSubsampling", "SinoSubsampling", "DataFidelityOrigSino", "DataFidelityVirtSino"
];
const fig5Rows = [
  ["15ms", "15ms_zoom", "15ms2", "15ms2_zoom"],
  ["Sparse", "Sparse_zoom", "Sparse2", "Sparse2_zoom"],
  ["Nei2Nei", "Nei2Nei_zoom", "Nei2Nei2", "Nei2Nei2_zoom"],
  ["ProjSubsampling", "ProjSubsampling_zoom", "ProjSubsampling2", "ProjSubsampling2_zoom"],
  ["SinoSubsampling", "SinoSubsampling_zoom", "SinoSubsampling2", "SinoSubsampling2_zoom"],
  ["DataFidelityOrigSino", "DataFidelityOrigSino_zoom", "DataFidelityOrigSino2", "DataFidelityOrigSino2_zoom"],
  ["DataFidelityVirtSino", "DataFidelityVirtSino_zoom", "DataFidelityVirtSino2", "DataFidelityVirtSino2_zoom"]
];

// For Figure 5, each row has 4 images, each column is a method
const fig5Grid = document.querySelector('.slice-denoising-grid-fig5');
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 7; col++) {
    const cell = document.createElement('div');
    cell.className = 'slice-cell';
    // First two columns: just show image, no slider
    if (col < 2) {
      cell.innerHTML = `
        <img src="./SliceDenoisingCompSparse/${fig5Rows[col][row]}.png" class="slice-img" alt="${fig5Rows[col][row]}">
      `;
    } else {
      // Slider: left image is Sparse, right image is current method
      cell.innerHTML = `
        <img src="./SliceDenoisingCompSparse/${fig5Rows[1][row]}.png" class="slice-img">
        <img src="./SliceDenoisingCompSparse/${fig5Rows[col][row]}.png" class="slice-img-fg" id="fig5-fg-${row}-${col}">
        <div class="slice-slider">
          <input type="range" min="0" max="100" value="50" id="fig5-slider-${row}-${col}">
          <div class="slice-drag-line" id="fig5-line-${row}-${col}"></div>
          <div class="slice-drag-circle" id="fig5-circle-${row}-${col}"></div>
        </div>
      `;
    }
    fig5Grid.appendChild(cell);
  }
}

// Setup sliders for columns 2-6 (index 2-6)
function setupFig5Slider(row, col) {
  const slider = document.getElementById(`fig5-slider-${row}-${col}`);
  const fg = document.getElementById(`fig5-fg-${row}-${col}`);
  const line = document.getElementById(`fig5-line-${row}-${col}`);
  const circle = document.getElementById(`fig5-circle-${row}-${col}`);

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
  for (let col = 2; col < 7; col++) {
    setupFig5Slider(row, col);
  }
}