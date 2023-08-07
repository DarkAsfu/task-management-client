import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";
import ContactBanner from "../ContactBanner/ContactBanner";
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location";

const Contact = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <ContactBanner></ContactBanner>
            <Location></Location>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;