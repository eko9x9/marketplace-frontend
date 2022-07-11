import React from 'react'

type Props = {
  children: any
}

const VoltWrapperContent = (props: Props) => {
  return (
      <React.Fragment>
         <main className="content">
            <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
                <div className="container-fluid px-0">
                    <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
                    <div className="d-flex align-items-center">
                        {/* <!-- Search form --> */}
                        <form className="navbar-search form-inline" id="navbar-search-main">
                        <div className="input-group input-group-merge search-bar">
                            <span className="input-group-text" id="topbar-addon">
                                <svg className="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            <input type="text" className="form-control" id="topbarInputIconLeft" placeholder="Cari" aria-label="Search" aria-describedby="topbar-addon" />
                        </div>
                        </form>
                        {/* <!-- / Search form --> */}
                    </div>
                    {/* <!-- Navbar links --> */}
                    {/* <ul className="navbar-nav align-items-center">
                        
                        <li className="nav-item dropdown ms-lg-3">
                        <a className="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="media d-flex align-items-center">
                                <img className="avatar rounded-circle" alt="Image placeholder" src="/volt-assets/img/team/profile-picture-3.jpg" />
                                <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                    <span className="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                            <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                            My Profile
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                            Settings
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                            Messages
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                            Support
                            </a>
                            <div role="separator" className="dropdown-divider my-1"></div>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg className="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>                
                            Logout
                            </a>
                        </div>
                        </li>
                    </ul> */}
                    </div>
                </div>
                </nav>

            {props.children}
            
            <div className="theme-settings card bg-gray-800 pt-2 collapse" id="theme-settings">
                <div className="card-body bg-gray-800 text-white pt-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="m-0 mb-1 me-4 fs-7">Open source <span role="img" aria-label="gratitude">💛</span></p>
                        <a className="github-button" href="https://github.com/themesberg/volt-bootstrap-5-dashboard"
                            data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star"
                            data-size="large" data-show-count="true"
                            aria-label="Star themesberg/volt-bootstrap-5-dashboard on GitHub">Star</a>
                    </div>
                    <a href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard" target="_blank"
                        className="btn btn-secondary d-inline-flex align-items-center justify-content-center mb-3 w-100">
                        Download 
                        <svg className="icon icon-xs ms-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                    </a>
                    <p className="fs-7 text-gray-300 text-center">Available in the following technologies:</p>
                    <div className="d-flex justify-content-center">
                        <a className="me-3" href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
                            target="_blank">
                            <img src="/volt-assets/img/technologies/bootstrap-5-logo.svg" className="image image-xs" />
                        </a>
                        <a href="https://demo.themesberg.com/volt-react-dashboard/#/" target="_blank">
                            <img src="/volt-assets/img/technologies/react-logo.svg" className="image image-xs" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="card theme-settings bg-gray-800 theme-settings-expand" id="theme-settings-expand">
                <div className="card-body bg-gray-800 text-white rounded-top p-3 py-2">
                    <span className="fw-bold d-inline-flex align-items-center h6">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                        Settings
                    </span>
                </div>
            </div>

            <footer className="bg-white rounded shadow p-5 mb-4 mt-4">
                <div className="row">
                    <div className="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
                        <p className="mb-0 text-center text-lg-start">© 2022-<span className="current-year"></span> <a className="text-primary fw-normal" href="#" target="_blank">Tokoku</a></p>
                    </div>
                    <div className="col-12 col-md-8 col-xl-6 text-center text-lg-start">
                        {/* <!-- List --> */}
                        <ul className="list-inline list-group-flush list-group-borderless text-md-end mb-0">
                            <li className="list-inline-item px-0 px-sm-2">
                                <a href="#">Tentang</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </main>
      </React.Fragment>
  )
}

export default VoltWrapperContent