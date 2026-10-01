import React from 'react';
import { Link } from 'react-router-dom';
import * as Definitions from '../../../../constants'
import Popover from '../../../../components/Popover/Popover';
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import { REPLENISH_POPOVER, BOM_POPOVER, ITEMTYPE_POPOVER } from '../../../../constants'
import Note from '../../../../components/Note/Note';

import lockIcon from '../../../../assets/images/Device/lock-icon.svg';
import searchButton from '../../../../assets/images/Device/search-black.png';
import QRAddButton from '../../../../assets/images/Device/add-items-qr-icon.svg';

import menuDrawerIcon from '../../../../assets/images/Tutorial/menuDrawer-icon.png';
import menuDrawerPage from '../../../../assets/images/Tutorial/menuDrawer-page.png';
import onHand2Page from '../../../../assets/images/Tutorial/home-onhand-2-page.png';
import fullCategory from '../../../../assets/images/Tutorial/fullCategory.png';
import compactCategory from '../../../../assets/images/Tutorial/compactCategory.png';
import searchPanel from '../../../../assets/images/Tutorial/searchPanel.png'
import searchPanelItem from '../../../../assets/images/Tutorial/searchPanel-item.png'
import receivePostedTitleView from '../../../../assets/images/Tutorial/snapshot-receive-titleview.png'
import dateField from '../../../../assets/images/Tutorial/date-field.png'
import datePopup from '../../../../assets/images/Tutorial/date-popup.png'

export default function UIIntro() {
    const toc = [
        { topic: "Menu Drawer", id: "menu-drawer" },
        { topic: "Item Listview", id: "item-listview" },
        { topic: "Search Item", id: "search-item" },
        { topic: "Posted/Snapshot record", id: "snapshot-record" },
        { topic: "Record's Date", id: "record-date" },
        
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center">UI Introduction</h1>
                <br />

                <section id={toc[0].id}>
                    <h3>{toc[0].topic}</h3>
                    <ul className="bullet-list">
                        <li>
                            Click the <img className="inline-icon" src={menuDrawerIcon} alt="menu drawer icon" /> button at the top-left
                            to open the <b>menu drawer</b>.
                        </li>
                        <li>
                            Click on a <b>menu item</b> in the <b>menu drawer</b> to enter into the respective function page.
                            <img className="pageScreenShot maxWidth-20em" src={menuDrawerPage} alt="menu drawer page" />
                        </li>
                    </ul>
                </section>

                <section id={toc[1].id}>
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        topText={
                            <ul className="bullet-list">
                                <li>
                                    Click on the <Popover {...ITEMTYPE_POPOVER}>Type</Popover> <strong>group header</strong>{" "}
                                    (Raw, SFG or FG) to expand/collapse the group.
                                </li>
                                <li>
                                    Long-press on the <strong>group header</strong> and you can choose to{" "}
                                    <strong>Collapse All</strong> or <strong>Expand All</strong>.
                                </li>
                                <li>
                                    The numeric value at the right hand side of the item shows the <strong>count</strong> of the item. 
                                    The count with the <strong>blue</strong> background always shows the current{" "}
                                    <strong>on-hand</strong> count of the item. In the other views, it shows the count of the item 
                                    for that transaction.
                                </li>
                                <li>
                                    The list is sorted by <strong>Category</strong> then <strong>Fullname</strong> (Brand + Name).
                                </li>
                                <li>
                                    <strong>Category</strong> displayed is front-truncated, showing only the last level. 
                                    Each truncated level is replaced with the <mark>●</mark> symbol. Example:
                                    <img className="maxWidth-20em" src={fullCategory} alt="full category example" />
                                    will be shown as:
                                    <img className="maxWidth-12em" src={compactCategory} alt="compact category example" />
                                </li>
                                <li>
                                    Click on the item to open up the <Link to={Definitions.Link_CreateNewItem} >Item Detail</Link> page.
                                </li>
                            </ul>

                        }

                        mediaSrc={onHand2Page}
                        mediaAlt="item list collectionview"
                    />
                </section>

                <section id={toc[2].id}>
                    <h3>{toc[2].topic}</h3>
                    <ol className="number-list">
                        <li>
                            In pages that display <b>Item Listview</b> (e.g. On-hand, Data Setup), you can click on the{" "}
                            <img className="inline-icon" src={searchButton} /> button at the top-right to toggle the <b>Search Panel</b>.
                            <img className="pageScreenShot maxWidth-20em" src={searchPanel} alt="search panel" />
                        </li>
                        <li>
                            Input the text and it will search the items that <b>contain</b> the text.
                        </li>
                        <li>
                            You can also click on the <img className="inline-icon" src={QRAddButton} /> button to search by{" "}
                            <Link to={Definitions.Link_QRScan}>scanning QR code</Link>.
                        </li>
                        <li>
                            In <Link to={Definitions.Link_ItemsTab}>Data Setup</Link>, you will find an option to show/hide{" "}
                            <b>disabled</b> items to filter the Item List.
                            <img className="pageScreenShot maxWidth-20em" src={searchPanelItem} alt="search panel with disabled items option"/>
                        </li>
                    </ol>
                </section>

                <section id={toc[3].id}>
                    <h3>{toc[3].topic}</h3>
                    <p>
                        A padlock icon <img className="inline-icon" src={lockIcon} /> at the title indicate the record is a
                        snapshot at a previous time, and is cannot be edited or updated anymore.

                        <img className="pageScreenShot maxWidth-20em" src={receivePostedTitleView} alt="snapshot titleview" />
                    </p>
                    <p>
                        Example: posted transaction, posted transaction's item
                    </p>
                    <p>
                        (see also: <Link to={Definitions.Link_RecordSnapshot}>Record Snapshot</Link>)
                    </p>
                </section>

                <section id={toc[4].id}>
                    <h3>{toc[4].topic}</h3>
                    <TextImageLayout
                        topText={
                            <ol className="number-list">
                                <li>
                                    The <strong>date info</strong> field shows the last update date of that respective record.
                                    <img className="pageScreenShot maxWidth-20em border-0" src={dateField} alt="date info field" />
                                </li>
                                <li>
                                    Click on the above <strong>date info</strong> field to show more info.
                                </li>
                                <li>
                                    Click anywhere in the background to close the popup.
                                </li>
                            </ol>
                        }

                        mediaSrc={datePopup}
                        mediaAlt="date info view"
                    />
                </section>
            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}