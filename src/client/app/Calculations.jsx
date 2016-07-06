import React from 'react';
import Overpaid from './Overpaid.jsx'
import Underpaid from './Underpaid.jsx'

var Calculations  = ({total, amounts, names}) => {
  // var amounts = amounts;
  var perRoommate = total/4;
  var overpaid = [],
      underpaid = [],
      even=[],
      paidAmounts = {},
      allocationPercentages={},
      owedAmounts = {};

  for (var id in amounts) {
    var paid = amounts[id]-perRoommate;

    if (paid > 0) {
      overpaid.push(id);
    } else if (paid < 0) {
      underpaid.push(id);
    } else if (paid === 0) {
      even.push(id);
    }

    paidAmounts[id] = paid;
  }

  var totalOverpaid = 0
  overpaid.forEach(x => {
    totalOverpaid += paidAmounts[x]
  })
  overpaid.forEach(x => {
    allocationPercentages[x] = (paidAmounts[x]/(1.0*totalOverpaid));
  })
  underpaid.forEach(x => {
    (paidAmounts[x]*-1)
  })



  console.log(paidAmounts);
  console.log("Overapid: ",overpaid);
  console.log("Underpaid: ",underpaid);

  var overpaidRender = overpaid.map((id) => {
    <Overpaid
      id={id}
      paidAmounts={paidAmounts}
    />
  });
  var underpaidRender = underpaid.map((id) => {
    <Underpaid
      id={id}
      paidAmounts={paidAmounts}
    />
  });

  return (
    <div>
      <div>
        {overpaidRender}
      </div>
      <div>
        {underpaidRender}
      </div>
    </div>
  )

  //for each roommate perform the following
    //calculate if overpaid or underpaid
      //underpaid -> push roomie id to underapid array
      //overapid -> push roomie id to overpaid array

  //for each roommate in underpaid and overpaid array
    //underpaid -> <p>{roomie.name} underpaid by {underpayment}</p>
      //for each roomie that overapid
        //owes {overpaid.name} {allocation calculation}
    //overpaid -> <p>{roomie.name} overapaid by {overpayment}</p>
      //for each roomie that underpaid
        // owed {allocation percentage} from {roomie.name}

  return (
    <div>

    </div>
  )
}

export default Calculations;
