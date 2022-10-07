
import React from 'react'

const ProductOption = () => {

  const preventOnClick = (e) => {
    e.preventDefault();
  }

  return (
    <React.Fragment>

      <form className="container mt-4 pb-2">
        <div className='form-group'>
            <h5 className='font-weight-normal'>Product options</h5>
            <p className='text-secondary'>Add options if this product comes in different colours or sizes.</p>
            <label htmlFor="" className='font-weight-light'>Options
              <span className="mx-2">
                <a href="/" data-toggle="tooltip" data-placement="top" title='This is about options'>
                  <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                  </i>
                </a>
              </span>
            </label>

            <div className='form-row'>
              <div className='col-md-3'>
                <button onClick={preventOnClick} className="prodOption-btnShadow btn btn-white p-0 border-0">
                     <i className="fa fa-eyedropper text-success p-3 bg-info rounded-left" aria-hidden="true" />
                     <span className='mx-2 text-secondary'>Add colors</span>
                </button>
              </div>

                 <div className='col-md-1 p-2 mr-3'>
                    <span className='font-weight-light'>OR</span>
                 </div>
              <div className='col-md-3'>
                <button type="file" onClick={preventOnClick} className="prodOption-btnShadow btn btn-white p-0 border-0" >
                  <i className="fa fa-picture-o text-success p-3 bg-info rounded-left" aria-hidden="true" />
                  <span className='mx-2 text-secondary'>Add images</span>
                </button>
              </div>
            </div>
            
          <div className="form-group mt-4 col-12">
            <label htmlFor="" className='font-weight-light'>Options
            <span className="mx-2">
                <a href="/">
                  <i className="commentIcon fa fa-pencil text-secondary" aria-hidden="true"></i>
                </a>
              </span>
              <span className="">
                <a href="/" data-toggle="tooltip" data-placement="top" title='This is how will appeared on product page'>
                  <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true"></i> 
                </a>
              </span>
            </label>
            <input type="email" className="form-control" id="" placeholder="Type options here separated by comma ( eg. Small, Medium, Large )" />
          </div>
        </div>

      </form>

    </React.Fragment>
  )
}

export default ProductOption