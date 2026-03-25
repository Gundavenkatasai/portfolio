# 📂 Project File Structure & Contents

## Complete Project Tree

```
sai-protofolio/
│
├── 📄 index.html                 # Main HTML file (Vite template)
├── 📄 package.json               # Dependencies & scripts
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tsconfig.node.json         # TypeScript Node config
├── 📄 vite.config.ts             # Vite build configuration
├── 📄 tailwind.config.js         # Tailwind CSS configuration
├── 📄 postcss.config.js          # PostCSS configuration
│
├── 📄 README.md                  # Main project documentation
├── 📄 SETUP_GUIDE.md             # Setup and customization guide
├── 📄 DEPLOYMENT.md              # Deployment instructions
├── 📄 .gitignore                 # Git ignore rules
├── 📄 .env.local                 # Environment variables (local)
├── 📄 vercel.json                # Vercel deployment config
│
├── 📁 src/                       # Source code
│   │
│   ├── 📄 main.tsx               # React entry point
│   ├── 📄 App.tsx                # Main App component with layout
│   ├── 📄 index.css              # Global styles & Tailwind
│   │
│   └── 📁 components/            # React components (reusable)
│       │
│       ├── 📄 Navbar.tsx         # Navigation bar
│       ├── 📄 Hero.tsx           # Hero / Home section
│       ├── 📄 About.tsx          # About section with stats
│       ├── 📄 Skills.tsx         # Technical skills showcase
│       ├── 📄 Projects.tsx       # Featured projects (4 projects)
│       ├── 📄 Certifications.tsx # Certification cards (4 certs)
│       ├── 📄 Achievements.tsx   # Achievements section
│       ├── 📄 Education.tsx      # Education timeline
│       ├── 📄 Contact.tsx        # Contact information
│       ├── 📄 Footer.tsx         # Footer section
│       ├── 📄 ThreeModel.tsx     # 3D animation (CSS 3D)
│       └── 📄 ResumeModal.tsx    # Resume viewer modal
│
├── 📁 node_modules/             # Dependencies (auto-generated)
├── 📁 dist/                     # Production build (auto-generated)
└── 📁 .git/                     # Git repository (auto-generated)
```

---

## Component Details

### 📄 **src/App.tsx**
Main application wrapper with:
- Theme toggle button (dark/light)
- Resume modal state management
- Layout: Split view (3D on left, content on right)
- Imports all sections

### 📄 **src/components/Navbar.tsx**
Fixed navigation bar with:
- Logo (VS)
- Navigation links (Home, About, Skills, Projects, Contact)
- Theme toggle
- Resume button
- GitHub & LinkedIn links
- Mobile hamburger menu

### 📄 **src/components/Hero.tsx**
Hero section featuring:
- Welcome badge
- Main heading with accent color
- Tagline/subtitle
- CTA buttons (Resume, GitHub, LinkedIn)
- Quick contact links
- Scroll indicator

### 📄 **src/components/About.tsx**
About section with:
- Section badge
- Professional summary
- 3 stat cards (100+ LeetCode, 4+ Projects, 5+ Stacks)
- Hover effects

### 📄 **src/components/Skills.tsx**
Technical skills organized in 6 categories:
1. Languages (C, C++, Python, Java, JavaScript, SQL)
2. Frontend (React, HTML5, CSS3, Tailwind, Framer Motion)
3. Backend (Node.js, Express.js, REST APIs, JWT)
4. Databases (MongoDB, MySQL, Firebase)
5. Tools & Platforms (Git, GitHub, Docker, Vercel, VS Code)
6. AI & APIs (Groq AI, Deepgram, OpenAI, REST Integration)

### 📄 **src/components/Projects.tsx**
Featured projects with:
- Medicare (Featured project badge)
- Smart-Audit AI
- LPU Live
- PizzaCraft
- Each project shows:
  - Title & description
  - Features list
  - Technology stack
  - Live demo button (if available)
  - GitHub link

### 📄 **src/components/Certifications.tsx**
4 clickable certification cards:
1. Oracle Cloud Infrastructure - Generative AI
2. C++ Programming - OOPs & Data Structures
3. SQL & MongoDB - Advanced
4. NPTEL - Advanced Computer Networks
- All link to Google Drive certificates

### 📄 **src/components/Achievements.tsx**
3 achievement cards:
- HackSmart Hackathon (Battery Smart × AWS)
- 100+ LeetCode Problems with link
- HackerRank Python Badge

### 📄 **src/components/Education.tsx**
Timeline view of education:
- B.Tech CSE (LPU, CGPA: 7.06)
- Intermediate (94.8%)
- SSC (GPA: 10.0)
- Timeline design with dots and lines

### 📄 **src/components/Contact.tsx**
Contact section with:
- Email (venkatasaigunda82@gmail.com)
- Phone (+91 9963039884)
- Copy-to-clipboard buttons
- CTA buttons for email & LinkedIn

### 📄 **src/components/Footer.tsx**
Footer with:
- Copyright notice
- Links (Privacy, Terms, Contact)
- "Made with ♥ & React" message

### 📄 **src/components/ThreeModel.tsx**
3D animation (left side desktop only):
- CSS 3D rotating cube
- 12 rotating particles in a circle
- Center glowing point
- Pulsing background glow
- Auto-rotates indefinitely

### 📄 **src/components/ResumeModal.tsx**
Modal popup with:
- Embedded Google Drive PDF viewer
- Download button
- Close button
- Keyboard escape to close

### 📄 **src/index.css**
Global styles including:
- Tailwind directives (@tailwind base, components, utilities)
- CSS variables for colors & fonts
- Liquid glass effect classes (.liquid-glass, .liquid-glass-strong)
- Custom utility classes (.section-badge, .glass-card, etc.)
- Scrollbar styling
- Selection styling
- Loading animations
- System transitions

---

## Configuration Files

### 📄 **package.json**
```json
{
  "name": "sai-portfolio",
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.263.1",
    "react-intersection-observer": "^9.5.3"
  }
}
```

### 📄 **vite.config.ts**
- Port: 3000
- Auto-open browser
- React plugin enabled

### 📄 **tailwind.config.js**
- Dark mode: "class" strategy
- Extended fonts: heading, body, inter
- Extended colors: background, foreground, primary, accent
- Border radius: full (9999px)
- Custom animations

### 📄 **tsconfig.json**
- Target: ES2020
- Module: ESNext
- React JSX support
- Strict mode enabled

---

## Key Files to Customize

### To update content:
1. **src/components/Hero.tsx** - Main intro text
2. **src/components/About.tsx** - About section
3. **src/components/Projects.tsx** - Projects & links
4. **src/components/Skills.tsx** - Skills list
5. **src/components/Contact.tsx** - Contact info

### To change style:
1. **src/index.css** - Global CSS & variables
2. **tailwind.config.js** - Tailwind customization
3. Component JSX - Inline class names

### To modify structure:
1. **src/App.tsx** - Add/remove sections
2. **src/components/Navbar.tsx** - Navigation menu
3. Create new component in **src/components/**

---

## File Sizes

| File | Size |
|------|------|
| React library | ~40KB |
| Framer Motion | ~35KB |
| Tailwind CSS | ~25KB |
| Lucide Icons | ~15KB |
| Other dependencies | ~35KB |
| **Total** | **~150KB gzipped** |

---

## Dependencies Summary

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | React DOM rendering |
| framer-motion | ^10.16.4 | Animations |
| lucide-react | ^0.263.1 | Icons |
| react-intersection-observer | ^9.5.3 | Scroll effects |

### Dev Dependencies
| Package | Purpose |
|---------|---------|
| vite | Build tool |
| typescript | Type checking |
| tailwindcss | Styling |
| postcss | CSS processing |
| autoprefixer | CSS vendor prefixes |
| @vitejs/plugin-react | React support |

---

## How Everything Connects

```
index.html
    ↓
src/main.tsx (entry point)
    ↓
src/App.tsx (main component)
    ├── Theme context & state
    ├── Layout wrapper
    └── Import all sections:
        ├── Navbar
        ├── Hero
        ├── About
        ├── Skills
        ├── Projects
        ├── Certifications
        ├── Achievements
        ├── Education
        ├── Contact
        ├── Footer
        ├── ThreeModel (3D)
        └── ResumeModal

Assets imported:
├── Google Fonts (Instrument Serif, Barlow)
├── Lucide Icons
├── Framer Motion animations
└── Tailwind CSS
```

---

## Build & Deploy Flow

```
Source Code (src/)
    ↓
TypeScript Compiler (tsc)
    ↓
Vite Build Process
    ↓
Minified & Optimized Code
    ↓
dist/ folder (production-ready)
    ↓
Deploy to Vercel/Netlify/GitHub Pages
    ↓
Live Portfolio! 🎉
```

---

## Quick Reference

**Start Dev Server:**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

**Format Code:**
```bash
npm install -D prettier
npx prettier --write src/
```

---

## Notes

- All components use TypeScript for type safety
- Components use Framer Motion for animations
- Tailwind CSS for styling
- No external UI frameworks (just custom components)
- No state management library (using React hooks)
- No API calls (static content)
- Fully responsive (mobile-first design)
- Dark & light theme support
- SEO optimized with proper HTML semantics

---

**Everything is organized, documented, and ready for deployment!** 🚀
