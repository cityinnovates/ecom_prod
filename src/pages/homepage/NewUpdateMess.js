import React from "react";

const NewUpdateMess = () => {
    return (
        <React.Fragment>
            
            {/* alert message */}
                <div className="content-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="small-box">
                                    <div className="inner bg-white rounded p-1">
                                        <div className='row'>
                                            <div className='col-1'> <i className="fa fa-exclamation-circle" style={{ fontSize: "1.5rem", color: "#17a2b8", margin: "1rem" }}></i>
                                            </div>
                                            <div className='col-11'>
                                                <p>New Update: Your ecom prod webstore just got lighter! All webstores created on the ecom prod platform will now be upgraded to offer an even smoother, quicker, and lighter experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           
                </div>
        </React.Fragment>
    );
}
export default NewUpdateMess;