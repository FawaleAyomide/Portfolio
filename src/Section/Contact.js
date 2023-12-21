import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Nav from './Nav'

const Contact = () => {
  // const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f68xsa5', 'template_mkpnzfd',
    e.target, '2nacB7w38X-FzEXNm')
    .then((result) => {
      console.log(result.text);
      }, (error) => {
        console.log(error.text);
        });
        alert("Your message has been sent!")
        // document.getElementById('contact-form').reset()
        }


    // emailjs.sendForm('service_f68xsa5', 'template_czcf29p', e.target, '2nacB7w38X-FzEXNm')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  // };

  return (
    <div className='contact-container'>
      <Nav/>
      <section class="contact" id="contact">
      <h2 class="heading">Contact <span>Me!</span></h2>

      <form
        onSubmit={sendEmail}
        // ref={sendEmail}
      >
        <div class="inputBox">
          <input type="text" name='from_name' id="name" placeholder="Full Name" required />
          <input type="text" name='from_email' id="email" placeholder="Email Address" required />
        </div>
        {/* <div class="inputBox">
          <input
            type="number"
            name='message'
            id="phone-no"
            placeholder="Mobile Number"
            required
          />
          <input type="text" id="email-sub" placeholder="Email Subject" />
        </div> */}
        <textarea
          name="message"
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