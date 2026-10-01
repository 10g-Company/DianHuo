import { Link } from 'react-router-dom';

export default function Tnc() {
    return (
        <div className="article full-height-page content">
            <div className="article__content">
                <h1>DianHuo Terms & Conditions</h1><br />
                <h5>Effective Date (UTC): October 12, 2026</h5><br />

                <section>
                    <ol className="number-list  h4-li-before">
                        <li>
                            <h4>Introduction</h4>
                            <p>
                                Dian Huo (DianHuo) is an inventory management Android app provided by 10g Company Pte. Ltd.
                                ("we"", "us"" or "our"") based in Singapore. By installing, accessing, or using DianHuo
                                (the "App" or "Service"), you agree to these Terms & Conditions (the "Terms") and any future updates.
                                If you do not agree to any part of these Terms, please discontinue use of the App. These Terms are
                                governed by and interpreted under the laws of the Republic of Singapore
                            </p>
                        </li>
                        <br />
                        <li>
                            <h4>User Responsibilities and Security</h4>
                            <p>
                                Due to the offline, zero-knowledge security architecture of DianHuo, you acknowledge and agree that
                                you are solely and entirely responsible for the management and security of the following:
                            </p>
                            <ol className="alpha-list">
                                <li>
                                    <b>Data Backup</b>: You are solely responsible for creating and securely storing backup files of
                                    your DianHuo data. The backup and restore feature is the only method for data recovery in the event
                                    your device is lost, stolen, damaged, or reset. We are not responsible for any loss of data
                                    resulting from your failure to maintain a secure and recent backup.
                                </li>
                                <li>
                                    <b>Device Security</b>: You are responsible for maintaining the security of the physical device on
                                    which DianHuo is installed. You should also secure your mobile device with a lock screen
                                    (PIN, pattern, biometric, etc.) and avoid jailbreaking or rooting it, as this may compromise security.
                                </li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <h4>License and Use</h4>
                            <p>
                                We grant you a limited, non-exclusive, non-transferable license to download, install, and use the App
                                on a single personal mobile device. This license is for your personal, non-commercial use only.
                                All rights, title and interest in the App and its content (including intellectual property rights)
                                remain with us and our licensors. You may not:
                            </p>
                            <ol className="alpha-list">
                                <li>Copy, modify, translate, or create derivative works of the App.</li>
                                <li>Reverse-engineer, decompile, disassemble, or attempt to extract the source code of the App.</li>
                                <li>Distribute, sell, sublicense, or transfer the App or your license to any third party.</li>
                                <li>Use the App to engage in illegal activities or infringe any laws or third-party rights.</li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <h4>Eligibility</h4>
                            <ol className="alpha-list">
                                <li>
                                    You must be at least 13 years old to use the App. By using the App, you represent and warrant that
                                    you are at least 13 years of age. If you are between 13 and 18 years old, you may only use the App
                                    under the supervision of a parent or guardian who agrees to be bound by these Terms on your behalf.
                                </li>
                                <li>
                                    If you are using the App on behalf of an entity, organization, or company, you represent and
                                    warrant that you have the authority to bind that organization to these Terms.
                                </li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <h4>Data Storage and Data Loss</h4>
                            <p>
                                All data entered into the App are stored locally on your device. We do not upload or store your
                                data on our servers. If you delete the App or lose your device without a backup, your data will be
                                permanently lost and cannot be recovered. Please use any backup/export features provided to safeguard
                                your data. We are not responsible for any loss of data due to device failure, theft, or user error.
                            </p>
                        </li>
                        <br />
                        <li>
                            <h4>Disclaimers of Warranties</h4>
                            <p>
                                The App is provided on an "as is" and "as available" basis. We make no warranties, express or implied,
                                about the App's reliability, performance or fitness for a particular purpose. We do not guarantee that
                                the App is error-free or uninterrupted.
                            </p>
                        </li>
                        <br />
                        <li>
                            <h4>Limitation of Liability</h4>
                            <p>
                                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, 10G COMPANY PTE. LTD. SHALL NOT BE LIABLE FOR ANY
                                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                                PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                            </p>
                            <ol className="alpha-list">
                                <li>YOUR INABILITY TO ACCESS OR USE THE APP;</li>
                                <li>ANY DATA LOSS WHATSOEVER, INCLUDING LOSS DUE TO DEVICE MALFUNCTION OR FAILURE TO CREATE A BACKUP;</li>
                                <li>
                                    ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR APP BY
                                    ANY THIRD PARTY;
                                </li>
                                <li>
                                    ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF
                                    ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE APP.
                                </li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <h4>Termination</h4>
                            <ol className="alpha-list">
                                <li>
                                    You may terminate this agreement at any time by uninstalling the App. Uninstalling the App will
                                    delete all locally stored Content (not including your manual backup files).
                                </li>
                                <li>
                                    We reserve the right to terminate or suspend your access to the App
                                    (e.g., remove it from Google Play) if you violate these Terms.
                                </li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <h4>Governing Law</h4>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of the Republic of Singapore,
                                without regard to its conflict of law provisions.
                            </p>
                        </li>
                        <br />
                        <li>
                            <h4>Updates to the App and Changes to Terms</h4>
                            <ol className="alpha-list">
                                <li>
                                    We may update, modify, or discontinue the App (or any part of it) at any time without notice.
                                    It is recommended that you install updates to ensure the App works correctly and securely.
                                    Your continued use of the App after an update constitutes your acceptance of the updated App and
                                    any updated Terms.
                                </li>
                                <li>
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                                    We will provide notice of any changes by updating the "Effective Date" of these Terms.
                                    By continuing to access or use our App after those revisions become effective, you agree to be
                                    bound by the revised terms.
                                </li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <h4>Contact Us</h4>
                            <p>
                                If you have any questions about these Terms, please contact us at:<br/>
                                <a href="mailto:dianhuo-tnc@10g.co" target="_blank" rel="noreferrer">dianhuo-tnc@10g.co</a>
                            </p>
                            
                        </li>
                    </ol>
                </section>
            </div>
        </div>


    );
}