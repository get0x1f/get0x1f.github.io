import { links, projects } from '../data.js';
import SectionLabel from './SectionLabel.jsx';

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0');
  const featured = Boolean(project.featured);
  return (
    <article className={`pcard ${featured ? 'pcard-featured' : 'glass'}`}>
      <div className={`preview ${featured ? '' : 'scan'}`}>
        {project.image ? <img src={project.image} alt={project.title} /> : <span>[ ПРЕВЬЮ ]</span>}
      </div>
      <div className="pcard-body">
        <div className="pcard-head">
          <span className="mono pcard-num">{num}</span>
          {featured && <span className="pcard-badge">ГЛАВНЫЙ</span>}
        </div>
        <h3 className="pcard-title">{project.title}</h3>
        <p className="pcard-desc">{project.description}</p>
        <div className="tags tags-sm">
          {project.tags.map((tag, i) => (
            <span key={i} className={featured ? 'tag-outline' : 'chip tag-sm'}>
              {tag}
            </span>
          ))}
        </div>
        <a className={`pcard-link ${featured ? '' : 'btn-d'}`} href={project.url} target="_blank" rel="noreferrer">
          Открыть на GitHub ↗
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  if (projects.length === 0) return null;
  return (
    <section id="projects" className="section projects">
      <SectionLabel>Проекты</SectionLabel>
      <div className="projects-head">
        <h2 className="grad h2">
          Избранные
          <br />
          работы
        </h2>
        <a href={`${links.github}?tab=repositories`} target="_blank" rel="noreferrer" className="muted-link">
          Все репозитории →
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
