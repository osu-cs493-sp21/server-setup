console.log("Hello world!");
console.log("== process.env.PORT:", process.env.PORT);

const fs = require('fs');
const figlet = require('figlet');

figlet("Hello CS 493!", function (err, data) {
  if (!err) {
    console.log(data);
  }
});

figlet("Arrow function", (err, data) => {
  if (!err) {
    console.log(data);
  }
});

function asciiArtHandler(err, data) {
  if (!err) {
    console.log(data);
  }
}

figlet("Named callback", asciiArtHandler);

const circle = require('./circle');
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));

// const circumference = require('./circle').circumference;
// const { circumference } = require('./circle');
