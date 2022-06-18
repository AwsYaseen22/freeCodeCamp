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

  let fund = (100 * cid.reduce((acc, cur) => acc + cur[1], 0)) / 100;

  //   this one is greate i can use it
  //   it test if the we can change
  let canIChange = () => {
    console.log(change);
    let amount = change;
    cid.forEach((item) => {
      console.log(amount, item[1], item[2]);
      if (amount >= item[2] && item[1] > 0) {
        amount = Number(
          (amount - Math.floor(amount / item[2]) * item[2]).toFixed(2)
        );
      }
    });
    console.log("amount: ", amount);
    return amount === 0;
  };

  if (change > fund || !canIChange()) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  if (change === fund) {
    result.status = "CLOSED";
    result.change = cid.map((e) => e.slice(0, 2));
    return result;
  }

  let obj = {};
  console.log(cid, change, fund);
  while (change > 0) {
    fund = cid.reduce((acc, cur) => acc + cur[1], 0);
    // console.log(change);
    for (let i = 0; i < cid.length; i++) {
      if (change >= cid[i][2] && cid[i][1] !== 0) {
        // console.log(change, cid[i][1], cid[i][2]);
        cid[i][1] = Number(cid[i][1] - cid[i][2]).toFixed(2);
        change = Number((change - cid[i][2]).toFixed(2));
        if (obj[cid[i][0]]) {
          obj[cid[i][0]] = obj[cid[i][0]] + Number(cid[i][2].toFixed(2));
        } else {
          obj[cid[i][0]] = cid[i][2];
        }
        break;
      }
      if (i === cid.length - 1 && change < fund) {
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
