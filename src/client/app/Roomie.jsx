import React from 'react';

class Roomie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.roomie.id,
      value: ""
    }

  };

  _handleAmountInputChange(e){
    var amount = parseInt(e.target.value),
        id = this.state.id;
    if (!amount) {
      amount = 0
    }
    this.props.handleAmountInputChange(id, amount);
    this.setState({value: amount});
  };

  render(){
    return (
      <div className="roomie-container">
        <div>
          <p className="roomie-name">{this.props.roomie.name}</p>
        </div>
        <div className="utility-container">
          <p className="utility-name">{this.props.roomie.utility}:  </p>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Amount"
            value={this.state.value}
            onChange={this._handleAmountInputChange.bind(this)}
          />
        </div>
      </div>
    )
  }

}

export default Roomie;
