import {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      Once: false,
    });
  });

  return <div>Home</div>;
};

export default Home;
