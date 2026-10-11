import { profile, stack } from '../data.js';
import SectionLabel from './SectionLabel.jsx';

export default function About() {
  const fields = [
    ['nick', profile.nick],
    ['role', profile.role],
    ['focus', profile.focus],
    ['status', profile.status],
  ];
  return (
    <section id="about" className="section about">
      <SectionLabel>Обо мне</SectionLabel>
      <h2 className="grad h2">
        Код, который
        <br />
        делает дело
      </h2>
      <p className="text">{profile.about}</p>

      <div className="about-grid">
        <div className="glass card code-card">
          <span className="mono muted-sm">~/{profile.nick.toLowerCase()} $ cat about.md</span>
          <div className="mono code">
            <span>
              <span className="kw">const</span> dev = {'{'}
            </span>
            {fields.map(([key, value], i) => (
              <span key={key} className="indent">
                {key}: <span className="str">"{value}"</span>
                {i < fields.length - 1 ? ',' : ''}
              </span>
            ))}
            <span>{'};'}</span>
          </div>
        </div>
        <div className="glass card">
          <span className="card-title">Стек</span>
          <div className="tags">
            {stack.map((item) => (
              <span key={item} className="chip tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
