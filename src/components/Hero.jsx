import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

/* ── Interactive Dark Wave Network Background ── */
const DarkCanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};

/* ── Cyber Tech Ecosystem 3D Showcase (Octalogic style) ── */
const TechEcosystem = () => {
  return (
    <div className="relative w-full max-w-[440px] lg:max-w-[520px] aspect-square flex items-center justify-center">
      {/* Background Neon Halo */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/30 blur-3xl pointer-events-none"
      />

      <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
        
        {/* BACK LAYER: Floating Cloud Cluster */}
        <motion.div 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[6%] left-[20%] w-[60%] h-[22%] z-10"
        >
          <div className="w-full h-full rounded-2xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 p-4 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">Cloud Engine v2.4</div>
                <div className="text-[10px] text-slate-400 font-mono">Status: 99.9% Uptime Active</div>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-6 rounded-sm bg-cyan-500/40" />
              <div className="w-2 h-6 rounded-sm bg-blue-500/60" />
              <div className="w-2 h-6 rounded-sm bg-purple-500/80" />
            </div>
          </div>
        </motion.div>

        {/* MID LAYER: Main Cyber IDE Code Editor */}
        <motion.div 
          animate={{ y: [6, -6, 6], rotateX: [8, 12, 8], rotateY: [-6, -10, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[22%] left-[6%] w-[88%] h-[54%] z-20 origin-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full bg-[#0a0f1d]/90 backdrop-blur-2xl rounded-2xl border border-white/10 p-5 shadow-2xl shadow-cyan-950/40 relative overflow-hidden flex flex-col">
            {/* Top Bar with traffic lights */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">CrescentStudio.tsx</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                LIVE
              </div>
            </div>
            
            {/* Code Syntax Visual */}
            <div className="space-y-2.5 font-mono text-xs text-slate-300 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-pink-400 font-semibold">import</span>
                <span className="text-cyan-300">{"{ HighPerformance, Scalable }"}</span>
                <span className="text-pink-400 font-semibold">from</span>
                <span className="text-amber-300">'@crescent/core'</span>
              </div>
              <div className="flex items-center gap-2 pl-3">
                <span className="text-blue-400">const</span>
                <span className="text-emerald-300 font-bold">deployFuture</span>
                <span className="text-pink-400">=</span>
                <span className="text-purple-300">async</span>
                <span className="text-white">() =&gt; {"{"}</span>
              </div>
              <div className="pl-6 space-y-1">
                <div className="text-slate-400 text-[11px]">// Architectural Excellence</div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">await</span>
                  <span className="text-cyan-300">launchExperience</span>
                  <span className="text-slate-400">({'{'} speed: </span>
                  <span className="text-amber-400">'100/100'</span>
                  <span className="text-slate-400">, design: </span>
                  <span className="text-emerald-400">'elite'</span>
                  <span className="text-slate-400"> {'}'})</span>
                </div>
              </div>
              {/* Animated Progress Laser Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full my-1 shadow-sm shadow-cyan-400/50" 
              />
              <div className="text-white pl-3">{"}"}</div>
            </div>

            {/* Glowing Corner Badge */}
            <div className="absolute bottom-3 right-3 bg-cyan-950/70 border border-cyan-500/30 rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-lg shadow-cyan-900/30">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <div className="text-[11px] font-mono text-cyan-200 font-bold">0ms Latency</div>
            </div>
          </div>
        </motion.div>

        {/* FRONT LAYER: Micro Analytics & Security Pods */}
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-[6%] left-[12%] w-[76%] h-[24%] z-30 flex gap-3.5"
        >
          {/* Node 1: Live Traffic Metric */}
          <div className="flex-1 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 shadow-2xl flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>SYSTEM THROUGHPUT</span>
              <span className="text-emerald-400 font-bold">+240%</span>
            </div>
            {/* SVG Sparkline */}
            <svg viewBox="0 0 120 30" className="w-full h-8 overflow-visible">
              <motion.path 
                d="M 0 25 Q 25 5, 50 18 T 90 4 T 120 12" 
                fill="none" 
                stroke="url(#sparklineCyan)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <defs>
                <linearGradient id="sparklineCyan" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Node 2: Security Lock */}
          <div className="w-[38%] bg-slate-900/90 backdrop-blur-xl border border-purple-500/20 rounded-xl p-3 shadow-2xl flex flex-col items-center justify-center gap-1.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div className="text-[10px] font-mono text-purple-300 font-semibold">End-To-End</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full pt-20 sm:pt-24 pb-10 sm:pb-14 overflow-hidden">
      {/* Background Interactive Canvas */}
      <DarkCanvasBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headings & CTAs (7 cols) */}
          <div className="flex flex-col text-left lg:col-span-7 max-w-2xl pt-2 sm:pt-4">
            
            {/* Live Availability Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-4 flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wide backdrop-blur-md shadow-sm shadow-cyan-950">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Available for New Projects</span>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-slate-500">|</span>
              <span className="text-xs font-mono text-slate-400 tracking-wider">CRESCENT TECHWORKS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-4"
            >
              We Build{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              <br />
              <span className="text-slate-100">That Matter.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal mb-6 max-w-xl"
            >
              CRESCENT TECHWORKS INNOVATIONS LLP builds high-performance web applications, 
              scalable mobile apps, and cloud infrastructures that transform business ideas into market leaders.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neon-btn-primary px-6 py-3 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2"
              >
                <span>Explore Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neon-btn-ghost px-6 py-3 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2"
              >
                <span>Book a Discovery Call</span>
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Micro Trust Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex items-center gap-6 pt-4 border-t border-white/[0.08]"
            >
              <div>
                <div className="text-xl font-black text-white">25+</div>
                <div className="text-xs text-slate-400 font-mono">Projects Delivered</div>
              </div>
              <div className="h-7 w-px bg-white/10" />
              <div>
                <div className="text-xl font-black text-cyan-400">99.9%</div>
                <div className="text-xs text-slate-400 font-mono">Client Satisfaction</div>
              </div>
              <div className="h-7 w-px bg-white/10" />
              <div>
                <div className="text-xl font-black text-purple-400">24/7</div>
                <div className="text-xs text-slate-400 font-mono">Engineering Support</div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D Ecosystem Visual (5 cols) */}
          <div className="flex justify-center items-center lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <TechEcosystem />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
