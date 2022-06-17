// Cash Register

function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };
  let money = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let change = cash - price;
  cid.forEach((e) => e.push(money[e[0]]));
  cid = cid.sort((a, b) => b[2] - a[2]);

  let fund = cid.reduce((acc, cur) => acc + cur[1], 0);

  if (change === fund) {
    result.status = "CLOSED";
    // return result;
  }

  console.log(cid, change);
  let arr = [];
  while (change > 0) {
    if (change > fund) {
      result.status = "INSUFFICIENT_FUNDS";
      return result;
    }
    for (let i = 0; i < cid.length; i++) {
      if (change >= cid[i][2] && cid[i][1] !== 0) {
        //   console.log(cid);
        //   console.log(
        //     "change: ",
        //     change,
        //     "value: ",
        //     cid[i][2],
        //     "cash: ",
        //     cid[i][1]
        //   );
        //   console.log(i, cid[i][1]);
        cid[i][1] -= cid[i][2];
        change -= cid[i][2];
        arr.push([cid[i][0], cid[i][2]]);
        console.log(change);
        break;
      }
    }
  }

  if (result.status === "") {
    result.status = "OPEN";
  }

  result.change = arr;
  return result;
}

console.log(
  checkCashRegister(1, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
