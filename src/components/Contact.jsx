import { EMAIL, GITHUB, LINKEDIN } from '../data.js';
import { useReveal } from '../hooks.js';

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="section alt">
      <div className="container contact reveal" ref={ref}>
        <h2 className="section-title">Let's work together</h2>
        <p className="lead">
          I'm interested in backend and full-stack roles. Email me, message me on LinkedIn, or have a
          look at my code on GitHub.
        </p>
        <p className="email-line">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div className="cta center">
          <a className="btn primary" href={`mailto:${EMAIL}`}>Email me</a>
          <a className="btn ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">github.com/TamerMokhtar</a>
        </div>
      </div>
    </section>
  );
}
