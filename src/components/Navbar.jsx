import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/products", text: "Products" },
    { to: "/services", text: "Services" },
    { to: "/career", text: "Career" },
    { to: "/testimonials", text: "Testimonials" },
    { to: "/latestnews", text: "Latest News" },
    { to: "/contact", text: "Contact" },
  ];

  const renderLinks = (closeMenu) =>
    navLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="text-white block md:inline-block px-3 py-2 rounded-lg hover:bg-[#2596be]"
        onClick={closeMenu}
      >
        {link.text}
      </Link>
    ));

  return (
    <nav className="bg-transparent p-4">
      <div className="max-w-10xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="w-[15.5rem]" />
          </div>
          <div className="hidden md:block text-white">
            <div className="ml-10 flex items-center text-xl">
              {renderLinks(closeMenu)}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {renderLinks(closeMenu)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
