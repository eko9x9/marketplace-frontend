import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Url from '../../libs/url';
import ModalFormBuy from './ModalFormBuy';

type Props = {}

const DetailsProduct = (props: Props) => {
  const { productId } = useParams();

  const [dataProductDetail, setDataProductDetail] = useState({});

  useEffect(() => {
    const fDataProductDetail = async() => {
      const x = await fetch(`${Url.apiUrl}/product/get-product-and-review/${productId}`).then(r => r.json());
      setDataProductDetail(x);
      console.log(x);
    }

    fDataProductDetail();
  }, [])
  

  return (
    <React.Fragment>
      <div className="page-head_agile_info_w3l">
          <div className="container">
            {/* <!--/w3_short--> */}
              <div className="services-breadcrumb">
                  <div className="">

                    <ul className="w3_short">
                      <li><a href="/">Home</a><i>|</i></li>
                      <li>Baju</li>
                    </ul>
                  </div>
              </div>
        </div>
      </div>

      <div className="banner-bootom-w3-agileits">
        <div className="container">
            <div className="col-md-4 single-right-left ">
              <div className="grid images_3_of_2">
                <div className="flexslider">
                  
                  <ul className="slides">
                    <li data-thumb="images/d2.jpg">
                      <div className="thumb-image"> <img src="/assets/images/d2.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>	
              </div>
          </div>
          <div className="col-md-8 single-right-left simpleCart_shelfItem">
                <h3>Big Wing Sneakers  (Navy)</h3>
                <p><span className="item_price">$650</span> <del></del></p>
                <div style={{paddingBottom: 10}} className="description border-bottom">
                  <h3>Pengiriman</h3>
                  <div className="sender">
                    <div style={{ display: "flex", alignItems: "center"}}>
                      <i style={{paddingRight: 10, paddingTop: 5}} className="fa-solid fa-location-dot"></i>
                      <p>Dikirim dari Kota Bekasi</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                    <i style={{paddingRight: 10, paddingTop: 5}} className="fa-solid fa-truck-fast"></i>
                      <p>Ongkir Reguler rp 18.000</p>
                    </div>
                    <p>Estimasi tiba 1 - 2 Juli</p>
                  </div>
                </div>
                <div style={{paddingBottom: 10}} className="description border-bottom">
                  <div className="profile">
                    <div className="avatar">
                      <img alt="Image placeholder" src="/volt-assets/img/team/profile-picture-3.jpg" />
                      <h5 style={{marginLeft: 10}}>CENTURY HEALTHCARE</h5>
                    </div>
                    <button className="btn-follow">Follow</button>
                    <button className="detail-market">Lihat Toko</button>
                  </div>                
                </div>
                <div className="color-quality">
                  <div className="color-quality-right">
                    <h5>Jumlah :</h5>
                    <select id="country1" className="frm-field required sect">
                      <option >1</option>
                      <option >2</option> 
                      <option >3</option>					
                      <option >4</option>								
                    </select>
                  </div>
                </div>
                <div className="occasional">
                  <h5>Jenis :</h5>
                  <div className="colr ert">
                    <label className="radio"><input type="radio" name="radio" checked/><i></i>Casual Shoes</label>
                  </div>
                  <div className="colr">
                    <label className="radio"><input type="radio" name="radio" /><i></i>Sneakers </label>
                  </div>
                  <div className="colr">
                    <label className="radio"><input type="radio" name="radio"/><i></i>Formal Shoes</label>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="occasion-cart" style={{display: "flex"}}>
                    <button type="button" style={{padding: "10px 20px", borderRadius: 10}} className="btn btn-warning">Tambahkan ke keranjang</button>
                    <button type="button" style={{padding: "10px 20px", borderRadius: 10, marginLeft: 20}} data-toggle="modal" data-target="#modalBuy" className="btn btn-success">Beli langsung</button>
                </div>
                
                </div>
              <div className="clearfix"> </div>
              {/* <!-- /new_arrivals -->  */}
            <div className="responsive_tabs_agileits"> 
              <div id="horizontalTab">
                  <ul className="resp-tabs-list">
                    <li>Detail</li>
                  </ul>
                <div className="resp-tabs-container">
                  <div className="tab1">
                    <div className="single_page_agile_its_w3ls">
                      <h6>Lorem ipsum dolor sit amet</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                      <p className="w3ls_para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  
                </div>
              </div>	
            </div>

            <div className="ratings">
              <h3>Ulasan (0)</h3>
              <h5 style={{paddingTop: 15}}>Big Wing Sneakers (Navy)</h5>
              <div className="stars">
                <h2>0/5</h2>
                <div className="icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p style={{paddingTop: 20}}>(0) Ulasan</p>
              </div>
            </div>

            <div className="responsive_tabs_agileits"> 
              <div id="horizontalTab">
                  <ul className="resp-tabs-list">
                    <li>Semua Ulasan (1)</li>
                  </ul>
                <div className="resp-tabs-container">
                  <div className="tab2">
                    
                    <div className="single_page_agile_its_w3ls">
                      <div className="bootstrap-tab-text-grids">
                        <div className="bootstrap-tab-text-grid">
                          <div className="bootstrap-tab-text-grid-left">
                            <img src="/assets/images/t1.jpg" alt=" " className="img-responsive" />
                          </div>
                          <div className="bootstrap-tab-text-grid-right">
                            <ul>
                              <li><a href="#">@Galang42</a></li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                              </li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                              vel eum iure reprehenderit.</p>
                          </div>
                          <div className="clearfix"> </div>
                        </div>

                        <div className="add-review">
                            <h4>Tambahkan Ulasan</h4>
                            <div className="rating1">
                              <span style={{color: "#3CBA2F"}} className="starRating">
                                <input id="rating5" type="radio" name="rating" value="5" /> 
                                <label htmlFor="rating5">5</label>
                                <input id="rating4" type="radio" name="rating" value="4" />
                                <label htmlFor="rating4">4</label>
                                <input id="rating3" type="radio" name="rating" value="3" />
                                <label htmlFor="rating3">3</label>
                                <input id="rating2" type="radio" name="rating" value="2" />
                                <label htmlFor="rating2">2</label>
                                <input id="rating1" type="radio" name="rating" value="1" />
                                <label htmlFor="rating1">1</label>
                              </span>
                            </div>
                              <textarea name="Message" ></textarea>
                            <input type="submit" value="Kirim" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                    
                </div>
              </div>	
			      </div>
        </div>
      </div>
      <ModalFormBuy productId={25} />
    </React.Fragment>
  )
}

export default DetailsProduct