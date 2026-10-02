/**
 * Peter Wachter Website - Theme Switcher (Dark Mode)
 */

class ThemeSwitcher {
  constructor() {
    this.toggle = document.getElementById('themeToggle');
    this.currentTheme = 'light';
    this.init();
  }

  init() {
    this.loadTheme();
    this.setupToggle();
    this.setupSystemPreference();
  }

  loadTheme() {
    // Check localStorage
    const stored = localStorage.getItem('theme');
    if (stored) {
      this.currentTheme = stored;
      this.applyTheme(stored);
      return;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentTheme = 'dark';
      this.applyTheme('dark');
    }
  }

  setupToggle() {
    if (!this.toggle) return;

    this.toggle.addEventListener('click', () => {
      this.toggleTheme();
    });
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (this.toggle) this.toggle.textContent = '☀️';
    } else {
      document.body.classList.remove('dark-mode');
      if (this.toggle) this.toggle.textContent = '🌙';
    }
  }

  setupSystemPreference() {
    // Luister naar system preference changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        if (!localStorage.getItem('theme')) {
          this.currentTheme = e.matches ? 'dark' : 'light';
          this.applyTheme(this.currentTheme);
        }
      });
    }
  }
}

// Initialiseer theme switcher
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeSwitcher = new ThemeSwitcher();
  });
} else {
  window.themeSwitcher = new ThemeSwitcher();
}
