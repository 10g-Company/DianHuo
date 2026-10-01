import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="article full-height-page content">
            <div className="article__content">
                <h1>DianHuo Privacy Policy</h1><br/>
                <h5>Last Updated (UTC): October 12, 2026</h5><br/>

                <section>
                    <p>
                        <b>10g Company</b> ("10g", "us", "we", or "our") operates the 10g.co and dianhuo.app websites and
                        the <b>Dian Huo (DianHuo)</b> android mobile applications (collectively known as the "Services").
                    </p>
                    <p>
                        This page informs you of our policies regarding the collection, use, and disclosure of personal data when
                        you use our Service and the choices you have associated with that data.
                    </p>
                    <p>
                        We use your data to provide and improve the Service. By using the Service, you agree to the collection
                        and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy,
                        terms used in this Privacy Policy have the same meanings as in our{" "}
                        <Link>Terms of Use</Link>.
                    </p>
                </section>

                <section>
                    <ol className="number-list h4-li-before">
                        <li>
                            <h4>What Information Do We Collect?</h4>
                            <p>
                                The short answer: We <b>do not</b> collect your personal information or saved data.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <b>Personal Data:</b> We <b>do not</b> collect any personal information such as your name,
                                    email, or phone number.
                                </li>
                                <li>
                                    <b>Usage Data:</b> We <b>do not</b> monitor your usage or track your behavior.
                                </li>
                                <li>
                                    <b>Stored Data:</b> We <b>do not</b> collect your stored data. All records and images are stored 
                                    locally in a database on your device.
                                </li>
                                <li>
                                    <b>Technical Information (Anonymous):</b> To help us improve the app's stability and performance,
                                    the Google Play Store may provide us with aggregated, anonymous information such as the type
                                    of device you use, your OS version, and crash reports. This data cannot be used to identify you
                                    personally.
                                </li>
                                <li>
                                    <b>Log Data:</b> It is a digital record of events, activities, and errors that occur while
                                    using the Service. We <b>do not</b> collect your log data unless you send it to us for
                                    support purposes.
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <h4>How Do We Use Your Information?</h4>
                            <p>
                                Since we do not collect your data, we have nothing to use. Any data you enter into the app is used
                                solely for the app's functionality on your device.
                            </p>
                            <p>
                                You might choose to send us your <b>log data</b> for support purposes. It will only be used 
                                for support purposes.
                            </p>
                        </li>
                        <br/>
                        <li>
                            <h4>Data Sharing and Disclosure</h4>
                            <p>
                                <b>We do not share, sell, or disclose any user data because we do not have any to share.</b>{" "}
                                Your data remains on your device, under your control.
                            </p>
                        </li>
                        <br/>
                        <li>
                            <h4>Your Data Rights</h4>
                            <p>Because your data is yours alone on your device, you have full control. You can:</p>
                            <ul className="bullet-list">
                                <li><b>Access, Edit, and Delete</b> all your data directly within the app.</li>
                                <li><b>Export Your Data</b> by creating a backup file.</li>
                                <li>
                                    <b>Delete Everything</b> by uninstalling the app, or using the "Reset Data" feature.
                                    Please note, this erases all data permanently and cannot be undone.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <h4>Third-Party Services</h4>
                            <ul className="bullet-list">
                                <li>
                                    DianHuo does not integrate with any third-party services (like analytics or advertising)
                                    that would require sharing your data. The app is designed to function independently.
                                </li>
                                <li>
                                    DianHuo uses Google Play Services for app distribution. Google has its own Privacy Policy,
                                    and we encourage you to review it. We <b>do not</b> share any of your data with any third
                                    parties as we <b>do not</b> collect your data.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <h4>What Happens If I Lose My Device or My Data?</h4>
                            <p>
                                Since we never collect your data, <b>we cannot recover it for you</b>. If you have 
                                created a backup, you can restore it on a new device.
                            </p>
                        </li>
                        <br />
                        <li>
                            <h4>Children's Privacy</h4>
                            <p>
                                Our app is not intended for children under the age of 13. We do not knowingly collect personal
                                information from children under 13.
                            </p>
                        </li>
                        <br />
                        <li>
                            <h4>Changes to This Privacy Policy</h4>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                                new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                                policy periodically for any changes.
                            </p>
                        </li>
                        <br />
                        <li>
                            <h4>Contact Us</h4>
                            <p>
                                If you have any questions or suggestions about this Privacy Policy, please contact us at:<br/>
                                <a href="mailto:dianhuo-privacy@10g.co" target="_blank" rel="noreferrer">dianhuo-privacy@10g.co</a>
                            </p>
                        </li>
                    </ol>
                </section>

            </div>
        </div>

    );
}