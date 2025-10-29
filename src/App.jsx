import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="scroll-smooth bg-[#0b1020] min-h-screen font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />

        <section id="resume" className="bg-[#0b1020]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <h2 className="text-xl font-semibold text-white">Resume</h2>
              <p className="mt-2 text-sm text-zinc-400">Download a concise overview of experience, projects, and skills.</p>
              <a
                href="https://drive.google.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-[#0b1020] hover:bg-emerald-400 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0b1020]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Let’s build something great</h2>
            <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
              I’m open to full‑time roles and select freelance projects. Reach out via email or connect on social.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:alex.carter@example.com" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#0b1020] hover:bg-emerald-400 transition-colors">
                Email Me
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors">GitHub</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors">Twitter/X</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1020] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
          <p>
            Built with React, Tailwind, and care — optimized for accessibility and performance.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
