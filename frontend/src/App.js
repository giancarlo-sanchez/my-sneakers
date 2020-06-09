import React from 'react';
import {Component} from 'react'
import Products from './components/Products'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { sneakers: []}
  }

  async componentDidMount(){
    try{
      const sneaker = await fetch("http://localhost:8000/sneakers/");
      // .then(res => res.json())
      // .then(data => this.setState({
      //   sneakers: data,
      if(!sneaker.ok){
        throw sneaker;
      }
      console.log("THis is the response",sneaker)

      const sneakerData = await sneaker.json();
      this.setState({sneakers: sneakerData.sneakers})
    }catch(err){
      console.error(err);
    }
  }


  render(){
    return (
      <div className="container">
        <h1>E-commerce shopping web</h1>
        <hr />
        <div className="row">

            <Products sneakers={this.state.sneakers} />


        </div>
      </div>
    );

  }

}

export default App;
