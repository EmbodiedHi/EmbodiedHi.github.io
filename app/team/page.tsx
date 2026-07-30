import Image from "next/image";
import { PageShell, PageIntro } from "@/components/Site";
import { members } from "@/data/members";
export const metadata = { title: "Team" };
export default function TeamPage() {
  return <PageShell><main id="main">
    <PageIntro kicker="People and perspectives" title="Team"><p>We bring together cognitive science, neuroscience, AI engineering, computational modeling, and human-centered systems research.</p></PageIntro>
    <section className="wrap team-list" aria-label="Team members">{members.map((member, i) => <article className="member" key={member.name}>
      <a href={member.website} target="_blank" rel="noreferrer" className="member-image" aria-label={`Visit ${member.name}'s personal website`}><Image src={member.image} alt={`Portrait of ${member.name}`} width={900} height={1050} sizes="(max-width: 700px) 100vw, 36vw" priority={i === 0} /><span>View profile ↗</span></a>
      <div className="member-copy"><p className="member-number">0{i + 1}</p><h2>{member.name}</h2><p className="member-role">{member.role}</p><p className="member-title">{member.title}</p><p className="member-bio">{member.bio}</p><div className="interest-list">{member.interests.map(x => <span key={x}>{x}</span>)}</div><a className="underlink" href={member.website} target="_blank" rel="noreferrer">Personal website ↗</a></div>
    </article>)}</section>
  </main></PageShell>;
}
