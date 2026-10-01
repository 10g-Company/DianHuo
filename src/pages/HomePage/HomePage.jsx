import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Definitions from '../../constants';
import './HomePage.css';

import FancyLayout from '../../components/FancyLayout/FancyLayout';
import { GOOGLE_PLAY_LINK } from '../../constants'
import OperationOverview from '../../components/OperationOverview/OperationOverview';
import DownloadBadge from '../../components/DownloadBadge/DownloadBadge';

import SmartphoneFrame from '../../components/SmartphoneFrame/SmartphoneFrame';
import busyStreet from '../../assets/images/busyStreet.jpg';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import initutiveExperiences from '../../assets/video/Initutiveexperiences.webm';
import Easyworkflow from '../../assets/video/Easyworkflow.webm';
import Bom from '../../assets/video/Bom.webm';
import Qrsearch from '../../assets/video/Qrsearch.webm';
import Textsearch from '../../assets/video/Textsearch.webm';
import categoryList from '../../assets/images/Tutorial/category-list.png';

function HomePage() {
    const [isInView, setIsInView] = useState(false);
    const animBoxRef = useRef(null);

    const handleScrollToNext = () => {
        const currentSection = animBoxRef.current?.closest('section');
        const nextSection = currentSection?.nextElementSibling;

        if (!nextSection) return;

        // get the header's height to offset
        const header = document.querySelector('header');
        const headerHeightPx = header?.getBoundingClientRect().height ?? 0;

        const targetY =
            nextSection.getBoundingClientRect().top +
            window.scrollY -
            headerHeightPx;

        window.scrollTo({ top: targetY, behavior: 'smooth' });
    };

    useEffect(() => {
        document.title = "DianHuo";

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting); // ✅ true when in view, false when out
            },
            { threshold: 0.2 }
        );

        if (animBoxRef.current) {
            observer.observe(animBoxRef.current);
        }

        return () => {
            if (animBoxRef.current) {
                observer.unobserve(animBoxRef.current);
            }
        };
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <section className="intro-section vh-100" id="intro" style={{ backgroundImage: `url(${busyStreet})`, backgroundSize:'cover'}} >
                <div ref={animBoxRef} className={`anim-box ${isInView ? 'flip-in' : ''}`} style={{ animationDelay: '0.5s' }}>

                    <h2 className={`anim-child ${isInView ? 'flip-in' : ''}`} style={{ animationDelay: '1s' }}>
                        Inventory management has never been easier ...
                    </h2>
                    <div className={`anim-child ${isInView ? 'flip-in' : ''}`} style={{ animationDelay: '2s' }}>
                        <h2>with <span style={{color:`var(--logo-blue)`, fontWeight: 'bold'}}>Dian Huo</span></h2>
                    </div>
                    <h2 className={`anim-child ${isInView ? 'flip-in' : ''}`} style={{ animationDelay: '3s' }}>
                        (Built by the users for users)
                    </h2>
                </div>

                <MdKeyboardDoubleArrowDown className="arrow-down" onClick={handleScrollToNext} />

            </section>

            <FancyLayout
                textCol={
                    <div>
                        <h2>
                            All of your inventory management operations in the palm of your hand
                        </h2>

                        <Link className="link-button" to={Definitions.Link_GetStarted}>Details</Link>
                        <br/><br/>
                        <DownloadBadge />
                    </div>
                    
                }
                imgCol={
                    <OperationOverview />
                }
                color1="#87cefa"
            />

            <FancyLayout
                textCol={
                    <div>
                        <h2>Intuitive User Experiences</h2>
                        <Link className="link-button" to={Definitions.Link_GetStarted}>Details</Link>
                    </div>
                }
                imgCol={
                    <SmartphoneFrame
                        media={initutiveExperiences}
                    />
                }
                color1="#8bc34a"
                reversed={true}
            />

            <FancyLayout
                textCol={
                    <div>
                        <h2>Easy workflow</h2>
                        <Link className="link-button" to={Definitions.Link_GetStarted}>Details</Link>
                    </div>
                }
                imgCol={
                    <SmartphoneFrame
                        media={Easyworkflow}
                    />
                }
                color1="#ff9800"
            />

            <FancyLayout
                textCol={
                    <div>
                        <h2>Ability to create BOM</h2>
                        <h2>(bill of material)</h2>
                        <Link className="link-button" to={Definitions.Link_ItemPage}>Details</Link>
                    </div>
                }
                imgCol={
                    <SmartphoneFrame
                        media={Bom}
                    />
                }
                color1="#00bcd4"
                reversed={true}
            />

            <FancyLayout
                textCol={
                    <div>
                        <h2>Search by name, SKU or scan QR code to easily locate your item</h2>
                        <Link className="link-button" to={Definitions.Link_SearchPanel}>Details</Link>
                    </div>
                }
                imgCol={
                    <SmartphoneFrame
                        media={Textsearch}
                    />
                }
                color1="#3f51b5"
            />

            <FancyLayout
                textCol={
                    <div>
                        <h2>Add or Scan Item via QR Code</h2>
                        <Link className="link-button" to={Definitions.Link_ItemSelection}>Details</Link>
                    </div>
                }
                imgCol={
                    <SmartphoneFrame
                        media={Qrsearch}
                    />
                }
                color1="#cddc39"
                reversed={true}
            />

            <FancyLayout
                textCol={
                    <div>
                        <h2>Multi-level, Color-coded Categorization</h2>
                        <Link className="link-button" to={Definitions.Link_ItemListview}>Details</Link>
                    </div>
                }
                imgCol={
                    <SmartphoneFrame
                        media={categoryList}
                    />
                }
                color1="#FFD700"
            />

            <section className="full-center-section" id="help">
                <div>
                    <h2>Get Started</h2>
                    <p>Visit our <Link to="/tutorial">tutorial</Link> to learn how to use the app</p>
                </div>

                {/* <div>
                    <h2>FAQ</h2>
                    <p>Check out some <Link to="/faq">frequently asked questions</Link>.</p>
                </div> */}

                <div>
                    <h2>Need Help?</h2>
                    <p>
                        If you have any questions or are running into issues or want to request new features,
                        please visit our <a href="https://github.com/10g-Company/DianHuo/issues" target="_blank">forum</a>
                    </p>
                </div>

                <div>
                    <h2>Contact Us?</h2>
                    <p>
                        You can contact us via the app. In the app, go to [Settings] {">"} [Contact Us]
                    </p>
                </div>

            </section>
        </>
    )
}

export default HomePage
