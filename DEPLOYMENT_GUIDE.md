# 🚀 Deployment Guide - Amol Saxena Portfolio

## Quick Start Checklist

- [ ] EmailJS account configured
- [ ] `.env.local` file created with credentials
- [ ] Local development tested
- [ ] GitHub repository created: `amsxna060.github.io`
- [ ] Code pushed to repository
- [ ] GitHub Pages enabled
- [ ] Site deployed and live

---

## Step 1: Configure EmailJS (Contact Form)

### 1.1 Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Confirm your email address

### 1.2 Add Email Service

1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the authorization steps
5. Copy your **Service ID**

### 1.3 Create Email Template

1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template:

```
Hello {{to_name}},

New message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Interest: {{project_type}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save and copy your **Template ID**

### 1.4 Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. Copy your **Public Key**

### 1.5 Create `.env.local` File

In the project root, create `.env.local`:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

## Step 2: Test Locally

### 2.1 Install Dependencies

```bash
cd /Users/amolsaxena/Downloads/Portfolio/portfolio
npm install
```

### 2.2 Start Development Server

```bash
npm start
```

### 2.3 Test Features

- ✅ All sections load properly
- ✅ Animations work smoothly
- ✅ Contact form sends emails
- ✅ Links work correctly
- ✅ Responsive on mobile

---

## Step 3: Create GitHub Repository

### 3.1 Create Repository

1. Go to [GitHub](https://github.com)
2. Click **New Repository**
3. Name it: `amsxna060.github.io` (**IMPORTANT: Use this exact name**)
4. Make it **Public**
5. **Do NOT** initialize with README
6. Click **Create Repository**

### 3.2 Initialize Git (if not already done)

```bash
cd /Users/amolsaxena/Downloads/Portfolio/portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 3.3 Push to GitHub

```bash
git remote add origin https://github.com/amsxna060/amsxna060.github.io.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy to GitHub Pages

### Method 1: Automatic Deployment (GitHub Actions)

The `.github/workflows/deploy.yml` file is already configured. Just push to `main` branch:

```bash
git add .
git commit -m "Deploy portfolio"
git push
```

GitHub Actions will automatically build and deploy your site.

### Method 2: Manual Deployment

```bash
npm run deploy
```

This command:

1. Builds the production version
2. Deploys to `gh-pages` branch
3. Makes site live at `https://amsxna060.github.io`

---

## Step 5: Configure GitHub Pages

### 5.1 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**

### 5.2 Wait for Deployment

- First deployment takes 2-3 minutes
- Visit: `https://amsxna060.github.io`
- If not live, check **Actions** tab for build status

---

## Step 6: Optional Customizations

### Add Professional Photo

1. Add your photo to `public/assets/profile-photo.jpg`
2. Update Hero component to use the image

### Add Project Screenshots

1. Add screenshots to `public/assets/projects/`
2. Update `src/data/projects.js` with image paths

### Add Resume PDF

1. Add `public/assets/resume.pdf`
2. Link is already configured in the portfolio

### Custom Domain (Optional)

1. Buy domain (e.g., from Namecheap, GoDaddy)
2. Add `CNAME` file to `public/` folder with your domain
3. Configure DNS settings with your registrar:
   - Add CNAME record pointing to `amsxna060.github.io`
4. Update `homepage` in `package.json` to your domain

---

## Troubleshooting

### Contact Form Not Working

**Problem:** Emails not being sent

**Solution:**

- Verify `.env.local` has correct EmailJS credentials
- Check EmailJS dashboard for quota limits (free: 200/month)
- Ensure email service is connected properly
- Check browser console for errors

### Build Errors

**Problem:** `npm run build` fails

**Solution:**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Deployment Not Working

**Problem:** Site not showing at github.io URL

**Solution:**

- Check repository name is exactly: `amsxna060.github.io`
- Verify `homepage` in `package.json` is correct
- Check **Actions** tab for deployment errors
- Ensure GitHub Pages is enabled in Settings
- Wait 5-10 minutes for changes to propagate

### Styling Issues

**Problem:** Styles not loading correctly

**Solution:**

- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check browser console for CSS errors

---

## Update Workflow

### Making Changes

1. **Update content:**

   ```bash
   # Edit files in src/data/
   nano src/data/projects.js  # Update projects
   nano src/data/profile.js   # Update personal info
   ```

2. **Test locally:**

   ```bash
   npm start
   # Check changes at http://localhost:3000
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Update: [describe changes]"
   git push
   # Or manually: npm run deploy
   ```

### Adding New Projects

Edit `src/data/projects.js`:

```javascript
{
  id: 4,
  title: "New Project Title",
  subtitle: "Short description",
  repository: "https://github.com/amsxna060/project-name",
  // ... rest of project details
}
```

---

## Performance Optimization

### Check Lighthouse Score

1. Open site in Chrome
2. Press `F12` for DevTools
3. Go to **Lighthouse** tab
4. Run audit for Performance, SEO, Accessibility

### Optimize Images

- Use WebP format
- Compress with tools like TinyPNG
- Lazy load images

---

## Maintenance

### Regular Updates

- Update dependencies: `npm update`
- Check for security issues: `npm audit`
- Update project data quarterly
- Keep resume current

### Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from analytics.google.com
2. Add to `public/index.html` before `</head>`

---

## Support & Resources

### Documentation

- React: https://react.dev
- Framer Motion: https://www.framer.com/motion/
- EmailJS: https://www.emailjs.com/docs/
- GitHub Pages: https://pages.github.com

### Need Help?

- Check GitHub Issues in your repository
- Review console errors in browser DevTools
- Test in incognito mode to rule out cache issues

---

## Success Criteria

Your portfolio is successfully deployed when:

- ✅ Site loads at `https://amsxna060.github.io`
- ✅ All sections display correctly
- ✅ Animations work smoothly
- ✅ Contact form sends emails
- ✅ Responsive on mobile devices
- ✅ Links open correctly
- ✅ Fast load time (<3 seconds)
- ✅ Lighthouse score >90

---

**Congratulations! Your portfolio is live! 🎉**

Share your portfolio:

- LinkedIn: Add to profile
- Resume: Include the URL
- Email signature: Link to portfolio
- Social media: Share your work

---

## Quick Commands Reference

```bash
# Development
npm start              # Run dev server
npm test               # Run tests
npm run build          # Build for production

# Deployment
npm run deploy         # Deploy to GitHub Pages
git push               # Trigger GitHub Actions deployment

# Maintenance
npm install            # Install dependencies
npm update             # Update packages
npm audit fix          # Fix security issues
```

---

**Next Steps:**

1. Configure EmailJS ✉️
2. Test locally 🧪
3. Deploy to GitHub Pages 🚀
4. Share your portfolio 🌟
