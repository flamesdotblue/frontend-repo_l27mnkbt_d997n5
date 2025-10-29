import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-[#0b1020]/70' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-white text-lg">Dev.Portfolio</a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
            >
              <FileText size={16} /> Resume
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-zinc-200"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#resume"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-emerald-300 hover:bg-emerald-500/10 transition-colors"
            >
              <span className="inline-flex items-center gap-2"><FileText size={16} /> Resume</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
