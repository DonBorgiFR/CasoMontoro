'use client';

import { motion } from 'framer-motion';
import { Terminal, Database, ShieldAlert, Cpu } from 'lucide-react';

export default function Hero() {
  const stats = [
    {
      label: 'Personas Investigadas',
      value: '28',
      icon: <Database className="w-4 h-4" />,
      meta: 'Altos funcionarios, asesores y empresarios que presuntamente participaron en la trama',
      alert: 'La mayoría NO ha declarado todavía ante el juez tras 7 años de instrucción'
    },
    {
      label: 'Comisiones Estimadas',
      value: '€50M',
      icon: <Terminal className="w-4 h-4" />,
      meta: 'Cuantificación aproximada de los pagos irregulares a cambio de leyes a medida',
      alert: 'Son 50 millones que debieron ir a colegios, hospitales y servicios públicos'
    },
    {
      label: 'Tomos del Sumario',
      value: '17',
      icon: <Cpu className="w-4 h-4" />,
      meta: 'Vols. de documentación que el juzgado de Tarragona ha reunido durante 7 años de instrucción',
      alert: 'El caso lleva bajo secreto de sumario desde 2018 sin que el grueso de imputados haya testificado'
    },
  ];

  return (
    <section id="hero" className="relative pt-44 pb-32 overflow-hidden scanline">
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] data-mono">
              DIRECTORIO DE INTELIGENCIA / OPERACIÓN MONTORO
            </span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8 uppercase italic italic">
            CASO <br />
            <span className="text-red-600">MONTORO</span>
          </h1>

          <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-xl">
            Desentramando la red de influencias, asesorías paralelas y reformas fiscales a medida. Una investigación digital sobre el poder en la sombra.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-red-500/30 transition-all cursor-default flex flex-col gap-3"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-2 text-slate-500">
                  {stat.icon}
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none">{stat.label}</span>
                </div>
                <div className="text-4xl font-black data-mono text-white group-hover:text-red-500 transition-colors">
                  {stat.value}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">{stat.meta}</p>
                <div className="mt-auto pt-3 border-t border-white/5">
                  <span className="text-[10px] font-bold text-amber-500/80 leading-snug flex items-start gap-1.5">
                    <ShieldAlert className="w-3 h-3 mt-0.5 shrink-0" />
                    {stat.alert}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-32 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-8 animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em] data-mono">
                {`CONFIDENCIAL // EXP: 2024-C-${345+i} // AUDIT_CHK: PASS // `}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
