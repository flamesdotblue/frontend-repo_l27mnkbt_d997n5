import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] grid place-items-center overflow-hidden bg-[#0b1020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/60 via-[#0b1020]/70 to-[#0b1020]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-24">
        <p className="text-emerald-300/80 text-sm font-medium tracking-wider uppercase">Available for freelance & full-time</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Alex Carter
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-zinc-300 max-w-2xl">
          Full‑stack developer specializing in React, Node.js, and cloud‑native architectures. I build fast, accessible, and elegant web experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#0b1020] shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
