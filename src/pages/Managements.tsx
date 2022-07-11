import React from 'react'
import VoltSidebar from '../layouts/VoltSidebar'
import VoltWrapperContent from '../layouts/VoltWrapperContent';
import { Helmet } from "react-helmet";
import TableProduct from '../components/product/TableProduct';

type Props = {}

const Managements = (props: Props) => {
  return (
      <React.Fragment>
          <Helmet>
            <link type="text/css" href="/volt-vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-vendor/notyf/notyf.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-css/volt.css" rel="stylesheet" />
          </Helmet>
          <VoltSidebar activeMenu="home" />
          <VoltWrapperContent >
            <div className="container-fluid mt-3">
              <TableProduct />
            </div>
          </VoltWrapperContent>
      </React.Fragment>
  )
}

export default Managements