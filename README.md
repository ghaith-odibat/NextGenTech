# NextGenTech

A static storefront demo for a tech product catalog, with an optional Express/MongoDB
backend for persisting checkout details.

## Running the storefront

The storefront is plain HTML, CSS and JavaScript with no build step. Serve the project
root with any static file server:

```bash
npx serve .          # or: python3 -m http.server 8000
```

Then open the URL it prints. Opening `index.html` directly from the filesystem also
works, though `localStorage` (used to remember the cart) is restricted on `file://` in
some browsers.

## Configuring the backend connection

`config.js` controls whether checkout talks to the API:

```js
window.NEXTGENTECH_CONFIG = {
  apiBaseUrl: '',   // e.g. 'http://localhost:3000'
};
```

Leave `apiBaseUrl` empty to run standalone — checkout confirms the order without
persisting it. This is the right setting for static hosting such as GitHub Pages, where
no backend is reachable. If the configured API is unreachable, checkout falls back to the
same standalone confirmation rather than failing.

## Running the backend

Requires a MongoDB instance listening on `mongodb://localhost:27017` (override with the
`MONGODB_URI` environment variable).

```bash
cd backend
npm install
npm start            # listens on port 3000, override with PORT
```

It exposes a single route, `POST /api/users`, which stores the name and shipping address
submitted at checkout. Point `apiBaseUrl` in `config.js` at the server to use it.

## Layout

| Path | Purpose |
| --- | --- |
| `index.html` | Storefront shell: nav, search, cart and checkout modals |
| `script.js` | Product catalog data and all storefront behaviour |
| `config.js` | Backend API URL configuration |
| `style.css` | Storefront styles |
| `product1-5.html` | Product review pages |
| `product-page.css` | Shared styles for the product review pages |
| `backend/` | Express API and Mongoose model |
