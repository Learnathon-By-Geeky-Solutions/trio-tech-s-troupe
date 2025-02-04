import React from 'react';
import Header from './include/header';
import Footer from './include/footer';
import SecondFooter from './include/secondfooter';
 
 

function AdminLayout({children}) {
  return (
    <div id="app">    
    <Header />    
    <div id="main" >
    <main>{children}</main>
    </div>
    <Footer /> 
       <SecondFooter/>       
    </div>
  )
}

export default AdminLayout