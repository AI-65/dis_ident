// Admin Panel JavaScript for Dis_Ident CMS

class NewsManager {
    constructor() {
        this.news = this.loadNews();
        this.currentEditId = null;
        this.init();
    }

    init() {
        this.renderNews();
        this.updateStats();
        this.attachEventListeners();
    }

    // Load news from localStorage
    loadNews() {
        const stored = localStorage.getItem('disIdent_news');
        if (stored) {
            return JSON.parse(stored);
        }
        // Default news articles
        return [
            {
                id: Date.now() + 1,
                title: 'Neue Workshop-Reihe startet an Schulen',
                date: 'November 2025',
                excerpt: 'Ab diesem Monat bieten wir unsere interaktiven Workshops an weiteren Schulen in ganz Deutschland an. Jetzt informieren und anmelden!',
                content: '',
                category: 'Workshop',
                highlight: true,
                createdAt: new Date().toISOString()
            },
            {
                id: Date.now() + 2,
                title: 'Forschungsergebnisse veröffentlicht',
                date: 'Oktober 2025',
                excerpt: 'Unsere erste Studie zu antisemitischen Narrativen in Social Media ist erschienen.',
                content: '',
                category: 'Forschung',
                highlight: false,
                createdAt: new Date().toISOString()
            },
            {
                id: Date.now() + 3,
                title: 'Fortbildung für Lehrkräfte',
                date: 'September 2025',
                excerpt: 'Erfolgreicher Start unserer Fortbildungsreihe mit über 50 Teilnehmenden.',
                content: '',
                category: 'Event',
                highlight: false,
                createdAt: new Date().toISOString()
            }
        ];
    }

    // Save news to localStorage
    saveNews() {
        localStorage.setItem('disIdent_news', JSON.stringify(this.news));
        // Trigger event for website to reload news
        window.dispatchEvent(new Event('newsUpdated'));
    }

    // Render news list
    renderNews() {
        const newsList = document.getElementById('newsList');
        const emptyState = document.getElementById('emptyState');
        
        if (this.news.length === 0) {
            newsList.style.display = 'none';
            emptyState.classList.add('show');
            return;
        }

        newsList.style.display = 'flex';
        emptyState.classList.remove('show');

        // Sort by date (newest first)
        const sortedNews = [...this.news].sort((a, b) => 
            new Date(b.createdAt) - new Date(a.createdAt)
        );

        newsList.innerHTML = sortedNews.map(item => `
            <div class="news-item ${item.highlight ? 'highlight' : ''}" data-id="${item.id}">
                <div class="news-info">
                    <div class="news-meta">
                        <span class="news-date">${item.date}</span>
                        <span class="news-category">${item.category}</span>
                        ${item.highlight ? '<span class="highlight-badge">⭐ Highlight</span>' : ''}
                    </div>
                    <div class="news-title">${item.title}</div>
                    <div class="news-excerpt">${item.excerpt}</div>
                </div>
                <div class="news-actions">
                    <button class="icon-btn edit" onclick="newsManager.editNews(${item.id})" title="Bearbeiten">
                        ✏️
                    </button>
                    <button class="icon-btn delete" onclick="newsManager.deleteNews(${item.id})" title="Löschen">
                        🗑️
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Update statistics
    updateStats() {
        const totalArticles = document.getElementById('totalArticles');
        const thisMonth = document.getElementById('thisMonth');
        const lastEdited = document.getElementById('lastEdited');

        totalArticles.textContent = this.news.length;

        // Count articles from current month
        const currentMonth = new Date().getMonth();
        const monthCount = this.news.filter(item => {
            const itemDate = new Date(item.createdAt);
            return itemDate.getMonth() === currentMonth;
        }).length;
        thisMonth.textContent = monthCount;

        // Last edited
        if (this.news.length > 0) {
            const latest = this.news.reduce((a, b) => 
                new Date(a.createdAt) > new Date(b.createdAt) ? a : b
            );
            const date = new Date(latest.createdAt);
            lastEdited.textContent = date.toLocaleDateString('de-DE', { 
                day: '2-digit', 
                month: 'short' 
            });
        } else {
            lastEdited.textContent = '-';
        }
    }

    // Attach event listeners
    attachEventListeners() {
        // Add News Button
        document.getElementById('addNewsBtn').addEventListener('click', () => {
            this.openModal();
        });

        // Close Modal Buttons
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal on outside click
        document.getElementById('newsModal').addEventListener('click', (e) => {
            if (e.target.id === 'newsModal') {
                this.closeModal();
            }
        });

        // Form Submit
        document.getElementById('newsForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveNewsArticle();
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchNews(e.target.value);
        });

        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.dataset.section) {
                    e.preventDefault();
                    const section = item.dataset.section;
                    if (section !== 'news') {
                        alert('Diese Funktion kommt bald!');
                    }
                }
            });
        });
    }

    // Open modal for add/edit
    openModal(newsItem = null) {
        const modal = document.getElementById('newsModal');
        const modalTitle = document.getElementById('modalTitle');
        const form = document.getElementById('newsForm');

        if (newsItem) {
            modalTitle.textContent = 'Artikel bearbeiten';
            document.getElementById('newsId').value = newsItem.id;
            document.getElementById('newsTitle').value = newsItem.title;
            document.getElementById('newsDate').value = newsItem.date;
            document.getElementById('newsExcerpt').value = newsItem.excerpt;
            document.getElementById('newsContent').value = newsItem.content || '';
            document.getElementById('newsCategory').value = newsItem.category;
            document.getElementById('newsHighlight').checked = newsItem.highlight;
            this.currentEditId = newsItem.id;
        } else {
            modalTitle.textContent = 'Neuer Artikel';
            form.reset();
            this.currentEditId = null;
        }

        modal.classList.add('show');
    }

    // Close modal
    closeModal() {
        const modal = document.getElementById('newsModal');
        modal.classList.remove('show');
        document.getElementById('newsForm').reset();
        this.currentEditId = null;
    }

    // Save news article
    saveNewsArticle() {
        const title = document.getElementById('newsTitle').value;
        const date = document.getElementById('newsDate').value;
        const excerpt = document.getElementById('newsExcerpt').value;
        const content = document.getElementById('newsContent').value;
        const category = document.getElementById('newsCategory').value;
        const highlight = document.getElementById('newsHighlight').checked;

        if (this.currentEditId) {
            // Update existing
            const index = this.news.findIndex(item => item.id === this.currentEditId);
            if (index !== -1) {
                this.news[index] = {
                    ...this.news[index],
                    title,
                    date,
                    excerpt,
                    content,
                    category,
                    highlight,
                    updatedAt: new Date().toISOString()
                };
            }
        } else {
            // Create new
            const newArticle = {
                id: Date.now(),
                title,
                date,
                excerpt,
                content,
                category,
                highlight,
                createdAt: new Date().toISOString()
            };
            this.news.unshift(newArticle);
        }

        this.saveNews();
        this.renderNews();
        this.updateStats();
        this.closeModal();

        // Show success message
        this.showNotification('Artikel erfolgreich gespeichert!', 'success');
    }

    // Edit news
    editNews(id) {
        const newsItem = this.news.find(item => item.id === id);
        if (newsItem) {
            this.openModal(newsItem);
        }
    }

    // Delete news
    deleteNews(id) {
        if (confirm('Möchten Sie diesen Artikel wirklich löschen?')) {
            this.news = this.news.filter(item => item.id !== id);
            this.saveNews();
            this.renderNews();
            this.updateStats();
            this.showNotification('Artikel gelöscht', 'success');
        }
    }

    // Search news
    searchNews(query) {
        const items = document.querySelectorAll('.news-item');
        const lowerQuery = query.toLowerCase();

        items.forEach(item => {
            const title = item.querySelector('.news-title').textContent.toLowerCase();
            const excerpt = item.querySelector('.news-excerpt').textContent.toLowerCase();
            
            if (title.includes(lowerQuery) || excerpt.includes(lowerQuery)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Show notification
    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize
const newsManager = new NewsManager();

// Make it globally accessible
window.newsManager = newsManager;

