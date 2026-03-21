'use client';

import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, CreditCard, Landmark } from 'lucide-react';

export default function MoneyFlow({ data }: { data: any[] }) {
  const maxAmount = Math.max(...data.map(d => d.amount));

  return (
    <div className="space-y-16 glass-panel p-12 rounded-[2rem] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Landmark className="w-64 h-64 text-white" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] data-mono">DATA_INTEL: FINANCIAL_FLOW</span>
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tightest mb-2 italic italic">Rastro del Capital</h2>
          <p className="text-slate-400 font-medium max-w-md uppercase text-xs tracking-wider opacity-70">
            Pagos documentados de empresas estratégicas a la consultora del exministro. Análisis de flujos de capital bajo investigación.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
          <TrendingUp className="w-6 h-6 text-amber-500" />
          <div>
            <div className="text-[9px] font-black text-slate-500 uppercase">Total Auditado</div>
            <div className="text-2xl font-black data-mono text-amber-500">€50,734,128</div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {data.map((item, index) => (
          <div key={item.name} className="space-y-3">
            <div className="flex justify-between items-end px-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-none mb-1">Entidad Emisora</span>
                <span className="text-lg font-black text-white uppercase italic tracking-tight italic">{item.name}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none block mb-1">Monto Identificado</span>
                <span className="text-3xl font-black text-red-500 tracking-tighter data-mono">{item.label}</span>
              </div>
            </div>
            <div className="h-4 w-full bg-black/50 rounded-lg border border-white/10 overflow-hidden relative group">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.amount / maxAmount) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-red-600 to-amber-500 relative"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/5">
        {[
          { label: 'Impacto Fiscal 2012', val: '2.200 M€', desc: 'Beneficio fiscal concedido a empresas implicadas.', color: 'amber' },
          { label: 'Pérdida Recaudatoria', val: '59 M€', desc: 'Impuestos que dejaron de percibirse en 2015.', color: 'red' },
          { label: 'Operación Testaferros', val: '35,5 M€', desc: 'Movimientos financieros detectados por Anticorrupción.', color: 'white' }
        ].map((stat, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-2">
              <div className={`w-1 h-3 ${stat.color === 'red' ? 'bg-red-600' : stat.color === 'amber' ? 'bg-amber-500' : 'bg-white/40'}`} />
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
            <div className={`text-4xl font-black data-mono ${stat.color === 'red' ? 'text-red-500' : stat.color === 'amber' ? 'text-amber-500' : 'text-white'}`}>
              {stat.val}
            </div>
            <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase tracking-wide opacity-80">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
