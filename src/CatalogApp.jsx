import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SectionLabel from './components/SectionLabel.jsx';
import { Star, StarDefs, TelegramIcon } from './components/icons.jsx';
import { buySteps, categories, products } from './catalog-data.js';
import { links, profile } from './data.js';

const NAV = [
  { href: './#about', label: 'Обо мне' },
  { href: '#catalog', label: 'Каталог', current: true },
  { href: '#buy', label: 'Как купить' },
  { href: './#contact', label: 'Контакты' },
];

function pluralProducts(n) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return 'продукт';
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return 'продукта';
  return 'продуктов';
}

function ProductCard({ product, num, catLabel }) {
  const featured = Boolean(product.featured);
  return (
    <article className={`pcard ${featured ? 'pcard-featured' : 'glass'}`}>
      <div className={`preview cover ${featured ? '' : 'scan'}`}>
        {product.image ? <img src={product.image} alt={product.name} /> : <span>[ ОБЛОЖКА ]</span>}
      </div>
      <div className="pcard-body product-body">
        <div className="pcard-head">
          <span className={featured ? 'tag-outline cat-tag' : 'chip tag-sm cat-tag'}>{catLabel}</span>
          {featured ? <span className="pcard-badge">ХИТ</span> : <span className="mono pcard-num">{num}</span>}
        </div>
        <h3 className="pcard-title">{product.name}</h3>
        <p className="pcard-desc">{product.desc}</p>
        <div className="buy-row">
          <span className="price">{product.price}</span>
          <a
            className={`buy-btn ${featured ? 'buy-btn-dark' : 'btn-d'}`}
            href={product.url || links.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Купить ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Catalog() {
  const [cat, setCat] = useState('all');
  const labels = Object.fromEntries(categories.map((c) => [c.id, c.label]));
  const usedCats = categories.filter((c) => products.some((p) => p.cat === c.id));
  const filters = [{ id: 'all', label: 'Все' }, ...usedCats];
  const shown = products
    .map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0') }))
    .filter((p) => cat === 'all' || p.cat === cat);

  return (
    <section id="catalog" aria-label="Каталог" className="catalog">
      {products.length > 0 && (
      <div className="catalog-bar">
        <div role="group" aria-label="Категории" className="chip pills">
          {filters.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`pill ${cat === c.id ? 'pill-on' : ''}`}
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <span className="mono count" aria-live="polite">
          {shown.length} {pluralProducts(shown.length)}
        </span>
      </div>
      )}

      {shown.length > 0 ? (
        <div className="catalog-grid">
          {shown.map((p) => (
            <ProductCard key={p.num} product={p} num={p.num} catLabel={labels[p.cat] ?? p.cat} />
          ))}
        </div>
      ) : (
        <div className="glass empty">Скоро здесь появятся продукты.</div>
      )}
    </section>
  );
}

export default function CatalogApp() {
  return (
    <div className="root root-catalog">
      <div className="container">
        <StarDefs />
        <Header nav={NAV} homeHref="./" />
        <main>
          <section className="hero catalog-hero">
            <div className="hero-text">
              <div className="chip badge">
                <span className="badge-new">SHOP</span>
                Каталог продуктов
              </div>
              <h1 className="grad h1">
                Продукты
                <br />
                {profile.nick}
              </h1>
              <p className="lead">
                Готовые боты, плагины и скрипты от {profile.nick}. Выбери продукт и напиши мне в Telegram.
              </p>
            </div>
            <div className="catalog-art" aria-hidden="true">
              <Star className="star float" size={170} strokeWidth={2.2} style={{ top: 0, left: '20%' }} />
              <Star className="star float" size={96} strokeWidth={3} style={{ bottom: 0, right: '6%', animationDelay: '-3s' }} />
              <Star size={48} strokeWidth={4} style={{ bottom: 30, left: '6%' }} />
            </div>
          </section>

          <Catalog />

          <section id="buy" aria-label="Как купить" className="section buy">
            <SectionLabel>Как купить</SectionLabel>
            <h2 className="grad h2">
              Три шага
              <br />
              до покупки
            </h2>
            <ol className="steps">
              {buySteps.map((s, i) => (
                <li key={s.title} className="glass step">
                  <span className="mono step-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="pcard-desc">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="glass cta" aria-label="Связаться">
            <div className="cta-text">
              <h2 className="grad h2-cta">Не нашёл, что нужно?</h2>
              <p className="text">Напиши — обсудим разработку под твою задачу.</p>
            </div>
            <a className="btn btn-w btn-lg" href={links.telegram} target="_blank" rel="noreferrer">
              <TelegramIcon />
              {links.telegramHandle}
            </a>
          </section>
        </main>
        <Footer pageLinks={[{ href: './', label: 'Bio' }]} />
      </div>
    </div>
  );
}
