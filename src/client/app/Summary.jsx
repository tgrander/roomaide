import React from 'react';
import Calculations from './Calculations.jsx'

var Summary = ({total}) => {
  return (
    <div className="summary">
      <h3 className="summary-logo">SUMMARY</h3>

      <div className="summary-totals">
        <p> TOTAL: ${total || 0} </p>
        <p> Per Roommate: ${total/4 || 0} </p>
      </div>

    </div>
  )
}

export default Summary;