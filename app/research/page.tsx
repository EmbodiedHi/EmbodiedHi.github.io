import { PageShell, PageIntro, SectionLabel } from "@/components/Site";
import { research } from "@/data/research";
import Link from "next/link";
export const metadata = { title: "Research Directions" };
export default function ResearchPage() {
  return <PageShell><main id="main">
    <PageIntro kicker="What we investigate" title="Research Directions"><p>Our work moves between fundamental questions about human intelligence and the systems through which those questions become testable.</p></PageIntro>
    <div className="wrap research-stack">{research.map((item, i) => <section className="research-detail" id={item.slug} key={item.slug}>
      <SectionLabel n={`0${i + 1}`}>Direction</SectionLabel>
      <div className="research-heading"><h2>{item.title}</h2><p>{item.description}</p></div>
      <div className="research-body">
        <div className="research-visual" aria-label={`Conceptual placeholder for ${item.title}`}><span>{String(i + 1).padStart(2, "0")}</span><div className="orbit"><i/><i/><i/></div></div>
        <div><h3>Representative questions</h3><ul>{item.questions.map(q => <li key={q}>{q}</li>)}</ul></div>
        <div><h3>Methods</h3><div className="method-list">{item.methods.map(m => <span key={m}>{m}</span>)}</div><h3 className="people-label">People</h3><p>{item.people.join(" · ")}</p><Link className="underlink" href="/publications">Related publications →</Link></div>
      </div>
    </section>)}</div>
  </main></PageShell>;
}
