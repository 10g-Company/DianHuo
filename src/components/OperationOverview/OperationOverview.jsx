import React from 'react';
import { Row } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import './OperationOverview.css';

// Adjust these import paths to match your project structure
import mReplenishIcon from "../../assets/images/Device/mReplenish.png";
import receiveIcon from '../../assets/images/Device/receive.png';
import pickIcon from '../../assets/images/Device/pick.png';
import databaseBlackIcon from '../../assets/images/Device/database-black.png';
import stockTakeIcon from '../../assets/images/Device/stock-take.png';
import mProductionOrderIcon from '../../assets/images/Device/mProductionOrder.png';

const OperationOverview = () => {
    return (
        <div
            className="bg-primary px-2"
            style={{ borderRadius: '1em', color: 'white' }}
        >
            <Row style={{
                borderBottom: '1px dotted lightgray',
                marginBottom: '1em',
            }}
            >
                {/* row 1 */}
                <div className="operation mx-auto">
                    <div>
                        <img className="feature-icon" src={mReplenishIcon} alt="Replenishment" />
                        <span className="feature-title">Replenishment</span>
                    </div>

                    <div className="feature-text">Re-fill items low in quantity</div>
                </div>
            </Row>

            <div className="row">
                {/* row 2 */}

                <div className="col-7">
                    {/* col1 */}
                    <div className="operation row">
                        <div className="op-text col-10">
                            {/* col1-1 */}
                            <div>
                                <img className="feature-icon" src={receiveIcon} alt="Receive" />
                                <span className="feature-title" style={{ marginTop: '-0.7rem' }}>
                                    Receive
                                </span>
                            </div>

                            <div className="feature-text">Put items into the warehouse</div>
                        </div>

                        <div className="op-arrow col-2">
                            <FaArrowRight size="2rem" />
                        </div>
                    </div>

                    <div className="operation row">
                        {/* col1-2 */}
                        <div className="op-text col-10">
                            <div>
                                <img className="feature-icon" src={pickIcon} alt="Pick" />
                                <span className="feature-title">Pick</span>
                            </div>

                            <div className="feature-text">Remove items from the warehouse</div>
                        </div>

                        <div className="op-arrow col-2">
                            <FaArrowLeft size="2rem" />
                        </div>
                    </div>
                </div>

                <div className="col bg-secondary mr-3"
                    style={{ borderRadius: '1em' }}>
                    {/* col2 */}
                    <div className="operation row">
                        <div className="op-text">
                            {/* col2-1 */}
                            <div>
                                <img className="feature-icon" src={databaseBlackIcon} alt="Item Master" />
                                <span className="feature-title">Item Master</span>
                            </div>

                            <div className="feature-text">Defines the items in the warehouse</div>
                        </div>
                    </div>

                    <div className="operation row">
                        <div className="op-text">
                            {/* col2-2 */}
                            <div>
                                <img className="feature-icon" src={stockTakeIcon} alt="Stock-Take" />
                                <span className="feature-title">Stock-Take</span>
                            </div>

                            <div className="feature-text">Re-count the items in the warehouse</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="row"
                style={{
                    borderTop: '1px dotted lightgray',
                    marginTop: '1em',
                }}
            >
                {/* row 3 */}
                <div className="operation mx-auto">
                    <div>
                        <img className="feature-icon" src={mProductionOrderIcon} alt="Production Plan" />
                        <span className="feature-title">Production Plan</span>
                    </div>

                    <div className="feature-text">Plan items needed for production</div>
                </div>
            </div>
        </div>
    );
};

export default OperationOverview;