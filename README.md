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
    max-width: 800px;
    margin: 0 auto;
    padding: 56px 24px 80px;
  }

  /* ── profile section ── */
  .profile {
    display: flex;
    align-items: flex-start;
    gap: 36px;
    margin-bottom: 52px;
    padding-bottom: 40px;
    border-bottom: 1px solid #2c3047;
  }

  .profile-text { flex: 1; min-width: 0; }

  .profile-text h1 {
    font-size: 1.55em;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #f0f2fa;
    margin: 0 0 4px;
  }

  .profile-text .position {
    font-size: 0.88em;
    color: #b0b7cc;
    margin: 0 0 16px;
  }

  .profile-text .bio {
    font-size: 0.93em;
    color: #f0f2fa;
    margin: 0 0 20px;
    line-height: 1.7;
  }

  .profile-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .profile-links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.84em;
    font-weight: 500;
    color: #4f8ef7;
    text-decoration: none;
    border: 1px solid rgba(79,142,247,0.30);
    border-radius: 5px;
    padding: 4px 11px;
    transition: border-color 0.15s, color 0.15s;
  }

  .profile-links a:hover {
    color: #6ba3f8;
    border-color: rgba(79,142,247,0.65);
    text-decoration: none;
  }

  .profile-pic {
    flex-shrink: 0;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #2c3047;
  }

  /* ── section label ── */
  .section-label {
    font-size: 0.70em;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: #717897;
    margin: 0 0 22px;
  }

  /* ── sub-section label ── */
  .sub-section-label {
    font-size: 0.70em;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: #4f8ef7;
    margin: 32px 0 16px;
  }

  /* ── publication card ── */
  .pub-card {
    padding: 18px 0;
    border-bottom: 1px solid #2c3047;
  }

  .pub-card:last-child { border-bottom: none; }

  .pub-title {
    font-size: 0.97em;
    font-weight: 600;
    color: #f0f2fa;
    margin: 0 0 6px;
    line-height: 1.5;
  }

  .pub-authors {
    font-size: 0.84em;
    color: #b0b7cc;
    margin: 0 0 10px;
    line-height: 1.6;
  }

  .pub-authors strong {
    color: #f0f2fa;
    font-weight: 600;
  }

  .pub-note {
    font-size: 0.80em;
    color: #717897;
    font-style: italic;
    margin: 0 0 8px;
  }

  .pub-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pub-links a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.82em;
    font-weight: 500;
    color: #4f8ef7;
    text-decoration: none;
    border: 1px solid rgba(79,142,247,0.25);
    border-radius: 4px;
    padding: 3px 10px;
    transition: border-color 0.15s, color 0.15s;
  }

  .pub-links a:hover {
    color: #6ba3f8;
    border-color: rgba(79,142,247,0.60);
    text-decoration: none;
  }

  /* ── icons (inline SVG) ── */
  .icon { width: 13px; height: 13px; vertical-align: middle; fill: currentColor; }

  /* ── mobile ── */
  @media (max-width: 600px) {
    .portal {
      padding: 32px 16px 60px;
    }

    .profile {
      flex-direction: column-reverse;
      align-items: center;
      gap: 20px;
      text-align: center;
    }

    .profile-text h1 {
      font-size: 1.35em;
    }

    .profile-links {
      justify-content: center;
    }

    .profile-links a {
      font-size: 0.95em;
      padding: 8px 14px;
      min-height: 44px;
    }

    .profile-pic {
      width: 110px;
      height: 110px;
    }

    .pub-links a {
      font-size: 0.92em;
      padding: 7px 13px;
      min-height: 44px;
    }

    .icon {
      width: 16px;
      height: 16px;
    }
  }
</style>

<div class="portal">

  <!-- ══ Profile ══ -->
  <div class="profile">
    <div class="profile-text">
      <h1>Johannes B. Thalhammer</h1>
      <p class="position">Doctoral Candidate &nbsp;·&nbsp; Chair of Biomedical Physics, TU Munich &amp; Klinikum Rechts der Isar</p>
      <p class="bio">Hi, I am Johannes. I am a doctoral candidate at the Chair of Biomedical Physics at TU Munich and the Klinikum Rechts der Isar.</p>
      <div class="profile-links">
        <a href="mailto:johannes.thalhammer@tum.de">
          <svg class="icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Mail
        </a>
        <a href="https://www.linkedin.com/in/johannes-thalhammer-72657922b" target="_blank">
          <svg class="icon" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/J-3TO" target="_blank">
          <svg class="icon" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          GitHub
        </a>
      </div>
    </div>
    <img class="profile-pic" src="/prof_pic.jpeg" alt="Johannes B. Thalhammer">
  </div>

  <!-- ══ Research ══ -->
  <p class="section-label">Research</p>

  <p class="sub-section-label">First Author Publications</p>

  <div class="pub-card">
    <p class="pub-title">Neighbor2Inverse: Self-Supervised Denoising for Low-Dose ROI Phase Contrast CT</p>
    <p class="pub-authors"><strong>Johannes B. Thalhammer</strong>, Lorenzo D'Amico, Lucy Costello, Sebastian Peterhansl, Tina Dorosti, Florian Schaff, Jannis Ahlers, Ronan Smith, Marcus Kitchen, Franz Pfeiffer, Martin Donnelley, Daniela Pfeiffer, Kaye S. Morgan</p>
    <p class="pub-note">Under submission</p>
    <div class="pub-links">
      <a href="https://j-3to.github.io/Neighbor2Inverse/">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        Demo
      </a>
      <a href="https://github.com/J-3TO/Neighbor2Inverse" target="_blank">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        Code
      </a>
    </div>
  </div>

  <div class="pub-card">
    <p class="pub-title">Improving Automated Hemorrhage Detection at Sparse-View CT via U-Net–Based Artifact Reduction</p>
    <p class="pub-authors"><strong>Johannes Thalhammer</strong>, Manuel Schultheiß, Tina Dorosti, Tobias Lasser, Franz Pfeiffer, Daniela Pfeiffer, Florian Schaff</p>
    <p class="pub-note">Radiology: Artificial Intelligence</p>
    <div class="pub-links">
      <a href="https://pubs.rsna.org/doi/full/10.1148/ryai.230275" target="_blank">
        <svg class="icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        Paper
      </a>
      <a href="https://github.com/J-3TO/Sparse-View-Cranial-CT-Reconstruction" target="_blank">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        Code
      </a>
    </div>
  </div>

  <div class="pub-card">
    <p class="pub-title">Ultra-Low-Dose CTPA Using Sparse Sampling CT Combined with the U-Net for Deep Learning-Based Artifact Reduction: An Exploratory Study</p>
    <p class="pub-authors">Andreas Philipp Sauter*, <strong>Johannes Thalhammer*</strong>, Felix Meurer, Tina Dorosti, Daniel Sasse, Jessica Ritter, Yannik Leonhardt, Franz Pfeiffer, Florian Schaff, Daniela Pfeiffer <span style="font-size:0.85em; color:#717897;">(*contributed equally)</span></p>
    <p class="pub-note">Journal of Imaging Informatics in Medicine</p>
    <div class="pub-links">
      <a href="https://link.springer.com/article/10.1007/s10278-025-01639-8" target="_blank">
        <svg class="icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        Paper
      </a>
    </div>
  </div>

  <div class="pub-card">
    <p class="pub-title">Artifact Reduction in Undersampled 3D Cone-Beam CTs using a Hybrid 2D-3D CNN Framework</p>
    <p class="pub-authors"><strong>Johannes Thalhammer*</strong>, Tina Dorosti*, Sebastian Peterhansl, Daniela Pfeiffer, Franz Pfeiffer, Florian Schaff <span style="font-size:0.85em; color:#717897;">(*contributed equally)</span></p>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2602.08727" target="_blank">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        arXiv
      </a>
      <a href="https://github.com/J-3TO/2D-3DCNN_sparseview" target="_blank">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        Code
      </a>
    </div>
  </div>

</div>
