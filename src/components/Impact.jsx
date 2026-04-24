import { motion } from "framer-motion";

const stats = [
  { value: "60%", label: "Cost Reduction" },
  { value: "80%", label: "Yield Increase" },
  { value: "5000+", label: "Farmers Onboarded" },
];

export default function Impact() {
  return (
    <section className="px-4 md:px-16 py-20 md:py-32 bg-[#0d140d] text-center">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 font-semibold text-white">
        Proven Impact at Scale
      </h2>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur
                       hover:scale-105 transition"
          >
            <h3 className="text-4xl md:text-5xl text-green-400 font-bold">
              {s.value}
            </h3>

            <p className="text-gray-400 mt-3 text-sm md:text-base">
              {s.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}