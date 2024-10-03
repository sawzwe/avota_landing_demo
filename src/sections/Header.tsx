import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const NavLink = ({ title, to }: { title: string; to: string }) => (
  <LinkScroll
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    to={to}
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" alt="XoraLogo" width={115} height={55} />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before">
            <nav className="max-lg:relatuve max-lg:block max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" to={""} />
                  <div className="dot" />
                  <NavLink title="pricing" to={""} />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="XoraLogo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" to={""} />
                  <div className="dot" />
                  <NavLink title="download" to={""} />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="Outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="Outline"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="Magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
