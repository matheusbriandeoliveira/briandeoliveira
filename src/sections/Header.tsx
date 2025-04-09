export function Header() {
  return (
    <header className="">
      <div className="py-8 px-92 text-4xl flex flex-row justify-between text-center items-center">
        <h2 className="uppercase font-semibold">
          Brian<span className="text-primary">()</span>
        </h2>
        <a className="text-18 text-secundary" href="#">
          Entrar em contato
        </a>
      </div>
      <hr className="h-0.5 bg-[#101013] border-0" />
    </header>
  );
}
