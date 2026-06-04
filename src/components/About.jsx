import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

const AboutCanvasBackground = () => {
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

    // Create particles
    const particleCount = window.innerWidth < 768 ? 30 : 80;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Base dark background
      ctx.fillStyle = '#020817'; 
      ctx.fillRect(0, 0, width, height);

      // Draw subtle gradient spotlight
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(2, 8, 23, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 180, 255, 0.3)';
        ctx.fill();

        // Draw connections
        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          const maxDist = 180;
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = 0.1 * (1 - dist / maxDist);
            ctx.strokeStyle = `rgba(100, 180, 255, ${alpha})`;
            ctx.stroke();
          }
        });
      });
      
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


export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#020817] overflow-hidden"
    >
      {/* Background Effects */}
      <AboutCanvasBackground />

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* SECTION 1 - HEADER */}
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-coral-500 bg-clip-text text-transparent">
                Sapphire Infotech Solutions
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We are a premier <span className="text-cyan-400 font-semibold">web and app development studio</span> dedicated to crafting exceptional digital experiences that drive real business results.
            </p>
            
            <p className="text-lg text-blue-200/80 leading-relaxed max-w-2xl mx-auto">
              Founded with a vision to transform ideas into powerful digital solutions, we combine cutting-edge technology with creative innovation to build websites and applications that stand out in today's competitive landscape.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-800/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-rose-900/20 border border-pink-800/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-800/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">30+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mt-16 p-8 rounded-2xl bg-black/40 border border-blue-800/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-blue-100/90 leading-relaxed">
              To empower businesses with innovative digital solutions that not only meet their needs but exceed their expectations — delivering measurable growth through technology.
            </p>
          </motion.div>
        </div>

        {/* SECTION 2 - MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column (60%) */}
            <div className="lg:col-span-3">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Heading */}
                <h2 className="text-white text-4xl font-bold">
                  About Sapphire Infotech Solutions
                </h2>

                {/* Paragraph 1 */}
                <p className="text-blue-100 text-lg leading-relaxed">
                  We're a passionate team of digital craftspeople dedicated to creating exceptional digital experiences. Our mission is to help businesses transform their ideas into reality through innovative technology solutions.
                </p>

                {/* Paragraph 2 */}
                <p className="text-blue-100 text-lg leading-relaxed">
                  Founded in 2026, we've grown from a small startup to a leading digital agency, working with clients ranging from innovative startups to Fortune 500 companies. Our approach combines technical expertise with creative vision to deliver solutions that not only meet but exceed expectations.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 pt-4">
                  {[
                    'Innovation-driven approach',
                    'Agile development methodology',
                    '24/7 support and maintenance',
                    'Transparent communication'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      custom={0.8 + index * 0.1}
                      className="flex items-center gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-blue-100 text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column (40%) - Stat Cards Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-6">
                {/* Card 1: People/Team */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.8}
                  className="p-6 rounded-[12px] border border-blue-500/20"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-3xl">25+</div>
                      <div className="text-gray-400 text-sm mt-1">Expert Team Members</div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Lightbulb/Ideas */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.9}
                  className="p-6 rounded-[12px] border border-blue-500/20"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-20C5.58 1 2 4.58 2 8c0 2.25 1.16 4.23 2.91 5.39.26 3.02 2.95 5.39 6.29 5.39s6.03-2.37 6.29-5.39C20.84 12.23 22 10.25 22 8c0-3.42-3.58-7-7-7zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-3xl">1+</div>
                      <div className="text-gray-400 text-sm mt-1">Years of Experience</div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Globe/Countries */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={1.0}
                  className="p-6 rounded-[12px] border border-blue-500/20"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-3xl">2+</div>
                      <div className="text-gray-400 text-sm mt-1">Countries Served</div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: Heart/Clients */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={1.1}
                  className="p-6 rounded-[12px] border border-blue-500/20"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-3xl">500+</div>
                      <div className="text-gray-400 text-sm mt-1">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}