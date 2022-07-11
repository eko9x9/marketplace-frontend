import React from 'react'
import VoltSidebar from '../layouts/VoltSidebar'
import VoltWrapperContent from '../layouts/VoltWrapperContent';
import { Helmet } from "react-helmet";
import TableConfirmPayment from '../components/product/TableConfirmPayment';

type Props = {}

const ManagementConfirmPyment = (props: Props) => {
  return (
      <React.Fragment>
          <Helmet>
            <link type="text/css" href="/volt-vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-vendor/notyf/notyf.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-css/volt.css" rel="stylesheet" />
          </Helmet>
          <VoltSidebar activeMenu="add-product" />
          <VoltWrapperContent >
            <div className="container-fluid mt-3">
              <TableConfirmPayment />
            </div>
          </VoltWrapperContent>
      </React.Fragment>
  )
}

export default ManagementConfirmPyment