import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">
      {/* LEFT SIDE CONTENT */}
    <div className="max-w-2xl z-10 text-center md:text-left">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
         className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white"
        >
          Engineering the Future of{" "}
          <span className="text-green-400">
            Sustainable Agriculture
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Scalable organic solutions designed to reduce cost,
          improve soil health, and maximize crop yield.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
         className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Explore Platform
          </button>

          <button className="border border-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Partner With Us
          </button>
        </motion.div>

      </div>

      {/* RIGHT SIDE — DATA FLOW ANIMATION */}
<div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
        {/* Core Node */}
        <div className="w-24 h-24 bg-green-400 rounded-full shadow-[0_0_60px_#4ade80] z-10" />

        {/* Expanding Rings (Data Pulse) */}
        {[1, 2, 3].map((r) => (
          <motion.div
            key={r}
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: r * 0.8,
              ease: "easeOut",
            }}
            className="absolute w-24 h-24 border border-green-400/30 rounded-full"
          />
        ))}

        {/* Rotating Data Orbits */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10 + i * 2,
              ease: "linear",
            }}
            className="absolute w-[260px] h-[260px]"
          >
            <div
              className="w-3 h-3 bg-green-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2"
            />
          </motion.div>
        ))}

        {/* Subtle Glow */}
        <div className="absolute w-[300px] h-[300px] bg-green-500/10 rounded-full blur-3xl" />

      </div>

    </section>
  );
}