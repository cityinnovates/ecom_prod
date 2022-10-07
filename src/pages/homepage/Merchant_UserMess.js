import React, { useState } from 'react'


const Merchant_UserMess = (props) => {


    return (
        <React.Fragment>
            {/* chat selling */}
            <div className="row">
                <div className="col">
                    <div className="small-box bg-info">
                        <div className="inner">
                            <div className='row'>
                                <div className='col-md-9 text-left'>
                                    <p>{props.dataMessage}</p>
                                    <h5>{props.dataSell}</h5>
                                </div>
                                <div className='col-md-3'>
                                    <img src='images/man-sell-goods-red.svg' style={{ width: "60%" }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Merchant_UserMess