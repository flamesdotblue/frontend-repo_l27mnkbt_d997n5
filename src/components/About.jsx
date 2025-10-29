import { Code2, Database, Server, Wrench, Linkedin, Github } from 'lucide-react';

export default function About() {
  const skills = {
    Frontend: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61dafb' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/38bdf8' },
    ],
    Backend: [
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/75A362' },
      { name: 'Express', icon: 'https://cdn.simpleicons.org/express/ffffff' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
    ],
    Databases: [
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/336791' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
    ],
    Tools: [
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
    ],
  };

  const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    Databases: Database,
    Tools: Wrench,
  };

  return (
    <section id="about" className="bg-[#0b1020] text-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
              alt="Professional headshot"
              className="aspect-square w-full max-w-xs rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/40"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-white">About Me</h2>
            <div className="mt-4 space-y-4 text-zinc-300 leading-relaxed">
              <p>
                I’m a full‑stack software developer with 6+ years of experience crafting high‑performance web apps. I focus on clean architecture, developer experience, and measurable impact.
              </p>
              <p>
                My core stack includes React, TypeScript, Node.js, and cloud services. I care deeply about accessibility, performance budgets, and maintainable systems.
              </p>
              <p>
                I’m currently seeking opportunities to build products that matter — whether that’s leading frontend initiatives, shipping end‑to‑end features, or optimizing platforms at scale.
              </p>
            </div>

            <div id="skills" className="mt-12">
              <h3 className="text-xl font-semibold text-white">Skills & Tech</h3>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills).map(([category, list]) => {
                  const Icon = categoryIcons[category];
                  return (
                    <div key={category} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-white">
                        <Icon size={18} className="text-emerald-300" />
                        <span className="text-sm font-medium">{category}</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {list.map((item) => (
                          <li key={item.name} className="flex items-center gap-2">
                            <img src={item.icon} alt={item.name} className="h-4 w-4" loading="lazy" />
                            <span className="text-sm text-zinc-300">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
