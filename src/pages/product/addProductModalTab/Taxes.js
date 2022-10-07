import React from 'react'

const Taxes = () => {
  return (
    <React.Fragment>
      <form className='container mt-4'>
        <div className='form-row'>
          <div className='col-md-6'>
              <label htmlFor="gst" className='font-weight-light'>GST
                <span className="mx-2">
                  <a href="/" data-toggle="tooltip" data-placement="top" title='This is about taxes'>
                    <i className="commentIcon fa fa-commenting-o text-secondary" aria-hidden="true">
                    </i>
                  </a>
                </span>
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text px-4" id="inputGroupPrepend">%</span>
                </div>
                <input type="text" className="form-control" id="gst"aria-describedby="inputGroupPrepend" required />
              </div>
            </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Taxes