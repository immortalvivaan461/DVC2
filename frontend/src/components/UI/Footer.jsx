import './Footer.css'
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>

        
        <div className='Footer-body'>
            <div className='Footer-left'>
                <img src={logo} alt="Company-Logo" />
                <h1>Fresh from India, Delivered <span>Globally.</span></h1>
                <span>
                        <NavLink to="https://www.facebook.com/deepvegetablesco/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-500 transition-colors" /></NavLink>
                        <NavLink to="https://www.exportersindia.com/deep-vegetable-company/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-500 transition-colors" /></NavLink>
                        <NavLink to="https://www.instagram.com/deepvegetablescompany/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-blue-500 transition-colors" /></NavLink>
                        <NavLink to="https://www.linkedin.com/in/local-to-global215/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-500 transition-colors" /></NavLink>
                </span>
            </div>
            <div className='Footer-right'>
                <ul>
                    <h2>🟩 Company</h2>
                        <li><NavLink to="/OurStory">Our Journey</NavLink></li>
                        <li><NavLink to="/OurStory">About Us</NavLink></li>
                        <li><NavLink to="OurStory">Why Choose DVC</NavLink></li>
                        <li><NavLink to="/contactus">Leadership Team</NavLink></li>
                    <li><NavLink to="/OurStory">Our Mission & Vision</NavLink></li>
                        <li><NavLink to="/OurStory">Sustainability Practices</NavLink></li>
                    {/* <li><NavLink to="#">Our Clients</NavLink></li> */}
                    <li><NavLink to="#">Community Initiatives</NavLink></li>
                        <li><NavLink to="/contactus">Contact Us</NavLink></li>
                </ul>
                <ul>
                    <h2>📲 Quick Access</h2>
                    <li><NavLink to="#">My Account</NavLink></li>
                        <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    <li><NavLink to="#">Request a Quote</NavLink></li>
                    <li><NavLink to="#">Download Brochure</NavLink></li>
                    <li><NavLink to="#">Product Catalogue</NavLink></li>
                    <li><NavLink to="#">Wholesale Inquiry</NavLink></li>
                    <li><NavLink to="#">Export Documentation</NavLink></li>
                    <li><NavLink to="#">Payment Options</NavLink></li>
                    <li><NavLink to="#">Shipping & Delivery Info</NavLink></li>
                    <li><NavLink to="#">Live Chat Support</NavLink></li>
                    <li><NavLink to="#">Subscribe to Newsletter</NavLink></li>
                    <li><NavLink to="#">FAQs</NavLink></li>
                </ul>
                <ul>
                    <h2>🌍 EXPORT SERVICES</h2>
                    <li><NavLink to="#">Bulk Export Supply</NavLink></li>
                    <li><NavLink to="#">Custom Packaging</NavLink></li>
                    <li><NavLink to="#">Shipping & Logistics</NavLink></li>
                    <li><NavLink to="#">Quality Assurance</NavLink></li>
                    <li><NavLink to="#">Compliance & Regulations</NavLink></li>
                </ul>
            </div>
        </div>
            <p className="text-sm">© 2025 My Website. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
