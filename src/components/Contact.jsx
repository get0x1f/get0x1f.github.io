import { useState } from 'react';
import { links } from '../data.js';
import SectionLabel from './SectionLabel.jsx';
import { DiscordIcon, GitHubIcon, TelegramIcon, YouTubeIcon } from './icons.jsx';

function DiscordButton() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.discord);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // буфер обмена недоступен — ник и так виден на кнопке
    }
  };
  return (
    <button type="button" className="btn btn-d btn-lg" onClick={copy} title="Скопировать ник в Discord">
      <DiscordIcon />
      <span aria-live="polite">{copied ? 'Скопировано ✓' : links.discord}</span>
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-text">
        <SectionLabel>Контакты</SectionLabel>
        <h2 className="grad h2">
          Есть идея?
          <br />
          Напиши мне
        </h2>
        <p className="text">Быстрее всего отвечаю в Telegram.</p>
      </div>
      <div className="row contact-buttons">
        <a className="btn btn-w btn-lg" href={links.telegram} target="_blank" rel="noreferrer">
          <TelegramIcon />
          {links.telegramHandle}
        </a>
        <DiscordButton />
        <a className="btn btn-d btn-lg" href={links.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          GitHub
        </a>
        <a className="btn btn-d btn-lg" href={links.youtube} target="_blank" rel="noreferrer">
          <YouTubeIcon />
          YouTube
        </a>
      </div>
    </section>
  );
}
