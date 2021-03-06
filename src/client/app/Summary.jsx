import React from 'react';
import Calculations from './Calculations.jsx'

var Summary = ({total, amounts, names}) => {
  return (
    <div className="summary">
      <h3 className="summary-logo">SUMMARY</h3>

      <div className="summary-totals">
        <p className="total"> TOTAL: ${total || 0} </p>
        <p className="per-roommate"> Per Roommate: ${total/4 || 0} </p>
      </div>

      <Calculations
        total={total}
        amounts={amounts}
        names={names}
      />

    </div>
  )
}

export default Summary;
