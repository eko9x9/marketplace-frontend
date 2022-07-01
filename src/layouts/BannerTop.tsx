import React from 'react';
import { useNavigate } from 'react-router-dom'

type Props = {}

const BannerTop = (props: Props) => {
  const navigate = useNavigate();

  return (
      <React.Fragment>
        <div className="ban-top">
          <div className="container">
            <div className="top_nav_left">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  </button>
                </div>
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav menu__list">
                    {/* menu__item--current (active) */}
                    <li className="menu__item "><a onClick={() => navigate("/")} className="menu__link" href="#">Home <span className="sr-only">(current)</span></a></li>
                    <li className=" menu__item"><a className="menu__link" href="#" >Baju</a></li>
                    <li className=" menu__item"><a className="menu__link" href="#" >Elektronik</a></li>
                    <li className=" menu__item"><a className="menu__link" href="#" >Aksesoris</a></li>
                    <li className=" menu__item"><a className="menu__link" href="#" >Makanan</a></li>
                    <li className=" menu__item"><a className="menu__link" href="#" >Lain - lain</a></li>
                  </ul>
                </div>
                </div>
              </nav>	
            </div>
            <div className="top_nav_right">
              <div className="wthreecartaits wthreecartaits2 cart cart box_1"> 
                <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </React.Fragment>
  )
}

export default BannerTop