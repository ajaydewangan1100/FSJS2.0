import PurpleH1 from "./purple-h1";


function ContactForm(props) {
    const code = "+91";
    return (
        <div className="form-1-2-container">
            <PurpleH1 heading="Course Enquiry" />
            {props.org ?
            <p className="desc-contact-card">For any Corporate training/College training requirement please reach out to us on support@pwskills.com</p> :
            <p className="desc-contact-card">Feel free to reach out to us if you have a query related to any course or product that we offer, our associates are available on chat 24/7.</p>
            }
            <form className="form-container">
                <input type="text" placeholder="Full Name"></input>
                {
                props.org && <input type="text" placeholder="Organization Name"></input>
                }
                <input type="email" placeholder="Email Address"></input>
                <input type="text" onChange={(e) => {console.log(e.target)}} value={code}></input>
                <input type="textArea" rows="4" cols="50" placeholder="Your message" className="textarea"></input>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;