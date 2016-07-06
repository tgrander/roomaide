import React from 'react';
import Roomie from './Roomie.jsx'

var Roommates = ({data, handleAmountInputChange, numberOfRoomies}) => {
  //accesses data of roommates from App's state, which polls data of
  //roommates every time 'Add New Roomie' is submitted from Header

  var roomiesList = data.map((roomie) =>
    <Roomie
      key={roomie.id}
      roomie={roomie}
      handleAmountInputChange={handleAmountInputChange}
    / >
  )

  // numberOfRoomies(roomiesList.length);
  return (
    <div className="roomie-list">
      <h3 className="roommates-logo">ROOMMATES</h3>
      {roomiesList}
    </div>
  )
}

export default Roommates;
