import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

type Props = {

}

const ModalChart = (props: Props) => {
  const [dataChart, setDataChart] = useState<any>([]);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const store = localStorage.getItem("chart");
    if(store){
      setDataChart(JSON.parse(store))
    }
  }, [dataChart]);

  const removeChart = (productId: any) => {
    const prev = localStorage.getItem("chart");
    if(prev){
      const newVal = JSON.parse(prev).filter((x: any) => x.productId !== productId);
      localStorage.setItem("chart", newVal);
      MySwal.fire({
        text: "Berhasil hapus produk dari keranjang!",
        icon: "success"
      });
      window.location.reload()
    }
  }

  return (
    <div>
        <div className="modal fade" id="modalChart" tabIndex={1} role="dialog">
        <div className="modal-dialog">
        {/* <!-- Modal content--> */}
        <div className="modal-content">
          <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body modal-body-sub_agile">
            <h3>Keranjang</h3>
          <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: 20}} className="card">
            { dataChart.map((data: any) => (
                <Card sx={{ maxWidth: 800, width: "70%" }}>
                    <CardContent>
                        <Typography sx={{marginTop: 1, fontSize: 18}} gutterBottom variant="h6" component="div">
                            {data.name}
                        </Typography>
                        <div className="image" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                          <img style={{borderRadius: 10, width: "50%", height: "100%"}} src={data.image}/>
                        </div>
                        <Typography sx={{marginTop: 2, fontSize: 15}} gutterBottom variant="h6" component="div">
                            Harga: Rp.{data.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => {
                          window.location.href = (`/product/detail/${data.productId}`)
                        }} size="small">Lihat detail</Button>
                        <Button onClick={() => {
                          removeChart(data.productId);
                        }} size="small">Hapus Keranjang</Button>
                    </CardActions>
                </Card >
              ))

            }
        </div>
          <div className="col-md-12 modal_body_left modal_body_left1">
         
          </div>
            
            <div className="clearfix"></div>

          </div>
          <div className="clearfix"></div>
          </div>
        {/* <!-- //Modal content--> */}
        </div>
      </div>
    </div>
  )
}

export default ModalChart