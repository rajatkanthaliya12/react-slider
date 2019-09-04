import React, { Component } from 'react';
import SideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = (value) => {
    this.setState((prevState) => {
      return {sideDrawerOpen: value};
    });
  };

  render() {
    return (
      <div className="theme-right">
        <div className="content"/>
         <SideDrawer drawerToggleClickHandler={this.drawerToggleClickHandler} show={this.state.sideDrawerOpen} />
      </div>
    );
  }
}

export default App;