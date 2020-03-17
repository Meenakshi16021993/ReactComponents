import React from 'react'
import Header from '../element/header'
import Footer from '../element/footer'
class Users extends React.Component {
  constructor( abc ){
    super();

    // window.abc = abc;
    this.xyz = abc;
    this.newvar = {...this.xyz}
    this.newvar.username = "Dimpy";
    this.newvar.lastname = "Khandelwal";
  }
  render() {
    return(
    <React.Fragment>
      <Header></Header>
      <div className="bradcam_area bradcam_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="bradcam_text text-center">
              <h3>User</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <h1>Good Morning! {this.newvar.username} {this.newvar.lastname}</h1>
    </div>
      <Footer></Footer>
    </React.Fragment>
    )
  }
}
export default Users
