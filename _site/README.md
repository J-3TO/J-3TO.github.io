<style>
  *, *::before, *::after { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: #0f1117;
    color: #f0f2fa;
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
    line-height: 1.65;
  }

  /* suppress jekyll-theme-minimal chrome */
  header, .header, footer.site-footer { display: none !important; }
  .wrapper { max-width: 100% !important; padding: 0 !important; }
  main, section.main-content { padding: 0 !important; }

  /* ── page shell ── */
  .portal {
    max-width: 780px;
    margin: 0 auto;
    padding: 56px 24px 72px;
  }

  /* ── site header ── */
  .site-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid #2c3047;
  }

  .site-header h1 {
    font-size: 1.6em;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #f0f2fa;
    margin: 0 0 10px;
  }

  .site-header .byline {
    font-size: 0.9em;
    color: #f0f2fa;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* ── section label ── */
  .section-label {
    font-size: 0.72em;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: #f0f2fa;
    margin: 0 0 20px;
  }

  /* ── project card ── */
  .project-card {
    padding: 16px 0;
    margin-bottom: 4px;
    border-bottom: 1px solid #2c3047;
  }

  .project-card h2 {
    font-size: 0.97em;
    font-weight: 600;
    color: #f0f2fa;
    margin: 0 0 10px;
    line-height: 1.45;
  }

  .project-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-size: 0.84em;
  }

  .project-meta a {
    color: #4f8ef7;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: color 0.15s;
  }

  .project-meta a:hover { color: #6ba3f8; text-decoration: underline; }

  .tag {
    display: inline-block;
    font-size: 0.75em;
    font-weight: 500;
    background: rgba(79,142,247,0.10);
    color: #4f8ef7;
    border: 1px solid rgba(79,142,247,0.25);
    border-radius: 4px;
    padding: 1px 7px;
    margin-bottom: 8px;
  }

  .coming-soon {
    font-size: 0.82em;
    color: #f0f2fa;
  }

  /* ── divider ── */
  .portal hr {
    border: none;
    border-top: 1px solid #2c3047;
    margin: 40px 0;
  }
</style>

<div class="portal">

  <header class="site-header">
    <h1>Research Projects</h1>
    <p class="byline">
      Interactive visualizations and resources for work by
      <strong>Johannes B. Thalhammer</strong> —
      doctoral candidate at the Chair of Biomedical Imaging, TU Munich.
    </p>
  </header>

  <p class="section-label">Projects</p>

  <div class="project-card">
    <span class="tag">Self-supervised denoising &nbsp;·&nbsp; Phase-contrast CT</span>
    <h2>Neighbor2Inverse: Self-Supervised Denoising for Low-Dose ROI Phase Contrast CT</h2>
    <div class="project-meta">
      <span class="coming-soon">Paper — under submission</span>
      <a href="https://j-3to.github.io/Neighbor2Inverse/">Overview &amp; Interactive Demo &rarr;</a>
    </div>
  </div>

  <div class="project-card">
    <span class="tag">Hemorrhage detection &nbsp;·&nbsp; Sparse-view CT</span>
    <h2>Improving Automated Hemorrhage Detection at Sparse-View CT</h2>
    <div class="project-meta">
      <a href="https://pubs.rsna.org/doi/full/10.1148/ryai.230275">Radiology: Artificial Intelligence &rarr;</a>
    </div>
  </div>

  <div class="project-card">
    <span class="tag">Ultra-low-dose CT &nbsp;·&nbsp; Deep learning &nbsp;·&nbsp; Artifact reduction</span>
    <h2>Ultra-Low-Dose CTPA Using Sparse Sampling CT Combined with the U-Net for Deep Learning-Based Artifact Reduction: An Exploratory Study</h2>
    <div class="project-meta">
      <a href="https://link.springer.com/article/10.1007/s10278-025-01639-8">Journal of Imaging Informatics in Medicine &rarr;</a>
    </div>
  </div>

</div>
