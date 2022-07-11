import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Url from '../../libs/url';

type Props = {
    orderId: any
}

const ModalSendProduct = (props: Props) => {

    const [tokenLogin, setTokenLogin] = useState("");
    const [resiNumber, setResiNumber] = useState("");
    const MySwal = withReactContent(Swal);

    useEffect(() => {
      const tokenLogin = localStorage.getItem("tokenLogin");
      
      if(tokenLogin){
          setTokenLogin(tokenLogin);
      }else {
          window.location.replace("/")
      }
    }, []);

    const sendProduct = async() => {
        if(resiNumber){
            const x = await fetch(`${Url.apiUrl}/management/send-order-product`, {
                method: "post",
                headers: {
                    "Authorization": `Bearer ${tokenLogin}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    orderId: props.orderId,
                    resi_number: resiNumber
                })
            }).then(r => {
                if(r.status===200){
                    MySwal.fire({
                        text: "Status produk sedang dikirim",
                        icon: "success"
                    });
                    window.location.reload()
                }else {
                    MySwal.fire({
                        text: "Gagal memperbarui",
                        icon: "error"
                    });
                }
                return r
            }).then(r => r.json());
    
        }
    }

    return (
        <div className="modal fade" id="modalSendProduct" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        {/* <button type="button" className="btn-close" data-bs-dismissclassName="modal" aria-label="Close"></button> */}
                    </div>
                    <h2 className="h4 text-center">Produk telah dikirim</h2>
                    <div className="modal-body px-md-5">
                        <div className="form-group mb-4">
                            <label htmlFor="resi">Nomer Resi</label>
                            <div className="input-group">
                                <input value={resiNumber} onChange={(e) => {
                                    setResiNumber(e.target.value)
                                }} type="text" className="form-control border-gray-300" placeholder="Masukkan nomer resi" id="resi" />
                            </div>  
                        </div>

                        <button onClick={() => {
                            sendProduct()
                        }} className="btn btn-primary" type="button">Submit</button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSendProduct