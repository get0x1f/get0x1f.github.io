import { stats } from '../data.js';
import SectionLabel from './SectionLabel.jsx';

const TILTS = ['rotate(-8deg)', 'rotate(6deg) translateY(18px)', 'rotate(-4deg)'];

export default function Stats() {
  return (
    <section aria-label="Цифры" className="glass stats">
      <div className="stats-text">
        <SectionLabel>В цифрах</SectionLabel>
        <h2 className="grad h2-sm">От идеи до релиза</h2>
        <p className="text-sm">Пара цифр обо мне.</p>
      </div>
      <div className="stats-cards">
        {stats.map((s, i) => (
          <div key={s.label} className="chip stat" style={{ transform: TILTS[i % TILTS.length] }}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
