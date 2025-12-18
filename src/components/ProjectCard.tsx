import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  video: string // path ou URL do vídeo
}

export default function ProjectCard({
  title,
  description,
  tech,
  video,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* VIDEO PREVIEW */}
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-44 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-zinc-900 rounded-2xl max-w-3xl w-full mx-4 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* VIDEO PLAYER */}
              <video
                src={video}
                controls
                autoPlay
                className="w-full max-h-[70vh] object-contain bg-black"
              />

              {/* INFO */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-zinc-400">{description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
