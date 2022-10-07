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
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <div className='row'>
                                                <div className='col-2'>
                                                    <i className="fa fa-shopping-bag" style={{ fontSize: "1.2rem", margin: "1rem", color: "#17a2b8" }}></i>
                                                </div>
                                                <div className='col-10'>
                                                    <h4>{data.head}</h4>
                                                    <p>{data.disc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })
                    }

                </div>
            </section>
        </React.Fragment>
    )
}

export default FeatureCard