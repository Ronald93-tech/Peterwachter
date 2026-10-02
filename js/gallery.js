/**
 * Peter Wachter Website - Galerij & Lightbox
 */

class Gallery {
  constructor() {
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.setupLightbox();
    this.setupLazyLoading();
    this.setupImageOptimization();
  }

  setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    if (!lightbox) return;

    // Close button
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') lightbox.classList.remove('active');
      if (e.key === 'ArrowLeft') this.prevImage();
      if (e.key === 'ArrowRight') this.nextImage();
    });

    // Prev/Next buttons
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => this.prevImage());
    }
    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => this.nextImage());
    }

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  nextImage() {
    const items = document.querySelectorAll('.gallery-item:not(.hidden)');
    this.currentIndex = (this.currentIndex + 1) % items.length;
    this.updateLightbox(items[this.currentIndex]);
  }

  prevImage() {
    const items = document.querySelectorAll('.gallery-item:not(.hidden)');
    this.currentIndex = (this.currentIndex - 1 + items.length) % items.length;
    this.updateLightbox(items[this.currentIndex]);
  }

  updateLightbox(item) {
    if (!item) return;
    const img = item.querySelector('img');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightboxImage) lightboxImage.src = img.src;
    if (lightboxCaption) lightboxCaption.textContent = img.alt;
  }

  setupLazyLoading() {
    // Native lazy loading met HTML loading="lazy"
    // Fallback voor oudere browsers
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  setupImageOptimization() {
    // Voeg srcset en picture elements toe voor responsieve afbeeldingen
    // Dit gebeurt optimaal in de HTML of via een CDN (Cloudflare Images)
    console.log('Gallery: responsieve afbeeldingen met lazy loading ingesteld');
  }
}

// Initialiseer galerij
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.gallery = new Gallery();
  });
} else {
  window.gallery = new Gallery();
}
