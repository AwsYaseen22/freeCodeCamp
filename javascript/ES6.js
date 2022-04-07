// Class
// Example of getter and setter
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
// const novel = new Book("anonymous");
// console.log(novel.writer);
// novel.writer = "newAuthor";
// console.log(novel.writer);

// ###########################################################################################

class Thermostat {
  constructor(fahTemp) {
    this._fahTemp = fahTemp;
  }
  get temperature() {
    return (5 / 9) * (this._fahTemp - 32);
  }
  set temperature(temp) {
    this._fahTemp = temp * (9 / 5) + 36;
  }
}
