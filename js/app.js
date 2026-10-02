/**
 * Peter Wachter Website - Hoofd-applicatie
 * Paginanavigatie, state management, en interactie
 */

class PeterWachterApp {
  constructor() {
    this.currentPage = 'home';
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupStoryChapters();
    this.setupGallery();
    this.setupMenuToggle();
    this.loadStoredPreferences();
    this.setupScrollBehavior();
  }

  setupNavigation() {
    document.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        this.navigateToPage(page);
      });
    });
  }

  navigateToPage(page) {
    // Verberg alle pagina's
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Toon geselecteerde pagina
    const targetPage = document.getElementById(page);
    if (targetPage) {
      targetPage.classList.add('active');
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Sluit mobiel menu
      const navMenu = document.getElementById('navMenu');
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    }
  }

  setupMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Sluit menu bij klik op link
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }
  }

  setupStoryChapters() {
    const container = document.getElementById('story-chapters');
    if (!container) return;

    const chapters = SITE_CONFIG.chapters;

    chapters.forEach(chapter => {
      const chapterEl = document.createElement('article');
      chapterEl.className = 'chapter';
      chapterEl.innerHTML = `
        <h2>${chapter.title}</h2>
        <p class="chapter-subtitle">${chapter.subtitle}</p>
        ${chapter.content}
      `;

      // Voeg afbeeldingen toe als ze bestaan
      if (chapter.imageFolder) {
        const imagesDiv = document.createElement('div');
        imagesDiv.className = 'chapter-images';
        imagesDiv.innerHTML = `
          <!-- Afbeeldingen uit /images/${chapter.imageFolder}/ worden hier geladen -->
          <!-- Zorg ervoor dat de mappen en bestanden bestaan in je repository -->
        `;
        chapterEl.appendChild(imagesDiv);
      }

      container.appendChild(chapterEl);
    });
  }

  setupGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    const filterBtns = document.querySelectorAll('.filter-btn');

    // Maak galerij-items aan (placeholder - echte afbeeldingen uit mappen)
    const imageSets = SITE_CONFIG.imageSets;
    let itemCount = 0;

    Object.entries(imageSets).forEach(([folder, data]) => {
      // In een echte implementatie scan je de /images/ folder
      // Voor nu maken we placeholders aan
      const placeholderCount = 3; // 3 foto's per folder als voorbeeld

      for (let i = 0; i < placeholderCount; i++) {
        itemCount++;
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.filter = data.filter;
        item.dataset.index = itemCount;
        item.innerHTML = `
          <img 
            src="/images/${folder}/placeholder-${i + 1}.jpg" 
            alt="${data.caption}" 
            loading="lazy"
          >
        `;

        // Click-handler voor lightbox
        item.addEventListener('click', () => {
          this.openLightbox(itemCount);
        });

        galleryGrid.appendChild(item);
      }
    });

    // Filter-buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterGallery(btn.dataset.filter);
      });
    });
  }

  filterGallery(filter) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      if (filter === 'all' || item.dataset.filter === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (!lightbox) return;

    const item = document.querySelector(`[data-index="${index}"]`);
    if (item) {
      const img = item.querySelector('img');
      lightboxImage.src = img.src;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add('active');

      // Carousel navigation
      window.currentLightboxIndex = index;
    }
  }

  closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
    }
  }

  loadStoredPreferences() {
    // Laad opgeslagen thema-voorkeur
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  setupScrollBehavior() {
    // Smooth scrolling is al in CSS ingesteld
    // Dit kan uitgebreid worden met custom scroll effecten
  }
}

// Initialiseer app bij DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new PeterWachterApp();
  });
} else {
  window.app = new PeterWachterApp();
}
