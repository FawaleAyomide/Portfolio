import {useRef} from 'react'
import Nav from './Nav'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f68xsa5', 'template_czcf29p', form.current, '2nacB7w38X-FzEXNm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-container'>
      <Nav/>
      <section class="contact" id="contact">
      <h2 class="heading">Contact <span>Me!</span></h2>

      <form
        onSubmit={sendEmail}
        ref={sendEmail}
      >
        <div class="inputBox">
          <input type="text" name='from_name' id="name" placeholder="Full Name" required />
          <input type="text" name='from_email' id="email" placeholder="Email Address" required />
        </div>
        <div class="inputBox">
          <input
            type="number"
            name='message'
            id="phone-no"
            placeholder="Mobile Number"
            required
          />
          <input type="text" id="email-sub" placeholder="Email Subject" />
        </div>
        <textarea
          name=""
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send" class="btn sub-btn" />
      </form>
    </section>
      </div>
  )
}

export default Contact