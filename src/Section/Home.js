import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Bg from "../images/space_-_5200.mp4";
import Idan from "../images/IMG-20221116-WA0005.jpg";
import { AiOutlineHtml5 } from "react-icons/ai";
import { PiFileCssLight } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { LiaSass } from "react-icons/lia";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      Once: false,
    });
  });

  return (
    <div>
      <div className="container">
        <div className="content">
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
          <section>
            <div id="about" className="about">
              <h1>
                Hello I'm Fawale Ayomide. I'ts really nice to have you here.
              </h1>
              <p>
                I am a Frontend web developer, I make use of some major
                tools and frameworks used in creating web applications in the
                modern days. As a Front-end developer i create websites and web
                apps using web languages such as HTML, CSS, JavaScript,
                (React(.js) — client-side JavaScript frameworks), that
                allow users to access and interact with the site or app.. using
                these technologies to create websites provides a very good
                client-side user experience, thereby attracting more users or
                customers depending on the content or type of website you want
                done.
              </p>
            </div>
          </section>
          <section>
            <div className="services"></div>
          </section>
        </div>
        <video src={Bg} muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Home;
