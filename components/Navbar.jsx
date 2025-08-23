import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './parts/DarkModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow' : 'bg-transparent'} transition`}>
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="text-xl font-bold text-brand-orange">Bhuvan</a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-brand-primary">About</a>
          <a href="#services" className="hover:text-brand-primary">Services</a>
          <a href="#projects" className="hover:text-brand-primary">Projects</a>
          <a href="#contact" className="hover:text-brand-primary">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(v => !v)} aria-label="Toggle Menu">☰</button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-100 dark:bg-slate-800 px-6 py-4"
        >
          <a href="#about" className="block py-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="block py-2" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" className="block py-2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
}
