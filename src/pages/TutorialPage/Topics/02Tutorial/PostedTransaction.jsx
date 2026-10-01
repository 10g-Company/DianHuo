import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Definitions from '../../../../constants';
import Note from '../../../../components/Note/Note';

import stockTakeIcon from '../../../../assets/images/Device/stock-take.png';
import AddButton from '../../../../assets/images/Device/add-icon.png';
import SaveButton from '../../../../assets/images/Device/save.png';
import EditButton from '../../../../assets/images/Device/pencil.svg';
import DeleteButton from '../../../../assets/images/Device/delete.svg';
import CommitButton from '../../../../assets/images/Device/commit-icon.png';
import PostedItemCountField from '../../../../assets/images/Device/posted-item-count-field.jpg';
import SelectOnButton from '../../../../assets/images/Device/select-on.png';
import SelectOffButton from '../../../../assets/images/Device/select-off.png';
import ArchiveButton from '../../../../assets/images/Device/archive.png';
import RestoreButton from '../../../../assets/images/Device/unarchive.png';

import PostedPickListView from '../../../../assets/images/Tutorial/posted-pick-listview.png';
import PostedStockTake from '../../../../assets/images/Tutorial/txn-StockTake-posted.png';
import ArchiveStockTake from '../../../../assets/images/Tutorial/txn-StockTake-archive-selection.png';
import ArchivePage from '../../../../assets/images/Tutorial/archive-page-selection.png';

export default function PostedTransaction() {
    const toc = [
        { topic: "Posted Transactions List", id: "posted-txn-list" }, // 0
        { topic: "Posted Transaction Detail", id: "posted-txn-detail" },
        { topic: "Archive the Transactions", id: "archive-txn" },
        { topic: "Restore archived Transactions", id: "archives-page" },
    ];

    return (
         <div className="article">
            <div className="article__content">
                <h1 className="text-center">Posted Transaction</h1>
                <br/>

                <section id={toc[0].id} >
                    <h3>{toc[0].topic}</h3>
                    <TextImageLayout
                        bottomText={
                            <ul>
                                <li>
                                    To see all your <b>posted</b> transactions of the respective type, and go to the{" "}
                                    <Link to={Definitions.Link_TxnListPage}>Posted tab</Link> in the respective{" "}
                                    <b>Transaction List page</b>.
                                </li>
                                <li>
                                    When your posted transactions list grows, you can{" "}
                                    <Link to={Definitions.Link_TxnHowToArchive}>archive</Link> the transactions to unclutter the list.
                                    <Note>
                                        <p>
                                            Archive will just move the selected transactions to the{" "}
                                            <Link to="/tutorial?topic=posted-txn#archives-page"><b>Archives</b> page</Link>.
                                            It <strong>does not</strong> delete the transactions.
                                        </p>
                                    </Note>
                                </li>
                            </ul>
                        }
                        mediaSrc={PostedPickListView}
                        mediaAlt="posted txn list view"
                    />
                </section>

                <section id={toc[1].id} >
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        bottomText={
                            <ul className="bullet-list">
                                <li>
                                    When you open a posted transaction, you will see that the <b>count field</b> now consist of 
                                    2 values:
                                    <img src={PostedItemCountField} />
                                    <ul className="bullet-2-list">
                                        <li>
                                            <u>Top value (in gray):</u> the count input for the transaction.
                                        </li>
                                        <li>
                                            <u>Bottom value (in blue):</u> the item's on-hand value <strong>before</strong> the
                                            transaction is posted.
                                        </li>
                                    </ul>
                                    <p>
                                        For example, for a posted <b>Receive</b>:
                                    </p>
                                    <ul className="bullet-2-list">
                                        <li>
                                            Top value: <b>5</b> count of the item is received into the inventory.
                                        </li>
                                        <li>
                                            Bottom value: before the receive, there are <b>10</b> count of the item in the inventory. 
                                            Hence, after this posted receive, there will be 15 count of the item (10 + 5).

                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    In the following transaction types, you might see a <b style={{ color: 'red' }} >[ ! ]</b> symbol 
                                    next to the item:
                                    <ul className="bullet-2-list">
                                        <li>
                                            <b>Stock-Take</b>: the input value is not the same as the <b>on-hand</b> value. When you do a 
                                            stocktake, the count should match the current on-hand value.<br />
                                            If you have lesser or greater
                                            input value, it means that you have missing item, or item is added to your inventory without
                                            registering them (e.g. via <b>Receive</b>).
                                        </li>
                                        <li>
                                            <b>Pick</b>: the picked count should not be more than the <b>on-hand</b> value. You cannot 
                                            take more count of the item than what you have in your inventory.
                                        </li>
                                    </ul>

                                </li>
                            </ul>
                        }
                        mediaSrc={PostedStockTake}
                        mediaAlt="posted txn with items"
                    />
                </section>

                <section id={toc[2].id}>
                    <h3>{toc[2].topic}</h3>
                    <TextImageLayout
                        bottomText={
                            <div>
                                <ol className="number-list">
                                    <li>
                                        Click the <img className="inline-icon" src={SelectOnButton} /> button at the top to enter into the{" "}
                                        <b>selection mode</b>.
                                    </li>
                                    <li>
                                        Click on the <b style={{color:'orange'}} >orange checkbox</b> next to the Transaction to toggle the selection.
                                    </li>
                                    <li>
                                        At anytime, click on the <img className="inline-icon" src={SelectOffButton} /> button at the top 
                                        to abort and exit <b>selection mode</b>.
                                    </li>
                                    <li>
                                        Lastly, click the <img className="inline-icon" src={ArchiveButton} /> button at the top to 
                                        archive the selected transactions.
                                    </li>
                                </ol>
                                <Note>
                                    You can view all your archived Transactions in the <b>Archives</b> page from the <b>menu drawer</b>.
                                </Note>
                            </div>

                        }
                        mediaSrc={ArchiveStockTake}
                        mediaAlt="archive selection mode with a checked record"
                    />
                </section>

                <section id={toc[3].id}>
                    <h3>{toc[3].topic}</h3>
                    <TextImageLayout
                        bottomText={
                            <ol className="number-list">
                                <li>
                                    Go to the <b>Archives</b> page from the <b>menu drawer</b>.
                                </li>
                                <li>
                                    Click the <img className="inline-icon" src={SelectOnButton} /> button at the top to enter into the{" "}
                                    <b>selection mode</b>.
                                </li>
                                <li>
                                    Click on the <b style={{ color: 'orange' }} >orange checkbox</b> next to the Transaction to toggle the selection.
                                </li>
                                <li>
                                    At anytime, click on the <img className="inline-icon" src={SelectOffButton} /> button at the top
                                    to abort and exit <b>selection mode</b>.
                                </li>
                                <li>
                                    Lastly, click the <img className="inline-icon" src={RestoreButton} /> button at the top to
                                    restore the selected transactions back to the{" "}
                                    <Link to={Definitions.Link_TxnListPage} >Posted tab</Link> of the respective{" "}
                                    <b>Transaction List</b> page.
                                </li>
                            </ol>
                        }
                        mediaSrc={ArchivePage}
                        mediaAlt="archives page in selection mode with a checked record"
                    />
                </section>
            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}