import { links, profile, projects } from '../data.js';
import { GitHubIcon, Star, StarDefs } from './icons.jsx';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        {profile.openToWork && (
          <div className="chip badge">
            <span className="badge-new">NEW</span>
            {profile.openToWorkLabel}
          </div>
        )}
        <h1 className="grad h1">
          Привет,
          <br />я {profile.nick}
        </h1>
        <p className="lead">{profile.tagline}</p>
        <div className="row">
          {projects.length > 0 ? (
            <a className="btn btn-w" href="#projects">
              Мои проекты →
            </a>
          ) : (
            <a className="btn btn-w" href="#contact">
              Связаться →
            </a>
          )}
          <a className="btn btn-d" href={links.github} target="_blank" rel="noreferrer">
            <GitHubIcon />
            GitHub ▸
          </a>
        </div>
      </div>

      <div className="hero-art">
        <StarDefs />
        <div className="glass hero-panel">
          <img src={profile.heroBg} alt="" />
          <div className="vignette" />
        </div>
        <Star className="star float" size={150} strokeWidth={2.2} style={{ top: 0, left: '4%' }} />
        <Star className="star float" size={130} strokeWidth={2.6} style={{ bottom: 0, right: '2%', animationDelay: '-3s' }} />
        <Star size={56} strokeWidth={4} style={{ top: 30, right: '8%' }} />
        <div className="avatar-ring">
          <img src={profile.avatar} alt={`Аватар ${profile.nick}`} />
        </div>
      </div>
    </section>
  );
}
