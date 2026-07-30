import Link from "next/link";

const nav = [["Home", "/"], ["Research", "/research"], ["Team", "/team"], ["Publications", "/publications"], ["News", "/news"]];

export function LabMark() {
  return <span className="mini-mark" aria-hidden="true"><i /><i /><i /></span>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="Embodied Human Intelligence home"><LabMark /><span>Embodied Human<br />Intelligence</span></Link>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div><LabMark /><h2>Embodied Human<br />Intelligence</h2></div>
        <div><p className="footer-label">Explore</p>{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}</div>
        <div><p className="footer-label">Contact</p><a href="mailto:rfeng68@gatech.edu">rfeng68@gatech.edu</a><p>Georgia Institute of Technology<br />Atlanta, Georgia</p></div>
      </div>
      <div className="wrap footer-bottom"><span>© 2026 Embodied Human Intelligence</span><span>Built for accessible inquiry.</span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}<SiteFooter /></>;
}

export function SectionLabel({ n, children }: { n: string, children: React.ReactNode }) {
  return <div className="section-label"><span>{n}</span><p>{children}</p></div>;
}

export function PageIntro({ kicker, title, children }: { kicker: string, title: string, children: React.ReactNode }) {
  return <section className="page-intro wrap"><p className="eyebrow">{kicker}</p><h1>{title}</h1><div>{children}</div></section>;
}
