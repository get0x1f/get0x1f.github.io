import { stack } from '../data.js';

export default function Marquee() {
  // Список дублируется, чтобы анимация на -50% зацикливалась без шва
  const items = [...stack, ...stack];
  return (
    <section id="stack" aria-label="Стек" className="marquee fade-x">
      <div className="mq">
        {items.map((item, i) => (
          <span key={i} className="mq-item" aria-hidden={i >= stack.length || undefined}>
            <span>{item}</span>
            <span>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
