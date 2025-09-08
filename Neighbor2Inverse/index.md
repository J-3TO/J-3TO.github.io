<link rel="stylesheet" href="style.css">

<div class="page-container">
  <div class="header-content">
    <h1>Neighbor2Inverse: Self-Supervised Denoising for Low-Dose ROI Phase Contrast CT</h1>
    <div class="author-list">
      Johannes B. Thalhammer, Tina Dorosti, Sebastian Peterhansl, Florian Schaff, Daniela Pfeiffer, Franz Pfeiffer, Martin Donnelley, Ronan Smith, Marcus Kitchen, Jannis Ahlers, Lucy Costello, Lorenzo D’Amico, Kaye Morgan
    </div>
    <div class="abstract">
      <b>Abstract—</b> Propagation-based X-ray phase-contrast imaging (PBI) provides high-contrast visualization of lung structures, but dose reduction is essential to make it as safe as possible. While convolutional neural network–based denoising with supervised training can achieve strong performance, acquiring large paired datasets of low- and high-dose images is often impractical, motivating the development of self-supervised methods.<br><br>
      We propose Neighbor2Inverse, a self-supervised denoising approach for low-dose PBI computed tomography. Following the Neighbor2Neighbor principle, noisy projections are subsampled to generate two measurements with nearly identical object structures but independent noise realizations. These are reconstructed, and the resulting image pairs are used to train a denoising network in the reconstruction domain. We evaluate multiple variations of the framework and compare against state-of-the-art methods. Neighbor2Inverse achieves improved noise suppression while preserving structural detail, as confirmed by higher contrast-to-noise ratio, enhanced spatial resolution, and an improved composite quality index.<br><br>
      Code and data are publicly available at <a href="https://github.com/J-3TO/Neighbor2Inverse" style="color:#00bfff;">https://github.com/J-3TO/Neighbor2Inverse</a>.<br><br>
      Under submission.
    </div>
  </div>

  <hr>
  <div class="grid-description">
    <h3>Overview of the Neighbor2Inverse method</h3>
  </div>
  <div class="image-container">
    <img src="./Method/method.png" alt="Overview of the Neighbor2Inverse method" class="method-figure">
  </div>
  <hr>



  <div class="grid-description">
    <h3 style="margin-bottom: 8px;">Denoising projections (15ms) by various methods.</h3>
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
    <h3 style="margin-bottom: 8px;">Denoising reconstructed CT images (15ms) by various methods</h3>
    Interactive version of Figure 3. <b>Drag each slider to reveal the denoised image.</b>
  </div>

  <div class="slice-denoising-labels-grid">
    <div class="slice-label">200ms</div>
    <div class="slice-label">15ms</div>
    <div class="slice-label">Nei2Nei</div>
    <div class="slice-label">RecoFakeNoiseNet</div>
    <div class="slice-label">Noise2Inverse</div>
    <div class="slice-label">Neighbor2Inverse</div>
  </div>
  <div class="slice-denoising-grid"></div>

  <hr>

  <div class="grid-description">
    <h3 style="margin-bottom: 8px;">Comparison of different Neighbor2Inverse regularization and subsampling strategies</h3>
    Interactive version of Figure 4. <b>Drag each slider to reveal the denoised image.</b>
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
    <h3 style="margin-bottom: 8px;">Denoising reconstructed CT images (15ms - 900 projs.) by various methods</h3>
    Interactive version of Figure 5. <b>Drag each slider to reveal the denoised image.</b>
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
      <!-- Cells will be filled by JS -->
    </div>
  </div>
</div>

<footer>
  <p>© 2025 Neighbor2Inverse Project</p>
</footer>

<!-- Reference your main.js file at the end of the body -->
<script src="main.js"></script>