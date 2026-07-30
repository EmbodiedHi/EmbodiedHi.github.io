import { PageShell, PageIntro } from "@/components/Site";
import { publications } from "@/data/publications";
export const metadata = { title: "Publications" };
const groups = [["published", "Published Articles"],["preprint", "Preprints"],["under-review", "Under Review"],["in-preparation", "Manuscripts in Preparation"],["conference", "Conference Papers & Presentations"]] as const;
const team = ["Feng, R.", "Huang, Y.", "Chen, Z."];
export default function PublicationsPage() {
  return <PageShell><main id="main">
    <PageIntro kicker="Writing and scholarship" title="Publications"><p>A verified selection from team members’ public profiles, organized by status and maintained as structured data.</p></PageIntro>
    <div className="wrap pub-groups">{groups.map(([status, label]) => { const items = publications.filter(p => p.status === status).sort((a,b) => (b.year || 0) - (a.year || 0)); return <section className="pub-group" key={status}>
      <div className="pub-group-title"><h2>{label}</h2><span>{String(items.length).padStart(2, "0")}</span></div>
      {items.length ? <ol>{items.map(p => <li key={p.title}><div className="pub-year">{p.year || "—"}</div><div><h3>{p.title}</h3><p className="authors">{p.authors.map((a,i) => <span key={`${a}-${i}`}>{team.includes(a) ? <strong>{a}</strong> : a}{i < p.authors.length - 1 ? ", " : ""}</span>)}</p><p className="venue">{p.venue}</p>{p.links && <div className="pub-links">{Object.entries(p.links).map(([k,v]) => <a key={k} href={v} target="_blank" rel="noreferrer">{k} ↗</a>)}</div>}</div></li>)}</ol> : <p className="empty-state">No verified entries yet.</p>}
    </section>; })}</div>
  </main></PageShell>;
}
