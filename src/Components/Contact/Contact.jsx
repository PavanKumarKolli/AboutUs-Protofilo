// import React, { useState } from 'react';
// import emailjs from 'emailjs-com'; // Import EmailJS
// import './Contact.css'; // Import the CSS file

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceID = 'service_3ewnnlc'; // Your EmailJS service ID
//     const templateID = 'template_bt2xzkc'; // Your EmailJS template ID
//     const userID = '--TPthpkQpMJC9T7a'; // Your EmailJS user ID

//     emailjs.send(serviceID, templateID, {
//       from_name: formData.name,    // Sending name as from_name
//       from_email: formData.email,  // Sending email as from_email
//       message: formData.message     // Sending message
//     }, userID)
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' }); // Reset form
//       }, (err) => {
//         console.error('FAILED...', err);
//         alert('Failed to send message. Please try again later.');
//       });
//   };

//   return (
//     <div id="contact"className="contact-wrapper">
//       <div className="contact-container">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Message:</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//       <div className="image-container">
//         <img src="/Images/postman.png" alt="Cartoon Mail Person" className="cartoon-mail-person" />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import "./Contact.css"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_djase5p', 
      'template_bt2xzkc', 
      form.current, 
      '--TPthpkQpMJC9T7a'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });
    
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.1 }}>
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
