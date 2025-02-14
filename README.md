# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/tobiase/rr7-starter/tree/main)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Starting a New Project with degit

You can quickly create a new project from this repository using [degit](https://github.com/Rich-Harris/degit). Run the following commands:

```bash
npx degit tobiase/rr7-starter my-new-project
cd my-new-project
pnpm install
pnpm run dev
```

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience.

Additionally, this project integrates [shadcn UI](https://ui.shadcn.com) for a complete design system and prebuilt components. Its integration offers:

- Tailwind configuration enhancements in `app/app.css` including custom theming and dark mode support.
- Utility functions (e.g. `cn` in `app/lib/utils.ts`) to manage and merge Tailwind classes with ease.
- A component configuration file (`components.json`) that harmonizes component styling.

Check out the shadcn UI documentation for advanced customizations.

## Biome Integration

This project uses [Biome](https://biomejs.dev) for code formatting, linting, and organizing imports. The configuration is defined in the [biome.jsonc](biome.jsonc) file. It enhances code consistency by:

- Auto formatting on save
- Automatic organization of imports
- Enforcing custom linting rules (e.g. sorted classes in utilities like tv, twMerge, cn, or clsx)

For VS Code users, our configuration in [.vscode/settings.json](.vscode/settings.json) and the recommended extensions in [.vscode/extensions.json](.vscode/extensions.json) ensure Biome works out-of-the-box. If you use another editor, refer to the [Biome documentation](https://biomejs.dev) for setup instructions.

## Lefthook Integration

This project employs [Lefthook](https://github.com/evilmartians/lefthook) to automate Git hooks. The pre-commit hook runs Biome linting and formatting checks on staged files, ensuring code consistency before commits.

Additionally, post-merge and post-checkout hooks (configured in [lefthook.yml](lefthook.yml)) reinstall dependencies and clear the Vite cache for a smooth development experience.

To install these hooks, run:

```bash
pnpm hookinstall
```

---

Built with ❤️ using React Router.
