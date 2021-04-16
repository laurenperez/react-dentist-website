import React, { Component } from 'react';

class Procedures extends Component {
  render(){
    return(
      <div className="App">
        <h1>Procedures</h1>
        <p>Here at this dentist office we do lots of things. We have so many proceedures to choose from.
        Not that anyone ever wants to have a dental proceedure, other than a cleaning of course. However, if needed
        we can do all these other additional things.</p>
        <ul>
          <li>Cleanings</li>
          <li>Root Canals</li>
          <li>Tooth Removal</li>
          <li>Teeth Whitening</li>
          <li>Fillings</li>
        </ul>
      </div>
    );
  }
}

export default Procedures;
