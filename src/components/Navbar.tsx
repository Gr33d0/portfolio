export default function Navbar() {
  return (
    <nav className="fixed w-full bg-zinc-950 text-zinc-100 px-6 py-4 flex justify-between items-center shadow-md z-10">
      <h1 className="text-xl font-bold">My name is Jonas Gomes</h1>
      <div className="space-x-6">
        {[
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#education-experience", label: "Education & Experience" },
          { href: "#contact", label: "Contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-indigo-400 transition-colors duration-300 relative"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(link.href);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
