// Contact.js
import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>Email: neeraj.ghate@ucdenver.edu</p>
            <p>Phone: +1 (720)-226-3190</p>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
