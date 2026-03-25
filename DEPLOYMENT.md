# 🚀 Deployment Instructions

## Quick Start to Deploy

Your portfolio is production-ready! Choose your preferred platform:

---

## Option 1: **Vercel** (Recommended - Easiest)

Vercel is built by the creators of Next.js and works perfectly with Vite.

### Prerequisites
- GitHub account (optional but recommended)
- Vercel account (free)

### Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live

3. **Auto-Deployment:**
   - Every push to `main` automatically deploys a new version
   - Get a unique URL like: `your-portfolio.vercel.app`

### Custom Domain
- Go to Vercel Dashboard → Project → Settings → Domains
- Add your custom domain
- Follow DNS instructions

---

## Option 2: **Netlify** (Also Great)

### Steps

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to https://netlify.com
   - Sign up/Login
   - Drag & drop the `dist` folder to Netlify
   - Done!

3. **From Git (Recommended):**
   - Connect your GitHub repository
   - Choose `npm run build` as build command
   - Output directory: `dist`
   - Auto-deploys on every push

### Custom Domain
- Netlify Dashboard → Domain Settings → Add custom domain

---

## Option 3: **GitHub Pages** (Free & Simple)

### Steps

1. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/portfolio/',  // If deploying to sub-path
     // ... rest of config
   })
   ```

2. **Create GitHub Actions workflow:**
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Push to main, wait for action to complete
   - Your site is live at: `https://yourusername.github.io/portfolio/`

---

## Option 4: **Traditional Hosting** (Bluehost, GoDaddy, etc.)

1. **Build:**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** via FTP to your hosting provider

3. **That's it!** Your site is live

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All links work (projects, GitHub, LinkedIn, etc.)
- [ ] Dark/Light theme toggle works
- [ ] Resume modal opens
- [ ] 3D animation displays (on desktop)
- [ ] Forms accept input
- [ ] Mobile responsive
- [ ] All fonts load correctly
- [ ] No console errors

---

## Performance Optimization

### Already Optimized:
- ✅ Minified JS/CSS
- ✅ Tree-shaking with Vite
- ✅ Component lazy loading
- ✅ Intersection Observer for scroll effects
- ✅ CSS animations (GPU accelerated)

### Optional Enhancements:
- Add service worker for offline support
- Compress images further
- Add sitemap.xml for SEO
- Add robots.txt

---

## Environment Variables for Production

Create `.env.production`:
```env
VITE_API_ENDPOINT=https://api.example.com
```

Access in code:
```typescript
const endpoint = import.meta.env.VITE_API_ENDPOINT
```

---

## Custom Domain Setup

### Vercel Custom Domain:
1. Vercel Dashboard → Settings → Domains
2. Add domain
3. Update DNS with Vercel nameservers

### Netlify Custom Domain:
1. Buy domain (or use existing)
2. Netlify → Domain settings
3. Follow DNS instructions

### GitHub Pages Custom Domain:
1. Create CNAME file in root with your domain
2. Update DNS to point to GitHub Pages
3. Enable HTTPS in settings

---

## SSL/HTTPS

- **Vercel:** Automatic (free)
- **Netlify:** Automatic (free)
- **GitHub Pages:** Automatic (free)
- **Traditional Hosting:** Usually included or ~$10/year

---

## Domain Recommendations

- **Namecheap:** https://namecheap.com (cheap, reliable)
- **Google Domains:** https://domains.google (simple, integrated)
- **Route 53 (AWS):** https://aws.amazon.com (professional)

---

## Monitoring & Analytics

### Add Google Analytics:
1. Create account at https://analytics.google.com
2. Get your Measurement ID
3. Add to HTML:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXX');
   </script>
   ```

---

## Troubleshooting

### Site shows blank page:
- Check browser console for errors (F12)
- Verify build was successful: `npm run build`
- Clear cache: Ctrl+Shift+Delete (or Cmd+Shift+Del)

### Styles not loading:
- Check `base` path in vite.config.ts
- Verify Tailwind purge includes correct paths
- Clear `.next` or `dist` folder

### Assets not found (404):
- Check relative paths in imports
- Verify file names match case-sensitivity
- Use absolute paths from project root

### Links not working:
- Verify href values are correct
- Test links locally first
- Check for trailing slashes

---

## Continuous Deployment

### GitHub Actions (Free)
Automatically deploy on every push:
- Create workflow file
- Push to main
- GitHub automatically runs build & deploys

### Vercel (Free)
- Connect GitHub
- Auto-deploy on push
- Preview deployments for PRs

---

## Monthly Costs

- **Vercel:** FREE (with Pro upgrade option)
- **Netlify:** FREE (with Pro upgrade option)
- **GitHub Pages:** FREE
- **Domain:** ~$10-15/year
- **Total:** ~$10-15/year minimum

---

## Backup Your Code

```bash
# Ensure code is pushed to GitHub
git push origin main

# Or backup locally
cp -r . ../portfolio-backup/
```

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev

---

## Final Notes

### Your portfolio is now:
- ✅ Production-ready
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Fast & performant
- ✅ Easy to maintain
- ✅ Simple to deploy

### Next Steps:
1. Choose deployment platform
2. Follow setup instructions
3. Deploy (5-10 minutes)
4. Share your portfolio link!

---

**Happy deploying! 🎉**

`Your portfolio is live and ready to impress!`
