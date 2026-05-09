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
