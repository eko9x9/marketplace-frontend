import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <React.Fragment>
      <div className="header" id="home">
        <div className="container">
          <ul>
              <li><i className="fa-solid fa-shop"></i>Mulai berjualan</li>
              <li> <i className="fa-solid fa-receipt"></i>Promo</li>
              <li> <i className="fa-solid fa-heart"></i> Tokoku care </li>
              <li> <i className="fa-solid fa-address-card"></i>Tentang tokoku </li>
          </ul>
        </div>
      </div>

      <div className="header-bot">
        <div className="header-bot_inner_wthreeinfo_header_mid">
          <div className="col-md-4 header-middle">
            <form action="#" method="post">
                <input type="search" name="search" placeholder="Cari disini..."  />
                <input type="submit" value=" " />
              <div className="clearfix"></div>
            </form>
          </div>
            <div className="col-md-4 logo_agile">
              <h1><a href="index.html"><span>E</span>lite Shoppy <i className="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true"></i></a></h1>
            </div>
          <div className="col-md-4 agileits-social top_content">
            <ul className="social-nav model-3d-0 footer-social w3_agile_social">
              <button type="button" style={{padding: "10px 25px", marginRight: 10}} className="btn btn-info" data-toggle="modal" data-target="#myModal">
                <i className="fa-solid fa-lock" style={{marginRight: 10}}></i>
                Masuk
              </button>
              <button type="button" style={{padding: "10px 25px"}} className="btn btn-warning" data-toggle="modal" data-target="#myModal2">
                <i className="fa-solid fa-file-pen" style={{marginRight: 10}}></i>
                Daftar
              </button>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header