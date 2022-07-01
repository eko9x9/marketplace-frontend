import React from 'react'
import { Helmet } from 'react-helmet'
import ListBill from '../components/payments/ListBill'
import BannerTop from '../layouts/BannerTop'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

type Props = {}

const Bills = (props: Props) => {
  return (
    <React.Fragment>
        <Helmet>
            <link href="/assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/assets/css/style.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/assets/css/font-awesome.css" rel="stylesheet" /> 
            <link href="/assets/css/easy-responsive-tabs.css" rel='stylesheet' type='text/css'/>
            {/* <!-- //for bootstrap working --> */}
            <link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800" rel="stylesheet" />
            <link href='//fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,900,900italic,700italic' rel='stylesheet' type='text/css' />
        </Helmet>
        <Header />
        <BannerTop />
        <ListBill />
        <Footer />
  </React.Fragment>
  )
}

export default Bills