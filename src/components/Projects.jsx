import { useState } from 'react';
import { GITHUB, filters, projects } from '../data.js';
import { useReveal } from '../hooks.js';

function ProjectCard({ project }) {
  const ref = useReveal();
  const { name, featured, language, color, description, tags, url } = project;
  return (
    <article className="project reveal" ref={ref}>
      <div className="project-top">
        {featured && <span className="badge">Featured</span>}
        <span className="lang"><i style={{ '--c': color }} />{language}</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
      <a className="link" href={url} target="_blank" rel="noopener noreferrer">
        View on GitHub <b>→</b>
      </a>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const headRef = useReveal();
  const moreRef = useReveal();

  const visible = projects.filter((p) => filter === 'all' || p.cats.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <h2 className="section-title">Projects</h2>
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`chip${filter === f.key ? ' active' : ''}`}
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects">
          {visible.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>

        <p className="more reveal" ref={moreRef}>
          <a className="btn ghost" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            See all repositories on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
