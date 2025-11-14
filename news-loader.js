// Dynamic News Loader for Dis_Ident Website
// This script loads news from localStorage and displays them on the website

(function() {
    'use strict';

    // Load news from localStorage
    function loadNews() {
        const stored = localStorage.getItem('disIdent_news');
        if (stored) {
            return JSON.parse(stored);
        }
        // Default news if nothing in storage
        return [
            {
                id: 1,
                title: 'Neue Workshop-Reihe startet an Schulen',
                date: 'November 2025',
                excerpt: 'Ab diesem Monat bieten wir unsere interaktiven Workshops an weiteren Schulen in ganz Deutschland an. Jetzt informieren und anmelden!',
                category: 'Workshop',
                highlight: true
            },
            {
                id: 2,
                title: 'Forschungsergebnisse veröffentlicht',
                date: 'Oktober 2025',
                excerpt: 'Unsere erste Studie zu antisemitischen Narrativen in Social Media ist erschienen.',
                category: 'Forschung',
                highlight: false
            },
            {
                id: 3,
                title: 'Fortbildung für Lehrkräfte',
                date: 'September 2025',
                excerpt: 'Erfolgreicher Start unserer Fortbildungsreihe mit über 50 Teilnehmenden.',
                category: 'Event',
                highlight: false
            }
        ];
    }

    // Render news for original design
    function renderNewsOriginal(newsItems) {
        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;

        newsGrid.innerHTML = newsItems.map((item, index) => {
            if (index === 0 && item.highlight) {
                // Large featured card
                return `
                    <article class="news-card large">
                        <div class="news-image"></div>
                        <div class="news-content">
                            <span class="news-date">${item.date}</span>
                            <h3>${item.title}</h3>
                            <p>${item.excerpt}</p>
                            <a href="#" class="btn btn-text">Weiterlesen →</a>
                        </div>
                    </article>
                `;
            } else {
                // Regular small card
                return `
                    <article class="news-card">
                        <span class="news-date">${item.date}</span>
                        <h3>${item.title}</h3>
                        <p>${item.excerpt}</p>
                        <a href="#" class="btn btn-text">Mehr →</a>
                    </article>
                `;
            }
        }).join('');
    }

    // Render news for alternative design
    function renderNewsAlternative(newsItems) {
        const newsTimeline = document.querySelector('.news-timeline');
        if (!newsTimeline) return;

        newsTimeline.innerHTML = newsItems.map(item => `
            <div class="news-item-alt">
                <div class="news-date-alt">${item.date}</div>
                <h3>${item.title}</h3>
                <p>${item.excerpt}</p>
                <a href="#" class="link-arrow">Weiterlesen →</a>
            </div>
        `).join('');
    }

    // Initialize news rendering
    function initNews() {
        const news = loadNews();
        
        // Check which design we're on
        if (document.querySelector('.news-grid')) {
            renderNewsOriginal(news);
        } else if (document.querySelector('.news-timeline')) {
            renderNewsAlternative(news);
        }
    }

    // Listen for updates from admin panel
    window.addEventListener('newsUpdated', function() {
        initNews();
    });

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNews);
    } else {
        initNews();
    }

})();

