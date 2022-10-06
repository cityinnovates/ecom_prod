
import React from 'react'

const ManageStore = () => {
// menage store
 const commentIcon ={
        fontSize: "10px",
        fontWeight:"100",
        }

    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="container">
                    {/* manage order bannaer*/}
                    <div className="content-header">
                        <div className="row px-md-5 my-2">
                            <div className="col-md-4">
                                <img src="/images/manage-store.svg" className="img-fluid rounded-start" alt="manage-store-logo" />
                            </div>
                            <div className="col-md-8">
                                <div className='my-3 mx-md-4'>
                                    <h4 className="fs-2">Manage your store orders
                                        with ease</h4>
                                    <p className="text-secondary">View order information, invoices, payment status and related shipping actions.</p>
                                    <div className="btn btn-outline-light">
                                        <a className="text-secondary" href='#' target="_blank">
                                            <i className="fa fa-lightbulb-o mr-2" aria-hidden="true"></i>
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* manage store tab */}
                        <div className='row px-md-5 mt-4'>
                            <div className="col-md-8 btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                                <label className="btn btn-outline-info rounded-start fw-normal" htmlFor="btnradio1">Store orders
                                </label>
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                <label className="btn btn-outline-info fw-normal" htmlFor="btnradio2">Domestic orders</label>
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                <label className="btn btn-outline-info fw-normal" htmlFor="btnradio3">International orders</label>
                            </div>
                        </div>

                        {/* bellow manage tab */}
                       <div className='row px-md-5 my-2'>
                            <div className=" col-4 px-4">
                                <input className="form-check-input" type="checkbox" defaultValue id="order-note" />
                                <label className="form-check-label mx-2" htmlFor="order-note">
                                    Allow customer order note
                                    <span className="mx-2">
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="You can find your customer order note in your order invoice">
                                        <i className="fa fa-commenting-o text-secondary" aria-hidden="true" style={commentIcon}>
                                        </i>
                                    </a>
                                </span>
                                </label>
                            </div>
                            <div className='col-8'>
                                 <div> 
  
                                 </div>
                            </div>
                       </div>


                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ManageStore