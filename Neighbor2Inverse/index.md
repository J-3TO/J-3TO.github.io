---
title: "Neighbor2Inverse: Self-Supervised Denoising for Low-Dose ROI Phase Contrast CT"
---

<script src="/assets/js/theme.js?v={{ site.time | date: '%s' }}"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap">
<link rel="stylesheet" href="/assets/css/theme.css?v={{ site.time | date: '%s' }}">
<link rel="stylesheet" href="style.css?v={{ site.time | date: '%s' }}">

<div class="page-container">

  <!-- ══════════ Top bar ══════════ -->
  <nav class="topbar">
    <a class="back-link" href="/"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>Johannes B. Thalhammer</a>
    <button class="theme-toggle" type="button" aria-label="Toggle light/dark mode">
      <svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
    </button>
  </nav>

  <!-- ══════════ Header ══════════ -->
  <div class="header-content">
    <h1>Neighbor2Inverse: Self-Supervised Denoising for Low-Dose ROI Phase Contrast CT</h1>
    <p class="author-list">
      <span class="me">Johannes B. Thalhammer</span>, Tina Dorosti, Sebastian Peterhansl, Daniel Frey, Florian Schaff, Daniela Pfeiffer, Franz Pfeiffer, Martin Donnelley, Ronan Smith, Marcus Kitchen, Jannis Ahlers, Lucy Costello, Lorenzo D’Amico, Kaye Morgan
    </p>
    <p class="venue"><em>Under submission</em></p>
    <p class="header-links"><a href="https://github.com/J-3TO/Neighbor2Inverse" target="_blank" rel="noopener">code</a></p>
  </div>

  <!-- ══════════ Abstract ══════════ -->
  <div class="abstract">
    <h2 class="label">Abstract</h2>
    <p>Propagation-based X-ray phase-contrast imaging (PBI) enables high-contrast visualization of lung structures and holds strong clinical potential. However, safe translation requires substantial radiation dose reduction, which inevitably increases image noise. Supervised Convolutional Neural Network-based denoising can restore image quality but depends on paired low- and high-dose datasets, which are rarely available in practice. Self-supervised methods avoid this limitation, yet most are not well adapted to the inverse problem of PBI computed tomography (CT).</p>
    <p>We introduce <i>Neighbor2Inverse</i>, a self-supervised denoising framework for low-dose PBI CT. Building on the Neighbor2Neighbor principle, each noisy projection is subsampled into two variants that preserve structural information but contain independent noise realizations. These are reconstructed separately, and the resulting pairs are used to train a denoising network directly in the reconstruction domain. We systematically investigate multiple framework variants and benchmark against established denoising methods.</p>
    <p>In region-of-interest PBI CT experiments, <i>Neighbor2Inverse</i> achieves superior noise suppression while maintaining fine structural details, as confirmed by visual assessment, increased contrast-to-noise ratio, enhanced spatial resolution, and improved composite image quality metrics.</p>
    <p>Code and data are publicly available at <a href="https://github.com/J-3TO/Neighbor2Inverse" target="_blank" rel="noopener">github.com/J-3TO/Neighbor2Inverse</a>.</p>
  </div>

  <hr>

  <div class="grid-description">
    <h3>Overview of the Neighbor2Inverse method</h3>
    <p><strong>A</strong> – Neighbor2Neighbor approach in projection space. <strong>B</strong> – Neighbor2Inverse framework: Subsampling in projection space and denoising in reconstruction space. <strong>C</strong> – Neighbor2Inverse with data fidelity: Introducing data fidelity terms to constrict the denoising process.</p>
  </div>
  <div class="image-container">
    <img src="./Method/method.png" alt="Overview of the Neighbor2Inverse method" class="method-figure">
  </div>

  <hr>

  <div class="grid-description">
    <h3>Comparison of denoising methods on reconstructed CT slices</h3>
    <p>Drag each slider to reveal the Low dose (15ms) image.</p>
  </div>

  <div class="comp-methods-updated-grid">
    <!-- Cells will be filled by JS -->
  </div>

  <div class="comp-methods-inner-divider"></div>

  <div class="comp-methods-updated-grid" id="comp-methods-updated-grid-2">
    <!-- Cells will be filled by JS -->
  </div>

  <hr>

  <div class="grid-description">
    <h3>Comparison of denoising methods on clinical CT pulmonary angiograms</h3>
    <p>Drag each slider to reveal the Low dose image.</p>
  </div>

  <div class="comp-methods-updated-grid" id="pe-grid">
    <!-- Cells will be filled by JS -->
  </div>

  <hr>

  <div class="grid-description">
    <h3>Denoising projections (15ms) by various methods.</h3>
    <p>Drag each slider to reveal the denoised image.</p>
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
    <h3>Comparison of different Neighbor2Inverse regularization and subsampling strategies</h3>
    <p>Drag each slider to reveal the denoised image.</p>
  </div>

  <div class="slice-denoising-labels-grid-fig4">
    <div class="slice-label">200ms</div>
    <div class="slice-label">15ms</div>
    <div class="slice-label">proj. subsampling<br> L<sub>Nei</sub>+L<sub>reg</sub></div>
    <div class="slice-label">proj. subsampling<br> L<sub>Nei</sub></div>
    <div class="slice-label">sino. subsampling<br> L<sub>Nei</sub></div>
    <div class="slice-label">DataFidelityOrigSino<br> L<sub>Nei</sub>+L<sub>origSino</sub></div>
    <div class="slice-label">DataFidelityVirtSino<br> L<sub>Nei</sub>+L<sub>virtSino</sub></div>
  </div>
  <div class="slice-denoising-grid-fig4"></div>

  <hr>

  <div class="grid-description">
    <h3>Denoising reconstructed CT images (15ms - 900 projs.) by various methods</h3>
    <p>Drag each slider to reveal the denoised image.</p>
  </div>

  <div class="slice-denoising-labels-grid-fig5">
    <div class="slice-label">15ms - <br>1.800 projs.</div>
    <div class="slice-label">15ms - <br>900 projs.</div>
    <div class="slice-label">Nei2Nei</div>
    <div class="slice-label">proj. subsampling<br> L<sub>Nei</sub></div>
    <div class="slice-label">sino. subsampling<br> L<sub>Nei</sub></div>
    <div class="slice-label">DataFidelityOrigSino<br> L<sub>Nei</sub>+L<sub>origSino</sub></div>
    <div class="slice-label">DataFidelityVirtSino<br> L<sub>Nei</sub>+L<sub>virtSino</sub></div>
  </div>
  <div class="slice-denoising-grid-fig5"></div>

  <hr>

  <div class="grid-description">
    <h3>Denoising results of Neighbor2Inverse with different exposure times and projection views.</h3>
    <p>Drag each slider to reveal the denoised image.</p>
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
      <!-- Cells will be filled by JS -->
    </div>
  </div>

  <!-- ══════════ Footer ══════════ -->
  <footer class="site-footer">
    <p>© 2025 Neighbor2Inverse Project</p>
  </footer>

</div>

<!-- Reference your main.js file at the end of the body -->
<script src="main.js?v={{ site.time | date: '%s' }}"></script>
