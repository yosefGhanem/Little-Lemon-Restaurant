import logo from "../assets/Logo.svg";
import './Footer.css'; // Import your CSS file for styling
import React, { useState } from "react";


const Footer = ({ onOpenLayout }) => {
    const [drawerOpen, setDawerOpen] = useState(false);

  function drawerToggleHandlerByShihFengHsu() {
    setDawerOpen(!drawerOpen);
  }
    return (
        <footer>
            <section className="footer-content">
                <div className="company-info">
                    <img src={logo} alt='company-logo' />
                    <p>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served
                        with a modern twist.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Important Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li onClick={() => {onOpenLayout();}}>
                            Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br />123 Towncity, USA</li>
                        <li>Phone: <br />++ 0123 456 789</li>
                        <li>Email: <br />little@lemon.com</li>
                    </ul>
                </div>

                <div className="social-media-links">
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
