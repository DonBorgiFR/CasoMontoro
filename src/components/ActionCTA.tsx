'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Share2, Megaphone, ShieldAlert } from 'lucide-react';

export default function ActionCTA() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Investigación: Caso Montoro',
          text: 'Descubre el dosier completo sobre la mayor trama de corrupción de Hacienda.',
          url: 'https://github.com/DonBorgiFR/CasoMontoro',
        });
      } catch (err) {
        console.error("Error al compartir:", err);
      }
    } else {
      navigator.clipboard.writeText('https://github.com/DonBorgiFR/CasoMontoro');
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-red-950/20 blur-3xl rounded-full" />
      
      <div className="relative glass-panel border border-red-500/20 rounded-[2rem] p-8 md:p-16 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            <span className="text-red-500 font-black tracking-[0.3em] uppercase text-xs data-mono">
              Intervención Ciudadana Requerida
            </span>
            <ShieldAlert className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            No permitas que prescriba
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            7 años de dilación judicial y un escudo mediático millonario intentan que este entramado se archive en la sombra. Ante la inercia institucional, la <strong>presión ciudadana</strong> es el único contrapeso estructurado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          <motion.div whileHover={{ y: -5 }} className="bg-black/40 border border-white/5 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Rompe el Cerco</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              El silencio es su mayor arma. Comparte este dossier y ayuda a descentralizar la información que los medios afines intentan sepultar.
            </p>
            <button onClick={handleShare} className="w-full py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-colors">
              Compartir Dossier
            </button>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-black/40 border border-red-500/20 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-red-500/5" />
            <div className="relative">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">2. Colaboración y Denuncia</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Si dispones de documentación o conoces operaciones vinculadas a este entramado, no mires a otro lado. Utiliza los canales oficiales de denuncia anónima del Estado.
              </p>
              <a href="https://sede.agenciatributaria.gob.es/Sede/colaborar-agencia-tributaria/denuncias.html" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 text-sm font-bold uppercase tracking-wider rounded-lg border border-red-500/30 transition-all">
                Denuncia AEAT
              </a>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-black/40 border border-white/5 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
              <Megaphone className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">3. Presión Pública</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Aún existen 5 piezas secretas en este caso. Exige activamente en redes la <strong>desclasificación</strong> total del sumario para conocer a fondo la red eléctrica, del juego y patrocinios.
            </p>
            <a href="https://twitter.com/intent/tweet?text=Exigimos%20la%20desclasificación%20íntegra%20de%20las%20piezas%20secretas%20del%20%23CasoMontoro.%20Transparencia%20total%20ya." target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-colors">
              Exigir en X
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
