
import React from "react";

export default function BasicInfo() {
    let titleDis = {
          prodName:"This is the unique display name of your product",
          selligPri:"Selling price is the price for which you want the item to be sold. This is the amount of money you will receive from your customer when an item is purchased.", 
          oriPrice:"Original price is the full price of an item without taking into account any discounts or offers. List Price will be shown as strike through price.",
          prodDis:"Describe your product and features and benefits clearly. This is the great place to write persuasive descriptions about your product.", 
          catogory:"You can group products togather into categories to make them easier to manage or easier for your customers to discover. For example: Dresses, Pants, Accessories. A product can appear in more than one category.",
          TotalStock:"This is the total number of items in stock. If the product options are added, the stock quantity will be automatically displayed as the sum of all of your products option.",
          SKU:"Stock keeping Units(SKU) is a unique number assigned to a product to identify the price, product option, manufacturer. SKU help helps the product to be tracked for inventory."

    }

    return (
        <React.Fragment>

            <form className="container mt-4">
                <div className="form-row h-100">

                    {/* image uploder */}
                    <div className="col-md-4 bg-light">
                        <div className="text-center pt-5 pb-2">
                            <div className="imageUplod">
                                <img src="images/cloud-upload.png" alt='img-upload-logo'>
                                </img>
                            </div>
                            <p>Drop an image here to upload</p>
                            <p className="text-secondary">(Up to 5MB size in jpeg, or png. Optimal size: 1000x1000 pixels)</p>
                            <div>
                                <label htmlFor="files" className="btn bg-info">Upload Image</label>
                                <input id="files" style={{ display: 'none' }} type="file" />
                            </div>
                        </div>
                    </div>
               
                    {/*product details form */}
                    <div className="proDetails col-md-8 text-secondary pl-md-4">
                        <div className="form-group">
                            <label className="font-weight-normal" htmlFor="productName">Product name
                                <span className="mx-2">
                                    <a href="/" data-toggle="tooltip" data-placement="top" title={titleDis.prodName}>
                                        <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                                        </i>
                                    </a>
                                </span>
                            </label>
                            <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
                        </div>
            
                        <div className="form-row">
                            <div className="col-md-6">
                                <label className="font-weight-normal" htmlFor="sellPrice">Selling price
                                    <span className="mx-2">
                                        <a href="/" data-toggle="tooltip" data-placement="top" title={titleDis.selligPri}>
                                            <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                                            </i>
                                        </a>
                                    </span>
                                </label>
                                <div className="input-group pr-md-1">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">INR</div>
                                    </div>
                                    <input type="text" className="form-control" id="sellPrice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="font-weight-normal" htmlFor="originalPrice">Original price(optional)
                                    <span className="mx-2">
                                        <a href="/" data-toggle="tooltip" data-placement="auto" title={titleDis.oriPrice}>
                                            <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                                            </i>
                                        </a>
                                    </span>
                                </label>
                                <div className="input-group pl-md-1">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">INR</div>
                                    </div>
                                    <input type="text" className="form-control" id="originalPrice" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label className="font-weight-normal" htmlFor="productDes">Product description(optional)
                            <span className="mx-2">
                                        <a href="/" data-toggle="tooltip" data-placement="top" title={titleDis.prodDis}>
                                            <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                                            </i>
                                        </a>
                                    </span>
                            </label>
                            <textarea className="form-control" id="productDes" rows={3} defaultValue={""} style={{resize:"none"}}/>
                        </div>

                        <div className="form-group">
                            <label className="font-weight-normal" htmlFor="category">Category
                                <span className="mx-2">
                                    <a href="/" data-toggle="tooltip" data-placement="top" title={titleDis.catogory}>
                                        <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                                        </i>
                                    </a>
                                </span>
                            </label>
                            <input type="text" className="form-control" id="category" placeholder="Type to add a category and press Enter" />
                        </div>

                        <div className="form-row">
                            <div className="col-md-6">
                                <label className="font-weight-normal" htmlFor="totalStock">Total stock quantity
                                    <span className="mx-2">
                                        <a href="/" data-toggle="tooltip" data-placement="top" title={titleDis.TotalStock}>
                                            <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                                            </i>
                                        </a>
                                    </span>
                                </label>
                                <div className="input-group pr-md-1">
                                    <input type="text" className="form-control" id="totalStock" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="font-weight-normal" htmlFor="originalPrice">SKU (optional)
                                    <span className="mx-2">
                                        <a href="/" data-toggle="tooltip" data-placement="auto" title={titleDis.SKU}>
                                            <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                                            </i>
                                        </a>
                                    </span>
                                </label>
                                <div className="input-group pl-md-1">
                                    <input type="text" className="form-control" id="originalPrice"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </React.Fragment>
    );
}