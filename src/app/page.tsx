'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Imputados from '@/components/Imputados';
import MoneyFlow from '@/components/MoneyFlow';
import Piezas from '@/components/Piezas';
import Speculation from '@/components/Speculation';
import ContextSidebar from '@/components/ContextSidebar';
import caseData from '@/data/caso-montoro.json';

const NetworkGraph = dynamic(() => import('@/components/NetworkGraph'), { 
  ssr: false,
  loading: () => <div className="h-[650px] w-full bg-black/40 animate-pulse rounded-[2.5rem] border border-white/5 flex items-center justify-center data-mono text-slate-500 uppercase text-[10px] tracking-widest">Iniciando Motor de Grafos...</div>
});

function SectionHeader({ title, subtitle, color = "red" }: { title: string, subtitle: string, color?: string }) {
  return (
    <div className="space-y-4 mb-20 text-center">
      <div className="flex items-center justify-center gap-3">
        <div className="h-[1px] w-12 bg-white/10" />
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] data-mono ${color === 'red' ? 'text-red-500' : 'text-amber-500'}`}>
          {title}
        </span>
        <div className="h-[1px] w-12 bg-white/10" />
      </div>
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tightest italic italic">{subtitle}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-6 space-y-48 pb-40">
        
        <section id="resumen" className="pt-20">
          <div className="glass-panel p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <SectionHeader title="INTEL_SUMMARY" subtitle="El Entramado" />
            <p className="text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto italic italic">
              "{caseData.description}"
            </p>
          </div>
        </section>

        <section id="cronologia">
          <SectionHeader title="TIMELINE_LOGS" subtitle="Cronología" />
          <Timeline events={caseData.timeline} />
        </section>

        <section id="speculation">
          <Speculation theories={caseData.theories} />
        </section>

        <section id="red">
          <SectionHeader title="RELATIONAL_MAP" subtitle="Red de Poder" />
          <div className="relative">
            <Suspense fallback={null}>
              <NetworkGraph data={caseData.graph} />
            </Suspense>
          </div>
        </section>

        <section id="imputados">
          <Imputados list={caseData.imputados} />
        </section>

        <section id="dinero">
          <MoneyFlow data={caseData.money} />
        </section>

        <section id="piezas">
          <Piezas />
        </section>

      </div>

      <ContextSidebar />

      <footer className="bg-black/80 border-t border-white/5 py-32 mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black text-xl">M</div>
              <h4 className="text-2xl font-black uppercase italic italic tracking-tight italic">Portal de Transparencia</h4>
            </div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-loose max-w-sm">
              Investigación digital independiente sobre el uso de recursos públicos y el tráfico de influencias en la cúpula estatal.
            </p>
          </div>
          <div className="space-y-8 flex flex-col md:items-end">
            <div className="flex items-center gap-8">
              {[
                { name: 'GITHUB', url: 'https://github.com/DonBorgiFR/CasoMontoro' },
                { name: 'X / TWITTER', url: 'https://twitter.com/intent/tweet?text=Explora%20la%20red%20del%20%23CasoMontoro%3A%20la%20mayor%20trama%20de%20corrupción%20en%20Hacienda.&url=https://github.com/DonBorgiFR/CasoMontoro' },
                { name: 'TELEGRAM', url: 'https://t.me/share/url?url=https://github.com/DonBorgiFR/CasoMontoro&text=Investigación%20del%20Caso%20Montoro' },
                { name: 'SUMARIO', url: '#piezas' }
              ].map(link => (
                <a key={link.name} href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="text-[10px] font-black text-slate-700 hover:text-red-500 transition-colors tracking-widest uppercase data-mono">
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-[9px] font-bold text-slate-800 uppercase tracking-tighter data-mono text-right">
              LAST_UPDATE: 2026-03-21T16:53:13Z // BUILD_ID: 7C2471F7
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-red-600/30" />
      </footer>
    </main>
  );
}
