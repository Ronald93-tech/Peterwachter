/**
 * Peter Wachter Website - Interactieve Tijdlijn
 */

class Timeline {
  constructor() {
    this.init();
  }

  init() {
    this.setupTimelineInteraction();
    this.setupResponsiveTimeline();
  }

  setupTimelineInteraction() {
    const events = document.querySelectorAll('.timeline-event');

    events.forEach((event, index) => {
      // Animatie bij scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      });

      event.style.opacity = '0';
      event.style.transform = 'translateY(20px)';
      event.style.transition = `opacity 600ms ease-out ${index * 100}ms, transform 600ms ease-out ${index * 100}ms`;
      observer.observe(event);
    });
  }

  setupResponsiveTimeline() {
    // Op mobile wordt de timeline verticaal weergegeven
    // Dit is al in CSS responsive.css geregeld
    if (window.innerWidth < 768) {
      console.log('Timeline: responsive layout geactiveerd voor mobile');
    }
  }
}

// Initialiseer timeline
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.timeline = new Timeline();
  });
} else {
  window.timeline = new Timeline();
}
