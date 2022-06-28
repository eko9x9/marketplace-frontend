import React from 'react'

type Props = {}

const ModalAuth = (props: Props) => {
  return (
      <React.Fragment>{/* <!-- Modal1 --> */}
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
				<form action="#" method="post">
					<div className="styled-input agile-styled-input-top">
						<input type="email" />
						<label>Email</label>
						<span></span>
					</div>
					<div className="styled-input">
						<input type="password" /> 
						<label>Kata sandi</label>
						<span></span>
					</div> 
					<input type="submit" value="Sign In" />
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
					<label>Nama</label>
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

export default ModalAuth