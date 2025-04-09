export function App() {
  return (
    <main className="flex justify-between items-center h-screen px-92">
      {/* Esquerda */}
      <div className="w-4xl flex flex-col gap-5">
        <h1 className="text-5xl font-semibold leading-snug	">
          Transformando ideias em{" "}
          <span className="text-primary">interfaces modernas</span> e
          intuitivas.
        </h1>
        <p className=" text-secundary">
          Combinando Design, Desenvolvimento Frontend e tecnologia de ponta,
          transformo ideias em interfaces intuitivas e de alta performance.
        </p>
        <a
          href=""
          className="bg-primary bg:g rounded-lg py-4 px-12 w-max mt-4 hover:bg-primary-hover transition-colors"
        >
          Chama no WhatsApp
        </a>
      </div>
      {/* Fim esquerda */}

      <div className="w-lg">
        <img
          src="/eu.png"
          alt="Foto Matheus Brian de Oliveira"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
