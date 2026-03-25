# Gunda VenkataSai - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS. Features a beautiful dark/light theme toggle, smooth animations, 3D effects, and a professional design.

## 🚀 Features

- **Dark & Light Theme** - Toggle between themes with persistent state
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion for fluid transitions and interactions
- **3D Animations** - Custom CSS 3D transforms for rotating cubes and visual effects
- **Glass Morphism UI** - Liquid glass effect components with backdrop blur
- **Interactive Components** - Hover effects, click animations, and smooth scrolling
- **Resume Modal** - Embed Google Drive resume viewer
- **Real Links** - All project links, GitHub, and LinkedIn are fully functional
- **Performance Optimized** - Built with Vite for lightning-fast build times
- **Fully Typed** - TypeScript for type safety and better DX

## 📁 Project Structure

```
sai-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with theme toggle
│   │   ├── Hero.tsx            # Hero section with intro
│   │   ├── About.tsx           # About section with stats
│   │   ├── Skills.tsx          # Technical skills showcase
│   │   ├── Projects.tsx        # Featured projects with links
│   │   ├── Certifications.tsx  # Certificates grid
│   │   ├── Achievements.tsx    # Achievements timeline
│   │   ├── Education.tsx       # Education background
│   │   ├── Contact.tsx         # Contact information
│   │   ├── Footer.tsx          # Footer section
│   │   ├── ThreeModel.tsx      # 3D rotating animation
│   │   └── ResumeModal.tsx     # Resume viewer modal
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles & animations
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

## 📋 Sections Overview

### Hero Section
- Greeting and main introduction
- CTA buttons for Resume, GitHub, and LinkedIn
- Scroll indicator animation

### About Section
- Professional summary
- Key statistics (LeetCode, Projects, Stacks)
- Hover effects on stat cards

### Skills Section
- Technical skills organized by category
- Languages, Frontend, Backend, Databases, Tools, AI APIs
- Glowing hover effects on skill badges

### Projects Section
- Featured projects with descriptions
- Tech stack tags and feature highlights
- Live demo and GitHub links for each project
- Featured project badge

### Certifications Section
- Clickable certification cards
- Links to Google Drive certificates
- Icon and description for each certification

### Achievements Section
- Recognition timeline
- Hackathon wins, LeetCode milestone, HackerRank badge
- External links to public profiles

### Education Section
- Timeline view of educational background
- B.Tech, Intermediate, SSC with CGPAs
- Connected timeline design

### Contact Section
- Email and Phone with copy-to-clipboard
- CTA buttons for direct contact
- LinkedIn connection option

### Footer
- Copyright information
- Quick links (Privacy, Terms, Contact)
- Made with information

## 🎨 Design System

### Color Scheme
- **Primary:** Electric Teal (#00D9FF)
- **Background:** Pure Black (#000000)
- **Text:** White with opacity variations
- **Accent:** Varies based on theme (Dark/Light)

### Typography
- **Headings:** Instrument Serif (Italic)
- **Body:** Barlow (300-600 weights)
- **Monospace:** System monospace for code

### Liquid Glass Effect
- Backdrop blur with transparency
- Gradient border mask using CSS mask-composite
- Inset shadows for depth
- Two variants: subtle (.liquid-glass) and strong (.liquid-glass-strong)

### Animations
- Smooth page transitions
- Component entrance animations
- Hover scale and glow effects
- Infinite rotating 3D cube with particles
- Scroll-triggered reveals via Intersection Observer

## 🔗 Live Projects

All project links are real and functional:

1. **Medicare** - AI Healthcare Platform
   - Live: https://medical-emergency-tan.vercel.app/
   - GitHub: https://github.com/Gundavenkatasai/Medical_emergency-main-

2. **Smart-Audit AI** - QA System
   - Live: https://hacksmart-zeta.vercel.app/
   - GitHub: https://github.com/Gundavenkatasai/hacksmart

3. **LPU Live** - Real-time Chat
   - Live: https://lpulivetimepass.vercel.app/
   - GitHub: https://github.com/Gundavenkatasai/lpulive

4. **PizzaCraft** - Order Management
   - GitHub: https://github.com/Gundavenkatasai/pizza

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px (with 2-column grid layout and 3D animations)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
Update `vite.config.ts` with base path and push to `gh-pages` branch.

## 📝 Customization

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --foreground: 0 0% 100%;
  --primary: 0 0% 100%;
  /* Update with your colors */
}
```

### Update Content
Modify component files in `src/components/` with your own information.

### Update Fonts
Modify `tailwind.config.js` fontFamily section to use different Google Fonts.

## 📞 Contact

- **Email:** venkatasaigunda82@gmail.com
- **Phone:** +91 9963039884
- **LinkedIn:** https://linkedin.com/in/venkatasai/
- **GitHub:** https://github.com/venkatasai

## 📄 License

© 2026 Gunda VenkataSai. All rights reserved.

---

Built with ♥ using React, Vite & Tailwind CSS
