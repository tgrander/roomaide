import React from 'react';

class Roomie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.roomie.id,
      value: ''
    }
  };

  _handleAmountInputChange(e){
    this.props.handleAmountInputChange(e);
    this.setState({
      value: e
    });
  }

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
            onChange={(e) => {
              this._handleAmountInputChange(e.target.value);
              console.log(this.state.id);
            }}
          />
        </div>

      </div>
    )
  }

}

export default Roomie;
