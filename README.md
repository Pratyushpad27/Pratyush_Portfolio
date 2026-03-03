# Pratyush Padhy — Portfolio

Personal portfolio showcasing ML/AI projects, built with React, TypeScript, and Express.

**Live site:** [pratyush-padhy-portfolio.netlify.app](https://pratyush-padhy-portfolio.netlify.app)

## Tech Stack

**Frontend:** React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion
**Backend:** Express.js · Node.js
**Deployment:** Netlify (frontend) · Render (backend)

## Features

- Two ML project showcases with detailed writeups and result visualizations
- API Demo page — fetches random images via Pixabay and generates AI captions via OpenRouter
- Responsive design with mobile bottom navigation
- Animated page transitions and scroll-triggered animations
- Command palette (Cmd+K / Ctrl+K)
- Code-split routes with lazy loading
- Accessibility: skip link, ARIA labels, keyboard navigation, reduced-motion support

## Project Structure

```
frontend/
├── src/
│   ├── pages/          # Home, About, Projects, EmotionDetection, FakeNews, ImageAPI
│   ├── components/     # Navbar, Footer, CommandPalette, ErrorBoundary, Lightbox
│   └── components/animations/  # FadeUp, GlowCard, StaggerContainer, PageTransition
└── public/             # Static assets, resume PDF, project images

backend/
├── index.js            # Express entry point, CORS, rate limiting
├── routes/             # /api/image, /api/caption
├── controllers/        # Request handlers
└── services/           # Pixabay and OpenRouter API integrations
```

## Running Locally

```bash
# Backend
cd backend
npm install
npm run dev          # starts on http://localhost:3001

# Frontend (separate terminal)
cd frontend
npm install
npm run dev          # starts on http://localhost:5173
```

## Environment Variables

**Frontend** (`frontend/.env`):
```
VITE_BACKEND_URL=http://localhost:3001
```

**Backend** (`backend/.env`):
```
PIXABAY_API_KEY=your_key
OPENROUTER_API_KEY=your_key
PORT=3001
```

## Deployment

**Netlify** (frontend):
- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: `frontend`
- Set `VITE_BACKEND_URL` to your Render backend URL

**Render** (backend):
- Start command: `node index.js`
- Set `PIXABAY_API_KEY` and `OPENROUTER_API_KEY` in environment variables
