import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Url from '../../libs/url';

type Props = {}

const TableConfirmPayment = (props: Props) => {    
    const navigate = useNavigate();
    const [tokenLogin, setTokenLogin] = useState("");
    const [dataOrders, setDataOrders] = useState<any>([]);
    const MySwal = withReactContent(Swal);

    const updateConfirmPayment = async(confirmId: any, is_accept: boolean) => {
        const x = await fetch(`${Url.apiUrl}/management/update-confirm-payment`, {
            method: "put",
            headers: {
                'Authorization': `Bearer ${tokenLogin}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                confirmPaymentId: confirmId,
                accept: is_accept
            })
        }).then(r => {
            return r
        }).then(r => r.json());

        MySwal.fire({
            text: x.msg,
            icon: "success"
        });

        window.location.reload()
    }

  
    useEffect(() => {
      const tokenLogin = localStorage.getItem("tokenLogin");
      const getDataOrders = async() => {
          const x = await fetch(`${Url.apiUrl}/product/get-status-product-seller`, {
              headers: {
                  "Authorization": `Bearer ${tokenLogin}`
              }
          }).then(r => r.json());
          const filterStatus = x.filter((x: any) => x.status_order == "Menunggu Persetujuan Pembayaran");
          setDataOrders(filterStatus);
      }
      if(tokenLogin){
          setTokenLogin(tokenLogin);
          getDataOrders();
      }
    }, [])

    return (
        <React.Fragment>
            <h4 className="text-center">Konfirmasi Pembayaran Produk</h4>
                <div className="card border-0 shadow mb-4 mt-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0 rounded">
                                <thead className="thead-light">
                                    <tr>
                                        <th className="border-0 rounded-start">Product id</th>
                                        <th className="border-0 rounded-start">Username pembeli</th>
                                        <th className="border-0 rounded-start">Nama Produk</th>
                                        <th className="border-0">Catatan pembayar</th>
                                        <th className="border-0">Total pembayaran</th>
                                        <th className="border-0">Bukti pembayaran</th>
                                        <th className="border-0">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- Item --> */}
                                    {
                                        dataOrders?.map((val: any) => (
                                            <tr>
                                                <td><a href="#" className="text-primary fw-bold">{val.product.id}</a> </td>
                                                <td>
                                                    {val?.user_order_product.username}
                                                </td>
                                                <td>
                                                    {val?.product.name}
                                                </td>
                                                <td className="fw-bold d-flex align-items-center">
                                                    {val?.order_confirm_payment?.note}
                                                </td>
                                                <td>
                                                    Rp. {val?.total_price}
                                                </td>
                                                <td>
                                                    <a style={{color: "blue"}} href={`${Url.apiUrl}/${val?.order_confirm_payment?.image_confirm_payment.image}`} target="_blank">Lihat</a>
                                                </td>
                                                <td>
                                                    <button onClick={() => {
                                                        updateConfirmPayment(val?.order_confirm_payment?.id, true)
                                                    }} className="btn btn-primary">Terima</button>
                                                    <button onClick={() => {
                                                        updateConfirmPayment(val?.order_confirm_payment?.id, false)
                                                    }} style={{marginLeft: 10}} className="btn btn-primary">Tolak</button>
                                                </td>
                                                
                                            </tr>        
                                        ))
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default TableConfirmPayment