import { PageShell, PageIntro } from "@/components/Site";
import { news } from "@/data/news";
export const metadata = { title: "News" };
export default function NewsPage() {
  return <PageShell><main id="main"><PageIntro kicker="Notes from the collective" title="News"><p>Verified publications, presentations, milestones, teaching, and project updates from our team.</p></PageIntro>
    <section className="wrap news-list">{news.map((item, i) => <article key={item.title}><span className="news-index">0{i + 1}</span><time>{item.date}</time><div><span className="tag">{item.category}</span><h2>{item.title}</h2></div></article>)}</section>
  </main></PageShell>;
}
