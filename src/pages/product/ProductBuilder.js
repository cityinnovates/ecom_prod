
import React from 'react'
import { NavLink } from 'react-router-dom'
import BasicInfo from './addProductModalTab/BasicInfo'
import ProductOption from './addProductModalTab/ProductOption'
import Taxes from './addProductModalTab/Taxes'
import Seo from './addProductModalTab/Seo'
import Setting from './addProductModalTab/Setting'
import ImportProduct from './importProductModalTab/ImportProduct'

// Test Data
const ProductBuilder = () => {

  return (
    <React.Fragment>

      {/*main content- product_builder  */}
      <div className="content-wrapper">
        <div className="content-header">
          <div className='row'>
            <div className='col-md-5'>
              <div className="custom-card card bg-white">
                <div className="card-header">
                  <div className='row text-center'>
                    <div className='col-6 border-right'>
                      <NavLink to='#' className='prod-text-icon'>
                            <i className="fa fa-plus-square-o mx-2"></i>
                           <span data-toggle="modal" data-target="#AddProductModal">Add products</span>
                      </NavLink>
                    </div>

                    <div className='col-6'>
                      <NavLink to='#' className='prod-text-icon'>
                          <i className="fa fa-arrow-circle-o-down mx-2"></i>
                        <span data-toggle="modal" data-target="#ImportProductModal">Import products
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*add product modal */}
      <div className="modal fade mt-4 ml-md-3" id="AddProductModal" tabIndex="{-1}" role="dialog" aria-labelledby="headingModal" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{border:"none"}}>
            <div className="modal-header bg-info justify-content-between align-items-center py-2 border-bottom-0">
                <span>
                    <button type="button" className="btn-close btn-close-secondary" data-dismiss="modal" aria-label="Close"></button>
                </span>
                <span>
                    <h5 className="modal-title fs-6 fw-normal" id="headingModal">Add Product</h5>
                </span>
                <span>
                  <button type="button" className="btn btn-secondary px-3">Save</button>
                </span> 
            </div>

            {/* add product nav-tab */}
            <div className="modal-body">
                <ul className="addProModal nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link text-secondary mx-3" id="basic-info-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basic-info" aria-selected="true">Basic info</a>
                  </li> 

                  <li className="nav-item">
                    <a className="nav-link text-secondary mx-3" id="product-option-tab" data-toggle="tab" href="#productOption" role="tab" aria-controls="product-option" aria-selected="false">Product options</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-secondary mx-3" id="tax-tab" data-toggle="tab" href="#tax" role="tab" aria-controls="taxes" aria-selected="false">Taxes</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-secondary mx-3" id="seo-tab" data-toggle="tab" href="#seo" role="tab" aria-controls="seo" aria-selected="false">SEO</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-secondary mx-3" id="more-setting-tab" data-toggle="tab" href="#moreSetting" role="tab" aria-controls="more-setting" aria-selected="false">More settings</a>
                  </li>
                </ul>
                     {/* border bottom */}
                <div className="border-bottom border-light-1"></div>

                <div className="tab-content mt-4" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basic-info-tab">
                    {<BasicInfo />}
                  </div>

                  <div className="tab-pane fade" id="productOption" role="tabpanel" aria-labelledby="product-option-tab">{<ProductOption />}
                  </div>

                  <div className="tab-pane fade" id="tax" role="tabpanel" aria-labelledby="tax-tab"><Taxes />
                  </div>

                  <div className="tab-pane fade" id="seo" role="tabpanel" aria-labelledby="seo-tab"><Seo />
                  </div>

                  <div className="tab-pane fade" id="moreSetting" role="tabpanel" aria-labelledby="more-setting-tab"><Setting />
                  </div>
                </div>
            </div>
      
          </div>
        </div>
      </div>

      {/*Import product modal */}
      <div className="modal fade ml-2" id="ImportProductModal" tabIndex="-1" role="dialog" aria-labelledby="headingModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content"  style={{border:"none"}}>
            <div className="modal-header bg-info align-items-center py-2 border-bottom-0">
              <h5 className="modal-title" id="headingModal">Import Product from .csv</h5>
              <button type="button" className="btn-close btn-close-secondary" data-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              {<ImportProduct/>}
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default ProductBuilder;