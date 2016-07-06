import React from 'react';

var Header = () => {
  return (
    <div className="header">
      <div className="months">
        Month:
        <select>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>
      <div className="add-roomie">
        <a href="#">Add New Roomie</a>
      </div>
    </div>
  )
}

export default Header;
