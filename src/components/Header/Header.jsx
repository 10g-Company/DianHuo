import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsHomePage from '../../hooks/useIsHomePage';
import useIsPage from '../../hooks/useIsPage';

/*
 * 01 set hh=true in the URL to hide the header 
 */
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // check the current page
    const isHomePage = useIsHomePage();
    const isTutorialPage = useIsPage('/tutorial');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean-up function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // Get "hf" parameter from URL
    const hideHeader = params.get('hh') === "true";

    const base = import.meta.env.BASE_URL; // "/DianHuo/" in prod, "/" in dev

    if (hideHeader) return null;

    return (

        <header id="main-header" className={`header ${
            isScrolled ? 'scrolled' : 
            !isHomePage ? 'scrolled-no-shadow' : ''}
        }`} >

            <a href={`${import.meta.env.BASE_URL}`} className="logo-container">
                <img src="images/logo.png" alt="App Logo" />
                <span className="logo-text">DianHuo</span>
            </a>

            {/* {isHomePage && (
                <nav>
                    <ul className="nav-links">
                        <li><a href="#help">Help</a></li>
                    </ul>
                </nav>
            )} */}


            {/*do not display in tutorial page*/}
            {!isTutorialPage && (
                <nav>
                    <ul className={`nav-links ${isHomePage ? '' : 'other-page'}`}>
                        <li><a href={`${base}#help`}>Help</a></li>
                    </ul>
                </nav>
            )}
            
        </header>
    );
}

export default Header;