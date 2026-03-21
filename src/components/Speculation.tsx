'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShieldCheck, ChevronRight } from 'lucide-react';

interface Theory {
  id: string;
  title: string;
  desc: string;
  level: string;
  evidence: string;
}

export default function Speculation({ theories }: { theories: Theory[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!theories || theories.length === 0) return null;

  return (
    <div className="py-20 space-y-12">
      <div className="flex items-center gap-6 border-b border-white/5 pb-10">
        <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
          <Globe className="w-8 h-8 text-amber-500" />
        </div>
        <div>
          <h3 className="text-4xl font-black uppercase tracking-tightest italic italic">Laboratorio de Teorías</h3>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mt-1">Geopolítica // Conexión Global // Hipótesis Pizarrón</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-4">
          {theories.map((theory, i) => (
            <button
              key={theory.id}
              onClick={() => setActiveIndex(i)}
              className={`w-full p-6 rounded-2xl text-left transition-all border group relative overflow-hidden ${
                activeIndex === i 
                ? 'bg-amber-600/10 border-amber-500/50 shadow-lg shadow-amber-900/20' 
                : 'bg-black/40 border-white/5 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[9px] font-black px-2 py-1 rounded bg-amber-500/20 text-amber-500 data-mono uppercase tracking-[0.1em]`}>
                  STATUS: {theory.level}
                </span>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeIndex === i ? 'rotate-90 text-amber-500' : 'text-slate-700'}`} />
              </div>
              <h4 className="font-black uppercase italic tracking-tight italic truncate text-lg">{theory.title}</h4>
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/0 blur-[40px] rounded-full group-hover:bg-amber-500/5" />
            </button>
          ))}
        </div>

        <div className="lg:col-span-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="glass-panel p-10 md:p-16 rounded-[3rem] min-h-[500px] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
              
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-amber-500 font-black tracking-[0.3em] text-[10px] uppercase data-mono">
                  <ShieldCheck className="w-4 h-4" />
                  ANALYSIS_NODE: {theories[activeIndex].id}
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tightest uppercase italic italic italic italic">{theories[activeIndex].title}</h3>
                <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed italic italic opacity-90">
                  "{theories[activeIndex].desc}"
                </p>
              </div>

              <div className="mt-16 pt-12 border-t border-amber-500/10 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-amber-500/30" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 data-mono">EVIDENCIA // INDICIOS</span>
                </div>
                <div className="bg-amber-500/5 p-8 rounded-[2rem] border border-amber-500/10 text-slate-400 font-bold text-sm uppercase tracking-widest leading-loose data-mono">
                  {theories[activeIndex].evidence}
                </div>
              </div>

              {/* Decorative scanline */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
