# blogFrontend

A modern blog frontend application built with React, TypeScript, and Vite, powered by Bun. This application integrates seamlessly with the `blogBackend` powered by Django and Django REST Framework.

![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Bun](https://img.shields.io/badge/bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 📋 Features

- Modern React + TypeScript architecture
- Vite for fast builds and development server
- Bun as JavaScript runtime and package manager
- Blog post listing, viewing, commenting, and liking
- Authentication system integrated with Django backend
- Environment-based configuration
- Responsive design with reusable components
- Deployed easily on Vercel

## 🔧 Prerequisites

- Bun (latest version)
- Git
- Vercel account
- Django backend running at a reachable URL

## 🚀 Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/blog-frontend.git
cd blog-frontend
```

### Install dependencies

```bash
bun install
```

Or if needed:

```bash
npm install
```

### Environment variables

Create a `.env.development.local` file from the example:

```bash
cp .env.example .env.development.local
```

Update the file with:

```env
VITE_API_BASE_URL=https://your-backend-url/api
VITE_AUTH_ENABLED=true
VITE_FEATURE_COMMENTS=true
VITE_FEATURE_LIKES=true
VITE_APP_ENV=development
```

### Start the development server

```bash
bun run dev
```

## 📁 Project Structure

```
src/
├── api/              # Axios config and API endpoints
├── assets/           # Static assets
├── components/       # Reusable components (common, layout, blog)
├── contexts/         # Global state/context
├── hooks/            # Custom React hooks
├── pages/            # Route pages (Home, Post, Login, etc.)
├── routes/           # Route definitions
├── services/         # Business logic
├── styles/           # Global styles
├── types/            # TypeScript definitions
├── utils/            # Utility functions
├── App.tsx           # Root app component
└── main.tsx          # Entry point
```

## 🌐 API Integration

This frontend connects to the Django backend via the `VITE_API_BASE_URL` variable. Ensure CORS is properly set in your Django backend.

- Login/logout is handled via DRF session or token auth
- Posts and categories are fetched via REST endpoints
- Comments and likes are posted using secured requests

## 📦 Scripts

Using Bun:

```bash
bun run dev            # Start dev server
bun run build          # Build for production
bun run preview        # Preview build
bun run lint           # Lint code
bun run format         # Format code
bun run test           # Run tests
bun run test:watch     # Watch tests
bun run test:coverage  # Coverage report
```

With npm:

```bash
npm run dev
npm run build
...
```

## 🚀 Deploying to Vercel

1. Connect your repo to Vercel.
2. Set environment variables in Vercel dashboard:
   - `VITE_API_BASE_URL=https://your-backend-url/api`
   - etc.
3. Configure the following in Vercel settings:
   - **Install command**: `bun install`
   - **Build command**: `bun run build`
   - **Output directory**: `dist`

Then:

```bash
vercel
# or for production:
vercel --prod
```

## 🧪 Testing

The project uses Jest and React Testing Library.

```bash
bun test
```

## 📋 Best Practices

- Component-based architecture
- Environment-based configuration
- Separation of concerns (API, services, UI)
- Typed API with TypeScript
- Reusable and testable code

## 📄 License

MIT License — see LICENSE file for more details.
