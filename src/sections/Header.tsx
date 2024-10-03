import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title, to }: { title: string; to: string }) => (
  <LinkScroll
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    to={to}
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full z-50 py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" alt="XoraLogo" width={115} height={55} />
        </a>
        <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before">
          <nav className="max-lg:relatuve max-lg:block max-lg:my-auto">
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title="features" to={""} />
                <div className="dot" />
                <NavLink title="pricing" to={""} />
              </li>
              <li className="nav-logo">
                <LinkScroll to={"#"}>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
