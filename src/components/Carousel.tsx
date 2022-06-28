import React from 'react'

type Props = {}

const Carousel = (props: Props) => {
  return (
      <React.Fragment>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1" className=""></li>
              <li data-target="#myCarousel" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner" role="listbox">
              <div className="item active"> 
                  <div className="container">
                      <div className="carousel-caption">
                          <h3>Penjualan <span>Terbesar</span></h3>
                          <p>Spesial Hari Ini</p>
                          <a className="hvr-outline-out button2" href="_">Beli Sekarang </a>
                      </div>
                  </div>
              </div>
              <div className="item item2"> 
                  <div className="container">
                      <div className="carousel-caption">
                          <h3>Koleksi <span>Musim Panas</span></h3>
                          <p>Penjualan terbaru</p>
                          <a className="hvr-outline-out button2" href="_">Beli Sekarang </a>
                      </div>
                  </div>
              </div>
              <div className="item item5"> 
                  <div className="container">
                      <div className="carousel-caption">
                          <h3>Aksesoris <span>Mewah</span></h3>
                          <p>Buat kamu yang ingin tampil percaya diri</p>
                          <a className="hvr-outline-out button2" href="_">Beli Sekarang </a>
                      </div>
                  </div>
              </div> 
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
          {/* <!-- The Modal --> */}
        </div>
      </React.Fragment>
  )
}

export default Carousel