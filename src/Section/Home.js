import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Bg from "../images/space_-_5200.mp4";
import Idan from "../images/IMG-20221116-WA0005.jpg";

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
        <div className="overlay"></div>
        <div className="content">
          <Nav />
          <main>
            <h1>Frontend Developer</h1>
            <img src={Idan} alt="hero-img" className="hero" />
          </main>
        </div>
        <video src={Bg} muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Home;
