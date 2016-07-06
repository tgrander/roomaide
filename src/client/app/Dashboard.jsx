import React from 'react';
import Roommates from './Roommates.jsx';
import Summary from './Summary.jsx'

var Dashboard = ({data, handleAmountInputChange}) => {
  return (
    <div className="dash">

      <Roommates
        data={data}
        handleAmountInputChange={handleAmountInputChange}
      />

      <Summary />

    </div>
  )
}

export default Dashboard;
