import { GITHUB, projects } from '../data.js';
import { useReveal } from '../hooks.js';

export default function Hero() {
  const copyRef = useReveal();
  const cardRef = useReveal();

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal" ref={copyRef}>
          <p className="eyebrow">
            <span className="dot" /> Open to opportunities
          </p>
          <h1>
            Hi, I'm <span className="grad">Tamer Mokhtar</span>.<br />
            I build reliable backends.
          </h1>
          <p className="lead">
            Backend software engineer based in New Cairo, Egypt. I design and ship REST APIs,
            real-time services and database-driven apps with Node.js, Express, MongoDB and PostgreSQL.
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub profile</a>
          </div>
          <ul className="stats" aria-label="Quick facts">
            <li><strong>{projects.length}</strong><span>Showcased projects</span></li>
            <li><strong>Node.js</strong><span>Core stack</span></li>
            <li><strong>REST + WS</strong><span>API styles</span></li>
          </ul>
        </div>

        <div className="hero-card reveal" ref={cardRef} aria-hidden="true">
          <div className="term">
            <div className="term-bar"><i /><i /><i /><span>server.js</span></div>
            <pre>
              <code>
                <span className="c">{'// what I do, in a nutshell'}</span>{'\n'}
                <span className="k">const</span> tamer = {'{'}{'\n'}
                {'  '}role:   <span className="s">"Backend Engineer"</span>,{'\n'}
                {'  '}stack:  [<span className="s">"Node.js"</span>, <span className="s">"Express"</span>,{'\n'}
                {'           '}<span className="s">"MongoDB"</span>, <span className="s">"PostgreSQL"</span>],{'\n'}
                {'  '}focus:  [<span className="s">"REST APIs"</span>, <span className="s">"Auth"</span>,{'\n'}
                {'           '}<span className="s">"Real-time"</span>],{'\n'}
                {'  '}based:  <span className="s">"New Cairo, EG"</span>,{'\n'}
                {'}'};{'\n\n'}
                app.<span className="f">listen</span>(<span className="n">3000</span>);
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
