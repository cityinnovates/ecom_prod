import React from 'react'

const FeatureCard = (props) => {
    return (
        <React.Fragment>

            {/* Main content */}
            <section className="content">
                {/* Small boxes (Stat box) */}
                <div className='row'>

                    {
                        (props.data || []).map((data, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <div className='d-flex'>
                                                <div className='mx-3'>
                                                    <i className="fa fa-shopping-bag" style={{ fontSize: "1.2rem", color: "#17a2b8" }}></i>
                                                </div>
                                                <div className='text-start'>
                                                    <h5 className='fw-normal fs-6'>{data.head}</h5>
                                                    <p className='lh-1 text-secondary'>{data.disc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default FeatureCard