/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const menuShow = () => {
    setActive(!active);
  };

  const handleScroll = () => {
    let show = window.pageYOffset || document.documentElement.scrollTop;
    if (show > scrollPosition) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      Once: false,
    });
  });
  
  return (
    <>
      <div className={scrollPosition ? "navbar active" : "navbar"}>
        <h2 className="logo">Zcodes.Dev</h2>
        <div className={!active ? "navlinks " : "navlinks active"}>
          <IoCloseSharp className="close-icon" onClick={menuShow} />
          <NavLink to="/" onClick={menuShow} className="navlink">
            Home
          </NavLink>
          <a href="#about" onClick={menuShow} className="navlink">
            About
          </a>
          <NavLink to="/projects" onClick={menuShow} className="navlink">
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={menuShow} className="navlink">
            Contact
          </NavLink>
        </div>
        <HiOutlineMenuAlt3 onClick={menuShow} className="menu" />
      </div>
    </>
  );
};

export default Nav;
