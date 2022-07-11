import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Url from '../../libs/url';


type Props = {
  productId: any
  amount: any
  paymentMethod: any
}

const ModalFormBuy = (props: Props) => {
  const navigate = useNavigate();

  const [tokenLogin, setTokenLogin] = useState("");
  const [serviceDelivery, setServiceDelivery] = useState<any>([]);
  const [productPaymentMethodId, setProductPaymentMethodId] = useState<any>("");
  const [selectedTypeDelivery, setSelectedTypeDelivery] = useState<any>([]);
  const [selectedTypeDeliveryId, setselectedTypeDeliveryId] = useState<any>("");
  const [location, setLocation] = useState<any>("");
  const [note, setNote] = useState<any>("");

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const token = localStorage.getItem("tokenLogin");
    if(token){
      setTokenLogin(token)
    }
  }, [tokenLogin]);

  useEffect(() => {
    const getDeliveryType = async() => {
      const dService = await fetch(`${Url.apiUrl}/product/get-service-delivery`).then(r => r.json());
      setServiceDelivery(dService);
    }
    getDeliveryType()
  }, [])
  
  const typeDeliverySelected = (courierId: any) => {
    const fillterSelectedCourier = serviceDelivery.filter((x: any) => x.id == courierId);
    setSelectedTypeDelivery(fillterSelectedCourier);
  }

  const requestOrder = async() => {
    if(productPaymentMethodId && location && note && selectedTypeDeliveryId){
      const fOrder = await fetch(`${Url.apiUrl}/product/order-product`, {
        method: "post",
        headers: {
          "Authorization": `Bearer ${tokenLogin}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: props.productId,
          productPaymentMethodId,
          typeDeliveryId: selectedTypeDeliveryId,
          location,
          amount: props.amount ? props.amount: 1,
          note,
        })
      }).then(r => {
        if(r.status !== 200){
          MySwal.fire({
            text: "Anda tidak bisa order!",
            icon: "error"
          });
        }else {
          MySwal.fire({
            text: "Berhasil order product!",
            icon: "success"
          });
          window.location.href = "/bills"
        }
        return r
      }).then(r => r.json());

    }else {
      MySwal.fire({
        text: "Harap isi semua form!",
        icon: "error"
      });
    }
  }
  
  return (
      <React.Fragment>
        <div className="modal fade" id="modalBuy" tabIndex={1} role="dialog">
          <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body modal-body-sub_agile">
            <div className="col-md-12 modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">Beli Langsung</h3>
              <div className="styled-input agile-styled-input-top">
                <input onChange={(e) => {
                  setLocation(e.target.value)
                }} value={location} type="text" name="Pengiriman" />
                <label>Lokasi Pengiriman</label>
                <span></span>
              </div>
              <div className="styled-input agile-styled-input-top">
                <input onChange={(e) => {
                  setNote(e.target.value)
                }} value={note} type="text" name="note" />
                <label>Tambah Catatan</label>
                <span></span>
              </div>
              <div className="styled-input">
                  <div className="color-quality-right">
                    <h5>Metode Pembayaran :</h5>
                    <select onChange={(e) => {
                      setProductPaymentMethodId(e.target.value)
                    }} id="country1" className="frm-field required sect">
                      <option >Pilih Metode Pembayaran</option>
                      { props.paymentMethod?.map((val: any) =>(
                        <option value={val.id}>{val.payment_method.name}</option>															
                      ))
                      }														
                    </select>
                  </div>
              </div> 
              <div className="styled-input">
                  <div className="color-quality-right">
                    <h5>Pilih Kurir :</h5>
                    <select onChange={(e) => {
                      typeDeliverySelected(e.target.value)
                    }} id="" className="frm-field required sect">
                      <option >Pilih kurir</option>
                      { serviceDelivery?.map((val: any) => (
                          <option value={val.id}>{val.courier}</option>								
                        ))
                      }							
                    </select>
                  </div>
              </div> 
              <div className="styled-input">
                  <div className="color-quality-right">
                    <h5>Pilih Jenis pengiriman :</h5>
                    <select onChange={(e) => {
                      setselectedTypeDeliveryId(e.target.value)
                    }} id="" className="frm-field required sect">
                      <option >Pilih Jenis Pengiriman</option>
                      { selectedTypeDelivery[0]?.type_delivery?.map((val: any) => (
                          <option value={val.id}>{val.name} ({val.price})</option>								
                        ))
                      }							
                    </select>
                  </div>
              </div> 
                <input onClick={() => {
                  if(tokenLogin == ""){
                    MySwal.fire({
                        text: "Silahkan login terlebih dahulu!",
                        icon: "error"
                      });
                  }else {
                    requestOrder();
                  }
                }} style={{marginTop: 20}} type="submit" value="Proses pembayaran" />
            </div>
            <div className="clearfix"></div>
            </div>
          </div>
          {/* <!-- //Modal content--> */}
          </div>
        </div>
      </React.Fragment>
  )
}

export default ModalFormBuy