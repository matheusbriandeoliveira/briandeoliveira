export function About() {
  return (
    <section className="bg-background-secundary px-6 py-10 flex flex-col md:px-20 md:py-40 text-center items-center gap-10">
      <h2 className="text-4xl font-bold">Sobre mim</h2>

      <div className="max-w-full text-secundary flex flex-col gap-6 md:max-w-3xl md:text-lg">
        <p>
          Sou um Desenvolvedor Front-End Júnior e desenvolvo aplicações web
          modernas, escaláveis e responsivas. Trabalho com React.js, TypeScript
          e TailwindCSS para criar interfaces intuitivas e performáticas.
          Técnico em Análise e Desenvolvimento de Sistemas e atualmente cursando
          bacharelado na área.
        </p>

        <p>
          Tenho experiência com APIs REST, gerenciamento de estado com Context
          API e React Hooks, além de controle de versões com Git/GitHub. Também
          faço deploys otimizados na Vercel, sempre priorizando performance e
          boas práticas no desenvolvimento.
        </p>
      </div>
    </section>
  );
}
