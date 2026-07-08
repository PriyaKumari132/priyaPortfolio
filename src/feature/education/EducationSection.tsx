const education = [
  {
    institution: "Noida Institute of Engineering & Technology",
    degree: "Bachelor of Technology, Information Technology",
    period: "August 2025 – June 2029",
  },
  {
    institution: "Kendriya Vidyalaya AFS Kumbhirgram",
    degree: "12th Standard, Mathematics and Computer Science",
    period: "2023 – 2024",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-200">Education</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Academic foundation and growth.</h2>
        </div>
        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.institution} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20">
              <p className="text-sm text-pink-200">{item.period}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.institution}</h3>
              <p className="mt-3 text-lg text-slate-300">{item.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
