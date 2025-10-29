import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'A low‑latency, end‑to‑end encrypted collaboration tool featuring shared documents, presence, and comments with CRDTs.',
    tech: ['React', 'TypeScript', 'WebRTC', 'CRDT'],
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Headless Commerce Platform',
    description:
      'Modular commerce backend with a composable frontend. Focused on performance, SEO, and multi‑region deployments.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Accessible, high‑contrast dashboard with real‑time streaming charts and role‑based access control.',
    tech: ['React', 'FastAPI', 'WebSockets', 'ClickHouse'],
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Design System & UI Kit',
    description:
      'Token‑driven design system with dark mode, component templates, and documentation site.',
    tech: ['Storybook', 'Tailwind', 'TypeScript'],
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b1020] text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Featured Projects</h2>
            <p className="mt-2 text-zinc-400">A selection of recent work. Clean, performant, and purposeful.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:from-white/[0.1] transition-colors">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 text-[11px]">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-[#0b1020] hover:bg-emerald-400 transition-colors"
                  aria-label={`Open live demo of ${p.title}`}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10 transition-colors"
                  aria-label={`Open GitHub repository of ${p.title}`}
                >
                  <Github size={14} /> GitHub Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
