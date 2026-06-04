import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay,
    },
  }),
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 border-t border-gray-200 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',

            filter: 'blur(80px)',
          }}
        />

        <div
          className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)',

            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}

          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >

          {[
            {
              value: '20+',
              label: 'Projects Delivered',
            },

            {
              value: '30+',
              label: 'Happy Clients',
            },

            {
              value: '5★',
              label: 'Average Rating',
            },
          ].map((stat, index) => (

            <motion.div
              key={stat.label}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="relative text-center min-w-[220px] px-10 py-10 rounded-3xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >

              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

              {/* Number */}
              <p className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-gray-600 text-sm md:text-base font-medium tracking-wide">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}