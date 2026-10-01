import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Definitions from '../../../../constants'
import Note from '../../../../components/Note/Note';
import OperationOverview from '../../../../components/OperationOverview/OperationOverview';

import stockTakeIcon from '../../../../assets/images/Device/stock-take.png';
import AddButton from '../../../../assets/images/Device/add-icon.png'
import SaveButton from '../../../../assets/images/Device/save.png'
import EditButton from '../../../../assets/images/Device/pencil.svg'
import DeleteButton from '../../../../assets/images/Device/delete.svg'
import CommitButton from '../../../../assets/images/Device/commit-icon.png'

import menuDrawerPage from '../../../../assets/images/Tutorial/menuDrawer-page.png'
import transactionsTabs from '../../../../assets/images/Tutorial/transactions-tabs.png'
import recentMovementPage from '../../../../assets/images/Tutorial/recentMovement-page.png'

export default function Transactions() {
    const toc = [
        { topic: "Transaction List", id: "transaction-list" }, // 0
        { topic: "Recent Movements", id: "recent-txns" }, // 0
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center">Transactions</h1>

                <section>
                    <div>
                        <p>Transaction will adjust or compute the item's <b>on-hand count</b> after it is posted/committed.</p>
                        <OperationOverview />
                    </div>
                    <br/>

                    <TextImageLayout
                        topText={
                            <div>
                                <p>
                                    You can go into the following <b>Transaction</b> from the <b>menu drawer</b>:
                                </p>
                                <ul className="bullet-list">
                                    <li>
                                        <b>Stock-Take</b>: It will replace the item's <b>on-hand count</b>.
                                    </li>
                                    <li>
                                        <b>Movement Transactions</b>: It will compute and adjust the item's <b>on-hand count</b> accordingly.
                                        It consists of:
                                        <ul className="bullet-2-list">
                                            <li>
                                                <b>Receive</b>: This <strong>put</strong> items into your inventory.
                                                It will <strong>add</strong> to the item's on-hand count.
                                            </li>
                                            <li>
                                                <b>Pick</b>: This <strong>draws</strong> items out from your inventory.
                                                It will <strong>substract</strong> the item's on-hand count.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Master Resource Planning</b>: plans that calculate the materials and resources needed. It 
                                        helps with the production efficiency and optimize inventory-control.
                                        <ul className="bullet-2-list">
                                            <li>
                                                <Link to="/tutorial?topic=replenish"><b>Replenish Plan</b></Link>: 
                                                a plan to determines when and how much stock to reorder.
                                            </li>
                                            <li>
                                                <Link to="/tutorial?topic=production-plan"><b>Production Plan</b></Link>: 
                                                a plan that outlines what to produces and how much materials are needed.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        }
                        mediaSrc={menuDrawerPage}
                        mediaAlt="menu drawer"
                    />
                </section>

                <section id={toc[0].id} >
                    <h3>{toc[0].topic}</h3>
                    <p>
                        From the <b>menu drawer</b>, select the respective transaction menu (Receive, Pick, Stock-take).
                        And it will open a{" "}
                        <b>Transaction List</b> page. In this page, you will see 2 tabs at the bottom:
                        <img className="pageScreenShot maxWidth-20em" src={transactionsTabs} alt="txn draft and posted tabs" />
                    </p>

                    <ul className="bullet-list">
                        <li>
                            <b>Draft tab</b>: you will see a list of all your <b>draft</b> transaction. And you can create a{" "}
                            <Link to={Definitions.Link_TxnPage}>new transaction</Link>.
                        </li>
                        <li>
                            <b>Posted tab</b>: you will see a list of all your{" "}
                            <Link to={Definitions.Link_TxnPosted}><b>posted</b> transaction</Link>.
                        </li>
                    </ul>
                </section>

                <section id={toc[1].id}>
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        topText={
                            <ol className="number-list">
                                <li>From the <b>menu drawer</b>, click on the <b>Inventory Movement</b> menu.</li>
                                <li>
                                    It will open a <b>Transaction List</b> page that shows the last 20 movement
                                    transactions (<b>Receive</b> and <b>Pick</b>).
                                </li>
                            </ol>
                        }
                        mediaSrc={recentMovementPage}
                        mediaAlt="recent movements page"
                    />
                    
                </section>
            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}