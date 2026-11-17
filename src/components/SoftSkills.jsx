import { softSkills } from '../data.js';
import { useReveal } from '../hooks.js';

export default function SoftSkills() {
  const titleRef = useReveal();
  const listRef = useReveal();
  return (
    <section id="soft-skills" className="section">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>Soft skills</h2>
        <ul className="soft reveal" ref={listRef}>
          {softSkills.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  );
}
