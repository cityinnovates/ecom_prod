import React from 'react'

const ImportProduct = () => {
  return (
     <React.Fragment>
          <div className='container text-center'>
              <label htmlFor="files" className="btn bg-light py-4" style={{ width: '12rem'}}>
                <img src="images/csv-icon.svg"></img>
              </label>
              <input id="files" style={{ display: 'none'}} type="file" />
          </div>
          <div className='container text-center my-3'>
            <p><a href='#'>Click here</a> to understand more about importing products</p>
          </div>
     </React.Fragment>
  )
}

export default ImportProduct