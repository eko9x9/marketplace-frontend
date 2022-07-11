import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    activeMenu: string
}

const VoltSidebar = (props: Props) => {
  return (
      <React.Fragment>
        <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
            <a className="navbar-brand me-lg-5" href="#">
                {/* <img className="navbar-brand-dark" src="../../volt-assets/img/brand/light.svg" alt="Volt logo" /> <img className="navbar-brand-light" src="../../volt-assets/img/brand/dark.svg" alt="Volt logo" /> */}
            </a>
            <div className="d-flex align-items-center">
                <button style={{marginLeft: 150}} className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    <nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
        <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="d-flex align-items-center">
                {/* <div className="avatar-lg me-4">
                    <img src="../../volt-assets/img/team/profile-picture-3.jpg" className="card-img-top rounded-circle border-white"
                    alt="Bonnie Green" />
                </div>
                <div className="d-block">
                    <h2 className="h5 mb-3">Hi, Jane</h2>
                <a href="#" className="btn btn-secondary btn-sm d-inline-flex align-items-center">
                    <svg className="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>            
                    Sign Out
                </a>
                </div> */}
            </div>
            <div className="collapse-close d-md-none">
                <a href="#sidebarMenu" data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                    aria-label="Toggle navigation">
                    <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            </div>
            <ul className="nav flex-column pt-3 pt-md-0">
            <li className="nav-item">
                <Link to="/">
                    <a href="#" className="nav-link d-flex align-items-center">
                    <span className="sidebar-icon">
                        {/* <img src="../../volt-assets/img/brand/light.svg" height="20" width="20" alt="Volt Logo" /> */}
                    </span>
                    <span className="mt-1 ms-1 sidebar-text">Tokoku</span>
                    </a>
                </Link>
            </li>
            <li className={`nav-item ${props.activeMenu === "home"? "active": ""} `}>
                <Link to="/management/shop">
                
                    <a href="#" className="nav-link">
                    <span className="sidebar-icon">
                        <i className="fa-solid fa-house-user"></i>
                    </span> 
                    <span className="sidebar-text">Dashboard</span>
                    </a>
                </Link>
            </li>
            <li  className={`nav-item ${props.activeMenu === "add-product"? "active": ""} `}>
                <Link to="/management/shop/add-product">
                    <a href="#" className="nav-link d-flex justify-content-between">
                    <span>
                        <span className="sidebar-icon">
                            <i className="fa-solid fa-cart-plus"></i>
                        </span>
                        <span className="sidebar-text">Tambah Produk</span>
                    </span>
                    </a>
                </Link>
            </li>
            <li  className={`nav-item ${props.activeMenu === "confirm-payment"? "active": ""} `}>
                <Link to="/management/confirm-payment">
                    <a href="#" className="nav-link d-flex justify-content-between">
                    <span>
                        <span className="sidebar-icon">
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                        </span>
                        <span className="sidebar-text">Konfirmasi Pembayaran</span>
                    </span>
                    </a>
                </Link>
            </li>
            <li  className={`nav-item ${props.activeMenu === "product-send"? "active": ""} `}>
                <Link to="/management/product-send">
                    <a href="#" className="nav-link d-flex justify-content-between">
                    <span>
                        <span className="sidebar-icon">
                        <i className="fa-solid fa-truck"></i>
                        </span>
                        <span className="sidebar-text">Harus dikirm</span>
                    </span>
                    </a>
                </Link>
            </li>
            <li  className={`nav-item ${props.activeMenu === "product-sold"? "active": ""} `}>
                <Link to="/management/shop/product-sold">
                    <a href="#" className="nav-link d-flex justify-content-between">
                    <span>
                        <span className="sidebar-icon">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </span>
                        <span className="sidebar-text">Produk terjual</span>
                    </span>
                    </a>
                </Link>
            </li>
            <li className={`nav-item ${props.activeMenu === "product-promo"? "active": ""} `}>
                <Link to="/management/shop/product-promo">
                    <a href="#" className="nav-link d-flex justify-content-between">
                    <span>
                        <span className="sidebar-icon">
                            <i className="fa-solid fa-receipt"></i>
                        </span>
                        <span className="sidebar-text">Promo Produk</span>
                    </span>
                    </a>
                </Link>
            </li>
            {/* <li className="nav-item ">
                <span
                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse" data-bs-target="#submenu-components">
                <span>
                    <span className="sidebar-icon">
                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </span> 
                    <span className="sidebar-text">Components</span>
                </span>
                <span className="link-arrow">
                    <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </span>
                </span>
                <div className="multi-level collapse " role="list"
                id="submenu-components" aria-expanded="false">
                <ul className="flex-column nav">
                    <li className="nav-item">
                    <a className="nav-link"
                        href="#">
                        <span className="sidebar-text">All Components</span>
                    </a>
                    </li>
                </ul>
                </div>
            </li> */}
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            {/* <li className="nav-item">
                <a href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/getting-started/quick-start/" target="_blank"
                className="nav-link d-flex align-items-center">
                <span className="sidebar-icon">
                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                </span>
                <span className="sidebar-text">Documentation <span className="badge badge-sm bg-secondary ms-1 text-gray-800">v1.4</span></span>
                </a>
            </li> */}
            </ul>
        </div>
        </nav>
      </React.Fragment>
  )
}

export default VoltSidebar