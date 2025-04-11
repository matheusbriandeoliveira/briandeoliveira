import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

export function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section className="text-center px-5 py-10 md:py-60 md:px-72 flex flex-col md:flex-row justify-center items-center gap-10">
      {/* Texto à esquerda */}
      <div className=" text-center md:text-left md:w-1/3 text-white">
        <h2 className="text-3xl font-bold mb-2">
          Conhecimentos<span className="text-primary"> .</span>
        </h2>
        <p className="text-xs md:text-sm text-secundary italic">
          *passe o cursor do mouse no card para ler*
        </p>
      </div>

      {/* Grid de ícones */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:w-2/3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-background-secundary text-primary md:hover:text-white md:hover:bg-primary md:hover:scale-105 transition-all duration-300 p-12 rounded-md text-center text-shadow-primary-hover  text-5xl flex items-center justify-center relative group"
          >
            {skill.icon}
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
