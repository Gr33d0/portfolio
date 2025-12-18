import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/animations";

export default function EducationAndExperience() {
  return (
    <section
      id="education-experience"
      className="py-24 px-6 bg-zinc-950 text-zinc-100"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Education & Experience
        </motion.h2>

        {/* FLEX CONTAINER */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* EDUCATION */}
          <div className="flex-1 space-y-6">
            {/* PROFESSIONAL COURSE */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Professional Course in Management and Computer Systems
                  </h3>
                  <p className="text-green-400 text-sm mb-1">
                    10th — 12th Grade · Manuel Teixeira Gomes
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    2019 — 2022 · Completed
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Practical and theoretical training in IT management,
                    software development, databases, networks, and digital
                    technologies applied to business environments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BACHELOR'S DEGREE */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Computer Engineering
                  </h3>
                  <p className="text-orange-400 text-sm mb-1">
                    Bachelor Degree · ISMAT, Portimão
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    2023 — 2025 · Completed
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Solid academic background in software development,
                    algorithms, data structures, databases, and computer
                    systems, with a strong focus on problem-solving and
                    practical projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PROFESSIONAL EXPERIENCE */}
          <div className="flex-1 space-y-6">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 text-xl">
                  💼
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Web Development Internship
                  </h3>
                  <p className="text-yellow-400 text-sm mb-1">
                    ByBruno · Portimão
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    Mar 2021 – Set 2021 · 6 months
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Developed web applications, integrated APIs, maintained
                    databases, and implemented features to optimize internal
                    company processes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
                      HTML/CSS
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
                      Javascript
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
                      PHP
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
                      JQuery
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
