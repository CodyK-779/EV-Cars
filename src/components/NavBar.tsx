import { useState } from "react";
import logo from "../assets/img/favicon.png";

interface Props {
  currentLink: string;
  setCurrentLink: (currentLink: string) => void;
}

const navLinks = ["Home", "About", "Popular", "Featured"];

const NavBar = ({ currentLink, setCurrentLink }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileNav = (link: string) => {
    setOpenMenu(false);
    setCurrentLink(link);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-bodyColor shadow-lg z-20">
      <div className="flex items-center justify-between max-container px-4 py-4 sm:py-6 text-white">
        <div className="flex items-center gap-1.5 cursor-pointer">
          <img src={logo} className="w-6" />
          <p className="font-semibold">Elecar</p>
        </div>
        <ul className="hidden sm:flex items-center gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => setCurrentLink(link)}
              className="font-medium hover:text-firstColor transition-colors duration-150 ease-in"
            >
              <a
                href={`#${link}`}
                className={`${currentLink === link && "text-firstColor"}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setOpenMenu(true)}
        >
          <i className="ri-menu-line size-16"></i>
        </div>
      </div>
      {openMenu && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center text-white backdrop-blur-2xl transition-all duration-300 sm:hidden ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setOpenMenu(false)}
          >
            <i className="ri-close-large-line"></i>
          </button>
          <ul className="absolute top-40 flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <li
                key={link}
                className="uppercase hover:text-firstColor transition-colors duration-150 ease-in"
                onClick={() => handleMobileNav(link)}
              >
                <a
                  href={`#${link}`}
                  className={`${currentLink === link && "text-firstColor"}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
