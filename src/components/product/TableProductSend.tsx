import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Url from '../../libs/url';
import ModalSendProduct from './ModalSendProduct';

type Props = {}

const TableProductSend = (props: Props) => {    
    const navigate = useNavigate();
    const [tokenLogin, setTokenLogin] = useState("");
    const [selectedOrder, setSelectedOrder] = useState("");
    const [dataOrders, setDataOrders] = useState<any>([]);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
      const tokenLogin = localStorage.getItem("tokenLogin");
      const getDataOrders = async() => {
          const x = await fetch(`${Url.apiUrl}/product/get-status-product-seller`, {
              headers: {
                  "Authorization": `Bearer ${tokenLogin}`
              }
          }).then(r => r.json());
          const filterStatus = x.filter((x: any) => x.status_order == "Pembayaran disetujui, menunggu dikirim!");
          setDataOrders(filterStatus);
      }
      if(tokenLogin){
          setTokenLogin(tokenLogin);
          getDataOrders();
      }
    }, [])

    return (
        <React.Fragment>
            <h4 className="text-center">Produk Yang Harus Dikirim</h4>
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
                                        <th className="border-0">Lokasi pengiriman</th>
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
                                                    {val?.note}
                                                </td>
                                                <td>
                                                    Rp. {val?.total_price}
                                                </td>
                                                <td>
                                                    {val?.location}
                                                </td>
                                                <td>
                                                    <button data-bs-toggle="modal" data-bs-target="#modalSendProduct" onClick={() => {
                                                        setSelectedOrder(val?.id)
                                                    }} className="btn btn-primary">Sudah dikirim</button>
                                                </td>
                                                
                                            </tr>        
                                        ))
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ModalSendProduct orderId={selectedOrder}/>
        </React.Fragment>
    )
}

export default TableProductSend
