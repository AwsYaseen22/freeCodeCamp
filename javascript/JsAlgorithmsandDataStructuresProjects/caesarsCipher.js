// Caesars Cipher

function rot13(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  let i = 25;
  //   console.log(letters[i], letters[i < 13 ? i + 13 : i - 13]);
  return str
    .split("")
    .map((l) => {
      let index = letters.indexOf(l);
      if (index !== -1) {
        return letters[index < 13 ? index + 13 : index - 13];
      } else {
        return l;
      }
    })
    .join("");
}

console.log(rot13("SERR PBQR PNZC"));
