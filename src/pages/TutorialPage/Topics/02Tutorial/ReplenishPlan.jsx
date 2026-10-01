import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Definitions from '../../../../constants';
import Note from '../../../../components/Note/Note';

import ReplenishIcon from '../../../../assets/images/Device/mReplenish.png';
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

import lowLevelList from '../../../../assets/images/Tutorial/home-lowlevel-page.png';
import newReplenish from '../../../../assets/images/Tutorial/replenish-new.png';


export default function ReplenishPlan() {
    const toc = [
        { topic: "Overview", id: "overview" },
        { topic: "Auto Create", id: "auto-create" },
        { topic: "Manual Create", id: "manual-create" },
        { topic: "Edit & Delete", id: "edit-delete" },
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center"><img src={ReplenishIcon}/> Replenish Plan</h1>
                <br/>

                <section id={toc[0].id} >
                    <h3>{toc[0].topic}</h3>
                    <p>
                        Replenish Plan creates a re-ordering plan for those items that are low in count.
                    </p>
                    <Note>
                        <b>Only</b> items configured with{" "}
                        <Link to={Definitions.Link_ItemReplenishAttributes}>replenish attributes</Link> can be used for replenish planning.
                    </Note>
                    <p>
                        There are 2 ways to create a Replenish Plan:
                    </p>
                    <ul className="bullet-list">
                        <li>
                            <Link to={Definitions.Link_ReplenishAutoCreate}><b>Auto</b></Link>: all items' <b>on-hand</b> count that
                            dropped below its <b>Min Qty</b> will be auto addded into the plan.
                        </li>
                        <li>
                            <Link to={Definitions.Link_ReplenishManualCreate}><b>Manual</b></Link>: manually create a Replenish Plan
                            and select the items to add to the plan.
                        </li>
                        
                    </ul>

                    <Note>
                        <ul className="bullet-list">
                            <li>
                                When item is added to the Replenish Plan, it will auto compute the replenish count based on its{" "}
                                <b>Min Qty</b> and <b>Max Qty</b>.
                            </li>
                            <li>
                                Replenish Plan <strong>does not</strong> change the inventory count when posted.
                            </li>
                        </ul>
                    </Note>

                    <p><b>Example:</b></p>
                    <p>An item, a bottle of <mark>Soya Sauce</mark>, with the following replenish attributes:</p>
                    <ul className="bullet-list">
                        <li>
                            <b>Min Qty:</b> 5 {"➔"} there should always be <b>at least</b> 5 bottles of <mark>Soya Sauce</mark> in
                            the inventory.
                        </li>
                        <li>
                            <b>Max Qty:</b> 12 {"➔"} ideally, there <b>should not</b> be <b>more than</b> 12 bottles in the inventory.
                        </li>
                    </ul>
                    <p>
                        When the current count is 3, it dropped below the <b>Min Qty</b> of 5, and the replenish count will be
                        computed to 9.
                    </p>
                    <img className="no-border" src={ReplenishExample} />
                </section>

                <section id={toc[1].id}>
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        bottomText={
                            <ol className="number-list">
                                <li>
                                    Go to the <b>Home</b> menu from the <b>menu drawer</b>.
                                </li>
                                <li>
                                    Select the <b>Low-Level</b> tab at the bottom.
                                </li>
                                <li>
                                    It will show a list of items that dropped below it's <b>Min Qty</b>.
                                    <Note>
                                        <b>Only</b> items configured with{" "}
                                        <Link to={Definitions.Link_ItemReplenishAttributes}>replenish attributes</Link> will be 
                                        shown here.
                                    </Note>
                                </li>
                                <li>
                                    The <b>count field</b> now shows 2 values, <img className="inline-icon" src={LowLevelCountField} />:
                                    <ul className="bullet-2-list">
                                        <li>
                                            <b style={{color:'orange'}} >Top value</b>: the <b>Min Qty</b> as per item's replenish attribute.
                                        </li>
                                        <li>
                                            <b style={{ color: 'blue' }} >Bottom value</b>: the current <b>on-hand</b> count.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Click the <img className="inline-icon" src={ReplenishAutoCreateIcon} /> button at the top to 
                                    create a <b>Replenish Plan</b> with all the items listed in the list.
                                </li>
                                <li>
                                    You can do further amendment to the Replenish Plan.
                                </li>
                                <li>
                                    Lastly, click the <img className="inline-icon" src={SendIcon} /> button at the top to post your plan.
                                    A pdf file will be generated.
                                </li>
                            </ol>
                        }
                        mediaSrc={lowLevelList}
                        mediaAlt="Low-Level Inventory page"
                    />
                </section>

                <section id={toc[2].id}>
                    <h3>{toc[2].topic}</h3>

                    <TextImageLayout
                        bottomText={
                            <ol className="number-list">
                                <li>
                                    Go into the <b>Replenish Plan</b> page from the <b>menu drawer</b>.
                                </li>
                                <li>
                                    Ensure you are at the <Link to={Definitions.Link_TxnListPage} >Draft tab</Link> and click
                                    the <img className="inline-icon" src={AddButton} /> button at the top to create a new Replenish Plan.
                                </li>

                                <li>Fill up the page accordingly.</li>
                                <li>
                                    Select the <b>Items tab</b> at the bottom to{" "}
                                    <Link to={Definitions.Link_ItemSelection}>add items</Link> into the plan.
                                </li>
                                <li>
                                    You can click on the <b>more</b> menu at the top and click on the <b>Export to pdf</b> button 
                                    to export this Replenish Plan to a pdf file.
                                </li>
                                <li>
                                    Lastly, click <img className="inline-icon" src={SendIcon} /> button at the top to post your plan. 
                                    A pdf file will be generated.
                                </li>
                            </ol>
                        }
                        mediaSrc={newReplenish}
                        mediaAlt="new replenish plan page"
                    />
                </section>

                <section id={toc[3].id}>
                    <h3>{toc[3].topic}</h3>
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