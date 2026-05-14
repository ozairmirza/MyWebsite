// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: 'Welcome to My Website',
        date: 'May 14, 2026',
        excerpt: 'An introduction to my new personal website and what you can expect to find here.',
        category: 'Personal'
    },
    {
        id: 2,
        title: 'My First Blog Post',
        date: 'May 10, 2026',
        excerpt: 'Stay tuned for my first blog post where I will share my thoughts on web development.',
        category: 'Technology'
    },
    {
        id: 3,
        title: 'Board Games I Love',
        date: 'May 5, 2026',
        excerpt: 'A deep dive into some of my favorite board games and why they are worth your time.',
        category: 'Collections'
    }
];

// Collections data
const collections = [
    {
        id: 1,
        title: 'Dune',
        category: 'books',
        description: 'Epic science fiction classic',
        emoji: '📚',
        rating: 5
    },
    {
        id: 2,
        title: '1984',
        category: 'books',
        description: 'Dystopian masterpiece',
        emoji: '📖',
        rating: 5
    },
    {
        id: 3,
        title: 'The Hobbit',
        category: 'books',
        description: 'Fantasy adventure',
        emoji: '📕',
        rating: 4
    },
    {
        id: 4,
        title: 'Catan',
        category: 'board-games',
        description: 'Strategy and settlement game',
        emoji: '🎲',
        rating: 5
    },
    {
        id: 5,
        title: 'Ticket to Ride',
        category: 'board-games',
        description: 'Railway adventure game',
        emoji: '🚂',
        rating: 5
    },
    {
        id: 6,
        title: 'Pandemic',
        category: 'board-games',
        description: 'Cooperative strategy game',
        emoji: '⚕️',
        rating: 4
    },
    {
        id: 7,
        title: 'Vintage Camera',
        category: 'other',
        description: 'Canon AE-1 from 1976',
        emoji: '📷',
        rating: 4
    },
    {
        id: 8,
        title: 'Vinyl Records',
        category: 'other',
        description: 'Classic jazz collection',
        emoji: '💿',
        rating: 5
    }
];

// Render blog posts
function renderBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;

    container.innerHTML = blogPosts.map(post => `
        <article class="blog-post">
            <div class="blog-post-date">${post.date}</div>
            <h3 class="blog-post-title">${post.title}</h3>
            <p class="blog-post-excerpt">${post.excerpt}</p>
            <a href="#" class="post-link">Read Full Article →</a>
        </article>
    `).join('');
}

// Render collections
function renderCollections(filter = 'all') {
    const container = document.getElementById('collections-container');
    if (!container) return;

    let filtered = collections;
    if (filter !== 'all') {
        filtered = collections.filter(item => item.category === filter);
    }

    container.innerHTML = filtered.map(item => `
        <div class="collection-item">
            <div class="collection-image">${item.emoji}</div>
            <div class="collection-content">
                <div class="collection-category">${item.category.replace('-', ' ').toUpperCase()}</div>
                <h3 class="collection-title">${item.title}</h3>
                <p class="collection-description">${item.description}</p>
                <div class="collection-rating">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div>
            </div>
        </div>
    `).join('');
}

// Filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCollections(button.dataset.filter);
        });
    });
}

// Newsletter form
function setupNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            form.reset();
        });
    }
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    renderCollections();
    setupFilters();
    setupNewsletter();
    setupSmoothScroll();
});