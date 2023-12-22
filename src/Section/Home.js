import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Idan from "../images/IMG-20221116-WA0005.jpg";
import { AiOutlineHtml5 } from "react-icons/ai";
import { PiFileCssLight } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { LiaSass } from "react-icons/lia";
import { Link } from "react-router-dom";
import Zc from "../images/ZC Logo.jpg";
import { TbClick } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Construction Fields",
      subHeading: "Construction Fields landing page.",
      url: "https://construction-field.vercel.app/",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHfW-eZ8ag3E7wnEj2EQSRev8R2BpBIhdNeac3eZuuMzIFmwK0",
    },
    {
      id: 2,
      title: "Loopstudios",
      subHeading: "Loopstudio responsive landing page.",
      url: "https://www.pinterest.com/pin/863565297317918610/",
    },
    {
      id: 3,
      title: "Zchat App",
      subHeading: "A Haven for Text-Based Content",
      url: "https://zchat-c3aae.web.app/",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHfW-eZ8ag3E7wnEj2EQSRev8R2BpBIhdNeac3eZuuMzIFmwK0",
    },
    {
      id: 4,
      title: "Easy Bank Landing Page",
      subHeading: "Next generation digital banking.",
      url: "https://easy-bank-landing-page-omega.vercel.app/",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHfW-eZ8ag3E7wnEj2EQSRev8R2BpBIhdNeac3eZuuMzIFmwK0",
    },
    {
      id: 5,
      title: "Sunny Side Agency",
      subHeading: "Transform your brand.",
      url: "https://sunny-side-agency-one.vercel.app/",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHfW-eZ8ag3E7wnEj2EQSRev8R2BpBIhdNeac3eZuuMzIFmwK0",
    },
    {
      id: 6,
      title: "Fylo Dark Theme Landing Page",
      subHeading: "All your files in one secure location, accessible anywhere.",
      url: "https://fylo-dark-theme-sol.netlify.app/",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHfW-eZ8ag3E7wnEj2EQSRev8R2BpBIhdNeac3eZuuMzIFmwK0",
    },
  ]);

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      Once: false,
    });
  });

  return (
    <>
      <div className="container">
        <header>
          <Nav />
          <main>
            <h1>Frontend Developer</h1>
            <p>
              I specialize in crafting elegant and functional digital
              experiences by bringing simplicity to life through codes.
            </p>
            <div className="hero-cont">
              <img src={Idan} alt="hero-img" className="hero" />
            </div>
            <div className="main-bottom">
              <h2>Tech Stack</h2>|
              <div className="stacks">
                <AiOutlineHtml5 className="tech-icon" />
                <PiFileCssLight className="tech-icon" />
                <TbBrandJavascript className="tech-icon" />
                <FaReact className="tech-icon" />
                <LiaSass className="tech-icon" />
              </div>
            </div>
          </main>
        </header>
        <section>
          <div id="about" className="about">
            <h1>
              Hello I'm Fawale Ayomide. I'ts really nice to have you here.
            </h1>
            <p>
              I am a Frontend web developer, I make use of some major tools and
              frameworks used in creating web applications in the modern days.
              As a Front-end developer i create websites and web apps using web
              languages such as HTML, CSS, JavaScript, (React(.js) — client-side
              JavaScript frameworks), that allow users to access and interact
              with the site or app.. using these technologies to create websites
              provides a very good client-side user experience, thereby
              attracting more users or customers depending on the content or
              type of website you want done.
            </p>
            <div className="tools">
              <h2>Devtools</h2>|
              <p>Github, Vercel, Firebase, Bootstrap, Terminal, Netlify</p>
            </div>
          </div>
        </section>
        <section>
          <div className="works">
            <div className="head">
              <h1>My Recent Work</h1>
            </div>
            <div className="boxes">
              {projects.map((project) => (
                <div className="box" key={project.id}>
                  <img src={Zc} alt="" className="hack" />
                  <div className="box-content">
                    <h2>{project.title}</h2>
                    <p>{project.subHeading}</p>
                    <Link to={project.url}>
                      <TbClick className="click" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/projects" className="btn">
              See more
            </Link>
          </div>
        </section>
        <footer>
          <div className="contact-cont">
            <h1>Hire Me!</h1>
            <p>Looking for a Front-end developer?</p>
            <Link to='/contact' className="btn">Contact me</Link>
          </div>
          {/* <div className="footer"> */}
          <p className="right">Copyright © 2023. All rights are reserved</p>
          <div className="foot-icon">
            <Link to='https://github.com/FawaleAyomide' target="_blank"><FaGithub className="tech-icon" /></Link>
            <Link to='https://www.linkedin.com/in/ayomide-oladele-633987264/' target="_blank"><FaLinkedin className="tech-icon" /></Link>
          </div>
          {/* </div> */}
        </footer>
      </div>
    </>
  );
};

export default Home;
