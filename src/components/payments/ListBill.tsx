import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router';
import Url from '../../libs/url';

export default function ListBill() {

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const [dataOrders, setDataOrders] = useState<any>([])

    useEffect(() => {
        const token = localStorage.getItem("tokenLogin");
        const getOrders = async() => {
            const fOrders = await fetch(`${Url.apiUrl}/product/get-status-order`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(r => r.json());

            const f = fOrders.filter((x: any) => x.status_order == "Menunggu Pembayaran" || x.status_order == "Pembayaran ditolak, silahkan konfirmasi lagi jika sudah bayar!" ||  x.status_order == "Menunggu Persetujuan Pembayaran")
            setDataOrders(f);
        }
        if(token){
            getOrders()
        }else {
            navigate('/');
        }
    }, []);

    return (
        <React.Fragment>
            <div style={{paddingBottom: 30, marginTop: 20}} className="bills">
                <h3 style={{textAlign: "center"}}>Tagihan Saya</h3>
                { 
                    dataOrders?.map((val: any) => (
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}} className="card">
                            <Card sx={{ maxWidth: 800, width: "85%" }}>
                                <CardContent>
                                    <h5 style={{textAlign: "right"}}>{val.status_order}</h5>
                                    <Typography sx={{marginTop: 1}} gutterBottom variant="h6" component="div">
                                        {val.product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Metode Pembayaran: {val.product_payment_method.payment_method.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nomor Rekening: {val.product_payment_method.account_number}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Total Pembayaran: Rp {val.total_price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Jumlah pembelian: {val.amount}
                                    </Typography>
                                </CardContent>
                                { val.status_order == "Menunggu Pembayaran" || val.status_order == "Pembayaran ditolak, silahkan konfirmasi lagi jika sudah bayar!" ?
                                    <>
                                    <CardActions>
                                        <Button onClick={() => {
                                            navigate(`/confirm-payment/${val.id}`)
                                        }} size="small">Konfirmasi Pembayaran</Button>
                                    </CardActions>
                                    <CardActions sx={{marginTop: -1}}>
                                        <Button  size="small">Batalkan!</Button>
                                    </CardActions>
                                    </>
                                    :
                                    null
                                }
                            </Card>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
}
