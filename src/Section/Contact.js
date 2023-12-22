import { useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import NavAlt from "./NavAlt";
import Aos from "aos";
import "aos/dist/aos.css";

const notify = () => {
  toast.success("Sent Successfully", {
    theme: "dark",
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const Contact = () => {
  const resetA = useRef();
  const resetB = useRef();
  const resetC = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f68xsa5', 'template_mkpnzfd',
    e.target, 'puAGSj6EpJVsWTtha')

    // emailjs
    //   .sendForm(
    //     "process.env.React_App_Service_Id",
    //     "process.env.React_App_Template_Id",
    //     e.target,
    //     "process.env.React_App_Public_Id"
    //   )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetA.current.value = "";
    resetB.current.value = "";
    resetC.current.value = "";
  };

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      Once: false,
    });
  });

  return (
    <div className="contact-container">
      <NavAlt />
      <section class="contact" id="contact">
        <h2 class="heading" data-aos='fade-down'
              data-aos-delay='400'>
          Contact <span>Me!</span>
        </h2>

        <form onSubmit={sendEmail} data-aos='zoom-out-right'
              data-aos-delay='400'>
          <div class="inputBox" >
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Full Name"
              required
              ref={resetA}
            />
            <input
              type="text"
              name="from_email"
              id="email"
              placeholder="Email Address"
              required
              ref={resetB}
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="10"
            rows="5"
            placeholder="Your Message"
            ref={resetC}
          ></textarea>
          <input
            type="submit"
            value="Send"
            class="btn sub-btn"
            onClick={notify}
          />
        </form>
      </section>
      <ToastContainer className="toast" />
    </div>
  );
};

export default Contact;
