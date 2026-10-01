// GetStarted.jsx
import { React, useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from "../../../../components/TextImageLayout/TextImageLayout";
import Note from "../../../../components/Note/Note";
import OperationOverview from "../../../../components/OperationOverview/OperationOverview";
import * as Definitions from '../../../../constants';

// Images
import DownloadBadge from "../../../../components/DownloadBadge/DownloadBadge";
import mReplenishIcon from "../../../../assets/images/Device/mReplenish.png";
import receiveIcon from '../../../../assets/images/Device/receive.png';
import pickIcon from '../../../../assets/images/Device/pick.png';
import databaseBlackIcon from '../../../../assets/images/Device/database-black.png';
import stockTakeIcon from '../../../../assets/images/Device/stock-take.png';
import mProductionOrderIcon from '../../../../assets/images/Device/mProductionOrder.png';
import lowLevelIndicator from '../../../../assets/images/Device/low-level-indicator.jpg';
import replenishAutoCreate from '../../../../assets/images/Device/replenish_auto_create.png';
import lowLevelIcon from '../../../../assets/images/Device/low-level-icon.svg';
import onHandIcon from '../../../../assets/images/Device/on-hand-icon.svg';
import lockIcon from '../../../../assets/images/Device/lock-icon.svg';
import onHandPage from '../../../../assets/images/Tutorial/home-onhand-page.png';
import lowLevelPage from '../../../../assets/images/Tutorial/home-lowlevel-page.png';
import snapshotTitleView from '../../../../assets/images/Tutorial/snapshot-item-titleview.png';

export default function GetStarted() {
    const toc = [
        { topic: "Download the app", id: "download" }, // 0
        { topic: "Operation Overview", id: "operation" },
        { topic: "Setup Item Master", id: "item-master", icon: databaseBlackIcon },
        { topic: "Stock-Take", id: "stock-take", icon: stockTakeIcon },
        { topic: "Receive", id: "receive", icon: receiveIcon },
        { topic: "Pick", id: "pick", icon: pickIcon },
        { topic: "Replenishment", id: "replenishment", icon: mReplenishIcon },
        { topic: "Inventory On-hand", id: "inventory-on-hand", icon: onHandIcon },
        { topic: "Low-Level Inventory", id: "low-level-inventory", icon: lowLevelIcon },
        { topic: "Record Snapshot", id: "item-snapshot", icon: lockIcon },
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center">Get Started</h1>
                <br />

                <section id={toc[0].id}>
                    <h3>{toc[0].topic}</h3>
                    <p>
                        Install the app from the link below
                    </p>
                    <DownloadBadge />
                </section>

                <section id={toc[1].id}>
                    <h3>{toc[1].topic}</h3>

                    <OperationOverview />
                </section>

                <section id={toc[2].id}>
                    <h3 className="sectionHeader"><img src={toc[2].icon} alt={toc[2].topic} />{toc[2].topic}</h3>
                    <p>
                        The first step is to populate all your inventory items. You will need
                        to <Link to={Definitions.Link_CreateNewItem} >create new item</Link>{" "}
                        and/or <Link to={Definitions.Link_ItemSetupBOM}>form BOM item</Link>
                    </p>
                </section>

                <section id={toc[3].id}>
                    <h3 className="sectionHeader"><img src={toc[3].icon} alt={toc[3].topic} />{toc[3].topic}</h3>
                    <p>
                        After you have defined all the items in your inventory, next, you will need to initialize your
                        inventory count by doing a <Link to={Definitions.Link_TxnOverview} >Stock-Take</Link> that will adjust
                        your inventory items to an initial count.
                    </p>
                </section>

                <section id={toc[4].id}>
                    <h3 className="sectionHeader"><img src={toc[4].icon} alt={toc[4].topic} />{toc[4].topic}</h3>
                    <p>
                        When you need to put items into the warehouse, you will do a{" "}
                        <Link to={Definitions.Link_TxnOverview}>Receive</Link>. This will add the item count accordingly.
                    </p>
                </section>

                <section id={toc[5].id}>
                    <h3 className="sectionHeader"><img src={toc[5].icon} alt={toc[5].topic} />{toc[5].topic}</h3>
                    <p>
                        When you need to retrieve items out of the warehouse, you will do a{" "}
                        <Link to={Definitions.Link_TxnOverview}>Pick</Link>. This will subtract the item count accordingly.
                    </p>
                </section>

                <section id={toc[6].id}>
                    <h3 className="sectionHeader"><img src={toc[6].icon} alt={toc[6].topic} />{toc[6].topic}</h3>
                    <p>
                        When you are running low in items, you can create a{" "}
                        <Link to={Definitions.Link_Replenish}>Replenish Plan</Link> to plan out which items that need to be re-order.
                    </p>
                </section>

                <section id={toc[7].id}>
                    <h3 className="sectionHeader"><img src={toc[7].icon} alt={toc[7].topic} />{toc[7].topic}</h3>
                    <TextImageLayout
                        topText={
                            <div>
                                <p>
                                    <strong>Inventory On-hand</strong> show the amount of stock you currently have. It is the default{" "}
                                    <strong>Home</strong> page of the app.
                                </p>
                                <p>
                                    You can access it from the <strong>menu drawer</strong> at the top left corner of the app
                                    {" > "}tap on <strong>Home</strong> menu{" > "}go to the <strong>On-Hand tab</strong> at the bottom..
                                </p>
                            </div>

                        }
                        mediaSrc={onHandPage}
                        mediaAlt={"Inventory On-hand page"}
                    />
                </section>

                <section id={toc[8].id}>
                    <h3 className="sectionHeader"><img src={toc[8].icon} alt={toc[8].topic} />{toc[8].topic}</h3>
                    <TextImageLayout
                        topText={
                            <div>
                                <p>
                                    <strong>Low-Level Inventory</strong> show items that is low in stock. From the{" "}
                                    <strong>Home</strong> page, go to the <strong>Low-Level tab</strong> at the bottom.
                                </p>
                                <Note>
                                    <p>
                                        <strong>Only</strong> item configured with <strong>Min</strong> and{" "}
                                        <strong>Max</strong> values in the item's{" "}
                                        <Link to={Definitions.Link_ItemReplenishAttributes}>replenish attribute</Link> can be used to compute
                                        low-level status.
                                    </p>
                                </Note>
                                <p>
                                    In the <strong>Count</strong> field, it shows <img className="inline-icon" src={lowLevelIndicator} />
                                </p>
                                <ul className="bullet-list">
                                    <li>
                                        Top (in orange): The <strong>Min Qty</strong> as setup in the item's{" "}
                                        <Link to={Definitions.Link_ItemReplenishAttributes}>replenish attribute</Link>
                                    </li>
                                    <li>Bottom (in blue): The current <strong>on-hand</strong> value</li>
                                </ul>
                                <p>
                                    You can <b>auto-create</b> a <Link to={Definitions.Link_Replenish}>Replenish Plan</Link> for these items by click on the{" "}
                                    <img className="inline-icon" src={replenishAutoCreate} /> icon at the top-right.
                                </p>
                            </div>

                        }
                        mediaSrc={lowLevelPage}
                        mediaAlt={"low-level page"}
                    />
                </section>

                <section id={toc[9].id}>
                    <h3 className="sectionHeader"><img src={toc[9].icon} alt={toc[9].topic} />{toc[9].topic}</h3>
                    <p>
                        All items are dynamically linked in{" "}
                        <Link to={Definitions.Link_TxnOverview}><strong>Draft</strong> transaction</Link> (e.g. Receive, Pick, ...).
                        Any changes to the item's detail will be auto-reflected to the selected items in the <strong>Draft</strong>{" "}
                        transactions. For example:
                    </p>
                    <ol className="number-list">
                        <li>
                            You create a <strong>draft Receive</strong> and add <mark>Item A</mark> without committing it.
                        </li>
                        <li>
                            Edit the <mark>Item A</mark>'s name and save it (<mark>Item A-Edited)</mark>).
                        </li>
                        <li>
                            Go back to the <strong>draft Receive</strong> and you will see the item is updated to the
                            edited <mark>Item A-Edited</mark>.
                        </li>
                    </ol>
                    <p>
                        Once the transaction is <strong>committed</strong>, the items in the transaction are{" "}
                        <strong>snapshot</strong> to the current state. For example:
                    </p>
                    <ol className="number-list">
                        <li>
                            You commit the <strong>draft Receive</strong> in the above example.
                        </li>
                        <li>
                            You then change the <mark>Item A-Edited</mark> to <mark>Item A-Edited2</mark>.
                        </li>
                        <li>
                            Go back to the committed Receive and you will notice the item is still <mark>Item A-Edited</mark>.
                        </li>
                    </ol>
                    <p>
                        Likewise, when the transaction is <b>posted</b>. The transaction itself (with its items) are snapshot.
                    </p>
                    <p>
                        When viewing a snapshot record, you will see a lock{" "}
                        (<img className="inline-icon" src={lockIcon} />) icon at the top in the title.
                    </p>
                    <img className="pageScreenShot maxWidth-20em" src={snapshotTitleView} alt="snapshot item title view" />
                    <Note>
                        <p>
                            Every attributes in the item are snapshot, include <strong>on-hand</strong> count which shows
                            the on-hand count of the item at that point when the transaction is committed.
                        </p>
                    </Note>
                </section>
            </div>

            {/* Direct child of .article � the grid places it. */}
            <InThisArticle sections={toc} />
        </div>
    );
}