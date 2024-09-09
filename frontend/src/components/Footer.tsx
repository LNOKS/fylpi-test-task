const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center self-stretch px-20 py-7 mt-36 rounded-lg bg-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1160px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a53078c7c1c4a9fe3a07b58c61f1a79905acee565b07996322c45eeaff8b805?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55"
          alt="Company Logo"
          className="object-contain aspect-square w-[60px]"
        />
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
              <address className="flex flex-col w-full text-base text-neutral-50 max-md:mt-10 not-italic">
                <div className="flex flex-col w-full">
                  <p className="leading-6">
                    Fylpi Immo-online GmbH
                    <br />
                    Forchheimergasse 3/13, 1230 Wien, Österreich
                  </p>
                  <p className="mt-6">office@fylpi.at | www.fylpi.at</p>
                </div>
                <a
                  href="#"
                  className="flex gap-1.5 items-center self-start mt-6 whitespace-nowrap"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/874d6f9471011f72960b75aaef524c4feeea63f77307a672f1d8d0dd93754e77?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
                  />
                  <span className="self-stretch my-auto">YouTube</span>
                </a>
              </address>
            </div>
            <nav className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <ul className="flex flex-col grow items-end text-base text-neutral-50 max-md:mt-10">
                      <li className="max-w-full w-[260px] max-md:pr-5">
                        <a href="#">Über uns</a>
                      </li>
                      <li className="mt-4 max-w-full w-[260px] max-md:pr-5">
                        <a href="#">Kontaktieren Sie uns</a>
                      </li>
                      <li className="mt-4 max-w-full w-[260px] max-md:pr-5">
                        <a href="#">Mein Konto</a>
                      </li>
                      <li className="mt-4 max-w-full whitespace-nowrap w-[260px] max-md:pr-5">
                        <a href="#">Kaufen</a>
                      </li>
                      <li className="mt-4 max-w-full whitespace-nowrap w-[260px] max-md:pr-5">
                        <a href="#">Mieten</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <ul className="flex flex-col grow items-end text-base text-neutral-50 max-md:mt-10">
                      <li className="max-w-full whitespace-nowrap w-[260px] max-md:pr-5">
                        <a href="#">FAQ</a>
                      </li>
                      <li className="mt-4 max-w-full w-[260px] max-md:pr-5">
                        <a href="#">Service rund um die Immobilie</a>
                      </li>
                      <li className="mt-4 max-w-full w-[260px] max-md:pr-5">
                        <a href="#">Praktische Anleitungen</a>
                      </li>
                      <li className="mt-4 max-w-full w-[260px] max-md:pr-5">
                        <a href="#">Wissen rund um die Immobilie</a>
                      </li>
                      <li className="mt-4 max-w-full whitespace-nowrap w-[260px] max-md:pr-5">
                        <a href="#">Beratungsdienste</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <hr className="flex shrink-0 mt-20 h-px bg-gray-400 max-md:mt-10 max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 mt-6 w-full text-base text-gray-400 max-md:max-w-full">
          <p>© 2024 Fylpi. Alle Rechte vorbehalten.</p>
          <div className="flex flex-1 gap-6 items-center text-right whitespace-nowrap">
            <a href="#" className="self-stretch my-auto w-[78px]">
              Impressum
            </a>
            <a href="#" className="self-stretch my-auto w-[157px]">
              Nutzungsbedingungen
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
