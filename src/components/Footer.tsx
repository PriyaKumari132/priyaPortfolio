export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Priya Tiwari. Crafted with care for modern web experiences.</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:priyatiwari3713@gmail.com" className="transition hover:text-pink-200">
            Email
          </a>
          <a href="https://www.linkedin.com/in/priyatiwari-25ba7036a" target="_blank" rel="noreferrer" className="transition hover:text-pink-200">
            LinkedIn
          </a>
          <a href="https://github.com/PriyaKumari132" target="_blank" rel="noreferrer" className="transition hover:text-pink-200">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
