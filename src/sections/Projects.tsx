export function Projects() {
  const projects = [
    { id: 1, color: "border-b-4 border-purple-400" },
    { id: 2, color: "border-b-4 border-blue-400" },
    { id: 3, color: "border-b-4 border-green-400" },
  ];

  return (
    <section className="px-6 py-20 text-center md:px-72 md:py-20 text-white md:text-left">
      <h2 className="text-3xl font-bold mb-10">
        Projetos <span className="text-primary">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-gray-700 h-48 rounded-md ${project.color} transform hover:scale-105 transition-transform duration-300`}
          >
            {/* Imagem ou conteúdo do projeto aqui */}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://github.com/matheusbriandeoliveira"
          target="_blank"
          className="text-primary text-sm underline hover:text-primary-hover transition-colors"
        >
          Repositório no GitHub
        </a>
      </div>
    </section>
  );
}
