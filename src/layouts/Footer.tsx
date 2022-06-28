import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
      <React.Fragment>
          <div className="footer">
            <div className="footer_agile_inner_info_w3l">
                <div className="col-md-3 footer-left">
                    <h2><a href="index.html"><span>E</span>lite Shoppy </a></h2>
                    <p>Lorem ipsum quia dolor
                    sit amet, consectetur, adipisci velit, sed quia non 
                    numquam eius modi tempora.</p>

                    <h4 style={{color: '#fff', marginTop: 20}}>Ikuti Kami</h4>
                    <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
                        <li><a href="_" className="facebook">
                            <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                            <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                        <li><a href="_" className="twitter"> 
                            <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                            <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                        <li><a href="_" className="instagram">
                            <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                            <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                        <li><a href="_" className="pinterest">
                            <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                            <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                    </ul>
                </div>
                <div className="col-md-9 footer-right">
                    <div className="sign-grds">
                        <div className="col-md-3 sign-gd">
                            <h4>Jual</h4>
                            <ul>
                                <li><a href="_">Daftar Official Store</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-3 sign-gd-two">
                            <h4>Beli</h4>
                            <ul>
                                <li><a href="_">Toko COD</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 sign-gd-two">
                            <h4>Informasi Toko</h4>
                            <ul>
                                <li><a href="_">Blog</a></li>
                                <li><a href="_">Tentang</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 sign-gd-two">
                            <h4>Bantuan dan Panduan</h4>
                            <ul>
                                <li><a href="_">Tokoku Care</a></li>
                                <li><a href="_">Syarat Dan Ketentuan</a></li>
                                <li><a href="_">Kebijakan Privasi</a></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="clearfix"></div>
                    <div className="agile_newsletter_footer">
                            <div className="col-sm-6 newsleft">
                    </div>
                    <div className="col-sm-6 newsright">
                    </div>

                <div className="clearfix"></div>
            </div>
                <p className="copy-right">&copy 2017 Elite shoppy. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
            </div>
        </div>
      </React.Fragment>
  )
}

export default Footer