# <img src="/framix-banner.png" alt="Framix UI Banner" width="100%" />

# Framix UI

**Pixel-Perfect Components. Clean and Customizable.**

---

## ✨ Overview

**Framix UI** is an open-source library of modern, handcrafted, and highly customizable React components, designed to help you build beautiful, responsive interfaces with ease. Powered by **Tailwind CSS v4** and inspired by the best of **shadcn/ui**, Framix UI is perfect for React and Next.js projects.

- **Pixel-perfect design**: Every component is crafted for visual excellence.
- **Customizable**: Easily adapt components to your brand and needs.
- **Ready for production**: Clean code, accessibility, and best practices.
- **Powered by Tailwind CSS**: Utility-first, themeable, and fast.

---

## 🚀 Features

- **Component Library**: Cards, Inputs, Buttons, Alerts, Loaders, and more.
- **Profile Cards**: Glassmorphism, Minimal, Sleek, and more creative designs.
- **Backgrounds**: Flowing curves, particle effects, and cosmic portals.
- **Hooks**: Useful utilities like `useAutoResizeTextarea` and `useCopyToClipboard`.
- **Docs & Previews**: Live documentation and code previews for every component.
- **CLI Integration**: Install components with a single command using the shadcn/ui CLI.

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/abirbhab-dasgupta/framix-ui.git
cd framix-ui
```

### 2. Install Dependencies

```bash
# With npm
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

### 4. Using Framix UI Components in Your Project

All components use [Tailwind CSS v4](https://tailwindcss.com/docs/installation/framework-guides/nextjs).  
Many also use the `cn` utility function.

#### Install Utilities

```bash
# With bun
bunx shadcn@latest add https://framixui.vercel.app/r/utils.json

# With npx
npx shadcn@latest add https://framixui.vercel.app/r/utils.json

# With pnpm
pnpm dlx shadcn@latest add https://framixui.vercel.app/r/utils.json
```

#### Add Components

To add a component (e.g., `card-01`):

```bash
bunx shadcn@latest add https://framixui.vercel.app/r/card-05.json
# or
npx shadcn@latest add https://framixui.vercel.app/r/card-05.json
# or
pnpm dlx shadcn@latest add https://framixui.vercel.app/r/card-05.json
```

_We recommend using the CLI for installation to ensure all dependencies are included._

#### Usage Example

```jsx
import Card01 from "@/components/framixui/card-01";

export default function Page() {
  return <Card01 />;
}
```

#### Optional Dependencies

Some components require additional libraries (e.g., `lucide-icons`, `motion`).  
Check the bottom of each component's documentation for details.

#### Monorepo Support

For monorepos, use the `-c` option to specify your workspace path:

```bash
bunx shadcn@latest add https://framixui.vercel.app/r/card-05.json -c ./apps/www
```

---

## 🧩 Component Categories

- **Cards**: Modern, glassmorphism, minimal, and more.
- **Inputs**: Stylish, accessible input fields.
- **Buttons**: Animated, customizable buttons.
- **Alerts**: Informative and visually appealing alerts.
- **Loaders**: Visually engaging loading indicators.
- **Backgrounds**: Dynamic and creative backgrounds.
- **Hooks**: Useful React hooks for productivity.

See the [docs](./content/docs/index.mdx) for a full list and live previews.

---

## 🛠️ Scripts

- `dev`: Start the development server (`next dev`)
- `build`: Build the project (`next build`)
- `start`: Start the production server (`next start`)
- `lint`: Lint the codebase (`next lint`)

---

## 🏗️ Tech Stack

- **React 19**
- **Next.js 15**
- **Tailwind CSS v4**
- **shadcn/ui**
- **framer-motion**
- **lucide-react**
- **TypeScript**
- **Fumadocs** (for documentation)

---

## 📚 Documentation

- **Getting Started**: `/docs`
- **Component Previews**: `/docs/components`
- **Hooks**: `/docs/hooks`

---

> _Build modern, beautiful, and customizable UIs with Framix UI!_
