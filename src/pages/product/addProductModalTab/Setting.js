
import React from 'react'

const Setting = () => {
  return (
    <React.Fragment>
      <form className="container">
        <div className="form-group">
            <h5 className='font-weight-normal'>Shipping details</h5>
            <p className='text-secondary'>Flat shipping fee in self-managed shipping options will be used if the fields below are incomplete.</p>
        </div>
        <div className='form-row'>
          <div className="col-md-3 pr-md-3">
            <label className="font-weight-normal text-secondary" htmlFor="">Length</label>
            <div className="input-group">
              <input type="text" className="form-control" id="" aria-describedby="inputGroupPrepend" required />

              <div className="input-group-prepend">
                <span className="input-group-text text-secondary bg-light rounded-right" id="inputGroupPrepend">cm</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 pr-md-3">
            <label className="font-weight-normal text-secondary" htmlFor="">Width</label>
            <div className="input-group">
              <input type="text" className="form-control" id="" aria-describedby="inputGroupPrepend" required />

              <div className="input-group-prepend">
                <span className="input-group-text text-secondary bg-light rounded-right" id="inputGroupPrepend">cm</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 pr-md-3">
            <label className="font-weight-normal text-secondary" htmlFor="">Height</label>
            <div className="input-group">
              <input type="text" className="form-control" id="" aria-describedby="inputGroupPrepend" required />
              <div className="input-group-prepend">
                <span className="input-group-text text-secondary bg-light rounded-right" id="inputGroupPrepend">cm</span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
              <label className="font-weight-normal text-secondary" htmlFor="">Total weight
              </label>
            <div className="input-group">
              <input type="text" className="form-control" id="" aria-describedby="inputGroupPrepend" required />

              <div className="input-group-prepend">
                <span className="input-group-text text-secondary bg-light rounded-right" id="inputGroupPrepend">Kg</span>
              </div>
            </div>
          </div>
        </div>

           {/* for giving border */}
        <div className="border-bottom border-light-1 my-3"></div>
    
        <div className="form-group pr-md-4">
            <h5 className='font-weight-normal'>Inventory</h5>
          <label className="font-weight-normal text-secondary" htmlFor="productDes">UPC (optional)
            <span className="mx-2">
              <a href="/" data-toggle="tooltip" data-placement="top" title="This is about Universal Product code(UPC)">
                <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                </i>
              </a>
            </span>
          </label>
          <input type='text' className="form-control col-md-6" id="productDes"  />
        </div>

        <div className="border-bottom border-light-1 my-3"></div>

         <div className="form-check form-switch ml-3">
           <input className="form-check-input" type="checkbox" id="allowPurchase"/>
            <label className="form-check-label float-right" htmlFor="allowPurchase">Allow purchase when out of stock</label>
        </div>

        <div className="border-bottom border-light-1 my-3"></div>

        <div className="form-check form-switch ml-3">
           <input className="form-check-input" type="checkbox" id="showProduct"/>
            <label className="form-check-label float-right" htmlFor="showProduct">Show this product in store</label>
        </div>

      </form>
    </React.Fragment>
  );
}

export default Setting