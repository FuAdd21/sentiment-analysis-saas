# Sentiment Analysis SaaS

A 5-day MVP for an AI-powered customer feedback and sentiment analysis platform, built for a client.

## Day 1: Project Initialization, UI/UX, Component Scaffolding, and Deployment
- Set up Vite + React project with Tailwind CSS v4 and shadcn/ui.
- Initialized Git repository and pushed to GitHub under FuAdd21.
- Created components: Header, FeedbackForm, ResultsDisplay, SentimentScore, ChartWidget with @ alias for shadcn/ui imports.
- Added optional enhancement: Dropdown in FeedbackForm for feedback source (moved from Day 5).
- Fixed shadcn/ui alias issue with vite.config.js and tsconfig.json.
- Deployed to Vercel with continuous deployment: [Live URL](https://sentiment-analysis-saas.vercel.app) (replace with actual URL).

## Features (Day 1)
- **Header**: Navigation bar with branding and Dashboard button.
- **Feedback Form**: Input field and dropdown for feedback source (Email, Website, Phone) (to be connected to backend on Day 2).
- **Results Display**: Placeholder for sentiment analysis results, including sentiment score and chart widgets.
- **Styling**: Modern, responsive design using Tailwind CSS v4 and shadcn/ui components.

## Next Steps
- Day 2: Backend and database integration (Node.js, Express, Firebase Firestore).
- Day 3: AI sentiment analysis integration (Google Gemini API).
- Day 4: Data visualization and dashboard (Recharts or Chart.js).
- Day 5: Multi-channel input, testing, and final deployment.

## Tools Used
- Code Editor: VS Code
- Version Control: Git & GitHub
- Frontend Framework: React with Vite
- Styling: Tailwind CSS v4
- UI Components: shadcn/ui
- Deployment: Vercel

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
