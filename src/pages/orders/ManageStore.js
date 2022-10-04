
import React from 'react'

//test commit
// second test commit
// third commit.....

const ManageStore = () => {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="container">
                    {/* manage orders */}
                    <div className="content-header">
                        <div className="row p-5">
                            <div className="col-md-4">
                                <img src="/images/manage-store.svg" className="img-fluid rounded-start" alt="manage-store-logo" />
                            </div>
                            <div className="col-md-8">
                                <div className='my-3 mx-5'>
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
                    </div>
                    
                    <div className='row p-5'>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ManageStore