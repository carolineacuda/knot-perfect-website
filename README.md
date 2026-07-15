# Knot Perfect — website

This is the placeholder website for **Knot Perfect**, a UK handmade macramé
business. It's built with [Astro](https://astro.build) and TypeScript.

This README is written for a beginner — if something isn't clear, ask!

## 1. Running the website locally

You need [Node.js](https://nodejs.org) installed (version 18 or later).

From this folder, run:

```bash
npm install   # only needed the first time, or after changing dependencies
npm run dev
```

Then open the address shown in the terminal (usually
[http://localhost:4321](http://localhost:4321)) in your browser. The page
will automatically refresh as you edit files.

Press `Ctrl+C` in the terminal to stop the server.

## 2. Where to add your logo and photographs

All images live in the `public/images/` folder. Anything you put there can
be referenced in the website as `/images/your-file-name.jpg`.

- **Logo**: `public/images/logo.png`. Replace this file (keep the same name)
  to update the logo shown in the header, or change the filename referenced
  in `src/components/Header.astro`.
- **Homepage hero photo**: currently `public/images/textured_hanging.jpeg`,
  shown in `src/pages/index.astro`. To feature a different piece, either:
  - replace `textured_hanging.jpeg` with a new photo of the same name, or
  - edit the `src="/images/..."` line in `src/pages/index.astro` to point at
    a different file already in `public/images/` (there are several other
    photos already there, e.g. `autumn_sunset_mandala.jpeg`,
    `full_sun_mandala.jpeg`, `gold_treeoflife.jpeg`).

Large photos will slow the site down — a good size for the hero photo is
around 1600px wide.

## 3. Where to change the text and links

- **Etsy link, Facebook link and email address**: all three live in one
  place, `src/config/site.ts`. Open that file and replace the three
  placeholder values marked `REPLACE ME`. Every button and link on the site
  updates automatically.
- **Homepage wording** (introduction, tagline): edit
  `src/pages/index.astro`.
- **Privacy page wording**: edit `src/pages/privacy.astro`. The current text
  is a placeholder — replace it with proper privacy wording once the full
  website (with any order or contact forms) is built.
- **Colours**: edit the values at the top of `src/styles/global.css` under
  `:root`.

## 4. Building the production version

When you're ready to publish the site, run:

```bash
npm run build
```

This checks the site for errors and creates a finished, static copy of the
website in the `dist/` folder. That `dist/` folder is what you upload to
your web host.

You can preview the production build locally before publishing with:

```bash
npm run preview
```

## Project structure

```
src/
  config/site.ts       ← Etsy / Facebook / email — edit here
  layouts/Layout.astro ← shared page shell (meta tags, page title)
  components/          ← Header, Footer, SocialButton
  pages/
    index.astro         ← homepage
    privacy.astro       ← privacy page
  styles/global.css     ← colours, fonts, layout
public/images/          ← logo and photographs
```

## Still to do before publishing

- [ ] Replace the placeholder Etsy URL, Facebook URL and email in
      `src/config/site.ts`.
- [ ] Confirm the hero photo on the homepage is the one you want to feature.
- [ ] Replace the placeholder text on the privacy page with real policy
      wording.
- [ ] Once you have a domain live, add it to the `site` option in
      `astro.config.mjs`.
