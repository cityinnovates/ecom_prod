import React from "react";

const Seo = () => {

    const commentIcon = {
        fontSize: "10px",
        fontWeight: "100",
    }

    return (
        <React.Fragment>
            <form className="container mt-4">
                <div className="form-group">
                    <label className="font-weight-normal text-secondary" htmlFor="">Page title
                        <span className="mx-2">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="This about meta Discription">
                                <i className="fa fa-commenting-o text-secondary" aria-hidden="true" style={commentIcon}>
                                </i>
                            </a>
                        </span>
                    </label>
                    <input type="text" className="form-control" id="" aria-describedby="" />
                </div>

                <div className="form-group">
                    <label className="font-weight-normal text-secondary" htmlFor="productDes">Meta description
                        <span className="mx-2">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="This about meta Discription">
                                <i className="fa fa-commenting-o text-secondary" aria-hidden="true" style={commentIcon}>
                                </i>
                            </a>
                        </span>
                    </label>
                    <textarea className="form-control" id="productDes" rows={3} defaultValue={""} style={{ resize: "none" }} />
                </div>
                <div className="from-group">
                        <label className="font-weight-normal text-secondary" htmlFor="">URL
                        <span className="mx-2">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="This about URL preview">
                                <i className="fa fa-commenting-o text-secondary" aria-hidden="true" style={commentIcon}>
                                </i>
                            </a>
                        </span>
                        </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text text-secondary" id="inputGroupPrepend">
                                http://localhost:3000/product_builder/products/
                                </span>
                            </div>
                            <input type="url" className="form-control" id="" aria-describedby="inputGroupPrepend" required />
                        </div>
                </div>
                <div className="form-group mt-3">
                    <h5 className="font-weight-light text-secondary">Search engine listing preview</h5>
                    <p className="font-weight-light text-success">http://localhost:3000/product_builder/products/</p>
                </div>

            </form>

        </React.Fragment>
    );
}
export default Seo;