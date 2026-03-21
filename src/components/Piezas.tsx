'use client';

import { motion } from 'framer-motion';
import { FileText, Lock, Shield, AlertCircle } from 'lucide-react';

export default function Piezas() {
  const piezas = [
    { title: 'Pieza Principal', desc: 'Gasistas y reformas fiscales a medida. 17 tomos de investigación documental.', color: 'red', status: 'ABIERTA' },
    { title: 'Piezas Secretas', desc: 'Sectores eléctrico, renovable y del juego. Información bajo secreto de sumario.', color: 'slate', status: 'SECRETISMO' },
    { title: 'Gürtel / Caja B', desc: 'Maniobras para entorpecer investigaciones contra el Partido Popular.', color: 'purple', status: 'VINCULADA' },
    { title: 'Pieza Rato', desc: 'Perjuicio deliberado a Rodrigo Rato desde el Ministerio de Hacienda.', color: 'orange', status: 'INVESTIGACIÓN' },
    { title: 'Pieza Aguirre', desc: 'Indicios de vigilancia y perjuicio a Esperanza Aguirre (Púnica/Lezo).', color: 'blue', status: 'DERIVADA' },
    { title: 'Pieza Monedero', desc: 'Indicios de perjuicio a Juan Carlos Monedero (Podemos) por motivos políticos.', color: 'green', status: 'PROCESAL' },
  ];

  const colorMap: Record<string, string> = {
    red: 'text-red-600 bg-red-600',
    slate: 'text-slate-600 bg-slate-600',
    purple: 'text-purple-600 bg-purple-600',
    orange: 'text-orange-600 bg-orange-600',
    blue: 'text-blue-600 bg-blue-600',
    green: 'text-green-600 bg-green-600'
  };

  const detalles = [
    {
      title: "Pieza Principal: El Núcleo de la Trama",
      color: "border-red-600",
      accent: "text-red-400",
      sections: [
        { heading: "¿Qué ocurrió?", body: "Funcionarios de Hacienda con vínculos al despacho «Equipo Económico» (fundado por Montoro) redactaron o modificaron normas fiscales favorables a grandes empresas gasistas a cambio de jugosas comisiones. Es el meollo de la investigación." },
        { heading: "¿Es eso delito?", body: "Sí. Se llama 'tráfico de influencias', 'prevaricación' y 'corrupción'. Un funcionario que usa su cargo para beneficiar a quien le paga comete un delito grave (de 6 meses a 6 años de prisión). Si lo hace siendo Ministro, la gravedad se multiplica." },
        { heading: "¿Por qué no hay juicio todavía?", body: "La instrucción lleva más de 7 años en el Juzgado de Instrucción Nº 3 de Tarragona. Los abogados han presentado decenas de recursos para detener cada paso. La Fiscalía Anticorrupción ha denunciado públicamente estas 'maniobras dilatorias masivas'." },
        { heading: "¿Qué suponen los 17 tomos?", body: "Cada 'tomo' son cientos de páginas de pruebas: extractos bancarios, correos, contratos. 17 tomos es un volumen que indica una investigación de complejidad y gravedad extraordinaria, comparable a los grandes casos de corrupción europeos." }
      ]
    },
    {
      title: "Piezas Secretas: Lo que Aún No Podemos Ver",
      color: "border-slate-600",
      accent: "text-slate-300",
      sections: [
        { heading: "¿Qué se investiga aquí?", body: "Según filtraciones periodísticas, el mismo sistema de leyes a cambio de comisiones se habría extendido a los sectores eléctrico, renovables y del juego online. Estos expedientes siguen bajo secreto de sumario completo." },
        { heading: "¿Qué significa 'secreto de sumario'?", body: "Que ni los imputados ni la prensa pueden acceder al contenido del expediente. Aunque tiene una finalidad legítima (proteger la investigación), cuando dura años puede usarse como herramienta para retrasar el proceso y ocultar información al ciudadano." }
      ]
    },
    {
      title: "Gürtel / Caja B: La Financiación Corrupta del PP",
      color: "border-purple-600",
      accent: "text-purple-400",
      sections: [
        { heading: "¿Qué es la Gürtel?", body: "Un sistema de corrupción organizado que durante décadas cobró comisiones ilegales al PP a cambio de contratos públicos. Francisco Correa era el cerebro y Luis Bárcenas, extesorero del PP, gestionaba el dinero en cuentas secretas en Suiza (la 'Caja B' o contabilidad paralela)." },
        { heading: "La sentencia histórica de 2018", body: "El Tribunal Supremo confirmó la existencia de la Caja B y condenó al PP como 'partícipe lucrativo' —el partido se benefició del sistema. Esto provocó la primera Moción de Censura exitosa de la democracia española, expulsando a Rajoy de La Moncloa." },
        { heading: "La conexión con Montoro", body: "Bárcenas intentó usar la Amnistía Fiscal de Montoro (2012) para blanquear los 10M€ suizos. Esa amnistía fue declarada inconstitucional en 2017 pues, según el Tribunal Constitucional, 'legitimaba el fraude' fiscal." }
      ]
    },
    {
      title: "Pieza Rato: El Ministerio como Arma",
      color: "border-orange-600",
      accent: "text-orange-400",
      sections: [
        { heading: "¿Qué se alega?", body: "Rodrigo Rato, exministro del PP y exjefe del FMI, denunció que desde Hacienda (bajo Montoro) se filtraron a medios afines sus datos fiscales confidenciales para destruir su reputación mientras era investigado por corrupción. El objetivo: silenciar a un rival interno." },
        { heading: "Por qué importa a cualquier ciudadano", body: "Si un Ministerio filtra tus impuestos a la prensa para hundirte, eso vulnera tu derecho a la intimidad y constituye un delito de revelación de secretos. Que ocurra a nivel político supone que las instituciones se usan como armas particulares, no al servicio de la ciudadanía." }
      ]
    },
  ];

  return (
    <div className="space-y-16 py-10">
      <div className="flex items-center gap-6 border-b border-white/5 pb-8">
        <div className="p-4 bg-white/5 rounded-2xl">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-4xl font-black uppercase tracking-tightest italic">Estructura Procesal</h3>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mt-1">Fragmentación del sumario en piezas separadas</p>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {piezas.map((pieza, index) => (
          <motion.div
            key={pieza.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass-panel p-8 rounded-3xl hover:bg-white/[0.03] transition-all cursor-default overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lock className="w-16 h-16" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className={`text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-current ${colorMap[pieza.color].split(' ')[0]} bg-current/5`}>
                {pieza.status}
              </span>
              <span className="text-[10px] font-bold text-slate-700 data-mono uppercase">REF_PZ_{index + 1}</span>
            </div>
            <h4 className="text-2xl font-black mb-4 group-hover:text-white transition-colors uppercase italic tracking-tight">{pieza.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{pieza.desc}</p>
            <div className="flex items-center gap-2 text-[9px] font-black text-red-500/60 uppercase tracking-widest">
              <AlertCircle className="w-3.5 h-3.5" />
              Ver desglose completo abajo
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed breakdowns */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-red-600" />
          <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] data-mono">Desglose Procesal — En Palabras Claras</h4>
        </div>

        {detalles.map((block) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`glass-panel rounded-2xl border-l-4 ${block.color} overflow-hidden`}
          >
            <div className="p-8">
              <h5 className={`text-xl font-black uppercase italic tracking-tight mb-6 ${block.accent}`}>{block.title}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {block.sections.map((s, si) => (
                  <div key={si} className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{s.heading}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-12 glass-panel rounded-[2rem] border-l-8 border-l-red-600 bg-gradient-to-r from-red-600/5 to-transparent relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Shield className="w-40 h-40 text-red-600" />
        </div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <p className="text-red-500 font-black tracking-[0.3em] text-[10px] uppercase data-mono italic">Testimonio Clave de Archivo</p>
        </div>
        <blockquote className="text-3xl md:text-5xl font-black italic text-white tracking-tightest leading-[1.1] mb-8 uppercase">
          &ldquo;Soy el ministro de Hacienda… <br />
          Yo decido el IVA del libro digital… <br />
          Tenlo presente.&rdquo;
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-10 h-[1px] bg-red-600" />
          <cite className="text-slate-500 text-[10px] font-black uppercase tracking-widest data-mono">
            — Cristóbal Montoro a Javier Chicote (ABC)
          </cite>
        </div>
      </motion.div>
    </div>
  );
}
