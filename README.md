# Node + Express + TypeScript Starter

A clean, modern baseline for building a production‑ready Express API with TypeScript. Includes development scripts, environment variable validation, linting, testing, and basic route/error handling.

## Features
- Node.js 18+ compatible
- TypeScript strict mode
- Express 4.x
- Environment variables with `dotenv` + `zod`
- ESLint + Prettier setup
- Vitest + Supertest testing
- Centralized error & 404 handling
- Example routes and middleware

## Getting Started

### 1. Clone and Install
```bash
git clone <repo-url> my-express-ts
cd my-express-ts
npm install
```
2. Environment Setup

Create a .env file in the root:
```bash
PORT=3000
NODE_ENV=development
```
3. Development
```bash
npm run dev
```
Visit:

http://localhost:3000/
http://localhost:3000/api/health

4. Build & Run
```bash
npm run build
npm start
```
### Project Structure
```bash
src/
  app.ts          # Express app setup
  server.ts       # Server bootstrap
  routes/         # API routes
  middlewares/    # Error & 404 handlers
  utils/          # Env loader & helpers
  types/          # Global type definitions
```
Testing
```bash
npm test
```
Production
```bash
Set NODE_ENV=production
```
Use a process manager (PM2, Docker, systemd)
Add security middlewares like helmet and cors

### License
MIT