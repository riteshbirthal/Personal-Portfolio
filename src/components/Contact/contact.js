import "./contact.css"
import React, { useState } from "react";


function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const { name, email, message } = formData;
        if (!name || !email || !message) return "All fields are required.";
        if (!/\S+@\S+\.\S+/.test(email)) return "Enter a valid email.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validate();
        if(error) return setMsg(error);
        
        try{
            const res = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.status === 'success'){
                setMsg("Message sent! Check your email for confirmation.");
                setFormData({ name: '', email: '', message: '' });
            }else{
                setMsg("Submission failed. Please try again.");
            }
        }catch{
            setMsg("Error sending message.");
        }
    }

    return (
        <section id="contact" className="contact-section">
            <h1 className="section-title autoDisplay">Let's talk 🙂</h1>
            <div className="contact-columns">
                <div className="social-box autoBlur">
                    <h2>Important Links</h2>
                    <a href="https://www.linkedin.com/in/ritesh-birthal/"><i className='bx bxl-linkedin-square' ></i> Ritesh-Birthal</a>
                    <a href="https://leetcode.com/u/riteshbirthal/"><img src="/static/images/profile-logos/leetcode.png" alt="Leetcode" /> LeetCode</a>
                    <a href="https://www.geeksforgeeks.org/user/riteshbirthal/"><img src="/static/images/profile-logos/geeksforgeeks.png" alt="GFG" /> GeeksForGeeks
                    </a>
                    <a href="https://www.hackerrank.com/profile/riteshbirthal"><img src="/static/images/profile-logos/HackerRank.png" alt="HackerRank" /> HackerRank</a>

                    <div className="social-icons">
                        <a href="mailto:riteshbirthal@gmail.com"><i className='bx bxs-envelope' ></i></a>
                        <a href="https://t.me/riteshbirthal"><i className='bx bxl-telegram' ></i></a>
                        <a href="/"><i className='bx bxl-twitter' ></i></a>
                        <a href="https://www.instagram.com/ritesh-birthal/"><i class='bx bxl-instagram'></i></a>
                        <a href="/"><i className='bx bxl-facebook-circle' ></i></a>
                    </div>
                </div>


                <form className="contact-box autoBlur" onSubmit={handleSubmit} >
                    <p>I'm excited to connect! Whether you have a project idea, a question, or simply want to say hello, please fill out the form below and I'll get back to you soon.</p>

                    {msg && <p>{msg}</p>}
                    
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