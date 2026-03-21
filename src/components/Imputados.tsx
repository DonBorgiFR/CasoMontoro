'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Fingerprint, ShieldAlert, FileText, User, ChevronDown } from 'lucide-react';

interface Imputado {
  id?: string;
  n?: number;
  name: string;
  role: string;
  cat: string;
  nuclear?: boolean;
  image?: string;
  procedural?: {
    status: string;
    details: string;
  };
}

export default function Imputados({ list }: { list: Imputado[] }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'ministerio', name: 'Ministerio' },
    { id: 'aguirre', name: 'Bloque Madrid' },
    { id: 'aznar', name: 'Eje Aznar' },
    { id: 'ee', name: 'Gestores / Pantallas' },
    { id: 'gurtel', name: 'Trama Gürtel' },
    { id: 'global', name: 'Geopolítico' },
    { id: 'judicial', name: 'Judicial' },
    { id: 'medios', name: 'Aparato Mediático' },
    { id: 'vox', name: 'Ala VOX' }
  ];

  const filtered = list.filter(i => {
    const matchCat = filter === 'all' || i.cat === filter;
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) || 
                       i.role.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="space-y-12">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-10 border-b border-white/5">
        <div className="space-y-4 flex-1">
          <h2 className="text-4xl font-black tracking-tightest uppercase italic italic">Directorio de Objetivos</h2>
          <div className="flex flex-wrap gap-2 pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat.id ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-white/5 text-slate-500 hover:text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-red-500 transition-colors" />
          <input
            type="text"
            placeholder="CONSULTAR INDICE DE PERSONAJES..."
            className="bg-black/50 border border-white/10 rounded-xl pl-12 pr-6 py-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-red-500 w-full transition-all data-mono uppercase"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id || item.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setSelectedId(selectedId === item.id ? null : (item.id || null))}
              className={`p-8 rounded-[2.5rem] border group relative overflow-hidden cursor-pointer transition-all ${
                selectedId === item.id ? 'bg-red-950/20 border-red-600/50 shadow-[0_0_40px_rgba(220,38,38,0.1)]' : 'bg-black/40 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-black border border-white/5 overflow-hidden relative group-hover:border-red-600/30 transition-colors">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-800">
                      <User className="w-10 h-10 opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                {item.nuclear && (
                  <div className="pointer-events-none transform rotate-12">
                    <div className="bg-red-600/10 border-2 border-red-600/30 text-red-600 px-4 py-2 rounded-lg font-black text-[10px] tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                      NUCLEAR
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] data-mono text-red-500 font-bold uppercase tracking-widest">{item.cat}</span>
                  <div className="h-[1px] flex-1 bg-white/5" />
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight italic italic leading-none">{item.name}</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed tracking-wider opacity-90 italic">
                  {item.role}
                </p>
              </div>

              <AnimatePresence>
                {selectedId === item.id && item.procedural && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-6 pt-6 border-t border-white/5 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] data-mono text-slate-600 uppercase">Estado Procesal</span>
                      <span className="text-[9px] data-mono text-amber-500 font-bold uppercase tracking-widest">{item.procedural.status}</span>
                    </div>
                    <p className="text-[10px] data-mono text-slate-300 leading-relaxed uppercase tracking-[0.1em]">
                      {item.procedural.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="mt-8 flex items-center justify-between text-[10px] data-mono text-slate-600 uppercase tracking-widest relative z-10">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-3 h-3" />
                  <span>ID: {item.id || item.n || 'CONF_00'}</span>
                </div>
                <div className="flex items-center gap-2 group-hover:text-red-500 transition-colors">
                  <FileText className="w-3 h-3" />
                  <span>EXPEDIENTE_DETALLE</span>
                </div>
              </div>

              {/* Background gradient effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/0 blur-[80px] rounded-full pointer-events-none group-hover:bg-red-600/5 transition-colors" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
