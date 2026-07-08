import Link from "next/link";

const highlights = ["React.js", "Next.js", "Node.js", "TypeScript", "Python"];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.2),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-200">
            Full Stack Developer • Web Enthusiast • Problem Solver
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-pink-300">Priya Tiwari</span>.
              <br />
              I build thoughtful digital experiences.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I&apos;m a dedicated software engineer with a strong foundation in information technology and hands-on experience creating user-focused web solutions with modern JavaScript and Python technologies.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/Profile.pdf" className="rounded-full bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-pink-400">
              Download Resume
            </Link>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 font-medium text-slate-100 transition hover:border-pink-400/60 hover:text-pink-200">
              Contact Me
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/30">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-200">About the work</p>
          <div className="mt-6 space-y-4 text-slate-300">
            <p>• Turning ideas into polished, interactive web apps.</p>
            <p>• Comfortable across frontend, backend, and modern frameworks.</p>
            <p>• Flexible, curious, and focused on writing clean, scalable code.</p>
          </div>
          <div className="mt-8 rounded-2xl border border-pink-400/20 bg-pink-500/10 p-4 text-sm text-slate-300">
            <p className="font-semibold text-pink-100">Currently based in</p>
            <p>Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
