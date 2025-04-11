export function Header() {
  return (
    <header className="">
      <div className="py-6 px-6 text-3xl flex flex-col items-center text-center    md:py-8 md:px-72 md:text-4xl md:flex md:flex-row md:justify-between md:text-center md:items-center">
        <h2 className="uppercase font-semibold">
          Brian<span className="text-primary">()</span>
        </h2>
        <a
          className="text-base text-secundary hidden   md:text-18 md:text-secundary md:block"
          href="#"
        >
          Entrar em contato
        </a>
      </div>
      <hr className="h-0.5 bg-[#101013] border-0" />
    </header>
  );
}
