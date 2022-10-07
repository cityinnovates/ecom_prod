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
                                <div className='col-md-9 text-left p-4 '>
                                    <p className='lh-1'>{props.dataMessage}</p>
                                    <h4 className='fs-2 lh-1'>{props.dataSell}</h4>
                                </div>
                                <div className='col-md-3'>
                                    <img src='images/man-sell-goods-red.svg' style={{ width: "70%" }} alt="sell Logo"></img>
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