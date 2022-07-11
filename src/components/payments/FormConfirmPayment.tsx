import React, { useEffect, useState } from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Url from '../../libs/url';

type Props = {}

const FormConfirmPayment = (props: Props) => {
  const { orderId } = useParams();
  const MySwal = withReactContent(Swal);

  const [tokenLogin, setTokenLogin] = useState("");
  const [imageConfirmPayment, setimageConfirmPayment] = useState<any>(null);
  const [note, setNote] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tokenLogin");
    if(token){
      setTokenLogin(token)
    }
  }, [tokenLogin]);


  const requestConfirmPayment = async() => {
    if(imageConfirmPayment && note){
      const fConfirm = await fetch(`${Url.apiUrl}/product/confirm-payment`, {
        method: "post",
        headers: {
          "Authorization": `Bearer ${tokenLogin}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          note,
          productOrderId: orderId
        })
      }).then(r => {
        if(r.status !== 200){
          MySwal.fire({
            text: "Gagal membuat konfirmasi pembayaran!",
            icon: "error"
          });
        }else {
          MySwal.fire({
            text: "Konfirmasi pembayaran telah dikirim",
            icon: "success"
          });
        }
        return r
      }).then(r => r.json());
      console.log(fConfirm);
      uploadImageConfirmPayment(fConfirm?.id)
    }else {
      MySwal.fire({
        text: "Harap isi semua form!",
        icon: "error"
      });
    }
  }

  const uploadImageConfirmPayment = async(confirmId: any) => {
    const formData = new FormData();
		formData.append('image', imageConfirmPayment[0]);
    
    const rUpload = fetch(`${Url.apiUrl}/product/upload-confirm-payment-image/${confirmId}`, {
      method: "post",
      headers: {
        "Authorization": `Bearer ${tokenLogin}`
      },
      body: formData
    }).then(r => {
      if(r.status === 200){
        setTimeout(() => {
          MySwal.fire({
            text: "Sukses upload image konfirmasi pembayaran!",
            icon: "success"
          });
        }, 2000);

        setTimeout(() => {
          navigate("/bills")
        }, 3000)
      }else {
        setTimeout(() => {
          MySwal.fire({
            text: "Gagal upload image konfirmasi pembayaran!",
            icon: "error"
          });
        }, 2000);
      }
    });


  }

  return (
    <React.Fragment>
      <div style={{paddingBottom: 30, marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center"}} className="confirm-payment">
        <h3 style={{textAlign: "center"}}>Konfirmasi Pembayaran</h3>
        <div className="form-confirm-payment" style={{maxWidth: 500, width: "100%", marginTop: 20}}>
          <div className="input">
            <label htmlFor="note" className="form-label">Catatan</label>
            <textarea onChange={(e) => {
              setNote(e.target.value)
            }} id="note" className="form-control" />
          </div>
          <div style={{marginTop: 20}} className="input">
            <label htmlFor="file" className="form-label">Bukti Pembayaran</label>
            <input onChange={(e) => {
              setimageConfirmPayment(e.target.files);
            }} type="file" id="file" accept="image/png, image/jpeg" className="form-control" />
          </div>
          <button onClick={() => {
            requestConfirmPayment()
          }} style={{marginTop: 40}} type="button" className="btn btn-success">Konfirmasi</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FormConfirmPayment