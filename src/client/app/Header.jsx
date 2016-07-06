import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initial: 0
    }
  }

  handleSubmitClick(){
    console.log(this.state.initial);
    // this.props.handleSubmitClick
    console.log('clicked');
  }

  render(){
    return (
      <div className="header">
        <a href="#" className="add-roomie">Add New Roomie</a>
        <button onClick={this.handleSubmitClick} className="submit">
            <span className="submit-button-text">Submit Expenses</span>
        </button>
      </div>
    )
  }
}

export default Header;
