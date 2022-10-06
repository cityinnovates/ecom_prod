import React from 'react'


const Dashbord_Header = () => {

  return (

    <div>

      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fa fa-bars" /></a>
          </li>
        </ul>

        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">

          {/* subscribe button */}
          <li className="nav-item">
            <button className='dashbord_header_subscribe_button'>
              <a href="/">Subscribe</a>
            </button>
          </li>
          {/* Help */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="/">
              <i className="fa fa-question-circle-o" style={{ fontSize: "var(--fa_icon_fontSize)" }} />
            </a>
            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
              <a href="/" className="dropdown-item">Support</a>
              <a href="/" className="dropdown-item">FAQs</a>
              <a href="/" className="dropdown-item">Blogs</a>
              <a href="/" className="dropdown-item">Additional Services</a>
              <a href="/" className="dropdown-item">Financial Services</a>
            </div>
          </li>

          {/* user */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="/">
              <i className="fa fa-user-circle-o" style={{ fontSize: "var(--fa_icon_fontSize)" }} />
            </a>
            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
              <a href="/" className="dropdown-item">My Profile</a>
              <a href="/" className="dropdown-item">Billing Account</a>
              <a href="/" className="dropdown-item">Invoices & receipts</a>
              <a href="/" className="dropdown-item">Privacy Policy</a>
              <a href="/" className="dropdown-item">Terms and Service</a>
              <a href="/" className="dropdown-item">Logout</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Dashbord_Header