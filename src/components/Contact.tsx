import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-zinc-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* SOBRE */}
        <div>
          <h3 className="text-blue-500 font-bold text-lg mb-2">Jonas Gomes</h3>
          <p className="text-zinc-400 text-sm">
            Junior Developer with a Bachelor's degree in Computer Engineering,
            passionate about building efficient and innovative software solutions.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div>
          <h3 className="text-blue-500 font-bold text-lg mb-2">Navigation</h3>
          <ul className="text-zinc-400 text-sm space-y-1">
            {[
              { href: "#about", label: "Home" },
              { href: "#skills", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#education-experience", label: "Education" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative inline-block hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="inline-block transform hover:scale-110 transition-transform duration-200">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-blue-500 font-bold text-lg mb-2">Contact</h3>
          <ul className="text-zinc-400 text-sm space-y-3">
            {[
              {
                icon: <FaEnvelope className="text-blue-400 group-hover:text-white transition-colors duration-300" />,
                label: "gjonas375@gmail.com",
                href: "mailto:gjonas375@gmail.com",
              },
              {
                icon: <GoLocation className="text-blue-400" />,
                label: "Portugal",
              },
              {
                icon: <FaGithub className="text-blue-400 group-hover:text-white transition-colors duration-300" />,
                label: "GitHub",
                href: "https://github.com/Gr33d0",
              },
              {
                icon: <FaLinkedin className="text-blue-400 group-hover:text-white transition-colors duration-300" />,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/jonas-gomes-pt/",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110">
                  {item.icon}
                </div>
                {item.href ? (
                  <a href={item.href} target="_blank" className="hover:text-blue-400 transition-colors duration-300">
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
