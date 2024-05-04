// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// const double = [1,5,9].filter((n,idx) => {return n * 2});

// console.log(double);


// map callback
const num = [5,12,99]
const mul = num => num.map(val => val * 2);
const finalStep = mul(num);
console.log(finalStep);

// replacing  function using arrows.


// // function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
// }

const values = [ 5,3,12,8]

const square = numbers => numbers.map
(val => val ** 2).filter (square => square % 2 == 0);

const pairSquare = square(values);
console.log(pairSquare);
