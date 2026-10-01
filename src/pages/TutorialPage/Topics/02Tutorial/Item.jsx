import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Constants from '../../../../constants'
import Note from '../../../../components/Note/Note';
import Warning from '../../../../components/Warning/Warning';

import AddButton from '../../../../assets/images/Device/add-icon.png'
import SaveButton from '../../../../assets/images/Device/save.png'
import SelectFromListIcon from '../../../../assets/images/Device/add-items-icon.svg'
import SelectFromScan from '../../../../assets/images/Device/add-items-qr-icon.svg'
import EditButton from '../../../../assets/images/Device/pencil.svg'
import itemDetailPage from '../../../../assets/images/Tutorial/itemDetail-new-page.png'
import itemTypeSelection from '../../../../assets/images/Tutorial/itemType-selection.png'
import itemCategorySelection from '../../../../assets/images/Tutorial/itemDetail-category-selection.png'
import itemDetailBOMTab from '../../../../assets/images/Tutorial/itemDetail-BOMtab.png'
import itemDetailQROptions from '../../../../assets/images/Tutorial/itemDetail-QROptions.png'

export default function Item() {
    const toc = [
        { topic: "Create new item", id: "create-new-item" }, // 0
        { topic: "Setup BOM", id: "setup-bom" },
        { topic: "QR Code", id: "qr-code" },
        { topic: "Edit item", id: "edit-item" },
        { topic: "Disable item", id: "disable-item" },
        { topic: "Delete item", id: "delete-item" }
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center">Item</h1>

                <section id={toc[0].id}>
                    <h3>{toc[0].topic}</h3>
                    <TextImageLayout
                        bottomText={
                            <ol className="number-list">
                                <li>
                                    Click the <img className="inline-icon" src={AddButton} /> button at the top in the <strong>Data Setup</strong> {"> "}
                                    <Link to={Constants.Link_ItemsTab} >Items tab</Link> to open the a new <b>Item Detail</b> page.
                                </li>
                                <li>
                                    Enter the item details in this page. The required fields are shown in {" "}
                                    <span style={{ color: 'red' }}><strong>red</strong></span>.
                                </li>
                                <li>
                                    For certain fields, when you tap on the field, you can only pick from a list of options.
                                    For example, the <strong>Item Type</strong> field can only be one of the following:
                                    <img className="pageScreenShot maxWidth-20em" src={itemTypeSelection} alt="Item Type popup" />
                                </li>
                                <li>
                                    For certain fields, when you tap on the field, you can <b>select</b> from a list of options or{" "}
                                    <b>create</b> new. For example, <strong>Category</strong> field, it will show the following:
                                    <img className="pageScreenShot maxWidth-20em" src={itemCategorySelection} alt="Category popup" />
                                    <p>You can:</p>
                                    <ul className="bullet-list">
                                        <li><b>Click</b> a category to select it.</li>
                                        <li><b>Type</b> in the textbox to search for a category. Then select it from the result list.</li>
                                        <li>
                                            <b>Type</b> in the textbox and click {" "}
                                            <img className="inline-icon" src={SaveButton} alt="save button" /> to create a new category.
                                        </li>
                                    </ul>
                                    
                                </li>
                            </ol>
                        }
                        mediaSrc={itemDetailPage}
                        mediaAlt="new item detail page"
                    />

                    <Note>
                        <strong>Category</strong> supports sub / multi-level categories.
                        You can create it using the <strong>#</strong> in the format:{" "}
                        <strong>Parent Category#Sub Category#Sub Sub Category</strong><br /><br />
                        For example, if you type <strong>Drinks#Coffee#Instant Coffee</strong>, it will create a
                        new sub-category "Instant Coffee" under the sub-category "Coffee" which is under the parent
                        category "Drinks".
                    </Note>

                    <ol className="number-list mt-4" start="5">
                        <li id="replenish-attributes">
                            (Optional) Enter <strong>Min Qty</strong> and <strong>Max Qty</strong> to setup{" "}
                            <Popover {...Constants.REPLENISH_POPOVER} >replenish</Popover> attribute
                        </li>

                        <li>
                            <strong>To insert item's image</strong>, click on:
                            <ul className="bullet-list">
                                <li><strong>+ From Camera</strong>: Capture an image using your device's camera.</li>
                                <li><strong>+ From Gallery</strong>: Select an image from your device's photo gallery.</li>
                            </ul>
                        </li>

                        <li>
                            If the item's type is <strong>SFG</strong> or <strong>FG</strong>, go to the <strong>BOM tab</strong> at
                            the bottom, and add in the materials to{" "}
                            <Link to={Constants.Link_ItemSetupBOM} >form the BOM</Link>.
                        </li>

                        <li>
                            Lastly, click on <img className="inline-icon" src={SaveButton} alt="save button" /> to save the item and exit.
                        </li>
                    </ol>
                </section>

                <section id={toc[1].id}>
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        topText={
                            <ol className="number-list">
                                <li>
                                    Go to the <Popover {...Constants.BOM_POPOVER}>BOM</Popover> tab at the bottom.
                                    <Note>
                                        Only item of type <strong>SFG</strong> (Semi-Finished Goods) or <strong>FG</strong> (Finished Goods)
                                        can have BOM. You cannot create BOM for item of type Raw (Raw Material).
                                    </Note>
                                </li>
                                <li>
                                    Click <strong>+ items</strong> button to{" "}
                                    <Link to={Constants.Link_ItemSelection} >select the items</Link> to be included as materials.
                                    You can click on:
                                    <ul className="bullet-list">
                                        <li>
                                            <img className="inline-icon" src={SelectFromListIcon} alt="select by list" /> -
                                            Select from the existing items list.
                                        </li>
                                        <li>
                                            <img className="inline-icon" src={SelectFromScan} alt="select by qr code" /> - Scan the QR code of the item to select it.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    For each added item, you can click on the quantity field to{" "}
                                    <Link to={Constants.Link_InputCount} >enter the quantity</Link> required for the BOM.
                                </li>
                                <li>
                                    Lastly, click <img className="inline-icon" src={SaveButton} alt="save button" /> to save and exit.
                                </li>

                            </ol>
                        }

                        mediaSrc={itemDetailBOMTab}
                        mediaAlt={"Item BOM tab"}
                    />
                </section>

                <section id={toc[2].id}>
                    <h3>{toc[2].topic}</h3>
                    <TextImageLayout
                        topText={
                            <p>
                                By default, a random unique QR Code is assigned to every new item.<br/>
                                When you <b>long press</b> on the
                                QR Code, you will be prompt with the following set of options:
                                <Note>
                                    <p>
                                        The available options vary depending on the operation you are in.
                                    </p>
                                </Note>
                            </p>
                        }
                        bottomText={
                            <ol className="alpha-list">
                                <li>
                                    <b>[Download QR Code]</b> - download the image to your device
                                </li>
                                <li>
                                    <b>[Reset QR Code to default]</b> - set the QR Code back to the default random unique code
                                </li>
                                <li>
                                    <b>[Scan & Assign QR Code]</b> - allows you to scan a QR code and assign it to this item
                                </li>
                                <li>
                                    <b>[Scan & Assign QR Code & SKU]</b> - same as the above, but this will also assign the same code as your SKU
                                </li>
                                <li>
                                    <b>[Use SKU as QR Code]</b> - allows you to use your SKU as the QR Code
                                </li>
                                <li>
                                    <b>[Use QR Code as SKU]</b> - allows you to use your QR Code as the SKU
                                </li>
                            </ol>
                        }
                        mediaSrc={itemDetailQROptions}
                        mediaAlt="QR Code long press options"
                    />
                </section>

                <section id={toc[3].id}>
                    <h3>{toc[3].topic}</h3>
                    <p>
                        In the <strong>Item</strong> page, click the <img className="inline-icon" src={EditButton} /> button to enter 
                        into the <strong>edit mode</strong>.
                    </p>
                </section>

                <section id={toc[4].id}>
                    <h3>{toc[4].topic}</h3>
                    <ul className="bullet-list">
                        <li>
                            In the <strong>Item</strong> page, click on the <strong>more</strong> menu at the top-right, then click the {" "}
                            <strong>Disable</strong> button.
                        </li>
                        <li>
                            When the item is disabled, you can click on the <strong>more</strong> menu and select{" "}
                            <strong>Enable</strong> to re-enable the item.
                        </li>
                    </ul>
                    <Note>
                        <ul className="bullet-list">
                            <li>
                                When the item is <strong>disabled</strong>, you cannot add them to any transactions or use it
                                as BOM material.
                            </li>
                            <li>
                                If you disable an item that is currently used as BOM material in other item, you will be prompted
                                to <strong>auto-remove</strong> this item in all other items that is using it as material.
                            </li>
                            <li>
                                if you disable an item that is currently added in any <strong>draft</strong> transaction, 
                                you will be prompted to remove this item when you open the transaction.
                            </li>
                        </ul>
                    </Note>
                </section>

                <section id={toc[5].id}>
                    <h3>{toc[5].topic}</h3>
                    <ol className="number-list">
                        <li>
                            You need to <strong>disable</strong> the item first.
                        </li>
                        <li>
                            Click on the <strong>more</strong> menu at the top-right, then click on the <strong>Delete</strong> button 
                            to permanently delete the item.
                        </li>
                    </ol>
                    <Warning>
                        <p>
                            Once the item is deleted, it is <strong>not recoverable!</strong>
                        </p>
                    </Warning>
                </section>

            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}