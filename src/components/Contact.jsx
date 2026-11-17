import { useState } from 'react';
import { EMAIL, GITHUB, LINKEDIN } from '../data.js';
import { useReveal } from '../hooks.js';

// Opens Gmail's compose window in a new tab (works without a desktop mail app).
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent('Hello Tamer')}`;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers/contexts without the Clipboard API.
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch {}
    document.body.removeChild(ta);
    return ok;
  }
}

export default function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (await copyText(EMAIL)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="section alt">
      <div className="container contact reveal" ref={ref}>
        <h2 className="section-title">Let's work together</h2>
        <p className="lead">
          I'm interested in backend and full-stack roles. Email me, message me on LinkedIn, or have a
          look at my code on GitHub.
        </p>
        <p className="email-line">
          <button type="button" className="email-copy" onClick={onCopy} title="Click to copy">
            {EMAIL}
            <span className="copy-hint" role="status" aria-live="polite">
              {copied ? 'Copied!' : 'Click to copy'}
            </span>
          </button>
        </p>
        <div className="cta center">
          <a className="btn primary" href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer">Email me</a>
          <a className="btn ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">github.com/TamerMokhtar</a>
        </div>
      </div>
    </section>
  );
}
