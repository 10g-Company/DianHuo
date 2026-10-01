import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import { REPLENISH_POPOVER, BOM_POPOVER } from '../../../../constants'
import Note from '../../../../components/Note/Note';

import SaveButton from '../../../../assets/images/Device/save.png'
import SelectFromListIcon from '../../../../assets/images/Device/add-items-icon.svg'
import SelectFromScan from '../../../../assets/images/Device/add-items-qr-icon.svg'
import MoreIcon from '../../../../assets/images/Device/more.png'
import DoneIcon from '../../../../assets/images/Device/done-icon.png'

import itemSelectionDialog from '../../../../assets/images/Tutorial/itemSelectionDialog.png'
import itemSelectionQRScan from '../../../../assets/images/Tutorial/itemSelection-QRScan.png'
import scanQRCode from '../../../../assets/images/Tutorial/scanQRCode.webm'
import countField from '../../../../assets/images/Tutorial/countField-canEdit.png'
import inputCountDialog from '../../../../assets/images/Tutorial/inputCount-dialog.png'

export default function ItemSelection() {
    const toc = [
        { topic: "Item Selection", id: "item-selection" }, // 0
        { topic: "Item Selection - By dialog", id: "item-dialog" },
        { topic: "Item Selection - By QR code scan", id: "qr-scan" },
        { topic: "Input Item Count", id: "input-count" },
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center">Item Selection & Input Count</h1>
                <br />

                <section id={toc[0].id}>
                    <h3>{toc[0].topic}</h3>
                    <p>
                        To add items to a Transaction or as item BOM, you can click <strong>+ items</strong> button.
                        There are 2 ways to <strong>+ items</strong>:
                    </p>

                    <ul className="bullet-list">
                        <li>
                            <img className="inline-icon" src={SelectFromListIcon} alt="select by list" /> -
                            Select by dialog.
                        </li>
                        <li>
                            <img className="inline-icon" src={SelectFromScan} alt="select by qr code" /> -
                            Select by QR code scan.
                        </li>
                    </ul>

                </section>

                <section id={toc[1].id}>
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        topText={
                            <ol className="number-list">
                                <li>
                                    Click on the <strong><img className="inline-icon" src={SelectFromListIcon} alt="select by list" /> + items</strong>{" "}
                                    button to open the item selection dialog.
                                </li>
                                <li>Select/unselect the item by tapping on it.</li>
                                <li>
                                    Alternatively, you can click on the <b>more menu</b> button at the top-right, and you can
                                    choose to <b>Select All</b> or <b>Clear All</b>.
                                </li>
                                <li>
                                    Click on the <img className="inline-icon" src={DoneIcon} alt="done icon" /> button to confirm your
                                    selection and exit the dialog.
                                </li>
                            </ol>
                        }
                        mediaSrc={itemSelectionDialog}
                        mediaAlt={"Item selection dialog"}
                    />
                </section>

                <section id={toc[2].id}>
                    <h3>{toc[2].topic}</h3>
                    <TextImageLayout
                        topText={
                            <ol className="number-list">
                                <li>
                                    Click on the <strong><img className="inline-icon" src={SelectFromScan} alt="select by qr" /> + items</strong>{" "}
                                    button to open the <strong>Item Scanner</strong> dialog.
                                </li>
                                <li>
                                    Click on <strong>Flashlight</strong> to turn on/off the flashlight if your device has one.
                                </li>
                                <li>
                                    Click on <strong>Input Count</strong> if you want to show a prompt to enter the item count
                                    after scanning the QR code.
                                    <Note>
                                        <p>
                                        <b>Input Count</b> option will only be shown if the operation that triggers it requires a count input.
                                        </p>
                                    </Note>
                                </li>
                                <li>
                                    Position the QR code of the item in front of the camera,{" "}
                                    <strong>inside the green frame</strong>, and the app will automatically scan it.
                                </li>
                                <li>
                                    If the <strong>Input Count</strong> option is enabled, you will be prompted to enter the
                                    item count after scanning the QR code. Otherwise, the item will be added and you can{" "}
                                    <Link to={`/tutorial?topic=item-selection#${toc[3].id}`}>enter the count</Link> later.
                                </li>
                                <li>
                                    To add another item, simply scan the next item's QR code. You can scan as many items as you want.
                                    <Note>
                                        <p>
                                            In <b>Item Search</b>, after successful scan, it will exit and return the result immediately.
                                        </p>
                                    </Note>
                                </li>
                                <li>
                                    When done, click on the <strong>Back</strong> button to exit the Item Scanner dialog
                                    and return to the previous page.
                                </li>
                            </ol>
                        }
                        mediaSrc={scanQRCode}
                        mediaType="video"
                        mediaAlt="Item Scanner page"
                    />
                </section>

                <section id={toc[3].id}>
                    <h3>{toc[3].topic}</h3>
                    <ol className="number-list">
                        <li>
                            When the record is in <b>edit mode</b>, the <b>count field</b> will have a{" "}
                            <b style={{ color: 'lightblue' }} >light blue</b> background color. Click on this <b>count field</b> to
                            open the <strong>Input Count</strong> dialog.

                            <img className="pageScreenShot maxWidth-20em" src={countField} />
                        </li>
                        <li>
                            In the <b>Input Count dialog</b>, enter the desired count for the item and click the{" "}
                            <strong>Next</strong> button to iterate to the next item in the list.

                            <img className="pageScreenShot maxWidth-20em" src={inputCountDialog} />
                        </li>
                        <li>
                            Once done, click on the <strong>OK</strong> button to exit the dialog.
                        </li>
                    </ol>
                    
                </section>
            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}