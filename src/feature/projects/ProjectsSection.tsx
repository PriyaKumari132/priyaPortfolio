const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website designed to present skills, experience, and contact details in a clean and elegant way.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Web Application Concept",
    description: "A polished interactive concept focused on usability, performance, and accessible design for modern digital products.",
    stack: ["React.js", "Node.js", "JavaScript"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-200">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work and ideas I&apos;m proud of.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
