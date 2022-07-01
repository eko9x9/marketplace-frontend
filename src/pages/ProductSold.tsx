import React from 'react'
import VoltSidebar from '../layouts/VoltSidebar'
import VoltWrapperContent from '../layouts/VoltWrapperContent';
import { Helmet } from "react-helmet";
import FormAddProduct from '../components/product/FormAddProduct';
import TableProductSold from '../components/product/TableProductSold';

type Props = {}

const ProductSold = (props: Props) => {
  return (
      <React.Fragment>
          <Helmet>
            <link type="text/css" href="/volt-vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-vendor/notyf/notyf.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-css/volt.css" rel="stylesheet" />
          </Helmet>
          <VoltSidebar activeMenu="product-sold" />
          <VoltWrapperContent >
            <div className="container-fluid mt-3">
              {/* <TableProductSold /> */}
            </div>
          </VoltWrapperContent>
      </React.Fragment>
  )
}

export default ProductSold