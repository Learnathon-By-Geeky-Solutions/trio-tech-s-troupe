import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';
// import './assets/css/bootstrap.min.css';
// import './assets/css/style.css';
// import 'font-awesome/css/font-awesome.min.css';
// import './assets/css/animate.css';

function AdminLayout({children}) {
  return (
//   <div id="wrapper">
//     <Header/>

//     <div id="page-wrapper" className="gray-bg dashbard-1">
//     <Sidebar />
//           <main>{children}</main>
//         <Footer />
//     </div>
    
// </div>
<div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
            <main>{children}</main>
            <Footer />
            <div className="content-backdrop fade"></div>
            </div>
          </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  
  )
}

export default AdminLayout