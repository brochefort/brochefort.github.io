import portrait from "./assets/beth-portrait.jpg";
import logo from "./assets/beth-logo.png";

type Domain = {
  id: string;
  label: string;
  blurb: string;
  bg: string;
  fg: string;
  anchor: string;
};

const domains: Domain[] = [
  {
    id: "01",
    label: "Learning",
    blurb: "Higher ed and Workplace: Experiential curriculum, courses, and programs designed for transfer — not just completion.",
    bg: "bg-periwinkle",
    fg: "text-ink",
    anchor: "work-learning-design",
  },
  {
    id: "02",
    label: "AI Adoption",
    blurb: "Helping teams move past prompt tricks into durable, role-relevant AI fluency.",
    bg: "bg-ink",
    fg: "text-paper",
    anchor: "work-ai",
  },
  {
    id: "03",
    label: "Digital Transformation",
    blurb: "Learning ecosystems, ed tech, process, and change strategy that move organizations from pilot to practice.",
    bg: "bg-teal",
    fg: "text-ink",
    anchor: "work-digital",
  },
  {
    id: "04",
    label: "Teaching",
    blurb: "Classroom, hybrid, online, workshops grounded in experiential best practices.",
    bg: "bg-sage",
    fg: "text-ink",
    anchor: "work-teaching",
  },
];

type Project = { no: string; title: string; client: string; year: string; href?: string };

const workGroups: { anchor: string; label: string; accent: string; projects: Project[] }[] = [
  {
    anchor: "work-learning-design",
    label: "Learning Design",
    accent: "text-periwinkle",
    projects: [
      {
        no: "01",
        title: "Online Learning and AI: BoardBot — Gem for Collaboration",
        client: "Brandeis Univ. · Financial Management for Jewish Nonprofits",
        year: "2026",
      },
      {
        no: "02",
        title: "AI-Powered Instructional Design for Course Development",
        client: "Northeastern University · Brandeis University",
        year: "2026",
      },
    ],
  },
  {
    anchor: "work-ai",
    label: "AI Adoption",
    accent: "text-ink",
    projects: [
      {
        no: "01",
        title: "Women Applying AI",
        client: "Founding member · learning design lead, community builder, workshop developer",
        year: "Ongoing",
        href: "https://womenapplyingai.com/",
      },
      {
        no: "02",
        title: "eLearning and AI Upskilling for Nonprofits",
        client: "",
        year: "Ongoing",
      },
    ],
  },
  {
    anchor: "work-digital",
    label: "Digital Transformation",
    accent: "text-teal",
    projects: [
      {
        no: "01",
        title: "Process Examples",
        client: "",
        year: "Ongoing",
        href: "/beth-rochefort-examples.pdf",
      },
    ],
  },
  {
    anchor: "work-teaching",
    label: "Teaching",
    accent: "text-sage",
    projects: [
      { no: "01", title: "Prototype Your Innovation", client: "", year: "2026" },
      { no: "02", title: "Teaching with AI Resources", client: "", year: "2026" },
    ],
  },
];

const skills = [
  "Teaching",
  "Learning Design",
  "EdTech Strategy",
  "AI Adoption",
  "Digital Transformation",
  "L&D Architecture",
  "Change Management",
  "Curriculum Design",
];

function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return <img src={logo} alt="Beth Rochefort logo" className={className} />;
}

export default function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-ink bg-paper">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <Logo className="h-9 w-auto" />
            <span className="sr-only">Beth Rochefort</span>
          </a>
          <ul className="flex items-center gap-4 md:gap-6 font-head text-xs md:text-sm uppercase tracking-widest">
            <li><a href="#work" className="hover:text-sage transition-colors">Work</a></li>
            <li><a href="#perspective" className="hover:text-periwinkle transition-colors">Perspective</a></li>
            <li><a href="#about" className="hover:text-teal transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-ink transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="border-b border-ink">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-12">
          <div className="relative md:col-span-5 border-b md:border-b-0 md:border-r border-ink bg-paper">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={portrait}
                alt="Beth Rochefort, learning innovation leader"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between p-6 md:p-12">
            <div className="font-head text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio · 2026
            </div>
            <h1 className="font-display text-[14vw] leading-[0.88] tracking-tight md:text-[8.5vw] uppercase mt-8 md:mt-0">
              Learning
              <br />
              <span className="text-sage">Innovation</span>
              <br />
              for the
              <br />
              <span className="text-periwinkle">AI era.</span>
            </h1>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-ink/80 md:text-lg">
              I'm Beth: an ed tech specialist, learning designer and innovator, digital
              transformation strategist that connects people, translates across teams, and
              makes complex change actually stick.
            </p>
          </div>
        </div>

        {/* Domain blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-ink">
          {domains.map((d, i) => (
            <div
              key={d.id}
              className={`${d.bg} ${d.fg} p-6 md:p-8 flex flex-col min-h-[320px] border-ink ${
                i < domains.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
              }`}
            >
              <span className="font-head text-xs uppercase tracking-widest opacity-70">{d.id}</span>
              <h3 className="mt-6 font-display text-2xl md:text-3xl uppercase leading-tight min-h-[3.5rem] md:min-h-[4rem]">
                {d.label}
              </h3>
              <p className="mt-3 font-body text-xs leading-relaxed opacity-90">
                {d.blurb}
              </p>
              <a
                href={`#${d.anchor}`}
                className="mt-auto pt-6 inline-block self-start font-head text-xs uppercase tracking-widest border-b border-current pb-0.5 hover:opacity-70 transition-opacity"
              >
                View work →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-b border-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
          <div className="flex items-end justify-between border-b border-ink pb-6">
            <a
              href="/beth-rochefort-examples.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-head text-xs uppercase tracking-[0.3em] hover:text-sage transition-colors"
            >
              Selected Work
            </a>
            <span className="font-head text-xs uppercase tracking-widest text-muted-foreground">
              Grouped by practice
            </span>
          </div>

          {workGroups.map((g) => (
            <div key={g.anchor} id={g.anchor} className="mt-16 first:mt-12 scroll-mt-24">
              <div className="flex items-baseline justify-between border-b border-ink/30 pb-4">
                <h3 className={`font-display text-xl md:text-2xl uppercase ${g.accent}`}>
                  {g.label}
                </h3>
                <span className="font-head text-xs uppercase tracking-widest text-muted-foreground">
                  {g.projects.length} projects
                </span>
              </div>
              <ul>
                {g.projects.map((p) => (
                  <li key={p.no} className="group border-b border-ink">
                    <a
                      href={p.href ?? "#contact"}
                      {...(p.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="grid grid-cols-12 items-baseline gap-4 py-6 md:py-8 transition-colors hover:bg-sage/20"
                    >
                      <span className="col-span-2 md:col-span-1 font-head text-sm tracking-widest text-muted-foreground">
                        {p.no}
                      </span>
                      <span className="col-span-10 md:col-span-7 font-display text-xl md:text-4xl uppercase leading-tight">
                        {p.title}
                        {p.href && <span aria-hidden className="ml-2 text-base align-middle">↗</span>}
                      </span>
                      <span className="col-span-8 md:col-span-3 font-body text-sm text-ink/70 md:text-base">
                        {p.client}
                      </span>
                      <span className="col-span-4 md:col-span-1 text-right font-head text-sm tracking-widest">
                        {p.year}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-ink">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <div className="aspect-[4/5] w-full overflow-hidden border border-ink bg-muted">
              <img
                src={portrait}
                alt="Beth Rochefort"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 md:pl-8">
            <h2 className="font-head text-xs uppercase tracking-[0.3em] border-b border-ink pb-6">
              About
            </h2>
            <p className="mt-8 font-display text-3xl md:text-5xl uppercase leading-[1.05]">
              I help institutions and enterprises turn
              <span className="text-sage"> learning </span>
              into a
              <span className="text-periwinkle"> competitive advantage</span>.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="font-body text-base leading-relaxed text-ink/80">
                With a background spanning higher education, corporate L&amp;D, and emerging
                technology, I design programs that move organizations from curiosity to
                capability — especially around AI.
              </p>
              <p className="font-body text-base leading-relaxed text-ink/80">
                My work blends teaching, learning design, change management, and technology
                strategy. I partner with leaders to build durable systems — not one-off
                trainings — that meet people where they are.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="border border-ink px-3 py-2 font-head text-xs uppercase tracking-widest"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PERSPECTIVE */}
      <section id="perspective" className="bg-paper border-b border-ink scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-40">
          <h2 className="font-head text-xs uppercase tracking-[0.3em]">My Perspective</h2>
          <blockquote className="mt-10 font-head text-2xl md:text-[2.1rem] leading-[1.45] text-ink">
            I see the <span className="text-periwinkle">invisible infrastructure</span> of how work
            actually gets done — not the org chart version, but the real handoffs, translations,
            and trust-building that make collaboration work. My contrarian belief: technology
            adoption isn't a training problem, it's a{" "}
            <span className="text-sage">relationship problem</span>. I connect dots others don't
            see, spotting where one team has already solved what another is struggling with, or
            where the real blocker is misaligned incentives rather than missing skills. As AI
            accelerates technical change, organizations will increasingly need people who can
            build the <span className="text-teal">human infrastructure</span> for sustainable
            adoption — which is exactly where I thrive.
          </blockquote>
          <div className="mt-10 flex items-center gap-3 border-t border-ink pt-6">
            <Logo className="h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-sage border-b border-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-40">
          <h2 className="font-head text-xs uppercase tracking-[0.3em]">Contact</h2>
          <p className="mt-8 font-display text-[12vw] leading-[0.9] uppercase md:text-[7vw]">
            Let's build
            <br />something →
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-ink pt-8 md:grid-cols-3">
            <span className="font-head text-base uppercase tracking-widest">
              Contact me
            </span>
            <a
              href="https://www.linkedin.com/in/bethrochefort/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-head text-base uppercase tracking-widest hover:text-paper transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="font-head text-base uppercase tracking-widest text-ink/70 md:text-right">
              Based in the US · Available 2026
            </span>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-auto invert" />
            <span className="font-head text-xs uppercase tracking-widest">
              © 2026 Beth Rochefort
            </span>
          </div>
          <span className="font-head text-xs uppercase tracking-widest text-paper/60">
            Learning · AI Adoption · Digital Transformation · Teaching
          </span>
        </div>
      </footer>
    </main>
  );
}
