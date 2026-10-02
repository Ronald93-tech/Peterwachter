/**
 * Peter Wachter Website - Zoekfunctionaliteit
 */

class Search {
  constructor() {
    this.index = [];
    this.results = [];
    this.init();
  }

  init() {
    this.buildSearchIndex();
    this.setupSearchUI();
  }

  buildSearchIndex() {
    // Bouw index van alle inhoud (chapters, meta, enz)
    if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.chapters) {
      this.index = SITE_CONFIG.chapters.map(chapter => ({
        id: chapter.id,
        title: chapter.title,
        subtitle: chapter.subtitle,
        content: chapter.content,
        keywords: [chapter.title, chapter.subtitle, chapter.content].join(' ').toLowerCase()
      }));
    }
  }

  setupSearchUI() {
    // Plaats searchveld in navbar (kan later worden uitgebreid)
    // Placeholder voor zoekfunctionaliteit
    console.log('Search: zoekfunctionaliteit beschikbaar');
  }

  search(query) {
    if (!query || query.length < 2) {
      return [];
    }

    const q = query.toLowerCase();
    return this.index.filter(item =>
      item.keywords.includes(q)
    );
  }

  highlightResults(results) {
    // Highlight search results in the page
    results.forEach(result => {
      console.log(`Search result: ${result.title}`);
    });
  }
}

// Initialiseer search
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.search = new Search();
  });
} else {
  window.search = new Search();
}
