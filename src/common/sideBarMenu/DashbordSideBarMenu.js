import React from 'react'
import {Link} from 'react-router-dom';

const DashbordSideBarMenu = () => {
  return (

    <React.Fragment>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
          <a href="/" className="brand-link">
          <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Ecom Prod Web</span>
        </a>
        
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-3">
            <ul className="nav nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item"> 
                 <Link to='/' className="nav-link">
                      <i className="nav-icon fa fa-home" />
                      <p>Home</p>
                  </Link>
              </li>
              
              <li className="nav-item">
                  <Link to='/product_builder' className="nav-link">
                        <i className="nav-icon fa fa-product-hunt" />
                        <p>Products</p>
                  </Link>
              </li>
              <li className="nav-item">
                <Link to='/manage/order' className="nav-link">
                      <i className="nav-icon fa fa-shopping-bag" />
                      <p>Orders</p>
                </Link> 

              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fa fa-user-o" />
                  <p>Customers</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fa fa-percent" />
                  <p>Discounts</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fa fa-sliders" />
                  <p>Setup <i className="fa fa-angle-right right" /></p>
                </a>
              </li>

              <li className="nav-header">SALES CHANNELS</li>

              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fa fa-comments" />
                  <p>Chat<i className="fa fa-angle-right right" /></p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/"className="nav-link">
                  <i className="nav-icon fa fa-thumbs-up" />
                  <p>Social<i className="fa fa-angle-right right" /></p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fa fa-handshake-o" />
                  <p>Marketplaces<i className="fa fa-angle-right right" /></p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fa fa-film" />
                  <p>Webstore<i className="fa fa-angle-right right" /></p>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </aside>

    </React.Fragment>
  )
}

export default DashbordSideBarMenu;