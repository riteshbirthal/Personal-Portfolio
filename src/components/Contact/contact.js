import "./contact.css"
import React, { useState } from "react";


function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        if(!formData.name.trim().length || !formData.email.trim().length || !formData.message.trim().length){
            alert("Fill the details.");
            return ;
        }
        e.preventDefault();
        console.log('Submitted Data:', formData);
        alert(
            `name: ${formData.name.trim()} \nemail: ${formData.email.trim()} \nmessage: ${formData.message.trim()} \n\nForm Data Submitted Successfully. Thank you.`
        );
    };

    return (
        <section id="contact" className="contact-section">
            <h1 className="section-title autoDisplay">Let's talk 🙂</h1>
            <div className="contact-columns">
                <div className="social-box autoBlur">
                    <a href="mailto:riteshbirthal@gmail.com"><i className='bx bxs-envelope' ></i> riteshbirthal@gmail.com</a>
                    <a href="/"><i className='bx bxl-telegram' ></i> Contact.Example.com</a>
                    <a href="https://www.linkedin.com/in/ritesh-birthal/"><i className='bx bxl-linkedin-square' ></i> Ritesh-Birthal</a>

                    <div className="social-icons">
                        <a href="/"><i className='bx bxl-youtube' ></i></a>
                        <a href="/"><i className='bx bxl-twitter' ></i></a>
                        <a href="/"><i className='bx bxl-facebook-circle' ></i></a>
                    </div>
                </div>


                <form className="contact-box autoBlur" onSubmit={handleSubmit} >
                    <p>I'm excited to connect! Whether you have a project idea, a question, or simply want to say hello, please fill out the form below and I'll get back to you soon.</p>
                    
                    <p>Full Name</p>
                    <input type="text" placeholder="Your Full Name" name="name" 
                    value={formData.name} onChange={handleChange} maxLength={50} />

                    <p>Email Address</p>
                    <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} maxLength={50} />

                    <p>Your Message</p>
                    <textarea className="input-message" placeholder="Share your thoughts..." name="message" value={formData.message} onChange={handleChange} maxLength={500} />

                    <button type="submit" ><i className='bx bx-send' ></i>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;