import React from 'react';
import Roommates from './Roommates.jsx';
import Summary from './Summary.jsx'

var Dashboard = ({data, handleAmountInputChange, total, numberOfRoomies, amounts, names}) => {
  return (
    <div className="dash">

      <Roommates
        data={data}
        handleAmountInputChange={handleAmountInputChange}
        numberOfRoomies={numberOfRoomies}
      />

      <Summary
        total={total}
        amounts={amounts}
        names={names}
      />

    </div>
  )
}

export default Dashboard;
