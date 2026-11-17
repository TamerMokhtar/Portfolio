import { facts } from '../data.js';
import { useReveal } from '../hooks.js';

export default function About() {
  const titleRef = useReveal();
  const textRef = useReveal();
  const factsRef = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>About me</h2>
        <div className="about-grid">
          <div className="reveal" ref={textRef}>
            <p>
              I'm a backend software engineer who enjoys turning requirements into clean, well-structured
              services. My work centers on the Node.js ecosystem: building REST APIs, handling
              authentication and role-based authorization, modelling data in MongoDB and PostgreSQL, and
              adding real-time features with Socket.IO.
            </p>
            <p>
              I studied at the <strong>Arab Academy for Science, Technology &amp; Maritime Transport</strong>{' '}
              in Cairo with a degree in Computer Science, and I keep learning by building projects end to end, from the database to the UI
              that consumes it.
            </p>
          </div>
          <ul className="facts reveal" ref={factsRef}>
            {facts.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
