import React from 'react'

const TempleteCard = (props) => {
    return (
        <React.Fragment>
            <h3>Recommended for you</h3>
            {/* media card */}
            <div className="row">
                {
                    (props.datacard || []).map((data, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="card">
                                    <img className="card-img-top rounded-top" src={data.img} alt="Card image cap" style={{ height: "8rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{data.disc}</p>
                                        <a href="#" className='text-secondary'>Read more <i className="fa fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default TempleteCard