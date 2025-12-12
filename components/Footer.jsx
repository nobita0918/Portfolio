export default function Footer() {
  return (
    <footer className="w-full py-5 mt-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col gap-3">
        <h2 className="text-3xl font-bold tracking-wider text-white">
          Let’s Build Something Exceptional
        </h2>

        <p className="text-gray-400 text-sm">
          Delivering scalable full-stack solutions with precision.
        </p>

        <div className="flex justify-center gap-6 mt-3">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Portfolio
          </a>
        </div>

        <p className="text-gray-500 text-xs ">
          © {new Date().getFullYear()} • Designed & Engineered with Excellence
        </p>
      </div>
    </footer>
  );
}
