export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-pink-400/20 bg-linear-to-br from-pink-500/10 to-slate-900/80 p-8 shadow-2xl shadow-black/30 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-pink-200">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something meaningful together.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I&apos;m open to opportunities, collaborations, and conversations around modern web development.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-lg text-slate-300">
            <a href="mailto:priyatiwari3713@gmail.com" className="block transition hover:text-pink-200">
              Email: priyatiwari3713@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/priyatiwari-25ba7036a" target="_blank" rel="noreferrer" className="block transition hover:text-pink-200">
              LinkedIn: priyatiwari-25ba7036a
            </a>
            <a href="https://github.com/PriyaKumari132" target="_blank" rel="noreferrer" className="block transition hover:text-pink-200">
              GitHub: PriyaKumari132
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
