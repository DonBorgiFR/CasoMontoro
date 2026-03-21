'use client';

import { motion } from 'framer-motion';

export default function Timeline({ events }: { events: any[] }) {
  return (
    <div className="relative py-20 overflow-hidden">
      
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-600/30 to-transparent -translate-x-1/2" />

      <div className="space-y-32">
        {events.map((event, index) => (
          <motion.div
            key={event.year + index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex items-center justify-between gap-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className="w-1/2 px-6">
              <div className={`p-8 glass-panel rounded-3xl relative hover:border-red-500/50 transition-all group ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full shadow-[0_0_15px_rgba(255,0,51,0.6)] ${index % 2 === 0 ? '-right-[2.5rem]' : '-left-[2.5rem]'}`} />
                <span className="text-[10px] font-black text-red-500 mb-2 block tracking-widest data-mono">REPORT_LOG_{100+index}</span>
                <h3 className="text-3xl font-black mb-4 data-mono">{event.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{event.description}</p>
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-center pointer-events-none">
              <span className="text-[12rem] font-black text-white/[0.03] tracking-tightest absolute z-0 select-none italic">
                {event.year}
              </span>
              <div className="relative z-10 text-center">
                <span className="text-5xl font-black data-mono tracking-tighter text-white/90">{event.year}</span>
                <div className="h-[2px] w-12 bg-red-600 mx-auto mt-2" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
