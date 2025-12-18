const skills = ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "HTML/CSS", "JavaScript", "TypeScript", "Python", "Flask", "Git", "Docker","MongoDB","Express.js","Next.js","RESTful APIs","GraphQL"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-900 text-zinc-100 text-center">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="flex justify-center flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-zinc-800 rounded-full text-sm text-zinc-300">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
