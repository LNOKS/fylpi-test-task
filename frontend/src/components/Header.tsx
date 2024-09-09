type HeaderProps = {
  logo: string;
};

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full text-base max-w-[1165px] text-neutral-700 max-md:max-w-full">
      <div className="flex gap-6 font-semibold tracking-wider uppercase">
        <img loading="lazy" src={logo} alt="Company Logo" className="object-contain shrink-0 aspect-square w-[60px]" />
        <div className="my-auto basis-auto">Immobilien Suche</div>
      </div>
      <nav className="flex gap-6 items-center my-auto max-md:max-w-full">
        <a href="#" className="gap-10 self-stretch px-1 py-0.5 my-auto whitespace-nowrap rounded">Kaufen</a>
        <a href="#" className="gap-10 self-stretch px-1 py-0.5 my-auto whitespace-nowrap rounded">Mieten</a>
        <a href="#" className="gap-10 self-stretch px-1 py-0.5 my-auto rounded">Inserat schalten</a>
        <button className="gap-1.5 self-stretch px-4 py-2 my-auto rounded bg-neutral-700 text-neutral-50">Sign in</button>
        <button className="gap-10 self-stretch px-1 py-0.5 my-auto text-right whitespace-nowrap rounded">ENG</button>
      </nav>
    </header>
  );
};

export default Header;