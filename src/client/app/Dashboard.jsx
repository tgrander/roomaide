import React from 'react';
import Roommates from './Roommates.jsx';
import Summary from './Summary.jsx'

var Dashboard = ({data, handleAmountInputChange, total}) => {
  return (
    <div className="dash">

      <Roommates
        data={data}
        handleAmountInputChange={handleAmountInputChange}
      />

      <Summary
        total={total}
      />

    </div>
  )
}

export default Dashboard;
