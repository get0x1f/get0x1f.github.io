# get0x1f — bio

Страница-визитка на React + Vite.

## Запуск

```bash
npm install
npm run dev      # локально: http://localhost:5173
npm run build    # готовый сайт в папке dist/
```

## Где менять контент

Сайт из двух страниц: `index.html` (bio) и `catalog.html` (каталог продуктов).

Весь текст, ссылки, стек, цифры и проекты — в `src/data.js`.
Продукты, категории и шаги «Как купить» — в `src/catalog-data.js`.
Картинки лежат в `public/` (`avatar.jpg`, `hero-bg.jpg`); скриншоты проектов кладите в `public/projects/` и указывайте в поле `image`.

## Публикация

Содержимое `dist/` — статический сайт, его можно залить на любой хостинг:
GitHub Pages, Netlify, Vercel, Cloudflare Pages.
