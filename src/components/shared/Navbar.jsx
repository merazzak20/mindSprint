import { useEffect, useState } from "react";
import logo from "../../assets/mindSprint logo2.png";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { X } from "lucide-react";
// import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  //   const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#db4b86] ${
              isActive ? "text-[#db4b86] font-bold" : "text-[#14000f]"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#db4b86] ${
              isActive ? "text-[#db4b86] font-bold" : "text-[#14000f]"
            }`
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#db4b86] ${
              isActive ? "text-[#db4b86] font-bold" : "text-[#14000f]"
            }`
          }
          to="/quiz"
        >
          Quiz
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#db4b86] ${
              isActive ? "text-[#db4b86] font-bold" : "text-[#14000f]"
            }`
          }
          to="/t"
        >
          Tutorials
        </NavLink>
      </li>
    </>
  );

  const mobileLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#db4b86] ${
              isActive ? "text-[#db4b86] font-bold" : "text-white"
            }`
          }
          onClick={() => setIsOpen(false)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#db4b86] ${
              isActive ? "text-[#db4b86] font-bold" : "text-white"
            }`
          }
          onClick={() => setIsOpen(false)}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#db4b86] ${
              isActive ? "text-[#db4b86] font-bold" : "text-white"
            }`
          }
          onClick={() => setIsOpen(false)}
          to="/quiz"
        >
          Quiz
        </NavLink>
      </li>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40  transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <Container>
        <div className="navbar flex items-center">
          {/* Logo and Navigation for Larger Devices */}
          <div className="navbar-start lg:flex">
            <a href="/" className="text-xl">
              <img className="w-44" src={logo} alt="Logo" />
              {/* <h1 className="text-2xl font-bold text-lime-700">MindSprint</h1> */}
            </a>
          </div>

          {/* Horizontal Links */}
          <div className="navbar-center hidden md:flex"></div>

          {/* Download Resume Button */}
          <div className="navbar-end flex flex-row">
            <div className="hidden lg:inline-block">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="lg:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#db4b86" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }} // Start off-screen (right side)
              animate={{ y: 0 }} // Slide into view (left)
              exit={{ y: "-100%" }} // Slide out to the right when closing
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-zinc-900 bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center text-white text-2xl z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white hover:text-[#db4b86]"
              >
                <X size={40} />
              </button>

              <ul className="space-y-6 text-center">{mobileLinks}</ul>
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
