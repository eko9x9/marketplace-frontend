import React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

type Props = {}

const FormConfirmPayment = (props: Props) => {
  return (
    <React.Fragment>
      <div style={{paddingBottom: 30, marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center"}} className="confirm-payment">
        <h3 style={{textAlign: "center"}}>Konfirmasi Pembayaran</h3>
        <div className="form-confirm-payment" style={{maxWidth: 500, width: "100%", marginTop: 20}}>
          <div className="input">
            <label htmlFor="note" className="form-label">Catatan</label>
            <textarea id="note" className="form-control" />
          </div>
          <div style={{marginTop: 20}} className="input">
            <label htmlFor="file" className="form-label">Bukti Pembayaran</label>
            <input type="file" id="file" accept="image/png, image/jpeg" className="form-control" />
          </div>
          <button style={{marginTop: 40}} type="button" className="btn btn-success">Konfirmasi</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FormConfirmPayment