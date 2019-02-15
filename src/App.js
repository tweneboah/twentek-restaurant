import React, { Component } from 'react';
import {Navbar, NavbarBrand}from 'reactstrap';

//COMPONENTS
import Menu from './components/MenuComponent';
import {DISHES} from './components/shared/dishes';




class App extends Component {
  state = {
    dishes: DISHES
  };
  render() {
    return (
      <div className="App">
         <Navbar dark color = "danger">
            <div className ="container">
             <NavbarBrand href = "/">
                 Bite your Tongue
             </NavbarBrand>
            </div>
         </Navbar>

         <Menu dishes ={this.state.dishes}/>
      </div>
    );
  }
}

export default App;