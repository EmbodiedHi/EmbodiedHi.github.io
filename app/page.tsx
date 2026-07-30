import Link from "next/link";
import { research } from "@/data/research";
import { publications } from "@/data/publications";
import { news } from "@/data/news";
import { PageShell, SectionLabel } from "@/components/Site";

export default function Home() {
  return (
    <PageShell>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">An interdisciplinary research collective</p>
            <h1>Embodied<br />Human<br /><em>Intelligence</em></h1>
          </div>
          <div className="hero-aside">
            <div className="loop-mark" aria-hidden="true"><i /><i /><i /><span /></div>
            <p className="hero-tagline">Understanding and designing intelligence through bodies, environments, and human–AI interaction.</p>
            <p className="affiliation">Georgia Institute of Technology · Atlanta</p>
            <div className="actions">
              <Link className="button primary" href="/research">Explore our research <span>↗</span></Link>
              <Link className="button text-button" href="/team">Meet the team <span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="statement wrap">
          <SectionLabel n="01">Our premise</SectionLabel>
          <div className="statement-grid">
            <h2>Intelligence is not confined to a brain—or an algorithm.</h2>
            <div>
              <p>Embodied Human Intelligence investigates how intelligent behavior emerges through continuous interaction among people, their bodies, their environments, and computational systems.</p>
              <p>We combine behavioral experiments, neuroscience, computational modeling, and human-centered AI to study questions from navigation and motor control to medical large language models and human–AI decision-making.</p>
            </div>
          </div>
        </section>

        <section className="directions wrap">
          <SectionLabel n="02">Research directions</SectionLabel>
          <div className="direction-list">
            {research.map((item, index) => (
              <Link href={`/research#${item.slug}`} className="direction-row" key={item.slug}>
                <span className="row-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.short}</p>
                <span className="arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="split-section wrap">
          <div>
            <SectionLabel n="03">Latest news</SectionLabel>
            <div className="compact-list">
              {news.slice(0, 3).map(item => (
                <article key={item.title}>
                  <time>{item.date}</time>
                  <div><span className="tag">{item.category}</span><h3>{item.title}</h3></div>
                </article>
              ))}
            </div>
            <Link className="underlink" href="/news">All news →</Link>
          </div>
          <div>
            <SectionLabel n="04">Selected publications</SectionLabel>
            <div className="compact-list publications-compact">
              {publications.filter(p => p.featured).slice(0, 4).map(p => (
                <article key={p.title}>
                  <time>{p.year}</time>
                  <div><h3>{p.title}</h3><p>{p.venue}</p></div>
                </article>
              ))}
            </div>
            <Link className="underlink" href="/publications">All publications →</Link>
          </div>
        </section>

        <section className="cta wrap">
          <p className="eyebrow">Work with us</p>
          <h2>Different disciplines.<br />Shared questions.</h2>
          <p>We welcome conversations across cognitive science, medicine, engineering, design, and artificial intelligence.</p>
          <a className="button light" href="mailto:rfeng68@gatech.edu">Start a conversation <span>↗</span></a>
        </section>
      </main>
    </PageShell>
  );
}
