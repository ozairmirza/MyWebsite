# My Personal Website

A modern, responsive personal website showcasing my personality, blog, and collections.

## Features

### 📄 Pages
- **Home** (`index.html`) - Landing page with hero section, about me, and featured articles
- **Blog** (`blog.html`) - Blog section with newsletter signup and category filters
- **Collections** (`collections.html`) - Showcase of books, board games, and other collections

### 🎨 Design
- Modern gradient color scheme (Indigo & Pink)
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Card-based layouts
- Dark mode friendly

### ⚙️ Functionality
- Smooth scroll navigation
- Blog post filtering by category
- Collection filtering (Books, Board Games, Other)
- Newsletter subscription form
- Responsive navigation bar

## File Structure

```
MyWebsite/
├── index.html              # Home page
├── blog.html              # Blog page
├── collections.html       # Collections page
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
├── data/
│   ├── blog-posts.json    # Blog posts data
│   └── collections.json   # Collections data
└── README.md              # This file
```

## Getting Started

### Local Development
1. Clone the repository
   ```bash
   git clone https://github.com/ozairmirza/MyWebsite.git
   cd MyWebsite
   ```

2. Open in your browser
   ```bash
   # Simply open index.html in your favorite browser
   open index.html
   ```

### Deployment to GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select `main` branch as source
3. Your site will be available at `https://ozairmirza.github.io/MyWebsite`

## Customization

### Update Personal Information

#### Home Page (`index.html`)
- Update the hero section with your name and tagline
- Modify the about section with your bio
- Change the stats to reflect your actual numbers

#### Blog Posts
Edit `data/blog-posts.json` to add your blog posts:
```json
{
  "id": 1,
  "title": "Your Blog Title",
  "date": "2026-05-14",
  "excerpt": "Brief description of your post",
  "category": "Technology",
  "content": ""
}
```

#### Collections
Edit `data/collections.json` to add your items:
```json
{
  "category": "books",
  "items": [
    {
      "title": "Book Title",
      "author": "Author Name",
      "year": 2026,
      "description": "Description",
      "rating": 5
    }
  ]
}
```

### Update Social Links
In the footer sections, update the social media links:
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://twitter.com/yourhandle" target="_blank">Twitter</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

### Customize Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;      /* Main color */
    --secondary: #ec4899;    /* Accent color */
    --dark: #1f2937;         /* Dark text */
    --light: #f3f4f6;        /* Light backgrounds */
    --gray: #9ca3af;         /* Gray text */
}
```

## Color Scheme

- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Background**: White (#ffffff)
- **Text**: Dark Gray (#1f2937)
- **Accent**: Light Gray (#f3f4f6)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Lightweight CSS (no frameworks)
- Vanilla JavaScript (no dependencies)
- Optimized images and assets
- Fast load times

## Future Enhancements

- [ ] Individual blog post pages
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Contact form
- [ ] Photo gallery
- [ ] Testimonials section
- [ ] Project showcase
- [ ] Social media integration

## License

MIT License - Feel free to use this as a template for your own personal website!

## Support

For issues or suggestions, please open an issue on GitHub.

---

Made with ❤️ by Ozair Mirza
