import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Definitions from '../../../../constants'
import Note from '../../../../components/Note/Note';
import Warning from '../../../../components/Warning/Warning';

import stockTakeIcon from '../../../../assets/images/Device/stock-take.png';
import AddButton from '../../../../assets/images/Device/add-icon.png'
import SaveButton from '../../../../assets/images/Device/save.png'
import EditButton from '../../../../assets/images/Device/pencil.svg'
import DeleteButton from '../../../../assets/images/Device/delete.svg'
import CommitButton from '../../../../assets/images/Device/commit-icon.png'

import stockTakeNewPage from '../../../../assets/images/Tutorial/txn-StockTake-page.png'

export default function SingleTransaction() {
    const toc = [
        { topic: "Create new transaction", id: "txn-create-new" }, // 0
        { topic: "Edit transaction", id: "txn-edit" }, // 0
        { topic: "Delete transaction", id: "txn-delete" }, // 0
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center">Transaction</h1>

                <section id={toc[0].id}>
                    <h3>{toc[0].topic}</h3>

                    <ol className="number-list">
                        <li>
                            Click on the type of <b>Transaction</b> you want to create from the <b>menu drawer</b>.
                        </li>
                        <li>
                            Ensure you are at the <b>Draft tab</b> as highlighted at the bottom.
                        </li>
                        <li>
                            Click on the <img className="inline-icon" src={AddButton} /> button at the top to create a new transaction.
                        </li>
                    </ol>

                    <TextImageLayout
                        bottomText={
                            <div>
                                <ol className="number-list" start="4">
                                    <li>
                                        Input the fields accordingly.
                                    </li>
                                    <li>
                                        <Link to={Definitions.Link_ItemSelection}>Select the items</Link> to be included into this
                                        transaction
                                    </li>
                                    <li>
                                        <Link to={Definitions.Link_InputCount}>Input</Link> the item's count.
                                        <Note>
                                            <p>
                                                There is a <b>[<img className="inline-icon" src={DeleteButton} /> - item]</b> button. This
                                                will remove all disabled or deleted items from your selection.
                                            </p>
                                        </Note>
                                    </li>
                                    <li>
                                        Lastly, click the <img className="inline-icon" src={CommitButton} /> button at the top to{" "}
                                        <strong>post/commit</strong> your transaction.
                                    </li>
                                </ol>

                                <Note>
                                    <ul className="bullet-list">
                                        <li>The transaction will <strong>auto-save</strong> whenever there is any changes.</li>
                                        <li>Your inventory items' on-hand value will only be reflected when the transaction is posted.</li>
                                    </ul>
                                </Note>
                                
                            </div>
                        }
                        mediaSrc={stockTakeNewPage}
                        mediaAlt="new stock-take transaction"
                    />
                   
                </section>

                <section id={toc[1].id} >
                    <h3>{toc[1].topic}</h3>
                    <p>
                        In the <strong>Transaction</strong> page, click <img className="inline-icon" src={EditButton} /> button to enter
                        into the <strong>edit mode</strong>. Any changes will be <strong>auto-saved</strong>.
                    </p>
                </section>

                <section id={toc[2].id}>
                    <h3>{toc[2].topic}</h3>
                    <ol className="number-list">
                        <li>Go into <b>edit mode</b>.</li>
                        <li>
                            Click the <img className="inline-icon" src={DeleteButton} /> button at the top to permanently delete
                            the transaction.
                        </li>
                    </ol>
                    <Note>
                        <p>
                            Only <b>Draft</b> transaction can be deleted
                        </p>
                    </Note>

                    <Warning>
                        <p>Once the transaction is deleted, it is <b>not recoverable</b>!</p>
                    </Warning>
                </section>
            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}
