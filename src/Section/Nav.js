/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

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
  
  return (
    <>
      <div className={scrollPosition ? "navbar active" : "navbar"}>
        <h2 className="logo">Zcodes.Dev</h2>
        <div className={!active ? "navlinks " : "navlinks active"}>
          <IoCloseSharp className="close-icon" onClick={menuShow} />
          <Link to="/" onClick={menuShow} className="navlink">
            Home
          </Link>
          <a href="#about" onClick={menuShow} className="navlink">
            About
          </a>
          <Link to="/projects" onClick={menuShow} className="navlink">
            Projects
          </Link>
          <Link to="/contact" onClick={menuShow} className="navlink">
            Contact
          </Link>
        </div>
        <HiOutlineMenuAlt3 onClick={menuShow} className="menu" />
      </div>
    </>
  );
};

export default Nav;
