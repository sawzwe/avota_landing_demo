import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";

const Header = () => {
  const { t } = useTranslation("global");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title, to }: { title: string; to: string }) => (
    <LinkScroll
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
      to={to}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      onClick={() => setIsOpen(false)}
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backddrop-blur-[8px] ",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img
            src="/images/avota.png"
            alt="AvotaLogo"
            width={115}
            height={55}
          />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before">
            <nav className="flex items-center justify-between max-lg:relative max-lg:block max-lg:my-auto">
              <ul className="flex items-center w-full max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title={t("header.nav.features")} to={"features"} />
                  <div className="dot" />
                  <NavLink title={t("header.nav.pricing")} to={"pricing"} />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/avota.png"
                      alt="AvotaLogo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title={t("header.nav.faq")} to={"faq"} />
                  <div className="dot" />
                  <NavLink title={t("header.nav.demo")} to={"demo"} />
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
        <div className="flex items-center gap-2">
          {/* <LanguageSelector /> */}
          <button
            className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img
              src={`/images/${isOpen ? "close" : "magic"}.svg`}
              alt="magic"
              className="size-1/2 object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
