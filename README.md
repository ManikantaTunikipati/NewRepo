<<<<<<< HEAD
# Pamba Gold Catalogue

A simple and beginner-friendly React catalogue website for bangle designs.

## Brand Details

- Page Name: Pamba Bangles
- Site Title: Pamba Gold Catalogue
- Owner: Srinivasa Rao
- Contact Number: 9441518562

## Features

- Home page with brand banner
- Bangles-only catalogue (4 sample products)
- Search by design code
- Product details page with gallery
- WhatsApp enquiry button on cards and details page
- Owner photo in top-left navbar

## Run Locally

1. Open terminal in this project folder:

```bash
cd jewellery-catalogue
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open the URL shown in terminal (usually `http://localhost:5173`).

## Build for Deployment

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Netlify/Vercel.

## Replace Sample Images

Current images are SVG placeholders in `public/images`. Replace them with your real photos:

- `owner.svg` (or use `owner.jpg` and update paths)
- `bangle-1.svg`
- `bangle-2.svg`
- `bangle-3.svg`
- `bangle-4.svg`
=======
# Jewellery Catalogue Web App

A modern responsive jewellery catalogue built with **React + Vite + Tailwind CSS**.

## Features
- Home page with hero banner and featured products
- Category browsing with search by design code and category filter
- Product details page with gallery and share action
- WhatsApp enquiry buttons on cards and detail page
- Responsive luxury white/gold UI theme
- Beginner-friendly modular folder structure for future backend integration

## Project Structure
```
src/
  assets/
  components/
  data/
  hooks/
  layouts/
  pages/
  routes/
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deployment
- Works on Netlify/Vercel (Vite defaults).
- Build command: `npm run build`
- Publish directory: `dist`

## Future Backend Integration
- Replace static data in `src/data/products.js` with API calls.
- Move filtering/search logic to a service layer while preserving component interfaces.
>>>>>>> cbce87c56a5f61a553acae6c7ded62c6758020c7
