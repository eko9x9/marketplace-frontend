import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Url from '../../libs/url';
import ModalFormBuy from './ModalFormBuy';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2'
import { addChart } from '../../libs/addChart';

type Props = {}

const DetailsProduct = (props: Props) => {
  const MySwal = withReactContent(Swal);
  const { productId } = useParams();

  const [dataProductDetail, setDataProductDetail] = useState<any>({});
  const [amount, setAmount] = useState<any>("");
  const [isFollowUser, setisFollowUser] = useState(false);
  const [tokenLogin, setTokenLogin] = useState("");
  const [starsProduct, setStarsProduct] = useState("");
  const [messageReview, setMessageReview] = useState("");

  
  
  useEffect(() => {
    const getToken = localStorage.getItem("tokenLogin");
    if(getToken){
      setTokenLogin(getToken)
    }    
  }, [])
  
  
  useEffect(() => {
    const fDataProductDetail = async() => {
      const x = await fetch(`${Url.apiUrl}/product/get-product-and-review/${productId}`).then(r => r.json());
      setDataProductDetail(x);
    }

    fDataProductDetail();
  }, []);

  useEffect(() => {
    const isFollow = async() => {
      const fFollUser = await fetch(`${Url.apiUrl}/user/is-on-follow/${dataProductDetail?.userSellerId}`, {
        headers: {
          "Authorization": `Bearer ${tokenLogin}`
        }
      }).then(r => r.json());

      setisFollowUser(fFollUser.value);
    }
    isFollow()
  }, [dataProductDetail])
  
  
  const StarsComponent = (amount: any) => {
    var rows = [];
    for (var i = 0; i < amount; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<i style={{color: "#2FDAB8"}} key={i} className="fa-solid fa-star"></i>);
    }
    return (
      <div className="icons">
        {rows}
      </div>
    );
  }

  const followUser = async(userId: string | number) => {
    const fFollowUser = await fetch(`${Url.apiUrl}/user/follow-user/${userId}`, {
      headers: {
        "Authorization": `Bearer ${tokenLogin}`
      }
    }).then(r => {
      if(r.status === 200){
        MySwal.fire({
          text: "Sukses follow user!",
          icon: "success"
        });
        window.location.reload()
      }else {
        MySwal.fire({
          text: "Tidak bisa follow user ini!",
          icon: "error"
        });
      }
    });
  }

  const unFollowUser = async(userId: string | number) => {
    const fFollowUser = await fetch(`${Url.apiUrl}/user/unfollow-user/${userId}`, {
      headers: {
        "Authorization": `Bearer ${tokenLogin}`
      }
    }).then(r => {
      if(r.status === 200){
        MySwal.fire({
          text: "Berhasil unfollow!",
          icon: "success"
        });
        window.location.reload()
      }else {
        MySwal.fire({
          text: "Anda tidak bisa unfollow user ini!",
          icon: "error"
        });
      }
    });
  }

  const addReview = async() => {
    if(starsProduct){
      const fAddReview = await fetch(`${Url.apiUrl}/product/add-review`, {
        method: "post",
        headers: {
          "Authorization": `Bearer ${tokenLogin}`, 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: messageReview,
          stars: starsProduct,
          productId: productId
        })
      }).then(r => {
        if(r.status === 200){
          MySwal.fire({
            text: "Berhasil menambahkan ulasan!",
            icon: "success"
          });
          window.location.reload()
        }else {
          MySwal.fire({
            text: "Gagal menambahkan ulasan!",
            icon: "error"
          });
        }
      })
    }
  }

  return (
    <React.Fragment>
      <div className="page-head_agile_info_w3l">
          <div className="container">
            {/* <!--/w3_short--> */}
              <div className="services-breadcrumb">
                  <div className="">

                    <ul className="w3_short">
                      <li>
                        <Link to="/">
                          <a href="#">Home</a><i>|</i>
                        </Link>
                      </li>
                      {/* <li>Baju</li> */}
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
                      <div className="thumb-image"> 
                      { dataProductDetail.image &&
                        dataProductDetail.image.map((x: any) => (
                          <img src={`${Url.apiUrl}/${x.image}`} data-imagezoom="true" className="img-responsive" />
                        ))
                      }
                      </div>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>	
              </div>
          </div>
          <div className="col-md-8 single-right-left simpleCart_shelfItem">
                <h3>{dataProductDetail.name}</h3>
                <p><span className="item_price">Rp {dataProductDetail.price}</span> <del></del></p>
                <div style={{paddingBottom: 10}} className="description border-bottom">
                  <h3>Pengiriman</h3>
                  <div className="sender">
                    <div style={{ display: "flex", alignItems: "center"}}>
                      {/* <i style={{paddingRight: 10, paddingTop: 5}} className="fa-solid fa-location-dot"></i> */}
                      {/* <p>Dikirim dari Kota Bekasi</p> */}
                    </div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                    <i style={{paddingRight: 10, paddingTop: 5}} className="fa-solid fa-truck-fast"></i>
                      <p>Ongkir Reguler Rp 20.000</p>
                    </div>
                    {/* <p>Estimasi tiba 1 - 2 Juli</p> */}
                  </div>
                </div>
                <div style={{paddingBottom: 10}} className="description border-bottom">
                  <div className="profile">
                    <div className="avatar">
                      <Avatar style={{width: 50, height: 50}} alt={dataProductDetail?.user_seller?.username} src="/static/images/avatar/1.jpg" />
                      <h5 style={{marginLeft: 10}}>@{dataProductDetail?.user_seller?.username}</h5>
                      <h5 style={{position: "absolute", right: "20%"}}>{dataProductDetail?.user_seller?.follower_count} Follower</h5> 
                    </div>
                    <button onClick={async() => {
                      if(isFollowUser){
                        unFollowUser(dataProductDetail?.userSellerId)
                      }else {
                        followUser(dataProductDetail?.userSellerId)
                      }
                    }} className="btn-follow">{isFollowUser? "Unfollow" : "Follow"}</button>
                    <button className="detail-market">Lihat Toko</button>
                  </div>
                </div>
                <div className="color-quality">
                  <div className="color-quality-right">
                    <h5>Jumlah Order:</h5>
                    <input onChange={(e) => {
                      setAmount(e.target.value)
                    }} type="number" placeholder="" />
                  </div>
                </div>
                {/* <div className="occasional">
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
                </div> */}
                <div className="occasion-cart" style={{display: "flex", marginTop: 30}}>
                    <button onClick={() => {
                      addChart({image: `${Url.apiUrl}${dataProductDetail.image[0].image}`, name: dataProductDetail.name, price: dataProductDetail.price, productId: dataProductDetail.id})
                    }} type="button" style={{padding: "10px 20px", borderRadius: 10}} className="btn btn-warning">Tambahkan ke keranjang</button>
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
                      <p>{dataProductDetail.description}</p>
                      {/* <p className="w3ls_para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p> */}
                    </div>
                  </div>
                  
                </div>
              </div>	
            </div>

            <div className="ratings">
              <h3>Ulasan ({dataProductDetail?.review?.length})</h3>
              <h5 style={{paddingTop: 15}}>Big Wing Sneakers (Navy)</h5>
              <div className="stars">
                <h2>{dataProductDetail?.average_stars}/5</h2>
                {
                  StarsComponent(dataProductDetail?.average_stars)
                }
                <p style={{paddingTop: 20}}>({dataProductDetail?.review?.length}) Ulasan</p>
              </div>
            </div>

            <div className="responsive_tabs_agileits"> 
              <div id="horizontalTab">
                  <ul className="resp-tabs-list">
                    <li>Semua Ulasan ({dataProductDetail?.review?.length})</li>
                  </ul>
                <div className="resp-tabs-container">
                  <div className="tab2">
                    <div className="single_page_agile_its_w3ls">
                      <div className="bootstrap-tab-text-grids">
                        <div className="bootstrap-tab-text-grid">
                          { dataProductDetail.review?.map((val: any) => (
                          <>
                            <div style={{ display: "flex", justifyContent: "end"}} className="bootstrap-tab-text-grid-left">
                              {/* <img src="/assets/images/t1.jpg" alt=" " className="img-responsive" /> */}
                              <Avatar alt={val.review_user.username} />
                            </div>
                            <div className="bootstrap-tab-text-grid-right">
                              <ul>
                                <li><a href="#">@{val.review_user.username}</a></li>
                                <li>
                                  {
                                    StarsComponent(val.stars)
                                  }
                                </li>
                              </ul>
                              <p>{val.message}</p>
                            </div>
                            <div className="clearfix"> </div>
                          </>
                            ))
                          }
                          </div>

                        <div className="add-review">
                            <h4>Tambahkan Ulasan</h4>
                            <div className="rating1">
                              <span style={{color: "#3CBA2F"}} className="starRating">
                                <input id="rating5" type="radio" name="rating" onChange={e => {
                                  setStarsProduct(e.target.value)
                                }} value="5" /> 
                                <label htmlFor="rating5">5</label>
                                <input id="rating4" type="radio" name="rating" onChange={e => {
                                  setStarsProduct(e.target.value)
                                }} value="4" />
                                <label htmlFor="rating4">4</label>
                                <input id="rating3" type="radio" name="rating" onChange={e => {
                                  setStarsProduct(e.target.value)
                                }} value="3" />
                                <label htmlFor="rating3">3</label>
                                <input id="rating2" type="radio" name="rating" onChange={e => {
                                  setStarsProduct(e.target.value)
                                }} value="2" />
                                <label htmlFor="rating2">2</label>
                                <input id="rating1" type="radio" name="rating" onChange={e => {
                                  setStarsProduct(e.target.value)
                                }} value="1" />
                                <label htmlFor="rating1">1</label>
                              </span>
                            </div>
                              <textarea onChange={(e) => {
                                setMessageReview(e.target.value)
                              }} name="Message" ></textarea>
                            <input onClick={() => {
                              addReview()
                            }} type="submit" value="Kirim" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                    
                </div>
              </div>	
			      </div>
        </div>
      </div>
      <ModalFormBuy paymentMethod={dataProductDetail?.payment_method} productId={productId} amount={amount} />
    </React.Fragment>
  )
}

export default DetailsProduct