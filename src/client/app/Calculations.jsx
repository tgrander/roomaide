import React from 'react';

var Calculations  = ({total, amounts, names}) => {
  // var amounts = amounts;

  //*** STORAGE AND VARIABLES USED IN CALCULATION ***//
  var perRoommate = total/4;

  var overpaid = [],
      underpaid = [],
      even = [],
      resultsList = [];

  var paidAmounts = {},
      allocationPercentages = {},
      owedAmounts = {};

  // POPULATES OVERPAID AND UNDERPAID WITH ROOMIE IDS

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

// CALCULATES ALLOCATION PERCENTAGE

  var totalOverpaid = 0
  overpaid.forEach(x => {
    totalOverpaid += paidAmounts[x]
  })
  overpaid.forEach(x => {
    allocationPercentages[x] = (paidAmounts[x]/(1.0*totalOverpaid));
  })

  console.log("Calculation.jsx/ Allication percentage: ", allocationPercentages);

// APPLIES ALLOCATION PERCENTAGE

  underpaid.forEach(x => {
    (paidAmounts[x]*-1)
  })

  console.log('Paid Amounts: ', paidAmounts);
  console.log("Overpaid: ",overpaid);
  console.log("Underpaid: ",underpaid);
  console.log("Results List: ", resultsList);

  var results = underpaid.forEach((x) => {
    overpaid.forEach((y) => {
      var thisAmount = (paidAmounts[x]*-1)*(allocationPercentages[y]);
      console.log("Owed Amount: ", thisAmount);
      var result = <p className="result">{`${names[x]} owes ${names[y]} ${thisAmount}`}</p>
        resultsList.push(result);
    })
  });

  return (
    <div>
      {resultsList}
    </div>
  )
}

export default Calculations;
