import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Definitions from '../../../../constants';
import Note from '../../../../components/Note/Note';

import ProductionIcon from '../../../../assets/images/Device/mProductionOrder.png';
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
import ReplenishExample from '../../../../assets/images/Tutorial/replenish_example.png';
import LowLevelCountField from '../../../../assets/images/Device/low-level-indicator.jpg';
import ReplenishAutoCreateIcon from '../../../../assets/images/Device/replenish_auto_create.png';
import SendIcon from '../../../../assets/images/Device/send.png';

import endItemsTab from '../../../../assets/images/Tutorial/production-endItems.png';
import editField from '../../../../assets/images/Tutorial/count-onhand-field.png';
import bomTab from '../../../../assets/images/Tutorial/production-bomTab.png';
import pickTab from '../../../../assets/images/Tutorial/production-pickTab.png';
import pickDeletedTab from '../../../../assets/images/Tutorial/production-pick-deleted.png';

export default function ProductionPlan() {
    const toc = [
        { topic: "Overview", id: "overview" },
        { topic: "Create a new Production Plan", id: "create" },
        { topic: "Edit & Delete", id: "edit-delete" },
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center"><img src={ProductionIcon} /> Production Plan</h1>
                <br />

                <section id={toc[0].id} >
                    <h3>{toc[0].topic}</h3>

                    <p>
                        Production Plan computes the items/materials needed to produce the item. You can think of it as a <b>recipe</b>. 
                        For example, to make a <mark>Pizza</mark>, you will need:
                    </p>
                    <ul className="bullet-list">
                        <li>2 packs of flour (100g)</li>
                        <li>1 pack of dry yeast (50g)</li>
                        <li>1 pack of sugar (100g)</li>
                    </ul>

                    <Note>
                        <p>
                            Item must be <Link to={Definitions.Link_ItemSetupBOM}>configured as a BOM</Link> to be able to do a
                            production planning.
                        </p>
                    </Note>

                    <p>
                        When you <b>posted</b> a Production Plan, it will create a <b>Pick</b> transaction, with all the items you need 
                        to draw from your inventory to produce what is in your Production Plan.
                    </p>
                </section>

                <section id={toc[1].id} >
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        bottomText={
                            <ol className="number-list">
                                <li>
                                    Go into the <b>Production Plan</b> page from the <b>menu drawer</b>.
                                </li>
                                <li>
                                    Ensure you are at the <Link to={Definitions.Link_TxnListPage} >Draft tab</Link> and click
                                    the <img className="inline-icon" src={AddButton} /> button at the top to create a new
                                    Production Plan.
                                </li>
                                <li>Fill up the page accordingly in the <b>General tab</b> as shown at the bottom.</li>
                                <li>
                                    Go to the <b>End Items</b> tab at the bottom, and {" "}
                                    <Link to={Definitions.Link_ItemSelection}>select the items</Link> to produce.
                                </li>
                                <li>
                                    <Link to={Definitions.Link_InputCount}>Input the count</Link> that you want to produce.
                                    <Note>
                                        <p>
                                            The <b>count field</b> shows 2 values{" "}
                                            <img className="inline-icon" src={editField} alt="production plan item count field" />:
                                        </p>
                                        <ul className="bullet-list">
                                            <li>
                                                <b style={{ color: 'lightblue' }} >Top value</b>: is the count, which you input, that
                                                you want to produce.
                                            </li>
                                            <li>
                                                <b style={{ color: 'blue' }} >Bottom value</b>: is the item's current on-hand count.
                                            </li>
                                        </ul>
                                    </Note>
                                </li>
                            </ol>
                        }
                        mediaSrc={endItemsTab}
                        mediaAlt="production plan in End Items tab"
                    />

                    <TextImageLayout
                        bottomText={
                            <ol className="number-list" start="6">
                                <li>
                                    Next, go into the <b>BOM tab</b> at the bottom. And in this tab, it shows all the 
                                    items and the count needed to produce your selected <b>end items</b>.
                                    <Note>
                                        <p>
                                            The <b>count field</b> displays 2 values{" "}
                                            <img className="inline-icon" src={PostedItemCountField} />:
                                        </p>
                                        <ul className="bullet-list">
                                            <li>
                                                <b style={{ color: 'gray' }}>Top value</b>: is the count required to produce your{" "}
                                                selected <b>end items</b>. This is a consolidated sum. For example, if several end items 
                                                need <mark>Item A</mark> to produce, the count here is a consoldated sum for all the
                                                end items.
                                            </li>
                                            <li>
                                                <b style={{ color: 'blue' }} >Bottom value</b>: the current <b>on-hand</b> count
                                                for this item.
                                            </li>
                                        </ul>
                                    </Note>
                                </li>
                                <li>
                                    Once confirmed, click the <img className="inline-icon" src={CommitButton} /> button to{" "}
                                    <b>post</b> the Production Plan, and a <b>Draft Pick</b> will be created that is
                                    linked to this <b>posted</b> Production Plan.
                                </li>
                            </ol>
                        }
                        mediaSrc={bomTab}
                        mediaAlt="production plan in BOM tab"
                    />

                    <TextImageLayout
                        bottomText={
                            <ol className="number-list" start="8">
                                <li>
                                    In the <b>posted</b> Production Plan, go into the <b>Pick tab</b> at the bottom. And this shows
                                    the pick list of all the items that you need to draw from your inventory for this production plan.
                                </li>
                                <li>
                                    You can click the <b>Open Pick</b> button to open this <b>Pick</b> transaction in a new window.
                                    <Note>
                                        <p>
                                            This <b>Pick</b> transaction is linked to this <b>Production Plan</b>. Any 
                                            amendment to the <b>Pick</b> will be reflected in here.
                                        </p>
                                    </Note>
                                </li>
                                <li>
                                    If the <b>Pick</b> transaction is <b>deleted</b>, you can click the <b>Re-generate Pick</b> button 
                                    to recreate the <b>Pick</b> transaction.
                                    <img className="pageScreenShot maxWidth-20em" src={pickDeletedTab} />
                                </li>
                            </ol>
                        }
                        mediaSrc={pickTab}
                        mediaAlt="posted production plan in Pick tab"
                    />
                </section>

                <section id={toc[2].id} >
                    <h3>{toc[2].topic}</h3>

                    <p>
                        (see <Link to={Definitions.Link_TxnEdit}>edit</Link> and <Link to={Definitions.Link_TxnDelete}>delete</Link> for
                        transaction)
                    </p>
                </section>
            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}