import React from 'react'
import Nav from './Nav'

const Contact = () => {
  return (
    <div className='contact-container'>
      <Nav/>
      <section class="contact" id="contact">
      <h2 class="heading">Contact <span>Me!</span></h2>

      <form
        // onSubmit={sendEmail()}
      >
        <div class="inputBox">
          <input type="text" id="name" placeholder="Full Name" required />
          <input type="text" id="email" placeholder="Email Address" required />
        </div>
        <div class="inputBox">
          <input
            type="number"
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
        <input type="submit" value="Send Message" class="btn sub-btn" />
      </form>
    </section>
      </div>
  )
}

export default Contact