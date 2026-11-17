export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <span>© {new Date().getFullYear()} Tamer Mokhtar. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
