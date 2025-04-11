import euImg from "./assets/eu.png";

export function App() {
  return (
    <main className="flex flex-col-reverse items-center text-center gap-10 px-6 py-10  md:flex md:flex-row md:text-start  md:justify-between  md:items-center md:h-screen md:px-72 md:gap-15">
      {/* Esquerda */}
      <div className="flex flex-col justify-center items-center gap-5  md:w-4xl md:flex md:flex-col md:gap-5 md:items-start">
        <h1 className="text-3xl font-semibold leading-snug md:text-5xl  md:font-semibold  md:leading-snug	">
          Transformando ideias em{" "}
          <span className="text-primary">interfaces modernas</span> e
          intuitivas.
        </h1>
        <p className=" text-secundary ">
          Combinando Design, Desenvolvimento Frontend e tecnologia de ponta,
          transformo ideias em interfaces intuitivas e de alta performance.
        </p>
        <a
          href=""
          className="bg-primary rounded-lg py-4 px-12 w-max mt-4
             hover:bg-primary-hover
             hover:scale-x-110
             transition-transform duration-300 ease-in-out
             origin-left"
        >
          Chama no WhatsApp
        </a>
      </div>
      {/* Fim esquerda */}

      <div className="w-2/3  md:w-1/3 flex ">
        <img
          src={euImg}
          alt="Foto Matheus Brian de Oliveira"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
