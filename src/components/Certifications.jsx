import { useEffect, useState } from 'react';
import { certifications } from '../data.js';
import { useReveal } from '../hooks.js';

function CertCard({ cert, onOpen }) {
  const ref = useReveal();
  const { title, issuer, instructor, date, description, tags, image, imageAlt } = cert;
  return (
    <article className="cert reveal" ref={ref}>
      <button
        type="button"
        className="cert-thumb"
        onClick={() => onOpen(cert)}
        aria-label={`View certificate: ${title}`}
      >
        <img src={image} alt={imageAlt} loading="lazy" />
        <span className="cert-zoom">View certificate</span>
      </button>
      <div className="cert-body">
        <h3>{title}</h3>
        <p className="cert-meta">
          {issuer}
          {instructor && <> · Instructor: {instructor}</>}
          {date && <> · {date}</>}
        </p>
        <p>{description}</p>
        <div className="tags">
          {tags.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="cert-actions">
          <button type="button" className="link-btn" onClick={() => onOpen(cert)}>
            View certificate <b>→</b>
          </button>
        </div>
      </div>
    </article>
  );
}

function Lightbox({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={cert.title} onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img src={cert.image} alt={cert.imageAlt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default function Certifications() {
  const titleRef = useReveal();
  const [open, setOpen] = useState(null);

  return (
    <section id="certifications" className="section alt">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>Certifications</h2>
        <div className="certs">
          {certifications.map((c) => <CertCard key={c.title} cert={c} onOpen={setOpen} />)}
        </div>
      </div>
      {open && <Lightbox cert={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
