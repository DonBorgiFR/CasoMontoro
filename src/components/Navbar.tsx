'use client';

import { useState, useEffect } from 'react';
import { Shield, Menu, X, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'EXPEDIENTE', href: 'hero' },
    { name: 'CRONOLOGÍA', href: 'cronologia' },
    { name: 'RED DE INFL.', href: 'red' },
    { name: 'PERSONAJES', href: 'imputados' },
    { name: 'PROCESAL', href: 'piezas' },
  ];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async function handleShare() {
    const shareData = {
      title: 'Caso Montoro — Portal de Investigación',
      text: 'Un dossier interactivo sobre la red de influencias que afecta al sistema público español. 28 investigados, 17 tomos, 7 años de instrucción sin declaraciones.',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareState('copied');
        setTimeout(() => setShareState('idle'), 2500);
      }
    } catch {
      // user cancelled or error — do nothing
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-panel rounded-2xl px-6 py-3 flex items-center justify-between border-l-4 border-l-red-600 transition-all ${isScrolled ? 'shadow-2xl bg-black/80' : ''}`}>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Shield className="w-8 h-8 text-red-600" />
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-red-600/20 blur-xl rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter leading-none data-mono">CASO MONTORO</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[10px] font-bold text-amber-500 tracking-widest uppercase">Status: Investigación Abierta</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-[11px] font-bold text-slate-400 hover:text-white transition-colors tracking-widest uppercase hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-white/10 mx-4" />
            <button
              title={shareState === 'copied' ? 'Enlace copiado al portapapeles' : 'Compartir esta investigación'}
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-[11px] font-bold tracking-widest uppercase transition-all shadow-lg shadow-red-900/40"
            >
              <Share2 className="w-3.5 h-3.5" />
              {shareState === 'copied' ? '¡Copiado!' : 'Compartir'}
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-400"
            title={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 px-6 overflow-hidden"
          >
            <div className="flex flex-col py-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => { scrollToSection(link.href); setMobileMenuOpen(false); }}
                  className="text-lg font-bold text-slate-400 hover:text-white transition-colors tracking-tight uppercase text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => { handleShare(); setMobileMenuOpen(false); }}
                className="flex items-center gap-2 text-lg font-bold text-red-500 hover:text-red-400 transition-colors tracking-tight uppercase"
              >
                <Share2 className="w-5 h-5" />
                Compartir
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
