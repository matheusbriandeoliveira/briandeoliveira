export function About() {
  return (
    <section className="bg-background-secundary flex flex-col px-20 py-20 text-center items-center gap-10">
      <h2 className="text-4xl font-bold">Sobre mim</h2>

      <div className="text-secundary flex flex-col gap-6 max-w-3xl text-base">
        <p>
          Desenvolvedor Front-End com experiência em React, Tailwind CSS e
          JavaScript, especializado na criação de interfaces responsivas e
          acessíveis. Técnico em Análise e Desenvolvimento de Sistemas e
          atualmente cursando bacharelado na área.
        </p>

        <p>
          Possuo conhecimento em consumo de APIs REST, operações CRUD,
          autenticação e gerenciamento de estado. Busco sempre aplicar boas
          práticas de desenvolvimento, otimização de código e usabilidade para
          criar experiências eficientes e intuitivas.
        </p>
      </div>
    </section>
  );
}
