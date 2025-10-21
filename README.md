# Amol Saxena - Portfolio Website

A modern, professional portfolio website showcasing expertise in Python backend development, AI integration, and cloud deployment.

## 🌟 Features

- Modern dark theme with neon green accents
- Fully responsive mobile-first design
- Smooth animations with Framer Motion
- EmailJS contact form integration
- SEO optimized with comprehensive meta tags
- GitHub Pages ready deployment

## 🛠️ Tech Stack

- **React.js** - UI framework
- **Framer Motion** - Animations
- **EmailJS** - Contact form
- **GitHub Pages** - Hosting

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS

Create `.env.local` file:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [EmailJS](https://www.emailjs.com/)

### 3. Run Development Server

```bash
npm start
```

Visit `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/         # Landing section with stats
│   ├── About/        # About & principles
│   ├── Projects/     # Project showcase
│   ├── Skills/       # Skills & services
│   ├── Experience/   # Work timeline
│   ├── Contact/      # Contact form
│   └── Footer/       # Footer navigation
├── data/
│   ├── profile.js    # Personal info
│   ├── projects.js   # Projects data
│   ├── skills.js     # Technical skills
│   └── experience.js # Work experience
```

## 🎨 Customization

### Update Your Information

Edit files in `src/data/`:

- `profile.js` - Name, email, social links
- `projects.js` - Your projects
- `skills.js` - Your skills
- `experience.js` - Work history

### Change Colors

Edit `src/App.css`:

```css
:root {
  --color-primary: #00ff00;
  --color-background: #0a0a0a;
}
```

## 📧 EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add email service (Gmail/Outlook)
3. Create template with variables: `{{from_name}}`, `{{from_email}}`, `{{project_type}}`, `{{message}}`
4. Copy Service ID, Template ID, and Public Key to `.env.local`

## 📝 Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

## 🌐 Deployment Steps

1. Create GitHub repository: `amsxna060.github.io`
2. Update `homepage` in `package.json`
3. Run `npm run deploy`
4. Visit `https://amsxna060.github.io`

## ✅ Checklist

- [ ] Configure EmailJS credentials
- [ ] Update personal information
- [ ] Add professional photo
- [ ] Add project screenshots
- [ ] Upload resume PDF
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages

## 📞 Contact

**Amol Saxena**

- Email: amolsaxena060@gmail.com
- GitHub: [@amsxna060](https://github.com/amsxna060)
- LinkedIn: [amolsaxena060](https://linkedin.com/in/amolsaxena060)

---

Made with ❤️ using React & Modern Web Technologies
