# Beauty Tools – Cosmetics Landing Page (React + TypeScript + Redux Toolkit)

I took an existing React landing page with older code and rebuilt it with TypeScript, Redux Toolkit and CSS Modules.
A practice project from early 2023.

**Live demo:** [cosmetic-tools.netlify.app](https://cosmetic-tools.netlify.app)

---

## Features

- **Light / dark mode** – global state in a typed Redux Toolkit slice, read and changed with typed hooks (`useAppSelector`, `useAppDispatch`)
- **Product list with category filter** and smooth list animations (`@formkit/auto-animate`)
- **Product carousel** with Swiper
- **"Virtual try-on"** – before/after image comparison with `react-compare-image`
- **Animated hero section** with Framer Motion
- **Reusable UI components** (`Button`, `Container`, `Input`) styled with CSS Modules
- **Production build without source maps** (`GENERATE_SOURCEMAP=false`)

## Tech stack

React 18 · TypeScript · Redux Toolkit · CSS Modules · Swiper · Framer Motion · Create React App

## Project structure

```
src/
├── components/  # page sections (Header, Hero, Slider, Virtual, Products, Testimonials, Footer, Toggle)
├── UI/          # reusable components (Button, Container, Input)
├── store/       # Redux Toolkit store, dark-mode slice and typed hooks
├── data/        # product and testimonial data
└── assets/      # images
```

## Run locally

```bash
yarn install
yarn start
```

---

**Fuad Abdullah** – Frontend / Full-Stack Developer (React · TypeScript · Node.js), Hamburg
[LinkedIn](https://www.linkedin.com/in/fuad-web/) · [GitHub](https://github.com/fuad221)
