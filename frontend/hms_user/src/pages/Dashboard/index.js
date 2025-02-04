import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link,useLocation } from 'react-router-dom'

function Dashboard() {
  const activeMenu=(e)=>{
    document.querySelectorAll('.submenu').forEach(
        function(e){
            e.classNameList.remove('active');
        }
    )
    const childElement = e.target.parentElement.querySelector('.submenu');
    if(childElement && childElement.classNameList.contains('submenu')){
        childElement.classNameList.add('active');
    }
}

const location = useLocation();
const isLinkActive = (path)=>{
    return location.pathname == path ? 'active' : "";
}
  return (
    <AdminLayout>
       
       <div id="home" className="parallax first-section wow fadeIn" data-stellar-background-ratio="0.4"  style={{ backgroundImage: "url('/assets/images/slider-bg.png')" }}>
         <div className="container">
            <div className="row">
               <div className="col-md-12 col-sm-12">
                  <div className="text-contant">
                     <h2>
                        <span className="center"><span className="icon"><img src="/assets/images/icon-logo.png" alt="#" /></span></span>
                        <a href="" className="typewrite" data-period="2000" data-type='[ "Welcome to Life Care", "We Care Your Health", "We are Expert!" ]'>
                        <span className="wrap"></span>
                        </a>
                     </h2>
                  </div>
               </div>
            </div>
           
         </div>
         
      </div>
   
      <div id="time-table" className="time-table-section">
         <div className="container">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="row">
                  <div className="service-time one" style={{background: '#2895f1'}}>
                     <span className="info-icon"><i className="fa fa-ambulance" aria-hidden="true"></i></span>
                     <h3>Emergency Case</h3>
                     <p>Dignissimos ducimus qui blanditii sentium volta tum deleniti atque cori as quos dolores et quas mole.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="row">
                  <div className="service-time middle" style={{background: '#0071d1'}}>
                     <span className="info-icon"><i className="fa fa-clock-o" aria-hidden="true"></i></span> 
                     <h3>Working Hours</h3>
                     <div className="time-table-section">
                        <ul>
                           <li><span className="left">Monday - Friday</span><span className="right">8.00 – 18.00</span></li>
                           <li><span className="left">Saturday</span><span className="right">8.00 – 16.00</span></li>
                           <li><span className="left">Sunday</span><span className="right">8.00 – 13.00</span></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="row">
                  <div className="service-time three" style={{background:'#0060b1'}}>
                     <span className="info-icon"><i className="fa fa-hospital-o" aria-hidden="true"></i></span>
                     <h3>Clinic Timetable</h3>
                     <p>Dignissimos ducimus qui blanditii sentium volta tum deleniti atque cori as quos dolores et quas mole.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="about" className="section wow fadeIn">
         <div className="container">
            <div className="heading">
               <span className="icon-logo"><img src="/assets/images/icon-logo.png" alt="#"/></span>
               <h2>The Specialist Clinic</h2>
            </div>
            
            <div className="row">
               <div className="col-md-6">
                  <div className="message-box">
                     <h4>What We Do</h4>
                     <h2>Clinic Service</h2>
                     <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
                     <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  </p>
                     <a href="#services" data-scroll className="btn btn-light btn-radius btn-brd grd1 effect-1">Learn More</a>
                  </div>
                   
               </div>
               
               <div className="col-md-6">
                  <div className="post-media wow fadeIn">
                     <img src="/assets/images/about_03.jpg" alt="" className="img-responsive"/>
                     <a href="http://www.youtube.com/watch?v=nrJtHemSPW4" data-rel="prettyPhoto[gal]" className="playbutton"><i className="flaticon-play-button"></i></a>
                  </div>
                  
               </div>
               
            </div>
            
            <hr className="hr1"/>
            <div className="row">
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="service-widget">
                     <div className="post-media wow fadeIn">
                        <a href="images/clinic_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src="/assets/images/clinic_01.jpg" alt="" className="img-responsive"/>
                     </div>
                     <h3>Digital Control Center</h3>
                  </div>
                   
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="service-widget">
                     <div className="post-media wow fadeIn">
                        <a href="images/clinic_02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src="/assets/images/clinic_02.jpg" alt="" className="img-responsive"/>
                     </div>
                     <h3>Hygienic Operating Room</h3>
                  </div>
                  
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="service-widget">
                     <div className="post-media wow fadeIn">
                        <a href="images/clinic_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src="/assets/images/clinic_03.jpg" alt="" className="img-responsive"/>
                     </div>
                     <h3>Specialist Physicians</h3>
                  </div>
                  
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="service-widget">
                     <div className="post-media wow fadeIn">
                        <a href="images/clinic_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src="/assets/images/clinic_01.jpg" alt="" className="img-responsive"/>
                     </div>
                     <h3>Digital Control Center</h3>
                  </div>
                  
               </div>
            </div>
            
         </div>
         
      </div>
      <div id="service" className="services wow fadeIn">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <div className="inner-services">
                     <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="serv">
                           <span className="icon-service"><img src="/assets/images/service-icon1.png" alt="#" /></span>
                           <h4>PREMIUM FACILITIES</h4>
                           <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="serv">
                           <span className="icon-service"><img src="/assets/images/service-icon2.png" alt="#" /></span>
                           <h4>LARGE LABORATORY</h4>
                           <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="serv">
                           <span className="icon-service"><img src="/assets/images/service-icon3.png" alt="#" /></span>
                           <h4>DETAILED SPECIALIST</h4>
                           <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="serv">
                           <span className="icon-service"><img src="/assets/images/service-icon4.png" alt="#" /></span>
                           <h4>CHILDREN CARE CENTER</h4>
                           <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="serv">
                           <span className="icon-service"><img src="/assets/images/service-icon5.png" alt="#" /></span>
                           <h4>FINE INFRASTRUCTURE</h4>
                           <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="serv">
                           <span className="icon-service"><img src="/assets/images/service-icon6.png" alt="#" /></span>
                           <h4>ANYTIME BLOOD BANK</h4>
                           <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="appointment-form">
                     <h3><span>+</span> Book Appointment</h3>
                     <div className="form">
                        <form action="index.html">
                           <fieldset>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="row">
                                    <div className="form-group">
                                       <input type="text" id="name" placeholder="Your Name"  />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="row">
                                    <div className="form-group">
                                       <input type="email" placeholder="Email Address" id="email" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 select-section">
                                 <div className="row">
                                    <div className="form-group">
                                       <select className="form-control">
                                          <option>Day</option>
                                          <option>Sunday</option>
                                          <option>Monday</option>
                                       </select>
                                    </div>
                                    <div className="form-group">
                                       <select className="form-control">
                                          <option>Time</option>
                                          <option>AM</option>
                                          <option>PM</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="row">
                                    <div className="form-group">
                                       <select className="form-control">
                                          <option>Doctor Name</option>
                                          <option>Mr.XYZ</option>
                                          <option>Mr.ABC</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="row">
                                    <div className="form-group">
                                       <textarea rows="4" id="textarea_message" className="form-control" placeholder="Your Message..."></textarea>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="row">
                                    <div className="form-group">
                                       <div className="center"><button type="submit">Submit</button></div>
                                    </div>
                                 </div>
                              </div>
                           </fieldset>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
	  <div id="doctors" className="parallax section db" data-stellar-background-ratio="0.4" style={{background: '#fff'}} data-scroll-id="doctors" tabindex="-1">
        <div className="container">
		
		<div className="heading">
               <span className="icon-logo"><img src="/assets/images/icon-logo.png" alt="#"/></span>
               <h2>The Specialist Clinic</h2>
            </div>

            <div className="row dev-list text-center">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeIn' }}
                >
                    <div className="widget clearfix">
                        <img src="/assets/images/doctor_01.jpg" alt="" className="img-responsive img-rounded"/>
                        <div className="widget-title">
                            <h3>Soren Bo Bostian</h3>
                            <small>Clinic Owner</small>
                        </div>
                        
                        <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                        <div className="footer-social">
                            <a href="#" className="btn grd1"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-github"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeIn' }}
                >
                    <div className="widget clearfix">
                        <img src="/assets/images/doctor_02.jpg" alt="" className="img-responsive img-rounded"/>
                        <div className="widget-title">
                            <h3>Bryan Saftler</h3>
                            <small>Internal Diseases</small>
                        </div>
                        
                        <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                        <div className="footer-social">
                            <a href="#" className="btn grd1"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-github"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div> 
                </div> 

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
                    <div className="widget clearfix">
                        <img src="/assets/images/doctor_03.jpg" alt="" className="img-responsive img-rounded"/>
                        <div className="widget-title">
                            <h3>Matthew Bayliss</h3>
                            <small>Orthopedics Expert</small>
                        </div>
                        
                        <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                        <div className="footer-social">
                            <a href="#" className="btn grd1"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-github"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="btn grd1"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
	  
	  <div id="price" className="section pr wow fadeIn"  style={{ backgroundImage: "url('/assets/images/price-bg.png')" }}>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="tab-content">
                     <div className="tab-pane active fade in" id="tab1">
                        <div className="row text-center">
                           <div className="col-md-4">
                              <div className="pricing-table">
                                 <div className="pricing-table-header">
                                    <h2>Shared Hosting</h2>
                                    <h3>$85/month</h3>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-dark btn-radius btn-brd">Order Now</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="pricing-table pricing-table-highlighted">
                                 <div className="pricing-table-header grd1">
                                    <h2>WordPress Hosting</h2>
                                    <h3>$59/year</h3>
                                 </div>
                                 <div className="pricing-table-space"></div>
                                 <div className="pricing-table-text">
                                    <p>This is a perfect choice for small businesses and startups.</p>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>150</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>65GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>60</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>30</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-light btn-radius btn-brd grd1 effect-1">Order Now</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="pricing-table">
                                 <div className="pricing-table-header">
                                    <h2>Reseller Hosting</h2>
                                    <h3>$85/one-time</h3>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-dark btn-radius btn-brd">Order Now</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                     </div>
                     
                     <div className="tab-pane fade" id="tab2">
                        <div className="row text-center">
                           <div className="col-md-6">
                              <div className="pricing-table">
                                 <div className="pricing-table-header">
                                    <h2>Dedicated Server</h2>
                                    <h3>$85/month</h3>
                                 </div>
                                 <div className="pricing-table-space"></div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-dark btn-radius btn-brd">Order Now</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="pricing-table pricing-table-highlighted">
                                 <div className="pricing-table-header grd1">
                                    <h2>VPS Server</h2>
                                    <h3>$59/month</h3>
                                 </div>
                                 <div className="pricing-table-space"></div>
                                 <div className="pricing-table-text">
                                    <p>This is a perfect choice for small businesses and startups.</p>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>150</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>65GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>60</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>30</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-light btn-radius btn-brd grd1 effect-1">Order Now</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                         
                     </div>
                      
                  </div>
                  
               </div>
                
            </div>
         </div>
      </div>
	  
	  
	  
      <div id="testimonials" className="section wb wow fadeIn">
         <div className="container">
            <div className="heading">
               <span className="icon-logo"><img src="/assets/images/icon-logo.png" alt="#"/></span>
               <h2>Testimonials</h2>
            </div>
            
            <div className="row">
               <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="testimonial clearfix">
                     <div className="desc">
                        <h3><i className="fa fa-quote-left"></i> The amazing clinic! Wonderful Support!</h3>
                        <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                     </div>
                     <div className="testi-meta">
                        <img src="/assets/images/testi_01.png" alt="" className="img-responsive alignleft"/>
                        <h4>James Fernando <small>- Manager of Racer</small></h4>
                     </div>
                     
                  </div>
                  
               </div>
                
               <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div className="testimonial clearfix">
                     <div className="desc">
                        <h3><i className="fa fa-quote-left"></i> Thanks for Help us!</h3>
                        <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                     </div>
                     <div className="testi-meta">
                        <img src="/assets/images/testi_02.png" alt="" className="img-responsive alignleft"/>
                        <h4>Andrew Atkinson <small>- Life Manager</small></h4>
                     </div>
                      
                  </div>
                  
               </div>
               
            </div>
             
            <hr className="invis"/>
            <div className="row">
               <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div className="testimonial clearfix">
                     <div className="desc">
                        <h3><i className="fa fa-quote-left"></i> The amazing clinic! Wonderful Support!</h3>
                        <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                     </div>
                     <div className="testi-meta">
                        <img src="/assets/images/testi_03.png" alt="" className="img-responsive alignleft"/>
                        <h4>Amanda DOE <small>- Manager of Racer</small></h4>
                     </div>
                     
                  </div>
                  
               </div>
               
               <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                  <div className="testimonial clearfix">
                     <div className="desc">
                        <h3><i className="fa fa-quote-left"></i> Thanks for Help us!</h3>
                        <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                     </div>
                     <div className="testi-meta">
                        <img src="/assets/images/testi_01.png" alt="" className="img-responsive alignleft"/>
                        <h4>Martin Johnson <small>- Founder of Goosilo</small></h4>
                     </div>
                      
                  </div>
                   
               </div>
                
            </div>
            
         </div>
         
      </div>
     
      <div id="getintouch" className="section wb wow fadeIn" style={{paddingBottom: '0'}}>
         <div className="container">
            <div className="heading">
               <span className="icon-logo"><img src="/assets/images/icon-logo.png" alt="#"/></span>
               <h2>Get in Touch</h2>
            </div>
         </div>
         <div className="contact-section">
            <div className="form-contant">
               <form id="ajax-contact" action="assets/mailer.php" method="post">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="form-group in_name">
                           <input type="text" className="form-control" placeholder="Name" required="required"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group in_email">
                           <input type="email" className="form-control" placeholder="E-mail" required="required"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group in_email">
                           <input type="tel" className="form-control" id="phone" placeholder="Phone" required="required"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group in_email">
                           <input type="text" className="form-control" id="subject" placeholder="Subject" required="required"/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group in_message"> 
                           <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required"/><textarea/>
                        </div>
                        <div className="actions">
                           <input type="submit" value="Send Message" name="submit" id="submitButton" className="btn small" title="Submit Your Message!"/>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
            <div id="googleMap" style={{width: '100%', height: '450px'}}></div>
         </div>
      </div>
      
      
    </AdminLayout>
  );
}

export default Dashboard
