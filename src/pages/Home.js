import React, { Component } from "react";
// import logo from './logo.svg';
import Header from "./components/header";
// import './App.css';

fetch("https://covidtracking.com/api/v1/us/daily.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://covidtracking.com/api/v1/states/current.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

class Home extends Component {
constructor(props) {
    super(props)
    this.state = {
        today: ''
    }
}
componentDidMount() {
    fetch("https://covidtracking.com/api/v1/us/daily.json")
    .then((response) => response.json())
    .then(response =>{
        this.setState({ today: response[0].date})
    })
    .then((data) => console.log(data));

}
  render() {
    return (
      <div className="App">
      <Header></Header>
      <p>
        This is an interactive Covid-19 tracker app with data for individual
        countries and states
      </p>
      <img src={require("./images/covid-image.jpeg")} alt="Covid Pic" />
    </div>
  );
}
}

export default Home;
