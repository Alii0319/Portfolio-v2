# Ali Raza — Portfolio

A focused portfolio for Ali Raza's backend engineering, automation, and applied machine-learning work.

The site presents selected projects, experience, technical capabilities, and contact details through a responsive dark/light interface with a case-study-led project section. The featured work includes the E-Commerce Scraper Engine, a multi-user monitoring platform built with Django REST Framework, Playwright, Celery, Channels, PostgreSQL, and Redis.

## Stack

- React 19 and Vite 8
- Tailwind CSS 4
- Lucide icons
- EmailJS contact form

## Local development

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:5173` by default.

## Quality checks

```bash
npm run lint
npm run build
```

## Structure

```text
public/
  ali_raza.webp
  favicon.png
  favicon.ico
  apple-touch-icon.png
  Ali_Raza_Backend.pdf
backups/
  favicon/
    favicon-original.svg
    favicon-photo-source.png
  profile-image/
    ali_raza-original.png
src/
  components/
    Navbar.jsx
    Hero.jsx
    Projects.jsx
    Experience.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css
```

The exact original profile image is retained outside the production `public/` directory. Restore instructions and its SHA-256 checksum are documented in `backups/profile-image/README.md`.

## Contact

- Email: [alirazaa0319@gmail.com](mailto:alirazaa0319@gmail.com)
- GitHub: [Alii0319](https://github.com/Alii0319)
- LinkedIn: [Ali Raza](https://linkedin.com/in/ali-raza-8a68372aa)
