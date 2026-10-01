import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

/*
 * 01 set hf=true in the URL to hide the footer 
 */

function Footer() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // Get "hf" parameter from URL
    const hideFooter = params.get('hf') === "true";

    if (hideFooter) return null;

    return (
        <>
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/about-us">About Us</Link>
                    <a href="changelog.html">What's New</a>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/tnc">Terms & Conditions</Link>
                    <Link to="/#help">Contact Us</Link>
                </div>
                <p className="trademark my-0">&copy; 2019 10g Company Pte. Ltd. All rights reserved.</p>
                <p className="trademark my-0">DianHuo&#8482; is a trademark of 10g Company Pte. Ltd.</p>
            </footer>
        </>
    );
}

export default Footer;
