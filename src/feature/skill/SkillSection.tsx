const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python"],
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Communication", "Team Collaboration", "Continuous Learning"],
  },
];

export default function SkillSection() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-200">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tools and technologies I enjoy working with.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-pink-200">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
