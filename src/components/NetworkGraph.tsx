'use client';

import { useEffect, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { Share2, Maximize2, Info } from 'lucide-react';

export default function NetworkGraph({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: 650
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colorMap: any = {
    ministerio: "#ff0033", // Crimson
    aguirre: "#a855f7",    // Purple
    aznar: "#fb923c",      // Orange
    ee: "#3b82f6",         // Blue
    global: "#22c55e",     // Green
    gurtel: "#eab308",     // Yellow
    vox: "#14b8a6",        // Teal
    judicial: "#f43f5e",   // Rose
    medios: "#0ea5e9"      // Sky Blue
  };

  return (
    <div ref={containerRef} className="w-full glass-panel rounded-[2.5rem] border border-white/5 overflow-hidden relative group">
      
      <div className="absolute top-8 left-8 z-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] data-mono italic">Visualización del Entramado</h3>
        </div>
        
        <div className="flex flex-col gap-2 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5">
          {Object.entries(colorMap).map(([key, color]: [string, any]) => (
            <div key={key} className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}44` }} />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{key}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
        <button title="Expandir" className="p-3 bg-white/5 hover:bg-red-600/20 rounded-xl border border-white/10 text-slate-400 hover:text-red-500 transition-all">
          <Maximize2 className="w-4 h-4" />
        </button>
        <button title="Información" className="p-3 bg-white/5 hover:bg-red-600/20 rounded-xl border border-white/10 text-slate-400 hover:text-red-500 transition-all">
          <Info className="w-4 h-4" />
        </button>
      </div>
      
      <ForceGraph2D
        graphData={data}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        nodeRelSize={7}
        nodeColor={(node: any) => colorMap[node.group] || "#52525b"}
        nodeLabel={(node: any) => node.label}
        linkColor={(link: any) => link.money ? "rgba(255, 170, 0, 0.3)" : "rgba(255, 255, 255, 0.05)"}
        linkWidth={(link: any) => link.money ? 3 : 1}
        linkDirectionalParticles={link => link.money ? 4 : 0}
        linkDirectionalParticleSpeed={0.005}
        linkDirectionalParticleWidth={2}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.label;
          const fontSize = 10/globalScale;
          const color = colorMap[node.group] || "#52525b";
          
          // Draw Glow
          ctx.shadowColor = color;
          ctx.shadowBlur = 15/globalScale;
          
          // Draw Main Node
          ctx.fillStyle = color;
          ctx.beginPath(); 
          ctx.arc(node.x, node.y, 6/globalScale, 0, 2 * Math.PI, false); 
          ctx.fill();
          
          // Reset shadow
          ctx.shadowBlur = 0;

          // Draw Label
          if (globalScale > 1.5) {
            ctx.font = `bold ${fontSize}px JetBrains Mono`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.fillText(label, node.x, node.y + 12/globalScale);
          }
        }}
      />
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[20px] border-black/20 rounded-[2.5rem] blur-sm inset-shadow" />
    </div>
  );
}
