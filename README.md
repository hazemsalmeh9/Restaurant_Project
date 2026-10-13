# Restaurants Project

The original multi-page restaurant, beneficiary, donation, and volunteer UI now runs as a React application powered by Vite and React Router. Each original HTML screen has a corresponding JSX page component in `src/pages`, and internal navigation uses React Router links.

## Run locally

```bash
npm install
npm run dev
```

Vite opens the login screen at `/`. Main routes include:

- `/login` and `/register`
- `/beneficiary` and `/beneficiary/meals`
- `/donations` and `/donations/mine`
- `/restaurant` and `/restaurant/reservations`
- `/volunteer` and `/volunteer/opportunities`

## Production build

```bash
npm run build
npm run preview
```

Production hosting must use an SPA fallback to `index.html` so direct visits to React Router paths resolve to the application.
