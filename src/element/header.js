import React from 'react'
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
class Header extends React.Component {
  render() {
    return(
 <header>
        <div className="header-area ">
            <div className="header-top_area d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-5 ">
                            <div className="header_left">
                                <p>Welcome to Conbusi consulting service</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-7">
                            <div className="header_right d-flex">
                                    <div className="short_contact_list">
                                            <ul>
                                                <li><a href="#"> <i className="fa fa-envelope"></i> info@docmed.com</a></li>
                                                <li><a href="#"> <i className="fa fa-phone"></i> 1601-609 6780</a></li>
                                            </ul>
                                        </div>
                                        <div className="social_media_links">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="img/logo.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <NavLink to="/" exact activeStyle={{ color: "yellow" }}>
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/about" exact activeStyle={{ color: "yellow" }}>
                                                    About
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/element" exact activeStyle={{ color: "yellow" }}>
                                                    Element
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/user" exact activeStyle={{ color: "yellow" }}>
                                                    User
                                                </NavLink>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="search_btn">
                                        <a href="#">
                                            <i className="ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="book_btn d-none d-lg-block">
                                        <a  href="#">Add Property</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</header>
    )
 }
}
export default Header