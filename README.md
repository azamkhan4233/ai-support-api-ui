# AI Support SaaS — Web Client

React frontend for the AI Support SaaS application. The current application entry point defines login, registration, and a protected dashboard route.

## Application routes

| Route | Behaviour |
|---|---|
| `/` | Redirects to `/login` |
| `/login` | Login page |
| `/register` | Registration page |
| `/dashboard` | Dashboard wrapped by `ProtectedRoute` |

## Technology

- React 19
- React Router 7
- Vite 8
- Axios
- Tailwind CSS 4 and the Vite integration
- ESLint

These versions and packages are taken from the repository's `package.json`.

## Run locally

### Prerequisites

- Node.js compatible with the installed Vite version
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

## Project structure

The application entry point is `src/App.jsx`. It registers the route components:

- `src/pages/auth/LoginPage`
- `src/pages/auth/RegisterPage`
- `src/pages/dashboard/DashboardPage`
- `src/routes/ProtectedRoute`

## Backend connection

The frontend is maintained separately from the Spring Boot API repository: [ai-support-api](https://github.com/azamkhan4233/ai-support-api).

Configure API connection settings for your local environment before using authenticated application flows. Do not commit private tokens, credentials, or environment-specific secrets.

## Scope

This README documents the routes, dependencies, and scripts visible in the current repository. It does not imply that a production deployment, automated test suite, or every backend integration has been verified.
