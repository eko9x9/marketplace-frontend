import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ListBill() {
  return (
      <React.Fragment>
        <div style={{paddingBottom: 30, marginTop: 20}} className="bills">
            <h3 style={{textAlign: "center"}}>Tagihanku</h3>
            <div className="card">
                <Card sx={{ maxWidth: 500 }}>
                    <CardContent>
                        <h5 style={{textAlign: "right"}}>Menunggu Pembayaran</h5>
                        <Typography sx={{marginTop: 1}} gutterBottom variant="h6" component="div">
                            Sepatu Navy bla bla
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Metode Pembayaran: Transfer Bank Bca
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Nomor Rekening: 3635656805 (AN: Rudi Gala)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Total Pembayaram: Rp 203.000
                        </Typography>
                    </CardContent>
                    <CardActions>
                         <Button size="small">Konfirmasi Pembayaran</Button>
                    </CardActions>
                    <CardActions sx={{marginTop: -1}}>
                        <Button  size="small">Batalkan!</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
      </React.Fragment>
  );
}
