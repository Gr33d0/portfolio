import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";
import gipphy from "../assets/giphy.gif";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* GIF de fundo */}
      <img
        src={gipphy}
        alt="Background GIF"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay escura para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Conteúdo animado */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-5xl font-bold text-white z-10"
      >
        Hi, I'm <span className="text-indigo-500">&lt;Jonas Gomes/&gt;</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="mt-4 text-zinc-100 text-lg z-10 max-w-xl"
      >
      Web Applications • Backend • Frontend • APIs
      </motion.p>

      <motion.a
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        href="#projects"
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 z-10"
      >
        View My Projects
      </motion.a>

    </section>
  );
}
