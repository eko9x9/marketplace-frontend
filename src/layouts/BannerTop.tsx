import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import ModalChart from '../components/product/ModalChart';

type Props = {
  active: string
}

const BannerTop = (props: Props) => {
  const navigate = useNavigate();
  const { categoryId }: any = useParams();
  console.log(categoryId);
  
  const active = {color: "#8cf74e", fontWeight: "bold"}
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
                    <li className="menu__item"><a style={!categoryId ? active: {color:"#fff", fontWeight: "bold"}} className="" onClick={() => navigate("/")} href="#">Home <span className="sr-only">(current)</span></a></li>
                    <li className=" menu__item"><a style={categoryId == 1 ? active: {color:"#fff", fontWeight: "bold"}} className="" href="#" onClick={() => navigate("/product/1")}>Baju</a></li>
                    <li className=" menu__item"><a style={categoryId == 2 ? active: {color:"#fff", fontWeight: "bold"}} className="" href="#" onClick={() => navigate("/product/2")}>Elektronik</a></li>
                    <li className=" menu__item"><a style={categoryId == 3 ? active: {color:"#fff", fontWeight: "bold"}} className="" href="#" onClick={() => navigate("/product/3")} >Aksesoris</a></li>
                    <li className=" menu__item"><a style={categoryId == 4 ? active: {color:"#fff", fontWeight: "bold"}} className="" href="#" onClick={() => navigate("/product/4")} >Makanan</a></li>
                    <li className=" menu__item"><a style={categoryId == 5 ? active: {color:"#fff", fontWeight: "bold"}} className="" href="#" onClick={() => navigate("/product/5")}>Lain - lain</a></li>
                  </ul>
                </div>
                </div>
              </nav>	
            </div>
            <div className="top_nav_right">
              <div className="wthreecartaits wthreecartaits2 cart cart box_1"> 
                <button className="w3view-cart" type="submit"  data-toggle="modal" data-target="#modalChart"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <ModalChart />
      </React.Fragment>
  )
}

export default BannerTop