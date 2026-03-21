'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, ShieldAlert, Scale, HelpCircle } from 'lucide-react';

const CONTEXT_DATA = {
  'nuclear': {
    title: 'Rol Nuclear',
    desc: 'Individuo central en la toma de decisiones o en la arquitectura del entramado. Su implicación es estructural, no periférica.',
    type: 'Investigación'
  },
  'prevaricacion': {
    title: 'Prevaricación',
    desc: 'Delito que consiste en que una autoridad, juez u otro servidor público dicta una resolución arbitraria a sabiendas de que es injusta.',
    type: 'Legal'
  },
  'cohecho': {
    title: 'Cohecho',
    desc: 'Soborno. Solicitar o recibir una dádiva a cambio de realizar u omitir un acto inherente a su cargo.',
    type: 'Legal'
  },
  'ee': {
    title: 'Equipo Económico (EE)',
    desc: 'Consultora fundada por Montoro en 2006. Se sospecha que sirvió para canalizar influencias políticas hacia intereses privados.',
    type: 'Entramado'
  }
};

export default function ContextSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTerm, setActiveTerm] = useState<keyof typeof CONTEXT_DATA | null>(null);

  const openTerm = (term: keyof typeof CONTEXT_DATA) => {
    setActiveTerm(term);
    setIsOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-8 left-8 z-40">
        <button 
          title="Abrir Glosario Intel"
          onClick={() => setIsOpen(true)}
          className="p-4 bg-red-600 text-white rounded-full shadow-2xl shadow-red-900/40 hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <HelpCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black text-[10px] uppercase tracking-widest">Glosario Intel</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-black/95 backdrop-blur-2xl z-[60] border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] p-12 overflow-y-auto custom-scrollbar"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-6 bg-red-600" />
                <h2 className="text-2xl font-black uppercase italic italic">Glosario de Campo</h2>
              </div>
              <button 
                title="Cerrar Glosario"
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="space-y-8">
              {Object.entries(CONTEXT_DATA).map(([key, data]) => (
                <div key={key} className="space-y-4 p-6 glass-panel rounded-2xl border-white/5 hover:border-red-500/30 transition-all group">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-widest data-mono">{data.type}</span>
                    <Info className="w-4 h-4 text-slate-700 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-black uppercase italic italic tracking-tight italic">{data.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed uppercase text-xs tracking-wide opacity-80">{data.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-red-900/10 border border-red-900/20">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-5 h-5 text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500 data-mono">Aviso Legal</span>
              </div>
              <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-wider">
                Toda la información contenida en este portal ha sido extraída de fuentes públicas, autos judiciales y reportajes de investigación autoritarios (ABC, El Confidencial, El Mundo). Las teorías se presentan como tales: hipótesis de investigación basadas en patrones documentados.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
