var exampleRoomieData = [
  {
    id: 1,
    name: "Trey",
    utility: "Internet",
    amount: undefined,
    avatar: undefined
  },
  {
    id: 2,
    name: "Hannah",
    utility: "No Utility",
    amount: undefined,
    avatar: undefined
  },
  {
    id: 3,
    name: "Sarah",
    utility: "Gas",
    amount: undefined,
    avatar: undefined
  },
  {
    id: 4,
    name: "Mia",
    utility: "Electricity",
    amount: undefined,
    avatar: undefined
  }
];

//*********************************************************************//

import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';
// import exampleRoomieData from '../data/exampleRoomieData.js'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: exampleRoomieData, //an array of objects
      utilityAmounts: {
        //dynamically populate utilityAmounts properties as roommates are added
        //store an ID property for ea roomie whose value is updated onChange of input
        1: 0,
        2: 0,
        3: 0,
        4: 0
      },
      total: 0
    };
  }

  // _dynamicTotal(){
  //   var numberOfRoomies = new Array(this.state.data.length);
  //   numberOfRoomies.forEach((roomie, i) => {
  //     this.setState({
  //       utilityAmounts[i+1] = 0;
  //     })
  //   })
  // };
  _handleNewRoomieClick(){
    //pop up modal with input fields for name, utility, amount
    //capture user input and send it in body of POST request
      //on success, call _fetchRoomieData()
  };
  _fetchRoomieData(){
    //make GET request to server for roomie data
      //on success, concat roomie data into this.state.data
  };
  _calculateTotal(obj){
    // var amounts = this.state.utilityAmounts,
    var total = 0
    for (var key in obj){
      total += obj[key];
    }
    this.setState({total: total})
  }
  _handleAmountInputChange(id, value){
    var newObj = $.extend({}, true, this.state.utilityAmounts);
    console.log("App/ ID: ", newObj[id]);
    console.log("App/ newObj: ", newObj);
    newObj[id] = value;

    this.setState({utilityAmounts: newObj})
    this._calculateTotal(newObj);

    //update this.state.utilityAmounts to reflect the changing input values for ea roomie
    //dynamically update TOTAL and Per Roommate optimistically

    //send POST request to server adding utility amount to specific roomie
    //(use roomie id to specify which roomie)
      //on success, make GET request that updates the calculations in summary
  };
  _handleSubmitClick(){

    return;
  }

  render () {
    // return <p> Hello World </p>
    return (
      <div className="mainApp">
        <Header
          handleSubmitClick = {this._handleSubmitClick.bind(this)}
        />
        <Dashboard
          data={this.state.data}
          handleAmountInputChange={this._handleAmountInputChange.bind(this)}
          total={this.state.total}
        />
      </div>
    );
  }

}

render(
  <App/>,
  document.getElementById('app')
);
