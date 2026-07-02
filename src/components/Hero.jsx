import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay },
  }),
};

/* ── Interactive Canvas Wave Network Background ── */
const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const waveParticles = [];
    const rows = 20;
    const cols = 45;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        waveParticles.push({ x: (j - cols / 2) * 55, z: i * 45 });
      }
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#f8fafc'; 
      ctx.fillRect(0, 0, width, height);
      time += 0.012;

      const waveFocalLength = 380;
      ctx.beginPath();
      waveParticles.forEach((p) => {
        const y = Math.sin(p.x * 0.004 + time) * 45 + Math.sin(p.z * 0.008 + time) * 35;
        const z = p.z;
        const scale = waveFocalLength / (waveFocalLength + z);
        if (scale < 0) return;
        const x2d = p.x * scale + width / 2;
        const y2d = y * scale + height * 0.88;
        const alpha = Math.max(0, 1 - z / (rows * 45)) * 0.4;
        
        ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`; 
        ctx.moveTo(x2d, y2d);
        ctx.arc(x2d, y2d, 1.2 * scale, 0, Math.PI * 2);
      });
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

/* ── Creative Tech Ecosystem Canvas Illustration ── */
const TechEcosystem = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[550px] aspect-square flex items-center justify-center overflow-visible">
      {/* Dynamic Background Blur Glow */}
      <motion.div 
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 blur-3xl pointer-events-none"
      />

      {/* Main Container Layer Perspective Matrix */}
      <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
        
        {/* BACK LAYER: Cloud Database Pods */}
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[25%] w-[50%] h-[25%] z-10"
        >
          <svg viewBox="0 0 300 120" fill="none" className="overflow-visible">
            <rect x="20" y="10" width="260" height="90" rx="20" fill="white" stroke="#e2e8f0" strokeWidth="2" style={{ filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.04))' }} />
            {/* Server Lines */}
            <line x1="50" y1="40" x2="250" y2="40" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <line x1="50" y1="55" x2="210" y2="55" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <line x1="50" y1="70" x2="180" y2="70" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
            {/* Blinking Data Status Lights */}
            <motion.circle cx="240" cy="65" r="4" fill="#10B981" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <motion.circle cx="254" cy="65" r="4" fill="#3B82F6" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>
        </motion.div>

        {/* MID LAYER: Main Interactive IDE Code Workspace Screen */}
        <motion.div 
          animate={{ y: [6, -6, 6], rotateX: [12, 15, 12], rotateY: [-8, -12, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28%] left-[10%] w-[80%] h-[50%] z-20 origin-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden flex flex-col">
            {/* Window Upper Bar Elements */}
            <div className="flex gap-2 mb-4 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div className="ml-4 h-3 w-28 bg-slate-800 rounded-full" />
            </div>
            
            {/* Mock Code Block Compiler Simulation */}
            <div className="space-y-3 font-mono text-xs text-slate-400 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-pink-500">import</span>
                <span className="text-cyan-400">{"{ scalable, robust }"}</span>
                <span className="text-pink-500">from</span>
                <span className="text-emerald-400">'Sapphire Infotech Solutions'</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <span className="text-blue-400">const</span>
                <span className="text-yellow-400">initProject</span>
                <span className="text-pink-500">=</span>
                <span className="text-purple-400">()</span>
                <span className="text-blue-400">=&gt;</span>
                <span className="text-white">{"{"}</span>
              </div>
              {/* Animated line trace */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded pl-4 opacity-80" 
              />
              <div className="h-3 w-[60%] bg-slate-800 rounded pl-4" />
              <div className="h-3 w-[45%] bg-slate-800 rounded pl-4" />
              <div className="text-white pl-4">{"}"}</div>
            </div>

            {/* Inner Glass Overlay Panel */}
            <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">API</div>
              <div className="space-y-1">
                <div className="h-2 w-12 bg-white/40 rounded-full" />
                <div className="h-1.5 w-16 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* FRONT LAYER: Floating Data Graph & Microservices Nodes */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[8%] left-[18%] w-[64%] h-[24%] z-30 flex gap-4"
        >
          {/* Node Component 1: Analytical Graph Canvas */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="h-2.5 w-16 bg-slate-200 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            {/* Micro Graph Vector */}
            <svg viewBox="0 0 120 40" className="w-full h-12 overflow-visible">
              <motion.path 
                d="M0 35 Q 20 10, 40 25 T 80 5 T 120 20" 
                fill="none" stroke="url(#graphBlue)" strokeWidth="3" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <defs>
                <linearGradient id="graphBlue" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Node Component 2: Secure Lock Key Metric Block */}
          <div 
            className="w-[35%] bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300"
            style={{ borderColor: hoveredNode === 'secure' ? '#7C3AED' : '#e2e8f0' }}
            onMouseEnter={() => setHoveredNode('secure')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div className="h-2 w-12 bg-slate-200 rounded-full" />
          </div>
        </motion.div>

        {/* FLOATING CONNECTIONS: Floating Peripheral Satellite Dots */}
        {[
          { top: '35%', left: '5%', color: '#3B82F6', scale: 0.8 },
          { top: '20%', right: '8%', color: '#06B6D4', scale: 1.1 },
          { top: '75%', right: '12%', color: '#7C3AED', scale: 0.9 },
        ].map((sat, index) => (
          <motion.div
            key={index}
            animate={{ scale: [1, 1.2, 1], y: [0, index * 4 - 6, 0] }}
            transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-4 h-4 rounded-full border-4 border-white shadow-md z-40"
            style={{ top: sat.top, left: sat.left, right: sat.right, backgroundColor: sat.color, transform: `scale(${sat.scale})` }}
          />
        ))}

      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-visible md:overflow-hidden bg-[#f8fafc] pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Background Interactive Elements */}
      <CanvasBackground />

      {/* Grid Overlay Matrix */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="heroLightGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f172a" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroLightGrid)" />
      </svg>

      {/* Main Structural Layout Assembly */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex items-center w-full md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center w-full">
          
          {/* LEFT COLUMN ── Text Content Blocks */}
          <div className="flex flex-col text-left order-1 lg:order-1 max-w-xl pt-4 md:pt-0">
            <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0}
  className="mb-4"
>
  <div className="inline-flex items-center justify-center px-5 py-2 rounded-full border-2 border-cyan-200 bg-cyan-50 text-sky-800 font-bold uppercase tracking-wider shadow-sm">
    Sapphire Infotech Solutions
  </div>
</motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 mb-5"
            >
              We Build{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0891B2, #2563EB, #7C3AED)' }}>
                Digital Experiences
              </span>
              <span> That Matter</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="space-y-2 mb-10 text-slate-600 font-medium text-base md:text-lg leading-relaxed"
            >
              <p>Sapphire Infotech Solutions crafts high-performance websites and mobile applications.</p>
              <p>Tailored around your core business metrics — from wireframe architecture to final execution pipeline.</p>
              <p>Optimize deployment parameters, scale backend nodes, and reduce structural infrastructure overhead.</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl text-white font-bold text-base bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/10 transition-colors duration-200 inline-block text-center"
              >
                Find out how
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN ── Premium Vector Illustration Display */}
          <div className="flex justify-center items-center order-2 lg:order-2 w-full -mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="w-full flex justify-center scale-[0.92] sm:scale-100 origin-top"
            >
              <TechEcosystem />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
