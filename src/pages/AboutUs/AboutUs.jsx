import { React, useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import * as Definitions from '../../constants';

import humanGreeting from '../../assets/images/human-greeting.png';
import flower from '../../assets/images/flower.png';

export default function AboutUs() {
    return (
        <div className="article full-height-page content">
            <div className="article__content">
                <section>
                    <h3 className="sectionHeader"><img src={humanGreeting} />About Us</h3>
                    <p>
                        10g Company is founded in 2019, in <b>Singapore</b>, with a clear objective of making enterprise
                        resource planning (ERP) <b>affordable</b> and <b>easy</b> to everyone, starting with
                        Warehouse Management Module.
                    </p>
                    <p>
                        Today, implementing ERP is mainly meant for large companies, and is very costly. Plus, it is often
                        initiated from Top-down, neglecting the operational usage efficiency. We don’t think it should be that way.
                    </p>
                    <p>
                        In addition, with the increasing smartphone penetration, why not have an ERP system in
                        the <b>palm of your hand</b>.
                    </p>
                </section>

                <section>
                    <h3 className="sectionHeader"><img src={flower} />Our Path to startup</h3>
                    <p>
                        ERP system has always been a privilege to large companies, because it is costly and requires a large team
                        of expertises to plan and implement. The ERP initiative is often pushed from the top-down with the common
                        reason that the company needs to keep up with the technology. While this reason is absolutely valid, what
                        is not given more emphasis is that ERP should helps with the everyday operations to improve the operational
                        efficiency. Having said that, having a ERP system is not just to give management a bundle of statistical
                        reports, or giving management stringent controls; but it must also ease up the workload of the ground-staff.
                    </p>
                    <p>
                        Our startup story is rather unique in the sense that it is initiated from the ground-staff asking for a
                        system to ease up their work and have some controls in their daily operations. The founder’s best friend is
                        one of a chefs at a Michelin-star restaurant in a 5-stars hotel. Her daily nightmares includes
                        (but not least):
                    </p>
                    <ol className="number-list">
                        <li>No ingredient when she needed it.</li>
                        <li>
                            Shared resource with the other chefs means that she has to consistently do a stock-check just to ensure
                            she has enough stock.
                        </li>
                        <li>
                            Her staff often missed out doing critical stock-take for the items they need.
                        </li>
                        <li>
                            She needs to manually plan out what items she needs.
                        </li>
                    </ol>
                </section>

                <section>
                    <h3 className="sectionHeader"><img src={`${import.meta.env.BASE_URL}images/logo.png`} />Here comes{" "}
                        <b className="mark-1">Dian Huo</b> to the rescue</h3>
                    <p>
                        <b>Dian Huo</b> is an Inventory Management System, the first ERP module by <b>10g</b>.
                        Dian Huo (in chinese <b className="mark-1">点货</b>) means stock-take. It has all the{" "}
                        <Link to={Definitions.Link_GetStarted}>functions</Link> to manage your inventory.
                    </p>
                </section>
            </div>
        </div>
            
    );
}