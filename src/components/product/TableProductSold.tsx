import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Url from '../../libs/url';

type Props = {}

const TableProductSold = (props: Props) => {    
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
          const filterStatus = x.filter((x: any) => x.status_order == "Barang diterima.");
          setDataOrders(filterStatus);
      }
      if(tokenLogin){
          setTokenLogin(tokenLogin);
          getDataOrders();
      }
    }, [])

    return (
        <React.Fragment>
            <h4 className="text-center">Produk Terjual</h4>
                <div className="card border-0 shadow mb-4 mt-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0 rounded">
                                <thead className="thead-light">
                                    <tr>
                                        <th className="border-0 rounded-start">Product id</th>
                                        <th className="border-0 rounded-start">Username pembeli</th>
                                        <th className="border-0 rounded-start">Nama Produk</th>
                                        <th className="border-0">Total pembayaran</th>
                                        <th className="border-0">Lokasi pengiriman</th>
                                        <th className="border-0">Tanggal</th>
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
                                                <td>
                                                    Rp. {val?.total_price}
                                                </td>
                                                <td>
                                                    {val?.location}
                                                </td>
                                                <td>
                                                    {val?.createdAt }
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

export default TableProductSold
