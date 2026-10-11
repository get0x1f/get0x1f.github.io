import { links, profile } from '../data.js';
import { Logo } from './icons.jsx';

// nav: [{ href, label, current? }] — у каждой страницы свой набор пунктов
export default function Header({ nav, homeHref = '#top' }) {
  return (
    <header className="header">
      <a href={homeHref} className="brand">
        <Logo />
        {profile.nick}
      </a>
      <nav aria-label="Навигация" className="nav">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={item.current ? 'nav-current' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a href={links.github} target="_blank" rel="noreferrer" className="header-link">
          GitHub
        </a>
        <a className="btn btn-w btn-sm" href={links.telegram} target="_blank" rel="noreferrer">
          Telegram ↗
        </a>
      </div>
    </header>
  );
}
