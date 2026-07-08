export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-black/20 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-pink-200">About me</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Building with purpose and precision.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m a software engineer who enjoys turning complex ideas into elegant, useful web experiences. My background in information technology helps me bridge creativity and engineering, whether I&apos;m shaping a frontend interface or bringing a backend service to life.
            </p>
            <p>
              I believe in learning continuously, solving problems thoughtfully, and contributing to projects that create genuine value for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
