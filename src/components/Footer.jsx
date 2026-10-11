import { links, profile } from '../data.js';

// pageLinks: внутренние ссылки на другие страницы сайта, например [{ href: './catalog.html', label: 'Каталог' }]
export default function Footer({ pageLinks = [] }) {
  return (
    <footer className="footer">
      <div className="footer-row">
        <span>© {new Date().getFullYear()} {profile.nick}</span>
        <div className="footer-links">
          {pageLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={links.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
      <div className="wordmark" aria-hidden="true">
        {profile.nick}
      </div>
    </footer>
  );
}
