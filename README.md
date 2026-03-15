# SmallDrop Inc — Digital Agency Website

A fully responsive, production-ready digital agency website built with **Vite + React + Tailwind CSS**,  as **SmallDrop Inc**
---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** v7 or higher

### Installation

```bash
# 1. Unzip and navigate into the project
unzip smalldropinc.zip
cd smalldropinc

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview the production build locally |

---

## 🗂 Project Structure

```
smalldropinc/
├── index.html                  # HTML entry point (Google Fonts loaded here)
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme — colors, fonts, animations
├── postcss.config.js           # PostCSS (Tailwind + Autoprefixer)
├── package.json
└── src/
    ├── main.jsx                # React DOM entry point
    ├── App.jsx                 # Root component — hash-based router
    ├── index.css               # Global styles, Tailwind directives, scroll reveal
    └── components/
        ├── Navbar.jsx          # Fixed navbar with Services dropdown
        ├── Cursor.jsx          # Custom cursor (dot + lagged ring)
        ├── Hero.jsx            # Homepage hero section
        ├── Marquee.jsx         # Scrolling services ticker
        ├── Work.jsx            # Homepage portfolio preview grid
        ├── Services.jsx        # Homepage capabilities section
        ├── Clients.jsx         # Clients grid + testimonials
        ├── Contact.jsx         # Homepage CTA section
        ├── Footer.jsx          # Site-wide footer
        ├── AboutUs.jsx         # /about page — full about us page
        ├── Blog.jsx            # /blog page — filterable blog with pagination
        ├── LatestWork.jsx      # /work page — full portfolio with grid/list view
        ├── WebDesign.jsx       # /web-design service page
        └── WebDevelopment.jsx  # /web-development service page
```

---

## 📄 Pages

All routing is handled client-side via URL hash — no external router library required.

| URL Hash | Page | Component |
|---|---|---|
| `#` *(default)* | Homepage | `Hero` + `Marquee` + `Work` + `Services` + `Clients` + `Contact` |
| `#/about` | About Us | `AboutUs.jsx` |
| `#/blog` | Blog | `Blog.jsx` |
| `#/work` | Latest Work | `LatestWork.jsx` |
| `#/web-design` | Web Design Service | `WebDesign.jsx` |
| `#/web-development` | Web Development Service | `WebDevelopment.jsx` |

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `brand-black` | `#ffffff` | Page backgrounds (inverted theme) |
| `brand-white` | `#0a0a0a` | Primary text |
| `brand-accent` | `#1a1aff` | Tailwind accent token |
| `brand-gray` | `#f0f0ee` | Section backgrounds |
| `brand-muted` | `#888888` | Secondary text |
| `#c3d219` | Hardcoded | Primary accent — buttons, highlights, cursor, borders |
| `#0a0a0a` | Hardcoded | Dark sections (Hero, Footer, CTAs) |

> **Note:** The site uses a white background for most content sections with dark (`#0a0a0a`) hero sections and footers for contrast. The cursor, active states, and key accents all use `#c3d219`.

### Typography

| Role | Font | Usage |
|---|---|---|
| Display | **Bebas Neue** | Headlines, large numbers, section titles |
| Body | **DM Sans** | Paragraphs, nav links, descriptions |
| Mono | **Space Mono** | Labels, tags, code, category badges |

Fonts are loaded via Google Fonts in `index.html`.

### Custom CSS Utilities

| Class | Effect |
|---|---|
| `.text-stroke` | Outlined text — `#0a0a0a` stroke, transparent fill |
| `.text-stroke-accent` | Outlined text — `#1a1aff` stroke, transparent fill |
| `.noise-overlay` | Subtle SVG noise texture via `::after` pseudo-element |
| `.fade-up-section` | Base state for scroll-reveal animation (opacity 0, translateY 40px) |
| `.fade-up-section.in-view` | Triggered state — fades in and slides up |

---

## ✨ Features

### Custom Cursor
A two-part cursor consisting of a solid `#c3d219` dot that follows the mouse precisely, and a larger ring that lags behind using `requestAnimationFrame` for a smooth trailing effect. All default cursors are hidden via `* { cursor: none !important }`.

### Scroll Reveal
Sections use an `IntersectionObserver` hook (`useFadeUp`) that adds the `.in-view` class when an element enters the viewport, triggering a CSS fade-up transition. No external animation library needed.

### Hash Router
`App.jsx` reads `window.location.hash` to determine the current page and re-renders on `hashchange` events. Each page change also scrolls to the top.

```js
// Routing logic in App.jsx
function getPage() {
  const hash = window.location.hash
  if (hash === '#/about') return 'about'
  if (hash === '#/blog') return 'blog'
  if (hash === '#/work') return 'work'
  if (hash === '#/web-design') return 'web-design'
  if (hash === '#/web-development') return 'web-development'
  return 'home'
}
```

### Navbar Services Dropdown
The Services nav item opens a dropdown panel that is left-aligned to the button using `left-0` positioning (not centered). It closes on outside click via a `mousedown` event listener attached to `document`.

### Blog Features
- Live search filtering by title, category, and description
- Category tab filter (11 categories)
- Industry dropdown filter
- Paginated grid — 9 posts per page
- Newsletter subscribe form

### Latest Work Features
- 16 portfolio projects with per-card accent colors
- Grid view (masonry-style with large/small cards) and List view toggle
- Category filter + Industry dropdown + Live search
- 12 projects per page with pagination

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Vite](https://vitejs.dev/) | ^4.3.9 | Build tool and dev server |
| [React](https://react.dev/) | ^18.2.0 | UI framework |
| [Tailwind CSS](https://tailwindcss.com/) | ^3.3.2 | Utility-first styling |
| [PostCSS](https://postcss.org/) | ^8.4.24 | CSS processing |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | ^10.4.14 | CSS vendor prefixes |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | ^4.0.0 | React Fast Refresh |

No additional UI libraries, icon packages, or animation frameworks — everything is built with vanilla React, Tailwind, and CSS transitions.

---

## 🖼 Adding Real Images

The project currently uses CSS gradient placeholders for all project thumbnails and team photos. To replace them with real images:

1. Add image files to `src/assets/` or `public/`
2. Replace the `PostThumb` component in `Blog.jsx` and `LatestWork.jsx` with `<img>` tags
3. Update leadership avatar divs in `AboutUs.jsx` with `<img>` tags

---

## 📦 Building for Production

```bash
npm run build
```

Output is generated in the `/dist` folder. The site is fully static and can be deployed to any static host:

- **Vercel** — connect your repo, zero config
- **Netlify** — drag and drop the `/dist` folder
- **GitHub Pages** — push `/dist` contents to `gh-pages` branch
- **AWS S3** — upload `/dist` to an S3 bucket with static hosting enabled

> **Note for SPA routing:** Since this project uses hash-based routing (`#/about`, `#/blog` etc.), no server-side redirect configuration is needed. All routing happens entirely in the browser.

---

## 🔧 Customization

### Changing the Accent Color

The primary accent `#c3d219` is used directly in component files. To change it globally, do a find-and-replace across the `src/` directory:

```bash
# Example: change to a new accent color
grep -rl '#c3d219' src/ | xargs sed -i 's/#c3d219/#YOUR_COLOR/g'
```

Also update the cursor color in `Cursor.jsx` and the scrollbar thumb in `index.css`.

### Adding a New Page

1. Create `src/components/YourPage.jsx`
2. Add a route in `App.jsx`:
   ```js
   if (hash === '#/your-page') return 'your-page'
   // ...
   {page === 'your-page' && <><YourPage /><Footer /></>}
   ```
3. Add a nav link in `Navbar.jsx`

### Adding a New Service Page

Service pages follow the same pattern as `WebDesign.jsx` and `WebDevelopment.jsx`. Add the new route to the `SERVICE_LINKS` array in `Navbar.jsx` with its `href` and `page` key to get automatic active-state highlighting in the Services dropdown.

---


---

## 🙏 Credits

- Built with ❤️ using Vite, React, and Tailwind CSS
- Subhro Chatterjee 2026 
