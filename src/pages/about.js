import React from 'react'
import Header from '../element/header'
import Footer from '../element/footer'
import {ContactActionArea,Agents} from '../layout/BlockComponent'
import { Helmet } from "react-helmet";

class About extends React.Component {
  constructor( props ){
    super(props);
    this.state={
      title:"About App"
    }
  }
  render() {
    return (
      <React.Fragment>
      <Header></Header>
      <Helmet>
        <title>{this.state.title}</title>
      </Helmet>
    <div className="bradcam_area bradcam_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="bradcam_text text-center">
              <h3>About Us</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about_mission">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6">
            <div className="about_thumb">
              <img src="/assets/img/about/about.png" alt=""/>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="about_text">
              <h4>Our Mission</h4>
              <p>While there are countless Trips out there in charity shops and car boot sales, you can also buy refurbished examples, with today replacement leatherette available in all colors. I love my Trip and use it regularly something so refreshing about its simplicity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="faq_ask">
              <h3>Frequently ask</h3>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Adieus who direct esteem <span>It esteems luckily?</span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Who direct esteem It esteems?
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Duis consectetur feugiat auctor?
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="accordion_thumb">
              <img src="/assets/img/banner/accordion.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                    <img src="/assets/img/svg_icon/quote.svg" alt=""/>
                  </div>
                  <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                    Fusce ac mattis nulla. Morbi eget ornare dui. 
                  </p>
                  <div className="testmonial_author">
                    <div className="thumb">
                      <img src="/assets/img/case/testmonial.png" alt=""/>
                    </div>
                    <h3>Robert Thomson</h3>
                    <span>Business Owner</span>
                  </div>
                </div>
              </div>
              <div className="single_carousel">
                <div className="single_testmonial text-center">
                  <div className="quote">
                    <img src="/assets/img/svg_icon/quote.svg" alt=""/>
                  </div>
                  <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                    Fusce ac mattis nulla. Morbi eget ornare dui. 
                  </p>
                  <div className="testmonial_author">
                    <div className="thumb">
                      <img src="/assets/img/case/testmonial.png" alt=""/>
                    </div>
                    <h3>Robert Thomson</h3>
                    <span>Business Owner</span>
                  </div>
                </div>
              </div>
              <div className="single_carousel">
                <div className="single_testmonial text-center">
                  <div className="quote">
                    <img src="/assets/img/svg_icon/quote.svg" alt=""/>
                  </div>
                  <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                    Fusce ac mattis nulla. Morbi eget ornare dui. 
                  </p>
                  <div className="testmonial_author">
                    <div className="thumb">
                      <img src="/assets/img/case/testmonial.png" alt=""/>
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
export default About
