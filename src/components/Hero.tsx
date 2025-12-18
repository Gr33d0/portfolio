import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";
import gipphy from "../assets/giphy.gif";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* GIF de fundo com leve flutuação */}
      <motion.img
        src={gipphy}
        alt="Background GIF"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Conteúdo animado com stagger */}
      <motion.div
        className="z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl font-bold text-white"
        >
          Hi, I'm <span className="text-indigo-500">&lt;Jonas Gomes/&gt;</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-zinc-100 text-lg max-w-xl"
        >
          Web Applications • Backend • Frontend • APIs
        </motion.p>

        {/* Botão separado com margin-top */}
        <motion.a
          variants={fadeUp}
          href="#projects"
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
