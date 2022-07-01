import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


type Props = {
  productId: any
}

const ModalFormBuy = (props: Props) => {
  const [tokenLogin, setTokenLogin] = useState("");

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const token = localStorage.getItem("token_login");
    if(token){
      setTokenLogin(token)
    }
  }, [tokenLogin])
  
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
                <input type="text" name="Pengiriman" />
                <label>Lokasi Pengiriman</label>
                <span></span>
              </div>
              <div className="styled-input agile-styled-input-top">
                <input type="text" name="note" />
                <label>Tambah Catatan</label>
                <span></span>
              </div>
              <div className="styled-input">
                  <div className="color-quality-right">
                    <h5>Metode Pembayaran :</h5>
                    <select id="country1" className="frm-field required sect">
                      <option >Transfer Bank BCA</option>								
                      <option >Transfer Bank BNI</option>								
                      <option >Transfer Bank BRI</option>								
                    </select>
                  </div>
              </div> 
              <div className="styled-input">
                  <div className="color-quality-right">
                    <h5>Pilih Kurir :</h5>
                    <select id="country1" className="frm-field required sect">
                      <option >JNE Reguler - Rp 20.000</option>								
                    </select>
                  </div>
              </div> 
                <input onClick={() => {
                  if(tokenLogin == ""){
                    MySwal.fire({
                      text: "Silahkan login terlebih dahulu!",
                      icon: "error"
                    });
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