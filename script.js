// ── Theme toggle (Phase 2) ──────────────────────────────────────
    const body = document.body;
    const toggleDesktop = document.getElementById('themeToggle');
    const toggleMobile  = document.getElementById('themeToggleMobile');

    function syncTheme() {
      // keep both toggles visually in sync (CSS handles it via body class)
    }

    function handleThemeClick() {
  body.classList.toggle('dark-theme');

  const isDark = body.classList.contains('dark-theme');

  [toggleDesktop, toggleMobile].forEach(btn => {
    btn.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  });
}
    toggleDesktop.addEventListener('click', handleThemeClick);
    toggleMobile.addEventListener('click', handleThemeClick);

    // ── Hamburger menu (Phase 1 mobile) ───────────────────────────
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    // Show mobile theme toggle only on small screens
    function syncMobileToggle() {
      const isMobile = window.innerWidth <= 768;
      toggleMobile.style.display = isMobile ? 'block' : 'none';
    }
    syncMobileToggle();
    window.addEventListener('resize', syncMobileToggle);

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
    });

    function closeMobile() {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
    }

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobile();
      }
    });