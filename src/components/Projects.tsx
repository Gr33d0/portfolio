import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import { staggerContainer, fadeUp } from "../animations/animations.ts"

const projects = [
  {
    title: "ReadMe Generator",
    description: "Web application project for generating README.md files for GitHub. The tool allows you to edit text in real time, add and remove common sections (description, installation, usage, license, etc.), and generate a customized README file, facilitating project documentation.",
    tech: ["React.js", "Typescript", "Vite", "Tailwind CSS","MongoDB","Node.js","Express"],
    video: "/videos/READMeGenerator.mp4",
  },
  {
    title: "Zeta",
    description: "Zeta is an educational web platform created to make learning Python accessible, intuitive, and engaging. The application allows users to learn programming interactively, solving challenges through visual blocks or text code, adapting to different experience levels.",
    tech: ["React.js", "Bootstrap", "Express", ""],
    video: "/videos/Zeta.mp4",
  },
  {
    title: "Table of vacancies",
    description: "A web application that displays job vacancies in a dynamic table format. Users can filter and sort job listings based on various criteria such as location, job type, and company. The application aims to simplify the job search process by providing an organized and user-friendly interface.",
    tech: ["React.js", "Bootstrap", "Express", "W.I.P"],
    video: "",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950 text-zinc-100">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <motion.div key={i} variants={fadeUp}>
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}
