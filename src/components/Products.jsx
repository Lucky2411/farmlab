import { motion } from "framer-motion";

export default function Products() {
  const products = [
    "Organic Fertilizer",
    "Soil Health Kit",
    "Crop Booster",
    "Micro Nutrient Mix",
    "Smart Advisory System",
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0d140d] text-white text-center overflow-hidden">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 md:mb-20 font-bold">
        Our Products
      </h2>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0d140d] to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0d140d] to-transparent z-10" />

        {/* CONTINUOUS SCROLL */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25, // 🔥 control speed here
            ease: "linear",
          }}
          className="flex gap-10 w-max"
        >
          {[...products, ...products].map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] h-[140px] 
              bg-gradient-to-br from-white/10 to-white/5 
              border border-white/10 rounded-xl 
              flex items-center justify-center 
              backdrop-blur-xl transition duration-300
              hover:scale-105 hover:bg-white/10"
            >
              <span className="text-lg font-semibold">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex md:hidden overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory">

        {products.map((item, i) => (
          <div
            key={i}
            className="min-w-[220px] h-[130px] snap-center
            bg-white/5 border border-white/10 rounded-xl 
            flex items-center justify-center 
            backdrop-blur transition"
          >
            <span className="text-sm font-medium">
              {item}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}