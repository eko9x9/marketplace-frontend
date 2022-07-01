import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2'
import Url from '../libs/url';

interface Props {

}

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [tokenLogin, setTokenLogin] = useState("");
  const MySwal = withReactContent(Swal);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const tokenLogin = localStorage.getItem("tokenLogin");
    if(tokenLogin){
      setTokenLogin(tokenLogin)
    }
  }, [tokenLogin]);
  
  const requestLogin = async() => {
    try {
      const fLogin = await fetch(`${Url.apiUrl}/auth/login`, {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username, password
          })
        }).then(r => {
          if(r.status === 404){
            MySwal.fire({
              text: "Akun tidak ditemukan!",
              icon: "error"
            });
          }else if(r.status === 200){
            MySwal.fire({
              text: "Berhasil masuk!",
              icon: "success"
            });
          }
          return r;
        }).then(r => r.json()
      );
      
      if(fLogin?.token){
        localStorage.setItem("tokenLogin", fLogin.token);
        window.location.reload()
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <div className="header" id="home">
        <div className="container">
          <ul>
              <li><i className="fa-solid fa-shop"></i>Mulai berjualan</li>
              <li> <i className="fa-solid fa-receipt"></i>Promo</li>
              <li> <i className="fa-solid fa-heart"></i> Tokoku care </li>
              <li> <i className="fa-solid fa-address-card"></i>Tentang tokoku </li>
          </ul>
        </div>
      </div>

      <div className="header-bot">
        <div className="header-bot_inner_wthreeinfo_header_mid">
          <div className="col-md-4 header-middle">
            <form action="#" method="post">
                <input type="search" name="search" placeholder="Cari disini..."  />
                <input type="submit" value=" " />
              <div className="clearfix"></div>
            </form>
          </div>
            <div className="col-md-4 logo_agile">
              <h1><a href="#"><span>T</span>okoku <i className="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true"></i></a></h1>
            </div>
          <div className="col-md-4 agileits-social top_content">
            <ul style={{display: "flex", alignItems: "center", justifyContent: "center"}} className="social-nav model-3d-0 footer-social w3_agile_social">
              { tokenLogin === ""?
                <React.Fragment>
                  <button type="button" style={{ padding: "10px 25px", marginRight: 10 }} className="btn btn-info" data-toggle="modal" data-target="#myModal">
                    <i className="fa-solid fa-lock" style={{ marginRight: 10 }}></i>
                    Masuk
                  </button><button type="button" style={{ padding: "10px 25px" }} className="btn btn-warning" data-toggle="modal" data-target="#myModal2">
                      <i className="fa-solid fa-file-pen" style={{ marginRight: 10 }}></i>
                      Daftar
                  </button>
                </React.Fragment>
                :
                <React.Fragment>
                  <div className="m-dropdown" style={{marginRight: 30}}>
                    <Avatar className="m-dropbtn" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <div className="m-dropdown-content">
                      <p
                        onClick={() => {
                          navigate("/bills")
                        }}>
                          Tagihan
                      </p>
                      <p onClick={() => {
                        
                      }}>Pesanan Saya</p>

                      <p onClick={() => {

                      }}>History Transaksi</p>
                      <p onClick={() => {

                      }}>Edit Biodata</p>
                      <p onClick={() => {
                          Swal.fire({
                            title: 'Anda Yakin?',
                            showDenyButton: true,
                            confirmButtonText: 'Ya',
                            denyButtonText: `Batal`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              localStorage.removeItem("tokenLogin");
                              window.location.reload();
                            } else if (result.isDenied) {

                            }
                          })
                      }}>Keluar</p>
                    </div>
                  </div>

                  <button onClick={() => {
                    navigate("/management/shop")
                  }} type="button" style={{padding: "10px 25px"}} className="btn btn-info">
                      <i style={{marginRight: 10}} className="fa-solid fa-shop"></i>
                      Kelola Toko
                  </button>
                </React.Fragment>
              }
              
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>


      <div className="modal fade" id="myModal" tabIndex={1} role="dialog">
        <div className="modal-dialog">
        {/* <!-- Modal content--> */}
        <div className="modal-content">
          <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body modal-body-sub_agile">
          <div className="col-md-8 modal_body_left modal_body_left1">
          <h3 className="agileinfo_sign">Masuk <span>Sekarang</span></h3>
          <form >
            <div className="styled-input agile-styled-input-top">
              <input type="text" onChange={(e) => setUsername(e.target.value)} />
              <label>Username</label>
              <span></span>
            </div>
            <div className="styled-input">
              <input type="password"  onChange={(e) => setPassword(e.target.value)} /> 
              <label>Kata sandi</label>
              <span></span>
            </div> 
            <input onClick={async() => {
              if(username && password){
                  await requestLogin()
              }else{
                MySwal.fire({
                  text: "Form belum terisi semua!",
                  icon: "error"
                })
              }
            }} type="submit" value="Masuk" />
          </form>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                    <li><a href="#" className="facebook">
                      <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" className="twitter"> 
                      <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" className="instagram">
                      <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" className="pinterest">
                      <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                  </ul>
                  <div className="clearfix"></div>
                  <p><a href="#" data-toggle="modal" data-target="#myModal2" > Belum Punya Akun?</a></p>

          </div>
          <div className="col-md-4 modal_body_right modal_body_right1">
            <img src="images/log_pic.jpg" alt=" "/>
          </div>
          <div className="clearfix"></div>
          </div>
        </div>
        {/* <!-- //Modal content--> */}
        </div>
      </div>
      {/* <!-- //Modal1 -->
      <!-- Modal2 --> */}
      <div className="modal fade" id="myModal2" tabIndex={1} role="dialog">
        <div className="modal-dialog">
        {/* <!-- Modal content--> */}
        <div className="modal-content">
          <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body modal-body-sub_agile">
          <div className="col-md-8 modal_body_left modal_body_left1">
          <h3 className="agileinfo_sign">Daftar <span>Sekarang</span></h3>
          <form action="#" method="post">
            <div className="styled-input agile-styled-input-top">
            <input type="text" name="Name" />
            <label>Username</label>
            <span></span>
            </div>
            <div className="styled-input">
            <input type="email" name="Email" /> 
            <label>Email</label>
            <span></span>
            </div> 
            <div className="styled-input">
            <input type="password" /> 
            <label>Kata sandi</label>
            <span></span>
            </div> 
            <div className="styled-input">
            <input type="password" name="Confirm Password" /> 
            <label>Konfirmasi kata sandi</label>
            <span></span>
            </div> 
            <input type="submit" value="Sign Up" />
          </form>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                    <li><a href="#" className="facebook">
                      <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" className="twitter"> 
                      <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" className="instagram">
                      <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" className="pinterest">
                      <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                      <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                  </ul>
                  <div className="clearfix"></div>
                  <p><a href="#">Dengan mendaftar, saya menerima persyaratan dan ketentuan!</a></p>

          </div>
          <div className="col-md-4 modal_body_right modal_body_right1">
            <img src="images/log_pic.jpg" alt=" "/>
          </div>
          <div className="clearfix"></div>
          </div>
        </div>
        {/* <!-- //Modal content--> */}
        </div>
      </div>
      {/* <!-- //Modal2 --> */}
    </React.Fragment>
  )
}

export default Header