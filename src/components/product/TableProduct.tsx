import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Url from '../../libs/url';

type Props = {}

const TableProduct = (props: Props) => {    
    const navigate = useNavigate();
    const [tokenLogin, setTokenLogin] = useState("");
    const [selectedOrder, setSelectedOrder] = useState("");
    const [dataProduct, setDataProduct] = useState<any>([]);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
      const tokenLogin = localStorage.getItem("tokenLogin");
      const getDataProduct = async() => {
          const x = await fetch(`${Url.apiUrl}/product/get-product-seller`, {
              headers: {
                  "Authorization": `Bearer ${tokenLogin}`
              }
          }).then(r => r.json());
          setDataProduct(x);
          console.log(x)
      }
      if(tokenLogin){
          setTokenLogin(tokenLogin);
          getDataProduct();
      }
    }, [])

    return (
        <React.Fragment>
                <h4 className="text-center">Produk Saya</h4>
                <div className="card border-0 shadow mb-4 mt-4">
                    <div className="card-body ">
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0 rounded">
                                <thead className="thead-light">
                                    <tr>
                                        <th className="border-0 rounded-start">Product id</th>
                                        <th className="border-0 rounded-start">Nama Produk</th>
                                        <th className="border-0 rounded-start">Harga</th>
                                        <th className="border-0">Status produk</th>
                                        <th className="border-0">Kategori</th>
                                        <th className="border-0">Rata-rata bintang</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- Item --> */}
                                    {
                                        dataProduct?.map((val: any) => (
                                            <tr>
                                                <td><a href="#" className="text-primary fw-bold">{val?.id}</a> </td>
                                                <td>
                                                    {val?.name}
                                                </td>
                                                <td>
                                                    {val?.price}
                                                </td>
                                                <td>
                                                    {val?.status_product ? "Aktif": "Tidak aktif"}
                                                </td>
                                                <td>
                                                    {val?.category.name}
                                                </td>
                                                <td>
                                                    {val?.average_stars }
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

export default TableProduct
