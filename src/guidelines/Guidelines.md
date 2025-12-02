# Project Guidelines: The Red Noodle

## 1. Project Overview
"The Red Noodle" is an Asian Pop/Fast Casual restaurant concept blending street food culture with modern pop art.
**Key Aesthetics:**
- **High Energy:** Bold, vibrant, and dynamic.
- **Visual Style:** Primary Red (#D32F2F) dominant, geometric sans-serif typography, pill-shaped buttons.
- **Content Strategy:** "Solid Punch Hero", "Split Narrative" with rotating badges, "Social Strip".
- **Functionality:** No e-commerce (Menu Only), reservations link to a form/section, focus on visual engagement.

## 2. Tech Stack
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS v4.0
- **Icons:** Lucide React
- **Animation:** Motion (fka Framer Motion)
- **Routing:** React Router DOM
- **Layout Components:** React Responsive Masonry (for Gallery)

## 3. Design System & Tokens

### Colors
Primary colors are hardcoded in the current implementation but follow this scheme:
- **Primary Red:** `#D32F2F` (Used for backgrounds, buttons, accents)
- **Surface/Cream:** `#FFF8E1` (Used for backgrounds, contrasting sections)
- **Dark Red:** `#B71C1C` (Hover states)
- **Black:** `#000000` (Text, some backgrounds)
- **White:** `#FFFFFF` (Text, backgrounds)

### Typography
- **Font Family:** Default Sans (interchangeable with geometric sans-serifs).
- **Headings:** `font-black`, `uppercase`, `tracking-tighter`, `leading-none`.
- **Body:** `font-medium` or `font-normal`, `leading-relaxed`.

### UI Patterns
- **Buttons:** Full rounded (`rounded-full`), often with bold uppercase text.
- **Cards:** Rounded corners (`rounded-2xl` or `rounded-3xl`), clear hierarchy.
- **Badges:** Rotating circular badges (`RotatingBadge` component).
- **Layouts:** Split screen (50/50), Masonry grids, Centered Hero sections.

## 4. Project Structure
```
/
├── components/
│   ├── figma/          # Figma-specific imports (ImageWithFallback)
│   ├── home/           # Home page specific components (Hero, Offerings, Narrative, etc.)
│   ├── layout/         # Global layout components (Header, Footer)
│   └── ui/             # Reusable UI components (Button, Input, Select, RotatingBadge, etc.)
├── data/
│   └── content.ts      # Centralized content source (Single Source of Truth)
├── pages/
│   ├── About.tsx       # "Our Story" page
│   ├── Gallery.tsx     # Masonry image gallery
│   ├── Home.tsx        # Landing page
│   └── Menu.tsx        # Full menu listing
├── styles/
│   └── globals.css     # Global Tailwind imports and base styles
├── App.tsx             # Main routing configuration
└── main.tsx            # Entry point
```

## 5. Coding Standards

### Data Driven
- All text content, links, and image URLs should be stored in `/data/content.ts`.
- Components should import `siteContent` from `@/data/content` (or relative path) to render data.
- Hardcoding text in components should be avoided unless it's structural (e.g., labels in a form that won't change).

### Styling
- Use **Tailwind CSS** utility classes for everything.
- Arbitrary values (e.g., `bg-[#D32F2F]`) are currently used for specific brand colors.
- Avoid creating new CSS files; use `globals.css` only for global resets or `@theme` configuration if strictly necessary.
- **Responsive Design:** Mobile-first approach. Use `md:`, `lg:` prefixes for desktop layouts.

### Images
- Use `unsplash_tool` to find relevant high-quality images.
- For local assets (if any), use relative imports.
- **Gallery:** Use `react-responsive-masonry` for image grids.
- **Hero:** Support multiple images (e.g., corner placements) as defined in the content structure.

### Routing
- Use `react-router-dom` for navigation.
- Define routes in `App.tsx`.
- Use `<Link to="...">` for internal navigation to prevent full page reloads.
- Implement `ScrollToTop` behavior on route change (already implemented in `App.tsx`).

## 6. Extension Guidelines
- **Adding Pages:**
    1. Create new component in `/pages`.
    2. Add route in `/App.tsx`.
    3. Add navigation entry in `/data/content.ts`.
- **Adding Components:**
    - If reusable: Place in `/components/ui`.
    - If page-specific: Place in `/components/{page_name}`.
- **Modifying Content:**
    - Edit `/data/content.ts`. The frontend will automatically reflect changes.
