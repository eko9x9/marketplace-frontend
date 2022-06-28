import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const CardsProduct = (props: Props) => {
  return (
        <React.Fragment>
          {/* <!-- /new_arrivals -->  */}
	        <div className="new_arrivals_agile_w3ls_info"> 
            <div className="container">
                <h3 className="wthree_text_info">Produk Pilihan</h3>		
                    <div id="horizontalTab">
                        <div className="resp-tabs-container">
                        {/* <!--/tab_one--> */}
                            <div className="tab1">
                                <div className="col-md-3 product-men">
                                    <div className="men-pro-item simpleCart_shelfItem">
                                        <div className="men-thumb-item">
                                            <img src="/assets/images/m1.jpg" alt="" className="pro-image-front" />
                                            <img src="/assets/images/m1.jpg" alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <Link to="/product/detail/25">
                                                            <div className="link-product-add-cart">Lihat Detail</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* <span className="product-new-top">New</span> */}
                                                
                                        </div>
                                        <div className="item-info-product ">
                                            <h4><a href="single.html">Formal Blue Shirt</a></h4>
                                            <div className="info-product-price">
                                                <span className="item_price">Rp 20.000</span>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                <input type="submit" name="submit" value="Tambah ke keranjang" className="button" />
                                            </div>
                                                                                
                                        </div>

                                        <div className="info-product">
                                            <div className="top">
                                                <h5>Jawa Timur</h5>
                                            </div>
                                            <div className="buttom">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star"></i>
                                                    <p style={{paddingLeft: 6}}>4.6</p>
                                                </div>
                                                <p style={{paddingLeft: 8}}>0 Terjual</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="clearfix"></div>
                            </div>
                            {/* <!--//tab_one--> */}
                        </div>
                    </div>	
                </div>
            </div>
	{/* <!-- //new_arrivals -->  */}
        </React.Fragment>
  )
}

export default CardsProduct;