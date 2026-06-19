import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      label: "About Us",
      href: "/about",
      section: "about",
    },
    {
      label: "Our Work",
      href: "/our-work",
      section: "our-work",
    },
    {
      label: "Gallery",
      href: "/gallery",
      section: "gallery",
    },
    {
      label: "Trustees",
      href: "/trustees",
      section: "trustees",
    },
    {
      label: "Contact",
      href: "/contact",
      section: "contact",
    },
    {
      label: "Join Us",
      href: "/membership",
      section: "membership",
    },
    {
      label: "Donate",
      href: "/donate",
      section: "donate",
    },
  ];

  const isActive = (href) =>
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/uov-logo.png"
            alt="UOV Logo"
            className="w-14 h-14 object-contain"
          />

          <div>
            <h1
              className={`font-bold text-xl transition ${
                scrolled ? "text-violet-700" : "text-white"
              }`}
            >
              UOV Foundation Trust
            </h1>

            <p
              className={`text-xs transition ${
                scrolled ? "text-gray-500" : "text-violet-100"
              }`}
            >
              Empower • Educate • Elevate
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {navItems.map((item) => {
            if (item.label === "Join Us") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-5 py-2.5 rounded-xl shadow-md hover:scale-105 transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-white text-violet-700 ring-2 ring-violet-300"
                      : "bg-violet-700 text-white hover:bg-violet-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.label === "Donate") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`border-2 border-violet-500 px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-violet-700 text-white"
                      : "text-violet-600 hover:bg-violet-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`transition duration-300 ${
                  isActive(item.href)
                    ? "text-violet-600 font-semibold"
                    : scrolled
                    ? "text-gray-700 hover:text-violet-700"
                    : "text-white hover:text-violet-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
            scrolled ? "text-violet-700" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col p-6 gap-4 font-medium">
            {navItems.map((item) => {
              if (item.label === "Join Us") {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-center py-3 rounded-xl ${
                      isActive(item.href)
                        ? "bg-violet-100 text-violet-700 font-semibold"
                        : "bg-violet-700 text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.label === "Donate") {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`border-2 border-violet-500 px-5 py-2.5 rounded-xl font-semibold hover:bg-violet-100 hover:scale-105 transition-all duration-300 ${
                      isActive(item.href)
                        ? "bg-violet-700 text-white"
                        : "text-violet-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition ${
                    isActive(item.href)
                      ? "text-violet-600 font-semibold"
                      : "text-gray-700 hover:text-violet-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
