import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

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
    detail: 'Consistent 5-star ratings across all engagements',
    color: '#06B6D4',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    numericValue: 25,
    suffix: '+',
    label: 'Projects Delivered',
    detail: 'Full-stack web, mobile and cloud solutions',
    color: '#3B82F6',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    numericValue: 24,
    suffix: '/7',
    label: 'Dedicated Support',
    detail: 'Rapid response engineering SLA guarantee',
    color: '#a855f7',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HeroStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex items-start gap-4 ${idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}>
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${stat.color}15`,
                  border: `1px solid ${stat.color}35`,
                  boxShadow: `0 0 20px ${stat.color}20`,
                }}
              >
                {stat.icon}
              </div>
              <div className="flex-1">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-0.5">
                  <AnimatedCounter to={stat.numericValue} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-light">
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
