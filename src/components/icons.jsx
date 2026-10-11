const STAR_PATH = 'M50 2C53 36 64 47 98 50C64 53 53 64 50 98C47 64 36 53 2 50C36 47 47 36 50 2Z';

export function Logo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".5" stopColor="#6a6a70" />
          <stop offset="1" stopColor="#e8e8ec" />
        </linearGradient>
      </defs>
      <path d={STAR_PATH} fill="url(#logo-grad)" />
    </svg>
  );
}

// Градиенты для хромовых звёзд объявляются один раз, звёзды ссылаются на них
export function StarDefs({ accent = '#d9d9de' }) {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="star-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a2a2e" />
          <stop offset=".55" stopColor="#050505" />
          <stop offset="1" stopColor="#1a1a1d" />
        </linearGradient>
        <linearGradient id="star-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".4" stopColor="#77777d" />
          <stop offset=".7" stopColor={accent} />
          <stop offset="1" stopColor="#55555a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Star({ size, strokeWidth, className = 'star', style }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path d={STAR_PATH} fill="url(#star-fill)" stroke="url(#star-stroke)" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-6.9A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.5 6.4 6.9A3.4 3.4 0 0 0 9 18.1V22" />
    </svg>
  );
}

export function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
    </svg>
  );
}

export function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.3 5.3A17 17 0 0 0 15 4l-.5 1a15.6 15.6 0 0 0-5 0L9 4a17 17 0 0 0-4.3 1.3C2 9.4 1.3 13.4 1.6 17.3A17.2 17.2 0 0 0 6.9 20l1.1-1.8c-.6-.2-1.2-.5-1.8-.9l.4-.3a12.2 12.2 0 0 0 10.8 0l.4.3c-.6.4-1.2.7-1.8.9l1.1 1.8a17.2 17.2 0 0 0 5.3-2.7c.4-4.5-.7-8.5-3.1-12ZM8.7 14.9c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1Zm6.6 0c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1Z" />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 3L2 11l7 2.5M22 3l-4 18-9-7.5M22 3L9 13.5V20l3.5-4" />
    </svg>
  );
}
