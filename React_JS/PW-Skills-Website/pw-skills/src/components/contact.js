import ContactForm from "./contactForm";
import PurpleH1 from "./purple-h1";

import "./contact.css";

function Contact() {
    return (
        <div className="contact-page-container">
            <div className="banner">
                <h1 className="contact-heading">Contact us</h1>
            </div>
            <div className="sec1-container">
                <PurpleH1 heading="Let's get in touch!" />
                <div className="both-form-container">
                    <ContactForm />
                    <ContactForm org={true} />
                </div>
            </div>
        </div>
    );
}

export default Contact;