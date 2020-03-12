import React from 'react';
import Header from '../element/header'
import Footer from '../element/footer'
import {Frequently,Agents,ContactActionArea} from '../layout/BlockComponent'
class Home extends React.Component {
   render() {
      return (
         <React.Fragment>
            <Header></Header>
               <div className="slider_area">
               <div className="single_slider  d-flex align-items-center slider_bg_1">
                  <div className="container">
                     <div className="row align-items-center">
                     <div className="col-xl-10 offset-xl-1">
                        <div className="slider_text text-center justify-content-center">
                           <h3>Find your best Property</h3>
                           <p>Esteem spirit temper too say adieus who direct esteem.</p>
                        </div>
                        <div className="property_form">
                           <form action="#">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="form_wrap d-flex">
                                 <div className="single-field max_width ">
                                    <label for="#">Location</label>
                                    <select className="wide" >
                                       <option data-display="NewYork">NewYork</option>
                                       <option value="1">Bangladesh</option>
                                       <option value="2">India</option>
                                    </select>
                                 </div>
                                 <div className="single-field max_width ">
                                    <label for="#">Property type</label>
                                    <select className="wide" >
                                       <option data-display="Apartment">Apartment</option>
                                       <option value="1">Apartment</option>
                                       <option value="2">Apartment</option>
                                    </select>
                                 </div>
                                 <div className="single_field range_slider">
                                    <label for="#">Price ($)</label>
                                    <div id="slider"></div>
                                 </div>
                                 <div className="single-field min_width ">
                                    <label for="#">Bed Room</label>
                                    <select className="wide" >
                                       <option data-display="01">01</option>
                                       <option value="1">02</option>
                                       <option value="2">03</option>
                                    </select>
                                 </div>
                                 <div className="single-field min_width ">
                                    <label for="#">Bath Room</label>
                                    <select className="wide" >
                                       <option data-display="01">01</option>
                                       <option value="1">02</option>
                                       <option value="2">03</option>
                                    </select>
                                 </div>
                                 <div className="serach_icon">
                                    <a href="#">
                                    <i className="ti-search"></i>
                                    </a>
                                 </div>
                                 </div>
                              </div>
                           </div>
                           </form>
                        </div>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
               <div className="popular_property">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                     <div className="section_title mb-40 text-center">
                        <h3>Popular Properties</h3>
                     </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-4 col-md-6 col-lg-4">
                     <div className="single_property">
                        <div className="property_thumb">
                           <div className="property_tag">
                           For Sale
                           </div>
                           <img src="img/property/1.png" alt="" />
                        </div>
                        <div className="property_content">
                           <div className="main_pro">
                           <h3><a href="#">Comfortable Apartment in Palace</a></h3>
                           <div className="mark_pro">
                              <img src="img/svg_icon/location.svg" alt="" />
                              <span>Popular Properties</span>
                           </div>
                           <span className="amount">From $20k</span>
                           </div>
                        </div>
                        <div className="footer_pro">
                           <ul>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/square.svg" alt="" />
                                 <span>1200 Sqft</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bed.svg" alt="" />
                                 <span>2 Bed</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bath.svg" alt="" />
                                 <span>2 Bath</span>
                              </div>
                           </li>
                           </ul>
                        </div>
                     </div>
                     </div>
                     <div className="col-xl-4 col-md-6 col-lg-4">
                     <div className="single_property">
                        <div className="property_thumb">
                           <div className="property_tag red">
                           For Rent
                           </div>
                           <img src="img/property/2.png" alt="" />
                        </div>
                        <div className="property_content">
                           <div className="main_pro">
                           <h3><a href="#">Comfortable Apartment in Palace</a></h3>
                           <div className="mark_pro">
                              <img src="img/svg_icon/location.svg" alt="" />
                              <span>Popular Properties</span>
                           </div>
                           <span className="amount">$563/month</span>
                           </div>
                        </div>
                        <div className="footer_pro">
                           <ul>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/square.svg" alt="" />
                                 <span>1200 Sqft</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bed.svg" alt="" />
                                 <span>2 Bed</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bath.svg" alt="" />
                                 <span>2 Bath</span>
                              </div>
                           </li>
                           </ul>
                        </div>
                     </div>
                     </div>
                     <div className="col-xl-4 col-md-6 col-lg-4">
                     <div className="single_property">
                        <div className="property_thumb">
                           <div className="property_tag">
                           For Sale
                           </div>
                           <img src="img/property/3.png" alt="" />
                        </div>
                        <div className="property_content">
                           <div className="main_pro">
                           <h3><a href="#">Comfortable Apartment in Palace</a></h3>
                           <div className="mark_pro">
                              <img src="img/svg_icon/location.svg" alt="" />
                              <span>Popular Properties</span>
                           </div>
                           <span className="amount">From $20k</span>
                           </div>
                        </div>
                        <div className="footer_pro">
                           <ul>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/square.svg" alt="" />
                                 <span>1200 Sqft</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bed.svg" alt="" />
                                 <span>2 Bed</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bath.svg" alt="" />
                                 <span>2 Bath</span>
                              </div>
                           </li>
                           </ul>
                        </div>
                     </div>
                     </div>
                     <div className="col-xl-4 col-md-6 col-lg-4">
                     <div className="single_property">
                        <div className="property_thumb">
                           <div className="property_tag red">
                           For Rent
                           </div>
                           <img src="img/property/4.png" alt="" />
                        </div>
                        <div className="property_content">
                           <div className="main_pro">
                           <h3><a href="#">Comfortable Apartment in Palace</a></h3>
                           <div className="mark_pro">
                              <img src="img/svg_icon/location.svg" alt="" />
                              <span>Popular Properties</span>
                           </div>
                           <span className="amount">$563/month</span>
                           </div>
                        </div>
                        <div className="footer_pro">
                           <ul>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/square.svg" alt="" />
                                 <span>1200 Sqft</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bed.svg" alt="" />
                                 <span>2 Bed</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bath.svg" alt="" />
                                 <span>2 Bath</span>
                              </div>
                           </li>
                           </ul>
                        </div>
                     </div>
                     </div>
                     <div className="col-xl-4 col-md-6 col-lg-4">
                     <div className="single_property">
                        <div className="property_thumb">
                           <div className="property_tag">
                           For Sale
                           </div>
                           <img src="img/property/5.png" alt="" />
                        </div>
                        <div className="property_content">
                           <div className="main_pro">
                           <h3><a href="#">Comfortable Apartment in Palace</a></h3>
                           <div className="mark_pro">
                              <img src="img/svg_icon/location.svg" alt="" />
                              <span>Popular Properties</span>
                           </div>
                           <span className="amount">From $20k</span>
                           </div>
                        </div>
                        <div className="footer_pro">
                           <ul>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/square.svg" alt="" />
                                 <span>1200 Sqft</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bed.svg" alt="" />
                                 <span>2 Bed</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bath.svg" alt="" />
                                 <span>2 Bath</span>
                              </div>
                           </li>
                           </ul>
                        </div>
                     </div>
                     </div>
                     <div className="col-xl-4 col-md-6 col-lg-4">
                     <div className="single_property">
                        <div className="property_thumb">
                           <div className="property_tag">
                           For Sale
                           </div>
                           <img src="img/property/6.png" alt="" />
                        </div>
                        <div className="property_content">
                           <div className="main_pro">
                           <h3><a href="#">Comfortable Apartment in Palace</a></h3>
                           <div className="mark_pro">
                              <img src="img/svg_icon/location.svg" alt="" />
                              <span>Popular Properties</span>
                           </div>
                           <span className="amount">From $20k</span>
                           </div>
                        </div>
                        <div className="footer_pro">
                           <ul>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/square.svg" alt="" />
                                 <span>1200 Sqft</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bed.svg" alt="" />
                                 <span>2 Bed</span>
                              </div>
                           </li>
                           <li>
                              <div className="single_info_doc">
                                 <img src="img/svg_icon/bath.svg" alt="" />
                                 <span>2 Bath</span>
                              </div>
                           </li>
                           </ul>
                        </div>
                     </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-12">
                     <div className="more_property_btn text-center">
                        <a href="#" className="boxed-btn3-line">More Properties</a>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
               <div className="home_details">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                     <div className="home_details_active owl-carousel">
                        <div className="single_details">
                           <div className="row">
                           <div className="col-xl-6 col-md-6">
                              <div className="modern_home_info">
                                 <div className="modern_home_info_inner">
                                 <span className="for_sale">
                                 For Sale
                                 </span>
                                 <div className="info_header">
                                    <h3>Blue haven modern home</h3>
                                    <div className="popular_pro d-flex">
                                       <img src="img/svg_icon/location.svg" alt="" />
                                       <span>Popular Properties</span>
                                    </div>
                                 </div>
                                 <div className="info_content">
                                    <ul>
                                       <li> <img src="img/svg_icon/square.svg" alt="" /> <span>1200 Sqft</span>  </li>
                                       <li> <img src="img/svg_icon/bed.svg" alt="" /> <span>2 Bed</span> </li>
                                       <li> <img src="img/svg_icon/bath.svg" alt="" /> <span>2 Bath</span> </li>
                                    </ul>
                                    <p>Esteem spirit temper too say adieus who direct esteem. It estee luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
                                    <div className="prise_view_details d-flex justify-content-between align-items-center">
                                       <span>$4567</span>
                                       <a className="boxed-btn3-line" href="#">View Details</a>
                                    </div>
                                 </div>
                                 </div>
                              </div>
                           </div>
                           </div>
                        </div>
                        <div className="single_details">
                           <div className="row">
                           <div className="col-xl-6 col-md-6">
                              <div className="modern_home_info">
                                 <div className="modern_home_info_inner">
                                 <span className="for_sale">
                                 For Sale
                                 </span>
                                 <div className="info_header">
                                    <h3>Blue haven modern home</h3>
                                    <div className="popular_pro d-flex">
                                       <img src="img/svg_icon/location.svg" alt="" />
                                       <span>Popular Properties</span>
                                    </div>
                                 </div>
                                 <div className="info_content">
                                    <ul>
                                       <li> <img src="img/svg_icon/square.svg" alt="" /> <span>1200 Sqft</span>  </li>
                                       <li> <img src="img/svg_icon/bed.svg" alt="" /> <span>2 Bed</span> </li>
                                       <li> <img src="img/svg_icon/bath.svg" alt="" /> <span>2 Bath</span> </li>
                                    </ul>
                                    <p>Esteem spirit temper too say adieus who direct esteem. It estee luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
                                    <div className="prise_view_details d-flex justify-content-between align-items-center">
                                       <span>$4567</span>
                                       <a className="boxed-btn3-line" href="#">View Details</a>
                                    </div>
                                 </div>
                                 </div>
                              </div>
                           </div>
                           </div>
                        </div>
                        <div className="single_details">
                           <div className="row">
                           <div className="col-xl-6 col-md-6">
                              <div className="modern_home_info">
                                 <div className="modern_home_info_inner">
                                 <span className="for_sale">
                                 For Sale
                                 </span>
                                 <div className="info_header">
                                    <h3>Blue haven modern home</h3>
                                    <div className="popular_pro d-flex">
                                       <img src="img/svg_icon/location.svg" alt="" />
                                       <span>Popular Properties</span>
                                    </div>
                                 </div>
                                 <div className="info_content">
                                    <ul>
                                       <li> <img src="img/svg_icon/square.svg" alt="" /> <span>1200 Sqft</span>  </li>
                                       <li> <img src="img/svg_icon/bed.svg" alt="" /> <span>2 Bed</span> </li>
                                       <li> <img src="img/svg_icon/bath.svg" alt="" /> <span>2 Bath</span> </li>
                                    </ul>
                                    <p>Esteem spirit temper too say adieus who direct esteem. It estee luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
                                    <div className="prise_view_details d-flex justify-content-between align-items-center">
                                       <span>$4567</span>
                                       <a className="boxed-btn3-line" href="#">View Details</a>
                                    </div>
                                 </div>
                                 </div>
                              </div>
                           </div>
                           </div>
                        </div>
                        <div className="single_details">
                           <div className="row">
                           <div className="col-xl-6 col-md-6">
                              <div className="modern_home_info">
                                 <div className="modern_home_info_inner">
                                 <span className="for_sale">
                                 For Sale
                                 </span>
                                 <div className="info_header">
                                    <h3>Blue haven modern home</h3>
                                    <div className="popular_pro d-flex">
                                       <img src="img/svg_icon/location.svg" alt="" />
                                       <span>Popular Properties</span>
                                    </div>
                                 </div>
                                 <div className="info_content">
                                    <ul>
                                       <li> <img src="img/svg_icon/square.svg" alt="" /> <span>1200 Sqft</span>  </li>
                                       <li> <img src="img/svg_icon/bed.svg" alt="" /> <span>2 Bed</span> </li>
                                       <li> <img src="img/svg_icon/bath.svg" alt="" /> <span>2 Bath</span> </li>
                                    </ul>
                                    <p>Esteem spirit temper too say adieus who direct esteem. It estee luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
                                    <div className="prise_view_details d-flex justify-content-between align-items-center">
                                       <span>$4567</span>
                                       <a className="boxed-btn3-line" href="#">View Details</a>
                                    </div>
                                 </div>
                                 </div>
                              </div>
                           </div>
                           </div>
                        </div>
                        <div className="single_details">
                           <div className="row">
                           <div className="col-xl-6">
                              <div className="modern_home_info">
                                 <div className="modern_home_info_inner">
                                 <span className="for_sale">
                                 For Sale
                                 </span>
                                 <div className="info_header">
                                    <h3>Blue haven modern home</h3>
                                    <div className="popular_pro d-flex">
                                       <img src="img/svg_icon/location.svg" alt="" />
                                       <span>Popular Properties</span>
                                    </div>
                                 </div>
                                 <div className="info_content">
                                    <ul>
                                       <li> <img src="img/svg_icon/square.svg" alt="" /> <span>1200 Sqft</span>  </li>
                                       <li> <img src="img/svg_icon/bed.svg" alt="" /> <span>2 Bed</span> </li>
                                       <li> <img src="img/svg_icon/bath.svg" alt="" /> <span>2 Bath</span> </li>
                                    </ul>
                                    <p>Esteem spirit temper too say adieus who direct esteem. It estee luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
                                    <div className="prise_view_details d-flex justify-content-between align-items-center">
                                       <span>$4567</span>
                                       <a className="boxed-btn3-line" href="#">View Details</a>
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
               </div>
               </div>
               <Frequently></Frequently>
               <div className="counter_area">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-4 col-md-4">
                     <div className="single_counter">
                        <h3> <span  className="counter" >200</span> <span>+</span> </h3>
                        <p>Properties for sale</p>
                     </div>
                     </div>
                     <div className="col-xl-4 col-md-4">
                     <div className="single_counter">
                        <h3> <span className="counter" >300</span></h3>
                        <p>Properties for sale</p>
                     </div>
                     </div>
                     <div className="col-xl-4 col-md-4">
                     <div className="single_counter">
                        <h3> <span className="counter" >15</span></h3>
                        <p>Properties for sale</p>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
               <div className="testimonial_area overlay ">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                     <div className="testmonial_active owl-carousel">
                        <div className="single_carousel">
                           <div className="single_testmonial text-center">
                           <div className="quote">
                              <img src="img/svg_icon/quote.svg" alt="" />
                           </div>
                           <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                              sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                              Fusce ac mattis nulla. Morbi eget ornare dui. 
                           </p>
                           <div className="testmonial_author">
                              <div className="thumb">
                                 <img src="img/case/testmonial.png" alt="" />
                              </div>
                              <h3>Robert Thomson</h3>
                              <span>Business Owner</span>
                           </div>
                           </div>
                        </div>
                        <div className="single_carousel">
                           <div className="single_testmonial text-center">
                           <div className="quote">
                              <img src="img/svg_icon/quote.svg" alt="" />
                           </div>
                           <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                              sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                              Fusce ac mattis nulla. Morbi eget ornare dui. 
                           </p>
                           <div className="testmonial_author">
                              <div className="thumb">
                                 <img src="img/case/testmonial.png" alt="" />
                              </div>
                              <h3>Robert Thomson</h3>
                              <span>Business Owner</span>
                           </div>
                           </div>
                        </div>
                        <div className="single_carousel">
                           <div className="single_testmonial text-center">
                           <div className="quote">
                              <img src="img/svg_icon/quote.svg" alt="" />
                           </div>
                           <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                              sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                              Fusce ac mattis nulla. Morbi eget ornare dui. 
                           </p>
                           <div className="testmonial_author">
                              <div className="thumb">
                                 <img src="img/case/testmonial.png" alt="" />
                              </div>
                              <h3>Robert Thomson</h3>
                              <span>Business Owner</span>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            <Agents></Agents>
            <ContactActionArea />
            <Footer></Footer>
         </React.Fragment>
      )
   }
}
export default Home;
