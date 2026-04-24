export default function Value() {
  const items = [
    "Organic Fertilizer Innovation",
    "Soil Intelligence System",
    "Farmer Advisory Platform",
  ];

  return (
    <section className="px-16 py-32">
      <h2 className="text-3xl mb-12 font-semibold">
        Technology & Solutions
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-[#111] rounded-xl hover:scale-105 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}