import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import { animate, useMotionValue, useTransform } from 'framer-motion';

function AnimatedCounter({ from = 0, to, suffix = '' }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  {
    numericValue: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.8), rgba(6,182,212,0.2))',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    numericValue: 20,
    suffix: '+',
    label: 'Projects Completed',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.8), rgba(59,130,246,0.2))',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 5h-2V3H7v2H5C3.9 5 3 5.9 3 7v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 16v2H7v2h10v-2h-4v-2a5.01 5.01 0 003.61-3.06C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zm-2 3.82A3.004 3.004 0 0114.18 11H9.82A3.004 3.004 0 017 8.82V7h2V5h6v2h2v1.82z" />
      </svg>
    ),
  },
  {
    numericValue: 24,
    suffix: '/7',
    label: 'Support Available',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.8), rgba(168,85,247,0.2))',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1C7.03 1 3 5.03 3 10v3c0 1.1.9 2 2 2h1v-5H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-1v5h1c1.1 0 2-.9 2-2v-3c0-4.97-4.03-9-9-9zm-1 14h2v-2h-2v2zm0-4h2V7h-2v4z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function StatCard({ stat, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-between w-full h-[140px] px-8 rounded-2xl transition-all duration-300"
      style={{
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(12px)',
        border: `2px solid rgba(6, 182, 212, 0.3)`,
        boxShadow: isHovered
          ? `0 15px 35px ${stat.color}33, inset 0 0 20px ${stat.color}15`
          : '0 0 25px rgba(59, 130, 246, 0.15)',
        transform: isHovered ? 'translateY(-8px) scale(1.08)' : 'translateY(0) scale(1)',
        borderColor: isHovered ? `${stat.color}80` : 'rgba(6, 182, 212, 0.3)',
      }}
    >
      {/* Icon Area */}
      <motion.div
        className="flex items-center justify-center w-16 h-16 rounded-xl shrink-0"
        style={{
          background: stat.gradient,
          boxShadow: isHovered ? `0 0 20px ${stat.color}80` : `0 0 10px ${stat.color}40`,
        }}
        animate={isHovered ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        {stat.icon}
      </motion.div>

      {/* Text Area */}
      <div className="flex flex-col items-end text-right">
        <span className="text-[36px] font-bold text-white leading-none">
          <AnimatedCounter to={stat.numericValue} suffix={stat.suffix} />
        </span>
        <span className="text-[14px] font-medium text-[#cbd5e1] mt-1.5">
          {stat.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function HeroStats() {
  const ref = useRef(null);
  
  return (
    <section 
      ref={ref} 
      className="relative w-full bg-[#020817] py-20"
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
