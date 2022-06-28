import React from 'react'
import VoltSidebar from '../layouts/VoltSidebar'
import VoltWrapperContent from '../layouts/VoltWrapperContent';
import { Helmet } from "react-helmet";

type Props = {}

const Managements = (props: Props) => {
  return (
      <React.Fragment>
          <Helmet>
            <link type="text/css" href="/volt-vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-vendor/notyf/notyf.min.css" rel="stylesheet" />
            <link type="text/css" href="/volt-css/volt.css" rel="stylesheet" />
          </Helmet>
          <VoltSidebar />
          <VoltWrapperContent >
            <div className="container-fluid">
              <div className="row">
                <div className="" style={{height: 500}}></div>
              </div>
            </div>
          </VoltWrapperContent>
      </React.Fragment>
  )
}

export default Managements