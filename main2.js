// function doMath(s){
//     //your code here
//     const arr = s.split(' ');
//     const numbers = [];
//     const letters = [];

//     for (const item of arr) {
//        for (const qwe of item.split('')) {
//        isNaN(qwe - 0) ? letters.push(qwe) : false;
//        letters.sort((a,b) => a.localeCompare(b))
//        }
//     }
//     for (const letter of letters.filter((el,idx,arr) => arr.indexOf(el) === idx)) {
//         for (const item of arr) {
//             item.includes(letter) ? numbers.push(item.split('').filter(el => !isNaN(el - 0)).join('')) : false;
//         }
//     }

//     // return Math.round(result)
//   }

// // //   "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
// console.log(doMath("24z6 1x23 y369 89a 900b"));

// function capitals(word) {
// Write your code here
// const result = [];
// word.split('').reduce((acc,e,i,arr) => {
//     if (e.toUpperCase() === e) {
//         result.push(i)
//     }
// },[])
// return result;

// return word.split('').reduce(function(result, c, i) {
//   if (c.toUpperCase() === c) result.push(i);
//   return result;
// }, []);
// };

// console.log(capitals('CodEWaRs'));

// function buyTofu(cost,box){
//     //your code here
//     const myBox = box.split(' ');
//     const monCoins = myBox.filter(el => el==='mon').length;
//     const monmeCoins = myBox.filter(el => el==='monme').length;
//     if (cost > monCoins + (monmeCoins * 60)) return  `leaving the market`;

//     let requiredMonmeCoins = 0;
//     let requiredMonCoins = 0;

//     if (cost > monmeCoins * 60) {
//       requiredMonmeCoins = monmeCoins;
//       requiredMonCoins = (cost - requiredMonmeCoins * 60);
//     } else {
//       requiredMonCoins = cost % 60;
//       requiredMonmeCoins = parseInt(cost / 60);
//     }

//     if (requiredMonCoins > monCoins) return `leaving the market`;
//     return [monCoins, monmeCoins, monCoins + (monmeCoins * 60), (requiredMonmeCoins + requiredMonCoins)]
//   }

//   const box = "mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon"
//   // const box = "mon mon mon mon mon apple mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon monme mon mon mon mon cloth mon mon mon mon mon mon mon mon mon cloth mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon"
// // console.log(buyTofu(124, box));
// console.log(buyTofu(124, box));
// // [45, 5, 345, 6]

// console.log(buyTofu(5, "mon monme"));

// console.log(buyTofu(123, "mon mon monme monme mon")); // Виведе: [2, 2, 122, 5]

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
// function triangleType(a, b, c){
//     const sides = [a,b,c].sort((a,b)=> a-b);
//     if (sides[0] + sides[1] <= sides[2] || sides[1] + sides[2] <= sides[0] || sides[2] + sides[0] <= sides[1]) return 0;

//     if(Math.pow(sides[2],2) === Math.pow(sides[0],2) + Math.pow(sides[1],2)) return 2;

//     if(Math.pow(sides[2],2) < Math.pow(sides[0],2) + Math.pow(sides[1],2)) return 1;

//     if(Math.pow(sides[2],2) > Math.pow(sides[0],2) + Math.pow(sides[1],2)) return 3;

//     [a, b, c] = [a, b, c].sort((n, m) => n - m);
//     const [a2, b2, c2] = [a, b, c].map(v => v ** 2);
//     if (c >= a + b) return 0;
//     if (c2 < a2 + b2) return 1;
//     if (c2 === a2 + b2) return 2;
//     if (c2 > a2 + b2) return 3;
// }

// console.log(triangleType(8, 5, 7));

// function countBits(a) {
//     // Program Me
//     return a.toString(2).split('').filter(el => el === '1').length
// }

// console.log(countBits(1251));

// const string1 = "hello";
// const string2 = "aaahello";
// // => 'a'

// function addedChar(s1, s2){
//   // your code here
//   const arr1 = s1.split('');
//   const arr2 = s2.split('');
//   const filteredArr = [];
//     arr2.map(el=> {
//     arr1.includes(el) ? arr1.splice(arr1.indexOf(el), 1) : filteredArr.push(el);
// });
//   return filteredArr[0];
// }

// console.log(addedChar(string1,string2));

// "TestController"  -->  "test_controller"
// const str = "TestController";
// "MoviesAndBooks"  -->  "movies_and_books"
// const str = "MoviesAndBooks"
// "App7Test"        -->  "app7_test"
// const str = "App7Test"
// 1                 -->  "1"
// const str = 1

// function toUnderscore(string) {
//   // TODO: complete
//   if(!isNaN(string)) return (string+'')
//   const arr = string.split('');
//   const filteredArr = [];
//   for (const item of arr) {
//     if(isNaN(item)){
//       item === item.toUpperCase() ? filteredArr.push('_',item.toLowerCase()) : filteredArr.push(item);
//     } else{filteredArr.push(item)}
//   }
//   if(filteredArr[0] === '_') filteredArr.splice(0,1)
//   return filteredArr.join('')
// }

// console.log(toUnderscore(str));

// function solution(number){
//   if(number <= 0) return 0;
//   const numbersMultiplies = [];
//   for(let i = 1; i < number;i+=1) {
//     if(i % 3 === 0 || i % 5 ===0) numbersMultiplies.push(i);
//   }
//   return numbersMultiplies.filter((e,i,a)=>i===a.indexOf(e)).reduce((acc,el)=>{
//     acc += el;
//     return acc
//   },0)
// }

// console.log(solution(-123));

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// function maskify(cc) {
//   if(cc.toString().length < 4) return cc;
//  return cc.toString().split('').map((el,i,arr) => {
//     if(i < arr.length - 4) return el='#';
//     return el
//   }).join('')
// }

// console.log(maskify(''));

// const expect = function(val){
//   return {
//     toBe: (val2) => {
//       if(val !== val2) throw new Error("Not Equal");
//       else return true;
//   },
//   notToBe: (val2) => {
//       if(val === val2) throw new Error("Equal");
//       else return true;
//   }
//   }
// };

// console.log(expect(5).toBe(5));

// const createCounter = function(init) {
//   let reset = init;
//   return {
//       increment: ()=>{return init+=1},
//       decrement: ()=>{return init-=1},
//       reset: ()=>{return init=reset}
//   }
// };
// const counter = createCounter(5);

// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// function colorProbability(color, texture){
//   //your code here
//   let result;
//   if(texture === 'smooth') return (0.33).toString();
//   switch (color) {
//   case 'red':
//     result = 4 / 7;
//     break;

//   case 'yellow':
//     result = 2 / 7;
//     break;

//   default:
//     result = 1 / 7;
// }
//   return result.toString().slice(0, 4)
// }

// console.log(colorProbability('red','bumpy'));
// console.log(colorProbability('yellow', 'smooth'));

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once.
// He also knows that some of the possible handshake combinations may not happen.
// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.
// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people
// needed to perform these handshakes (a pair of farmers handshake only once).

// function getParticipants(handshakes) {
//   if (handshakes < 1) return 0;
//   let hs = 0;
//   let min = 1;

//     for (let i = 1; i <= handshakes; i += 1) {
//       if(hs >= handshakes) break;
//       hs += i;
//       min += 1;
//     }
//     return min;
// }
// console.log(getParticipants(100));

// RGB To Hex Conversion

// const rgb1 = [255, 255, 255] //--> "FFFFFF"
// const rgb2 = [255, 255, 300] //--> "FFFFFF"
// const rgb3 = [0, 0, 0]       //--> "000000"
// const rgb4 = [148, 0, 211]   //--> "9400D3"

// function rgb(r, g, b){
//    return [...arguments].map(el=>{
//     if(el > 255) el=255;
//     if(el < 0) el = 0;
//     return el.toString(16).padStart(2, '0')
//   }).join('').toUpperCase()
// }

// console.log(rgb(...rgb4));

// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// function add(a, b) {
//   let firstNum;
//   let secondNum;
//   const res = [];
//   let stairsAdd = 0;
//   if(a.length > b.length) {
//     firstNum = a.split('').map(el=>+el).reverse();
//     secondNum = b.split('').map(el=>+el).reverse();
//     } else {
//      firstNum = b.split('').map(el=>+el).reverse();
//      secondNum = a.split('').map(el=>+el).reverse();
//     }
//   firstNum.reduce((acc,num,idx,arr)=>{
//     if(secondNum[idx]) {
//     stairsAdd = num + secondNum[idx] + acc
//     if (stairsAdd < 10) {
//       res.push(stairsAdd)
//       acc = 0
//       return acc;
//     }
//     if(arr.length - 1 === idx) {
//       res.push(stairsAdd);
//       return
//     }
//     res.push(+stairsAdd.toString()[1])
//     acc = 1
//     return acc
//     } else {
//       stairsAdd = num + acc;
//       if (stairsAdd < 10) {
//         res.push(stairsAdd)
//         acc = 0
//         return acc;
//       }
//       if(arr.length - 1 === idx) {
//         res.push(stairsAdd);
//         return
//       }
//       res.push(+stairsAdd.toString()[1])
//       acc = 1
//       return acc
//     }
//   },0)
//   res.reverse()
//   for(let i = 0; i < res.length; i += 1) {
//     if(res[i] === 0){
//       res.shift()
//     }
//     else {
//       return res.join('')
//     }
//   }
// }

// console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
// // "91002328220491911630239667963"
// // 91002328220491911630239667963
// console.log(add('99', '11'));
// console.log(add('00103', '08567'));

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

console.log("qqq");

// function multiply(a, b){
//   const firstNum = a.split('').map(el=>+el)
//   const secondNum = b.split('').map(el=>+el);
//   const numToAdd = [];
//   for (const num1 of firstNum) {
//     const stairsAdd = 0;
//     for (const num2 of secondNum) {
//       stairsAdd =
//       stairsAdd === 0 ? num1 * num2 > 10 ? stairsAdd = (num1 * num2).toString()[0] : (num1 * num2 + stairsAdd) :
//     }
//    numToAdd.unshift()
//   }
//   return numToAdd
// }

// //  assert.strictEqual(multiply("30", "69"), "2070");
// console.log(multiply('30','69'));
// console.log(multiply('44','276'));

/*Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].*/

// function deleteNth(arr, n) {
//   // ...
//   const res = [];
//   for (const num of arr) {
//     res.push(num)
//     if(res.filter(el=>el===num).length > n) res.pop();
//   }
//   return res
// }

// console.log(deleteNth([20, 37, 20, 21], 1)); //[20,37,21]
// console.log(deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1], 3)); //[ 1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5 ])

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false

// function capitalize(inputString) {
//   return inputString
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// function generateHashtag (str) {
//   const normalizeString = capitalize(str.trim()).split('').filter(el=>el!==' ')
//   if(!str.trim() || normalizeString.length >= 140) return false
//   normalizeString.unshift("#")
//   return normalizeString.join('')
// }

// console.log(generateHashtag("Do We have a hashtag"))// "#DoWeHaveAHashtag);
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// console.log(generateHashtag("a".repeat(140)));

// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.

// function zipWith(fn, a0, a1) {
//   const res =
//     a1.length < a0.length
//       ? a1.map((el, i) => fn(el, a0[i]))
//       : a0.map((el, i) => fn(el, a1[i]));
//   return res
// }

// console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ));

// Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist:
//  they formed a circle and proceeded to kill one man every three, until one last man was
//  left (and that it was supposed to kill himself to end the act).
// STEP 3
/*[1,2,3,4,5,6,7] -0
[1,2,4,5,6,7] -1
[1,2,4,5,7] -1
[1,4,5,7] -3
[1,4,5] => -4
[1,4] => -5
[4] => -6
[] => -7*/

function josephus(items, k) {
  //your code here
}

// console.log(josephus([1,2,3,4,5,6,7],3)); // [3,6,2,7,5,1,4]
// console.log(josephus(["C","o","d","e","W","a","r","s"],4));//['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']

// In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move
// to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
// A camera takes a photo of a car if it moves to the direction of the camera.
// Your task is to write a function such that, for the input string that represents a road as described,
// returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.

// here is the first try(this code smell like shit)
// function countPhotos(road) {
//   const array = road.split("");
//   let result = 0;
//   array.map((elem, index) => {
//     if (elem === ".") {
//       const quantityOfPhotos = [...array].filter((el, i) => {
//         if (el === ".") return false;
//         if (i < index) return el === ">" ? true : false;
//         if (i > index) return el === "<" ? true : false;
//       });
//       result += quantityOfPhotos.length;
//     }
//   });
//   return result;
// }
//here is a solution after thinking xd

// function countPhotos(road) {
//   const array = road.split("");
//   let result = 0;
//   let leftSide = 0;
//   let rightSide = 0;
//   let totalNumberOfDots = 0;
//   for (const item of array) {
//     if (totalNumberOfDots !== 0 && item === "<") {
//       leftSide += 1;
//       result += leftSide * totalNumberOfDots;
//       leftSide = 0;
//     } else if (item === ">") {
//       rightSide += 1;
//     } else if (item === ".") {
//       result += rightSide;
//       totalNumberOfDots += 1;
//     }
//   }
//   return result;
// }

// console.log(countPhotos(".><.>>.<<")); //For ".><.>>.<<" -> 11 photos were taken

// function mergeArrays(a, b) {
//   // your code here
//   const res = [...new Set(a.concat(b))];
//   return res.filter((el) => !isNaN(+el)).sort((a,b)=> a - b);
// }
// console.log(mergeArrays([ 3, 5, 1], [2, 4, 6]));
// function reverseWords(str) {
//   // your code here
//   const res = str
//     .split(" ")
//     .map((el) => (el === " " ? el : el.split("").reverse().join("")));
//   return res.join(" ");
// }
// console.log(reverseWords("qwe qwe  qwe"));

// function digitalRoot(n) {
//   // ...
//   const count = (n) => {
//     return String(n).split("").reduce((acc, el) => {
//       acc += +el;
//       return acc;
//     }, 0);
//   };
//   let res = count(n);
//   do {
//     res = count(res)
//   } while (res >= 10);
//   return res;
// }

// console.log(digitalRoot(664066));

// function digital_root(n) {
//   if (n < 10) return n;

//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }

// function digital_root(n) {
//   if (n < 10) return n;

//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }

// const snail = (array) => {
//   //enjoy
//   let arrToSnail = [...array];
//   const amountOfSteps = Math.pow(array.length, 2) - Math.pow(array[0].length - 1, 2);
//   const walking = (arr, steps, direction) => {
//     const result = [];
//     for (let i = 0; i < steps; i += 1) {
//       switch (direction) {
//         case "right":
//           result.push(arr[0][i]);
//           break;
//         case "down":
//           result.push(arr[i][arr[i].length - 1]);
//           break;
//         case "left":
//           result.push(arr[arr.length - 1][arr[0].length - 1 - i]);
//           break;
//         case "up":
//           result.push(arr[arr.length - 1 - i][0]);
//           break;
//         default:
//           break;
//       }
//     }
//     return result;
//   };
//   const result = [];
//   let currentStep = 0;
//   let amountOfStep = array.length;
//   for (let i = 0; i < amountOfSteps; i += 1) {
//     currentStep += 1;
//     if (currentStep === 1) {
//       result.push(...walking(arrToSnail, amountOfStep, "right"));
//       amountOfStep -= 1;
//       arrToSnail.shift();
//     } else if (currentStep === 2) {
//       result.push(...walking(arrToSnail, amountOfStep, "down"));
//       arrToSnail = [
//         ...arrToSnail.map((el) => {
//           el.pop();
//           return el;
//         }),
//       ];
//     } else if (currentStep === 3) {
//       result.push(...walking(arrToSnail, amountOfStep, "left"));
//       arrToSnail.splice(-1, 1);
//       amountOfStep -= 1;
//     } else {
//       result.push(...walking(arrToSnail, amountOfStep, "up"));
//       arrToSnail = [
//         ...arrToSnail.map((el) => {
//           el.shift();
//           return el;
//         }),
//       ];
//       currentStep = 0;
//     }
//   }
//   return result;
// };

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// console.log(
//   snail([
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5],
//   ])
// );
// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//   ])
// );

/*No time for stories. Reverse an array, return the result. Do whatever you want 
with the original array. Don't use Array.prototype.reverse.
You have 30 bytes to spare. */

let reverse = (a) => a.map(a.pop, [...a]);
// console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*Your mission, should you accept it, is to return the count of all integers in a given range which
 do not contain the digit 5 (in base 10 representation).
You are given the start and the end of the integer range. The start and the end are both inclusive. */

function dontGiveMeFive(start, end) {
  return 0;
}

// function palindromize(number) {
//   const isPalindrom = (int) => {
//     return int.toString() === int.toString().split("").reverse().join("");
//   };
//   const res = [0, number];
//   while (!isPalindrom(res[1])) {
//     res[0] += 1;
//     res[1] = res[1] + +res[1].toString().split("").reverse().join("");
//   }
//   return res.join(" ");
// }

// console.log(palindromize(195));
