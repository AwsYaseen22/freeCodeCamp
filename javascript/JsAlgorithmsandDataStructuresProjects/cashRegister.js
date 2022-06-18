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
  let cidCopy = [...cid];

  cidCopy.forEach((e) => e.push(money[e[0]]));
  cidCopy = cidCopy.sort((a, b) => b[2] - a[2]);
  let fund = cidCopy.reduce((acc, cur) => acc + cur[1], 0);

  let canIChange = () => {
    let amount = change;
    cidCopy.forEach((item) => {
      if (amount >= item[2] && item[1] > 0) {
        amount = Number(
          (amount - Math.floor(amount / item[2]) * item[2]).toFixed(2)
        );
      }
    });
    return amount === 0;
  };

  if (change === fund && canIChange()) {
    result.status = "CLOSED";
    result.change = cid.map((e) => e.slice(0, 2));
    return result;
  }

  let obj = {};
  while (change > 0) {
    fund = cidCopy.reduce((acc, cur) => acc + cur[1], 0);
    if (change > fund) {
      result.status = "INSUFFICIENT_FUNDS";
      return result;
    }
    for (let i = 0; i < cidCopy.length; i++) {
      if (change >= cidCopy[i][2] && cidCopy[i][1] !== 0) {
        cidCopy[i][1] -= cidCopy[i][2];
        change = Number((change - cidCopy[i][2]).toFixed(2));
        if (obj[cidCopy[i][0]]) {
          obj[cidCopy[i][0]] += cidCopy[i][2];
        } else {
          obj[cidCopy[i][0]] = cidCopy[i][2];
        }
        break;
      }
      if (i === cidCopy.length - 1 && change < fund) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      }
    }
  }

  if (result.status === "") {
    result.status = "OPEN";
  }
  let arr = [];
  for (const key in obj) {
    arr.push([key, obj[key]]);
  }
  result.change = arr;
  return result;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
