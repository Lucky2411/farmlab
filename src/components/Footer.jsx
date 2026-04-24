export default function Footer() {
  return (
    <footer className="px-4 md:px-16 py-12 border-t border-gray-800 text-gray-400 bg-[#0a0f0a]">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT: BRAND */}
        <div>
          <h2 className="text-green-400 text-xl font-bold mb-2">
            Farmlab
          </h2>
          <p className="max-w-sm text-sm">
            Redefining agricultural economics through sustainable and
            data-driven organic solutions.
          </p>
        </div>

        {/* CENTER: LINKS */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <p className="text-white mb-2 font-medium">Company</p>
            <p className="hover:text-green-400 cursor-pointer">About</p>
            <p className="hover:text-green-400 cursor-pointer">Solutions</p>
            <p className="hover:text-green-400 cursor-pointer">Contact</p>
          </div>

          <div>
            <p className="text-white mb-2 font-medium">Support</p>
            <p className="hover:text-green-400 cursor-pointer">Help Center</p>
            <p className="hover:text-green-400 cursor-pointer">Privacy</p>
            <p className="hover:text-green-400 cursor-pointer">Terms</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2026 Farmlab — Sustainable Agriculture at Scale
      </div>

    </footer>
  );
}