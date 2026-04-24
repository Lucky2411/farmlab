import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Analyze Soil Conditions",
      desc: "We evaluate soil composition and nutrient levels to understand field requirements.",
    },
    {
      title: "Apply Organic Solutions",
      desc: "Customized organic fertilizers are applied to improve soil health sustainably.",
    },
    {
      title: "Optimize Yield with Data",
      desc: "Continuous monitoring and insights help maximize crop productivity.",
    },
  ];

  return (
    <section className="px-4 md:px-16 py-20 md:py-32 bg-[#0d140d] text-white">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 font-semibold text-center">
        How Farmlab Works
      </h2>

      {/* STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur
                       hover:scale-105 transition text-center"
          >

            {/* STEP NUMBER */}
            <div className="w-10 h-10 flex items-center justify-center mx-auto mb-4 
                            rounded-full bg-green-400 text-black font-bold">
              {i + 1}
            </div>

            {/* TITLE */}
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {step.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm md:text-base">
              {step.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}