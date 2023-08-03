import ContactBanner from "../ContactBanner/ContactBanner";
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location";

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <Location></Location>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;