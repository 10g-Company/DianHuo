import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Constants from '../../../../constants'
import Note from '../../../../components/Note/Note';

import SearchIcon from '../../../../assets/images/Device/search-black.png';
import AddIcon from '../../../../assets/images/Device/add-icon.png';
import dataSetupTabs from '../../../../assets/images/Tutorial/dataSetup-tabs.png';
import dataSetupItemTab from '../../../../assets/images/Tutorial/dataSetup-ItemTab.png';
import dataSetupItemTabMoreMenu from '../../../../assets/images/Tutorial/dataSetup-ItemTab-moreMenu.png';

export default function DataSetupOverview(){
    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center">Data Setup</h1>

                <section>
                    <ol className="number-list">
                        <li>
                            Click on <strong>Data Setup</strong> from the drawer menu.
                        </li>
                        <li>
                            In the <strong>Data Setup</strong> page, you will see 3 tabs at the bottom:
                            <img className="pageScreenShot maxWidth-20em" src={dataSetupTabs} alt="Data Setup page bottom tabs" />

                            <ul className="bullet-list">
                                <li>
                                    <strong>Items</strong>: This is where you manage your items.
                                </li>
                                <li>
                                    <strong>UOM</strong>: View all the unit of measurement that you have set in your items.
                                </li>
                                <li>
                                    <strong>Category</strong>: View all the categories that you have set in your items.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section id="items-tab">
                    <h3>Items Tab</h3>
                    <TextImageLayout
                        bottomText={
                            <ul className="bullet-list">
                                <li>
                                    Click the <img className="inline-icon" src={SearchIcon} /> button to toggle the{" "}
                                    <Link to={Constants.Link_SearchPanel}>Search panel</Link>.<br />
                                    In this panel, you can also show/hide <strong>disable items</strong>.
                                </li>
                                <li>
                                    Click the <img className="inline-icon" src={AddIcon} /> button to{" "}
                                    <Link to={Constants.Link_CreateNewItem} >add new item</Link>.
                                </li>
                                <li>
                                    Click on the <strong>more</strong> option menu at the top-right, then click on the{" "}
                                    <strong>Export QR codes to PDF</strong> button to export all items to a PDF file.

                                    <img className="pageScreenShot maxWidth-12em" src={dataSetupItemTabMoreMenu} />
                                </li>
                            </ul>
                        }
                        mediaSrc={dataSetupItemTab}
                        mediaAlt="item tab page view"
                    />
                </section>
            </div>
        </div>
    );
}