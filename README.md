# AnnaScholzSolutions

A modern, performant portfolio website showcasing recent work, built with a cutting‑edge React/Next.js stack. It focuses on fast loading times, a clean UI, and smooth interactions.

## Table of Contents
- Features
- Tech Stack
- Requirements
- Quick Start
- Scripts
- Environment Variables
- Project Structure
- Code Quality
- Styling & UI
- Media & Animation
- Deployment
- Performance & SEO
- Accessibility
- Troubleshooting
- Contributing
- License

---

## Features
- App Router architecture with server rendering and static generation
- Reactive UI with the latest React runtime
- Type-safe development with TypeScript
- Utility-first styling with Tailwind CSS
- Scalable component variants and class merging helpers
- Rich iconography
- Smooth animations and micro-interactions
- Simple video handling and optimization
- Production-ready linting and typing workflows

## Tech Stack
- Runtime: Node.js (recommended: ≥ 18.18 or 20.x)
- Framework: Next.js 15 (App Router)
- UI: React 19, React DOM 19
- Language: TypeScript
- Styling: Tailwind CSS, @tailwindcss/postcss
- Utilities: clsx, class-variance-authority, tailwind-merge
- Icons: lucide-react
- UI components: flowbite-react
- Animation: motion
- Video: next-video
- Tooling: ESLint (eslint-config-next), @types/node, @types/react, @types/react-dom
- Package manager: npm

## Requirements
- Node.js ≥ 18.18 or 20.x
- npm (ships with Node.js)
- Git (optional, for version control)

Recommended:

bash
# Use Node 20 with nvm
nvm install 20 nvm use 20
``` 

## Quick Start
```
bash
# Install dependencies
npm install
# Start the development server
npm run dev
# Open the app in your browser
# [http://localhost:3000](http://localhost:3000)
``` 

Production build:
```
bash npm run build npm run start
# Default port: 3000
``` 

## Scripts
- npm run dev — Start the development server
- npm run build — Create a production build
- npm run start — Run the production server
- npm run lint — Run ESLint
- npm run type-check — Run TypeScript type checking (if configured)
- npm run format — Format the codebase (if configured)

If a script is missing, add it to package.json as needed.

## Environment Variables
Create a .env.local file in the project root for local development:
```
dotenv NEXT_PUBLIC_SITE_URL=[https://example.com](https://example.com) NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXXXX-X API_BASE_URL=[https://api.example.com](https://api.example.com)
# ...other variables
``` 
- Variables prefixed with NEXT_PUBLIC_ are exposed to the client.
- Variables without the prefix are available only on the server/build.

## Project Structure
A typical structure looks like this:
```
plaintext . ├─ app/ # App Router: routes, layouts, server/client components │ ├─ page.tsx # Home page │ ├─ layout.tsx # Root layout │ └─ (group)/... # Route groups, segment configs, route handlers ├─ components/ # Reusable UI components ├─ lib/ # Utilities, server helpers, API clients ├─ public/ # Static assets (images, favicon, robots, etc.) ├─ styles/ # Global styles (e.g., Tailwind entry) ├─ types/ # Shared TypeScript types ├─ scripts/ # Build/ops scripts (optional) └─ config files (tsconfig.json, next.config.js, postcss.config.js, etc.)
``` 

## Code Quality
- ESLint: Consistent code quality (eslint-config-next)
- TypeScript: Strict typing; run with npm run type-check
- Formatting: Prettier recommended (wire to npm run format)

Optional pre-commit hooks:
- lint-staged + simple-git-hooks or Husky to check changed files

## Styling & UI
- Tailwind CSS for rapid, utility-first styling
- class-variance-authority for scalable component variants
- tailwind-merge to resolve conflicting utility classes
- clsx for conditional class composition
- lucide-react for flexible SVG icons
- flowbite-react for prebuilt component primitives

## Media & Animation
- motion for smooth, spring-based animations and transitions
- next-video for simplified video imports, optimization, and playback

## Deployment
Recommended: Vercel
1) Connect the repository to Vercel
2) Build Command: npm run build
3) Output Directory: .next
4) Configure environment variables in Vercel
5) Trigger deployment (Preview/Production)

Alternatives:
- Self-host: Build and run npm run start behind a reverse proxy/process manager
- Containers: Multi-stage Docker build with Node-alpine and Next.js output

## Performance & SEO
- Prefer server components where possible to reduce client bundles
- Use Next.js image/font optimization
- Cache fetches on the server when appropriate
- Validate with Lighthouse and Web Vitals
- Manage metadata via the App Router Metadata API

## Accessibility
- Semantic HTML and meaningful ARIA attributes
- Keyboard navigation and visible focus states
- Sufficient color contrast
- Test with screen readers and automated a11y checks

## Troubleshooting
- Dev server won’t start:
  - Check Node version (≥ 18.18 or 20.x)
  - Reinstall dependencies (npm install) and verify lockfile
- Styles not applied:
  - Verify Tailwind config and global CSS imports
- Type/ESLint errors:
  - Run npm run type-check / npm run lint and address diagnostics
- Route issues (404 or layout problems):
  - Review App Router structure, layout.tsx, and segment configs
- Missing environment variables:
  - Ensure .env.local and deployment env are set (watch NEXT_PUBLIC_ prefix)

## License
Specify your project license (e.g., MIT) and include a LICENSE file if applicable.

---

Questions or feedback? Please open an issue in the repository.
```
