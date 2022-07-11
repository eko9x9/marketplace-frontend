import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { addChart } from '../../libs/addChart';
import Url from "../../libs/url";
import { useNavigate, useParams } from 'react-router';

type Props = {
    title: string
}

const CardsProduct = (props: Props) => {
    const { categoryId } = useParams();

    const [dataProduct, setdDataProduct] = useState([]);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        
        const fProduct = async() => {
            const dataProduct = await fetch(`${Url.apiUrl}/product/get-product-selected`).then(r => r.json());
            setdDataProduct(dataProduct);
        }
        const fProductCat = async() => {
            const x = await fetch(`${Url.apiUrl}/product/get-product-category/${categoryId}`).then(r => r.json());
            setdDataProduct(x);
        }

        if(!categoryId){
            fProduct()
        }else {
            fProductCat()
        }
    }, [categoryId])

    return (
        <React.Fragment>
          {/* <!-- /new_arrivals -->  */}
	        <div className="new_arrivals_agile_w3ls_info"> 
            <div className="container">
                { props.title &&
                <h3 className="wthree_text_info">{props.title}</h3>		
                }
                    <div id="horizontalTab">
                        <div className="resp-tabs-container">
                        {/* <!--/tab_one--> */}
                            <div className="tab1">
                                { 
                                    dataProduct?.map((data: any) => (
                                        <React.Fragment>
                                            <div className="col-md-3 product-men">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item">
                                                            {
                                                                data.image &&
                                                                data.image.map((x: any) => (
                                                                    <>
                                                                        <img src={`${Url.apiUrl}${x.image}`} style={{height: 230, maxHeight: 230}} alt="" className="pro-image-front" />
                                                                        <img src={`${Url.apiUrl}${x.image}`} style={{height: 230, maxHeight: 230}} alt="" className="pro-image-back" />
                                                                    </>
                                                                ))
                                                            }
                                                            <div className="men-cart-pro">
                                                                <div className="inner-men-cart-pro">
                                                                    <Link to={`/product/detail/${data.id}`}>
                                                                        <div className="link-product-add-cart">Lihat Detail</div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            {/* <span className="product-new-top">New</span> */}
                                                            
                                                    </div>
                                                    <div className="item-info-product ">
                                                        <h4><a href="single.html">{data.name}</a></h4>
                                                        <div className="info-product-price">
                                                            <span className="item_price">Rp {data.price}</span>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                            <input onClick={() => {
                                                                addChart({image: `${Url.apiUrl}${data.image[0].image}`, name: data.name, price: data.price, productId: data.id})
                                                            }} type="submit" name="submit" value="Tambah ke keranjang" className="button" />
                                                        </div>
                                                                                            
                                                    </div>

                                                    <div className="info-product">
                                                        <div className="top">
                                                            <h5>{data.user_seller.location? data.user_seller.location: ""}</h5>
                                                        </div>
                                                        <div className="buttom">
                                                            <div className="stars">
                                                                <i className="fa-solid fa-star"></i>
                                                                <p style={{paddingLeft: 6}}>{data.average_stars}</p>
                                                            </div>
                                                            <p style={{paddingLeft: 8}}>{data.order.length} Terjual</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))

                                }
                                { categoryId && dataProduct.length == 0 &&
                                    <h3 style={{textAlign: "center", overflow: "hidden"}}>Tidak ada produk untuk kategori ini</h3>

                                }
                                
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