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
              <div className="text-4xl font-bold text-cyan-400 mb-2">3+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-rose-900/20 border border-pink-800/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-pink-400 mb-2">20+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-800/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
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
          <div className="flex flex-col items-center justify-center text-center">
            {/* Main Story Text Container Centered */}
            <div className="w-full max-w-3xl mx-auto">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="space-y-8 flex flex-col items-center"
              >
                {/* Heading */}
                <h2 className="text-white text-4xl font-bold">
                  Our Story
                </h2>

                {/* Paragraph 1 */}
                <p className="text-blue-100 text-lg leading-relaxed">
                  We're a passionate team of digital craftspeople dedicated to creating exceptional digital experiences. Our mission is to help businesses transform their ideas into reality through innovative technology solutions.
                </p>

                {/* Paragraph 2 */}
                <p className="text-blue-100 text-lg leading-relaxed">
                  Founded in 2022, we've grown from a small startup to a leading digital agency, working with clients ranging from innovative startups to Fortune 500 companies. Our approach combines technical expertise with creative vision to deliver solutions that not only meet but exceed expectations.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 pt-4 w-full max-w-md mx-auto flex flex-col items-start pl-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}