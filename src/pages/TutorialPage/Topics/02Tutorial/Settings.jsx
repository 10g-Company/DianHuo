import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../components/Popover/Popover';
import { InThisArticle } from "../../../../components/InThisArticle/InThisArticle";
import TextImageLayout from '../../../../components/TextImageLayout/TextImageLayout';
import * as Definitions from '../../../../constants';
import Note from '../../../../components/Note/Note';
import Warning from '../../../../components/Warning/Warning';

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
import SettingPageIcon from '../../../../assets/images/Device/setting-icon.png';
import DoneIcon from '../../../../assets/images/Device/done-icon.png';

import selectDefaultFolder from '../../../../assets/images/Tutorial/select-defaultFolder.png';
import restoreConfirmation from '../../../../assets/images/Tutorial/restore-confirmation.png';
import resetConfirmation from '../../../../assets/images/Tutorial/reset-confirmation.png';

export default function Settings() {
    const toc = [
        { topic: "Default PDF Page Size", id: "pdf-page" },
        { topic: "Default Folder", id: "default-folder" },
        { topic: "Backup Data", id: "backup" },
        { topic: "Restore Data", id: "restore" },
        { topic: "Reset Data", id: "reset" },
        { topic: "Optimize Database", id: "optimize" },
        { topic: "Clear Unused Photo", id: "clear-photo" },
    ];

    return (
        <div className="article">
            <div className="article__content">
                <h1 className="text-center"><img src={SettingPageIcon} /> Settings</h1>
                <br/>
                <p>
                    Go into the <b>Settings</b> page from the <b>menu drawer</b>.
                </p>

                <section id={toc[0].id}>
                    <h3>{toc[0].topic}</h3>
                    <p>
                        The page size used to generate the pdf file. You can choose either <b>A4</b> or <b>Letter</b>.
                    </p>
                </section>

                <section id={toc[1].id}>
                    <h3>{toc[1].topic}</h3>
                    <TextImageLayout
                        topText={
                            <div>
                                <p>
                                    Select a default location for the app's files (e.g. the backup files, the download QR code).
                                </p>
                                <ol className="number-list">
                                    <li>It will open a <b>Folder Picker</b> dialog.</li>
                                    <li>
                                        Navigate to the desired folder and click the <b>USE THIS FOLDER</b> button at the bottom.
                                    </li>
                                </ol>

                                <Note>
                                    <ul className="bullet-list">
                                        <li>
                                            The <b>Folder Picker</b> dialog may varies depending on your device.
                                        </li>
                                        <li>
                                            If you can't click on the <b>USE THIS FOLDER</b> button, it means that you can't use this folder.
                                            Example, you can't use the <b>Download</b> folder. Choose another folder, or create a new folder in that
                                            folder.
                                        </li>
                                    </ul>
                                </Note>
                            </div>
                        }
                        mediaSrc={selectDefaultFolder}
                    />
                    
                </section>

                <section id={toc[2].id}>
                    <h3>{toc[2].topic}</h3>
                    <p>
                        Backup all your data. A backup file will be created and saved to the <b>default folder</b>.
                    </p>
                </section>

                <section id={toc[3].id}>
                    <h3>{toc[3].topic}</h3>
                    <TextImageLayout
                        topText={
                            <div>
                                <p>
                                    Restore data from a previous backup file.
                                </p>
                                <ol className="number-list">
                                    <li>
                                        Select a backup file to restore.
                                    </li>
                                    <li>
                                        Swipe the <img className="inline-icon" style={{ borderRadius: '1em' }} src={DoneIcon} /> button from right to left to confirm.
                                    </li>
                                </ol>
                                <Warning>
                                    <p>
                                        All your current data will be deleted. Once data is deleted, it is <b>not recoverable</b>!
                                    </p>
                                </Warning>
                            </div>
                        }
                        mediaSrc={restoreConfirmation}
                    />
                   
                </section>

                <section id={toc[4].id}>
                    <h3>{toc[4].topic}</h3>
                    <TextImageLayout
                        topText={
                            <div>
                                <p>
                                    Delete all your current data.
                                </p>
                                <p>
                                    Swipe the <img className="inline-icon" style={{ borderRadius: '1em' }} src={DoneIcon} /> button from right to left to confirm.
                                </p>
                                <Warning>
                                    <p>
                                        All your current data will be deleted. Once data is deleted, it is <b>not recoverable</b>!
                                    </p>
                                </Warning>
                            </div>
                        }
                        mediaSrc={resetConfirmation}
                    />
                </section>

                <section id={toc[5].id}>
                    <h3>{toc[5].topic}</h3>
                    <p>
                        It will compress and optimize the database. Execute this when your app is running slow.
                    </p>
                </section>

                <section id={toc[6].id}>
                    <h3>{toc[6].topic}</h3>
                    <p>
                        It will delete all photo that are not associate to any record.
                    </p>
                </section>
            </div>

            <InThisArticle sections={toc} />
        </div>
    );
}