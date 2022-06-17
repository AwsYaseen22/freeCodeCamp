//  Telephone Number Validator

function telephoneCheck(str) {
  //   let reg =
  //     /[1]{0,1}[ ]{0,1}[(]{0,1}(\d{3})[)]{0,1}[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
  let reg = /^(1 |1{0,1})(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
  return reg.test(str);
  //   return str.match(reg);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("11 555-555-5555"));
