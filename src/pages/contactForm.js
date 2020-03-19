import React, { Component } from 'react';
import Select from 'react-select';

const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 },
  { label: "India", value: 50 }
];


class contactForm extends React.Component {
  constructor() {
    super();
    this.displayData = [];
    this.state = {fName: '',lName: '', selectedOption: '',gender: "male",showdata : this.displayData};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.emailInput = React.createRef();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleChangeSelect = selectedOption => {
    this.setState({ selectedOption });
  };

  handleRadioChange(event) {
  this.setState({
    gender: event.target.value
  });
}

  handleSubmit(event) {
    
    event.preventDefault();
    
    //console.log(this.emailInput.current.value);
    const data = new FormData(event.target);
    // console.log(Array.from(data.entries()));
    //console.log((new URLSearchParams(Array.from(data.entries()))).toString());
    
    let emailData = Object.fromEntries(data.entries());
    console.log(emailData.email);
    // console.log(this.state.fName);
    // console.log(this.state.lName);
    // console.log(this.state.selectedOption.label);
    // console.log(this.state.gender);

    this.displayData.push(<div  id="display-data"><p><b>First Name:</b> {this.state.fName}</p><br/><hr/><p><b>Last Name:</b> {this.state.lName}</p><br/><hr/>
    <p><b>Email:</b> {emailData.email}</p><br/><hr/><p><b>Country:</b> {this.state.selectedOption.label}</p><br/><hr/><p><b>Gender:</b> {this.state.gender}</p><hr/></div>);
    this.setState({
      showdata : this.displayData,
   });
   event.target.reset();
  }
  render() {
    const { selectedOption } = this.state.selectedOption;
    return (
      <React.Fragment>
      <h1>Contact Form</h1>
      <div id="display-data-Container">
             {this.displayData}
      </div>
      <form onSubmit={this.handleSubmit}>
        <p>
        <label>
         First Name: </label>
          <input type="text" name ="fName" value={this.state.value} onChange={this.handleChange} /> 
        </p>
        <p>
        <label>
          Last Name: </label>
          <input type="text" name ="lName" value={this.state.value} onChange={this.handleChange} /> 
        </p>
        <p>
        <label>
          Email: </label>
          <input type="text" name ="email" ref={this.emailInput} />  
        </p>
        <p>
        <label>Gender:  </label>
          <input type="radio" name ="gender" value="male" onChange={this.handleRadioChange} checked={this.state.gender === "male"} /><span style={{ marginLeft: "5px" }}>Male</span> 
          <input type="radio" name ="gender" value="female" onChange={this.handleRadioChange} checked={this.state.gender === "female"} /><span style={{ marginLeft: "5px" }}>Female</span>       
        </p>
        <p><label>Select Country: </label> </p>
        <Select options={Countries} value={selectedOption} onChange={this.handleChangeSelect} />     
        <br />
        <p><input type="submit" value="Submit"/></p>
      </form>
      </React.Fragment>
    );
  }
}
export default contactForm