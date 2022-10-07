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
                                    <div className="inner bg-white rounded pb-0 text-start">
                                        <div className='d-flex'>
                                            <div className='new-update-mg p-2'> 
                                                <i className="fa fa-exclamation-circle"> 
                                                </i>
                                            </div>
                                            <div className='new-update-mg text-secondary mx-2'>
                                                <p>New Update: Your ecom prod webstore just got lighter! All webstores created on the ecom prod platform will now be upgraded to offer an even smoother, quicker, and   lighter experience.
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