import { skills } from '../data.js';
import { useReveal } from '../hooks.js';

function SkillCard({ title, tags }) {
  const ref = useReveal();
  return (
    <article className="skill-card reveal" ref={ref}>
      <h3>{title}</h3>
      <div className="tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
    </article>
  );
}

export default function Skills() {
  const titleRef = useReveal();
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>Skills &amp; tools</h2>
        <div className="skills-grid">
          {skills.map((s) => <SkillCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
