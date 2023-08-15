// Задача: Обчислити суму двох чисел і вивести результат на консоль.

// дві консти через промпт плюс конста з додаванням

// const firstNumber = parseInt(prompt("Enter first number"));
// const secondNumber = parseInt(prompt("Enter first number"));
// console.log(firstNumber + secondNumber);



// Задача: Перевірити, чи є дане число парним. Вивести на консоль "Парне", якщо число парне, або "Непарне", якщо число непарне.

// const number = parseInt(prompt("Enter a number you want to check"));
// let message;
// number % 2 === 0 ? message = "even" : message = "odd";
// console.log(message);

// Задача: Записати функцію, яка приймає масив чисел і повертає суму всіх елементів.

// Задача: Перевірити, чи є дане слово паліндромом. Вивести на консоль "Паліндром", якщо слово є паліндромом, або "Не паліндром",
// якщо слово не є паліндромом.

// const word = prompt("Enter word you want to check")
// const normalizeWord = word.indexOf()

// Задача: Записати функцію, яка приймає рядок і повертає його зворотній варіант.

// Задача: Знайти максимальний елемент в заданому масиві чисел і вивести його на консоль.

// const numbers = [1, 6, 12, 15, 2, 24, 0, -12, 25];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//         if (number > biggestNumber) {
//             biggestNumber = number
//         }
// }
// console.log(biggestNumber);


// Задача: Записати функцію, яка приймає два числа і повертає їх добуток.

// Задача: Перевірити, чи є дане число простим. Вивести на консоль "Просте", якщо число є простим, або "Не просте", якщо число не є простим.

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль
// const number = prompt("enter your number")
// number < 0 ? console.log("Number is negative") : console.log("Number is positive");


// Дана строка. Выведите в консоль длину этой строки.
// const str = prompt("Enter string")
// console.log(str.length);

// Дана строка. Выведите в консоль последний символ строки.
// const str = prompt("Enter string")
// console.log(str.slice(str.length - 1 ,str.length));

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const firstWord = prompt("enter your word")
// const secondWord = prompt("enter your word")
// firstWord.slice(0, 1) === secondWord.slice(0, 1) ? console.log("Match"): console.log("Does not match");


// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// const word = prompt("Enter word")
// word.slice(word.length - 1, word.length) === "." ? console.log(word.slice(word.length - 2, word.length - 1)) : console.log(word.slice(word.length - 1, word.length))

// Дано число. Выведите количество цифр в этом числе.
// const number = prompt("enter your number")
// console.log(number.length);

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// const firstNumber = prompt("Enter your number")
// const secondNumber = prompt("Enter your number")
// firstNumber % secondNumber === 0 ? console.log("yes") : console.log("no")

// Выведите в консоль все целые числа от 1 до 100.
// for (let i = 1; i < 101; i += 1) {
//     console.log(i);
// }

// Выведите в консоль все четные числа из промежутка от 1 до 100.
// for (let i = 1; i < 101; i += 1) {
//     if (i % 2 !== 0) continue;
//     console.log(i);
// }

// скрипт пошуку логіна в масиві
// якщо логіна немає вивести месседж "Юзер {логін не знайдений"

// const logins = ['ghqw@sad', 'qwasek', 'ubiwaha', 'polycutebaby'];
// const loginToFind = prompt('Enter login');
// let message = `Юзер ${loginToFind} ne знайдений`;
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     // console.log('Login: ', login);
//     if (loginToFind === login) {
//         message = `Юзер ${loginToFind} знайдений`;
//         break;
//     }
// }

// for (const login of logins) {
//     // console.log('Login: ', login);
//     if (loginToFind === login) {
//         message = `Юзер ${loginToFind} знайдений`;
//         break;
//     }
// }

// message = logins.includes(loginToFind)
//     ? `Юзер ${loginToFind} знайдений`
//     : `Юзер ${loginToFind} ne знайдений`

// console.log(message);


//  скрипт який заміняє регістр на протилежний(JavaScript to jAVAsCript)
// const string = prompt('enter your string');
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);
// for (const letter of letters) {
    // if (letter === letter.toLowerCase()) {
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }
//     const isEqual = letter === letter.toLowerCase();
//     invertedString +=
//  isEqual
// ? letter.toUpperCase()
// : letter.toLowerCase();
// }



// console.log(invertedString);
  

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//     // Change code below this line
//     const slug = title.toLowerCase().split(' ');
//     const normalizeSlug = slug.join('-');
//     return normalizeSlug
//     // Change code above this line
//   }
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом
//  (параметр string), і повертає найдовше слово в цьому рядку.
// function findLongestWord(string) {
//     // Change code below this line
//     let str = string.split(' ');
//     console.log(str);
//     let maxLength = 0;
//     let longestWord = '';
//     for (const word of str) {
//       if (word.length > maxLength) {
//         maxLength = word.length;
//         longestWord = word;
//       }
//     }
//   return longestWord;
//     // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {
//     // Change code below this line
//     console.log(typeof(numbers));
//    const checkedNumbers = [];
//    for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] > value) {
//        checkedNumbers.push(numbers[i]);
//      }
//    }
//    return checkedNumbers;
//    // Change code above this line
//  }
//  console.log(filterArray([1, 2, 3, 4, 5], 3));


// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
//  Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
// function countProps(object) {
//     let propCount = 0;
//     for (let key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }
//     return propCount;
//   }
//   console.log(countProps({ name: 'Mango', age: 2 }))

// Написати функцію, яка приймає масив чисел та повертає новий масив, який містить всі числа,
// які є дублікатами в початковому масиві. Якщо немає дублікатів, функція повертає порожній масив.

// const array = [
//     48, 1, 5, 25, 22, 10, 44, 102, 100, 22, 53, 6, 3, 10, 45, 12, 0, 22, 13, 22,
//     45, 55, 33, 23, 5, 21, 2, 44, 1,
//     ];


// Перебери масив об'єктів colors, використовуючи цикл for...of. 
// Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb 
// з усіх об'єктів масиву colors.

// const colors = [
  //   { hex: "#f44336", rgb: "244,67,54" },
  //   { hex: "#2196f3", rgb: "33,150,243" },
  //   { hex: "#4caf50", rgb: "76,175,80" },
  //   { hex: "#ffeb3b", rgb: "255,235,59" },
  // ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
//   console.table(hexColors);
  // Change code below this line
  
//   Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
//  Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). 
//   Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//     function getProductPrice(productName) {
//     for (const product of products) {
//         if(product.name === productName){
//             return product.price;
//         }
//     }
//     return null;
// }
// console.log(getProductPrice('Grip'));


// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. 
// Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//  Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// const values = [];
//   for (const product of products) {
//     if(product[propName]) {
//       values.push(product[propName]);
//       // console.log(product[propName]);
//       console.log(products(produc));
//   }
// }
//   return values;
// }
// console.log(getAllPropValues('name'));
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
// for (const product of products) {
//   if(product.name === productName){
//       return product.price;
//   }
// }
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. 
// Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products)
//    {
//     if (product['name'] === productName) {
//     totalPrice = product.price * product.quantity;
//     return totalPrice;
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }


// Функція повинна створити і повернути новий об'єкт завдання, 
// не змінюючи напряму параметр data. У новому об'єкті повинна бути
//  властивість completed, значення якої зберігається в однойменній локальній змінній.
// В параметрі data гарантовано буде тільки властивість text, а інші дві, 
// category і priority, можуть бути відсутніми. 
// Тоді, в новому об'єкті завдання, у властивостях category 
// і priority повинні бути значення за замовчуванням, що зберігаються в
//  однойменних локальних змінних



// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {
//     completed,
//     category,
//     priority,
//     ...data
//   }
//   // Change code above this line
// }
// console.log(makeTask());
// console.log(makeTask({completed: true, category: "Homemade", priority: "Low", text: "Take out the trash" }));

// Доповни метод removePotion(potionName) таким чином,
//  щоб він видаляв зілля potionName з масиву зілля у властивості potions


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     let indexRemovablePotion = this.potions.indexOf(potionName);
//     this.potions.splice(indexRemovablePotion, 1);
//     return this.potions;
//     // Change code above this line
//   },
// };



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   // getPotions() - метод для отримання всього зілля.
// //  Повертає значення властивості potions
//   getPotions() {
//     return this.potions;
//   },
//   // addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у
//   //  властивості potions, але тільки, якщо такого зілля ще немає в інвентарі.
//   //   В іншому випадку повертається рядоk
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   // видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName){
//         this.potions.splice(i, 1);
//       }
//     }
//   },

//   // updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з 
//   // назвою oldName на newName в масиві potions
//   updatePotionName(oldName, newName) {
//     let result;
//   for (let i = 0; i < this.potions.length; i += 1) { 
//    result = oldName === this.potions[i].name 
//     ? this.potions[i].name = newName
//     : `Potion ${oldName} is not in invertory!`
//       // if(oldName === this.potions[i].name) {
//   //       return this.potions[i].name = newName;
//   //     }
//   }
//   // return `Potion ${oldName} is not in invertory!`
//   return result;
// },
// }
// console.log(atTheOldToad.updatePotionName('qwe', 'Polymorth'));
// console.log(atTheOldToad.potions);


// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));



// const calculateTotalPrice = orderedItems => {
//  let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([1, 6, 10]));


// перевернути слова, довжина яких більше або рівна 5

// function spinWords(string){
//   const arrayToFilter = string.split(' ');
//   const result = [];
//   for( const element of arrayToFilter) {
//       element.length >= 5
//       ? result.push(element.split('').reverse().join(''))
//       : result.push(element)
//   }
//   const filteredString = result.join(' ')
//   return filteredString;
// }
// console.log(spinWords("Hey fellow warriors"));


// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once
//  in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// example "indivisibility" -> 1
// example "aabBcde" -> 2


// function duplicateCount(text){
//   const midArr = [];
//   let count = 0;
//   text.toLowerCase().split('')
//   .filter((item, index, arr) => {
//     if(!midArr.includes(item))
//     if(arr.indexOf(item) !== index) {
//       count += 1;
//       midArr.push(item);
//     }
//   })
//   return count;
// }
// console.log(duplicateCount('Indivisibilities'))

// ====================================================
// високосний рік чи нє?

// роки, які діляться на 4, є високосними
// але роки, які діляться на 100, не є високосними
// але роки, які діляться на 400, є високосними

// function isLeapYear(year) {
//   // TODO
//   if(year % 4 === 0) {
//     if(year % 100 === 0) {
//       if(year % 400 === 0) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   }
//   return false;
// }

// function isLeapYear(year) {
//   return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
// }


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getSortedFriends = users => {
//   const result = [...users]
//  .flatMap(user => user.friends)
//  .sort((a, b) => a.localeCompare(b))
//  .filter((friend, index, filteredArray) => filteredArray.indexOf(friend) === index);
//  return result;
// };

// console.log(getSortedFriends(users));


//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string){
//   //...
//   const normalizeString = string.toLowerCase().split('')
//       return "abcdefghijklmnopqrstuvwxyz".split("").every(letter => normalizeString.includes(letter));
//   for (const letter of letters) {
//     if(!normalizeString.includes(letter)) {
//       return false;
//     } 
//   }
//   return true;
// }

// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(x => {
//     return string.indexOf(x) !== -1;
//   });
// }


// console.log(isPangram("This is not a pangram."));
// console.log(isPangram("The quick brown fox jumps over the lazy dog. "));



// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2

// const a1 = ["arp", "live", "strong"]

// const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]


// function inArray(array1,array2){
//   //...
//   const r = [];
//   for (const word of array2) {
//     for (const item of array1) {
//       if (word.includes(item)) {
//         r.push(item)
//       }
//     }
//   }
//   return r.filter((el,index, array) => array.indexOf(el) === index).sort((a,b) => a.localeCompare(b));
// }


// function inArray(arr1, arr2) {
// return arr1.filter(str => arr2.some(str2 => str2.includes(str))).sort();
// }

// console.log(inArray(a1, a2));


// Ви повинні заправити паливо, і є кілька заправних станцій з різними цінами та різною відстанню до вас.
//  Іноді дешевше їхати на більш віддалену заправку, тому що ціни дешевші!
// Ваш бак може вмістити максимум 60 л.
// Ви завжди наповнюєте свій бак
// Розрахуйте поточну кількість пального в баку за фактичною ціною на АЗС
// Враховуючи об`єкт із кількома заправними станціями, ваше поточне паливо як ціле число від 0 до 60 
// і споживання пального вашого автомобіля (л/100 км, плаваюча станція) - 
// знайдіть найдешевшу заправну станцію та поверніть назву заправної станції!

// const obj = {
//   "gas1": {"price": 1.5, "distance": 50},
//   "gas2": {"price": 2.0, "distance": 75}
// };

// const stations = {
//   station1: {
//     price: 2.5,
//     distance: 10
//   },
//   station2: {
//     price: 2.2,
//     distance: 20
//   },
//   station3: {
//     price: 2.8,
//     distance: 15
//   }
// };

// const currentFuel = 40; // Поточний рівень пального (від 0 до 60)
// const fuelConsumption = 8; // Споживання пального (л/100 км)


// function gasStation(object, currentFuel, fuelConsumption){
  //happy coding ^.^
  // const prices = [];
  // const distances = [];
  // const names = Object.keys(object);
  // let cost = Infinity;
  // let result = undefined;
  // for (const key in object) {
  //     const element = object[key];
  //     prices.push(element.price);
  //     distances.push(element.distance);
  // }
  // for(let i = 0; i < prices.length; i += 1) {
  //   const roadFuel = distances[i] * fuelConsumption / 100;
  //   const fuelOnStation = currentFuel - roadFuel;
  //   const FuelsCost = (60 - fuelOnStation) * prices[i];
  //   if(fuelOnStation <= 0){
  //     return result;
  //   } else if(FuelsCost < cost) {
  //     result = names[i];
  //     cost = FuelsCost;
  //   } else {continue}
  // }
  // return result;
//   let arr = [];
//   for (let pty in object) {
//     let fueltoStation = fuelConsumption * object[pty].distance / 100;
//     let totalCost = (60 - currentFuel) * object[pty].price + fueltoStation * object[pty].price * 2;
//     if (currentFuel >= fueltoStation) {
//        arr.push([pty,totalCost]);
//     }
//   }
//   if (arr.length > 0) {
//      return arr.sort((a, b) => a[1] - b[1])[0][0];
//   } else {
//     return undefined;
//   }
// }

// console.log(gasStation(obj, currentFuel, fuelConsumption));
// console.log(gasStation(stations, currentFuel, fuelConsumption));



// function catMouse(x){
  // const arr = x.split('')
  // const cat = arr.indexOf('C');
  // const mouse = arr.indexOf('m');
  // const arrToCheck = arr.slice(cat,mouse + 1);
  // console.log(arrToCheck);
  //  return arrToCheck.length <= 5 ? 'Caught!' : 'Escaped!';

  // // return x.length <= 5 ? 'Caught!' : 'Escaped!';
  // }

// console.log(catMouse('C....m'));

// You will be given an array of numbers. You have to sort the odd numbers in ascending
//  order while leaving the even numbers at their original positions.
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// const array = [5, 8, 6, 3, 4];

// function sortArray(arr) {
  // Return a sorted array.
  // const midArr = arr.filter(el => el % 2 !== 0)
  // .sort((a, b) => a - b);
  // let counter = 0;
  // for (let i = 0; i < arr.length; i+= 1) {
  //   if (arr[i] % 2 !== 0) {
  //     arr[i] = midArr[counter];
  //     counter += 1;
  //   }
  // }
  // return arr;


  // const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  // return array.map((x) => x % 2 ? odd.shift() : x);
// }
// console.log(sortArray(array));

// Complete the solution so that it splits the string into pairs of two characters. If the string contains 
// an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_')



// function solution(str){
//   const arrToSort = str.split('');
//   const result = [];
//   if(str.length % 2 === 0) {
//     arrToSort.filter((el,idx,arr) => {
//       if(idx % 2 === 0) {
//         result.push(el + arr[idx + 1]);
//       }
//     })
//   } else {
//     for(let i = 0; i < arrToSort.length; i += 1) {
//       if(i % 2 === 0 && i !== (arrToSort.length - 1)) {
//             result.push(arrToSort[i] + arrToSort[i + 1]);
//       } else if(i === arrToSort.length - 1){
//         result.push(arrToSort[i] + '_')
//       }
//     }
//   }
//  return result;
// }

// console.log(solution('abcdef'));


// function lineupStudents(students){
//   //your code here
//   return students.split(' ').sort((a, b) => b.length - a.length || b.localeCompare(a));
// }
// console.log(lineupStudents('Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'));


// function twoSum(numbers, target) {
//   // ...
//   const result = [];
//   const idx = numbers.map((el,idx) => idx);
//   numbers.filter((el, index,array) => {
//     for (const number of idx) {
//       if(number !== index) {
//         array[number] + el === target ? result.push(number) : false;
//       }
//     }
//   })
//   return result.sort((a,b) => a - b).filter((el,idx,arr) => arr.indexOf(el)===idx).slice(0,2)
// }

// console.log(twoSum([1,2,3,],4));
// console.log(twoSum([961, 232, -239, -825, 68, 913, -725, -648, -807, -766, -446, -680, 172, -914, -864, -577, 913, -611, 199, -547, 774, -423, 448, 992, 787, -300, -856, 641, -324, 30, 17, -794, 654, 484, -181, -104, 142, 412, -917, 445, 51, -904, 932, 885, 317, 369, -164, -530, -717, -573, 746, 290, 297, 329, -48, -241, -33, -822, 861, -447, -684, -530, 77, 400, 333, -945, -579, -16, 706, -700, -490, 975, 168, 629, -989, 899, -716, 816, -464, -269],-1296));


// Write a function  tripledouble(num1,num2)
// який приймає числа num1 і num2 і повертає 1, якщо є пряма трійка числа в будь-якому місці в num1,
//  а також пряме подвійне число того самого числа в num2.
// Якщо це не так, поверніть 0


// function tripledouble(num1, num2) {
  //code me
//   let checkedNumber;
//   let result = 0;
//   const arrayTriple = num1.toString().split('');
//   const arrayDouble = num2.toString().split('');

// for (let i = 0; i < arrayTriple.length; i += 1) {
//   const isTriple = arrayTriple[i] === arrayTriple[i + 1] && arrayTriple[i] === arrayTriple[i + 2];
//   if(isTriple) {
//     checkedNumber = parseInt(arrayTriple[i]);
//     break
//   }
// }
// for (let i = 0; i < arrayDouble.length; i += 1) {
//   const isDouble = arrayDouble[i] === arrayDouble[i + 1] && parseInt(arrayDouble[i]) === checkedNumber;
//   if(isDouble) {
//     return 1
//   }
// }

// return 0;
// }


// function tripledouble(num1, num2) {
//   let str1 = String(num1).split("");
//   let str2 = String(num2).split("");
//   return str2.some((el,i,ar) => str1.filter((e,idx,arr) => e === arr[idx + 1] && e === arr[idx + 2]).includes(el) && el === ar[i + 1]) ? 1 : 0
// }



// console.log(tripledouble(451999277666, 41177722899));
// console.log(tripledouble(1222345, 12345));
// console.log(tripledouble(12345, 12345));
// console.log(tripledouble(666789, 12345667));
// console.log(tripledouble(10560002, 100));


// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
//  each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// function narcissistic(value) {
//   // Code me to return true or false
//   return String(value).split('').reduce((acc, el, idx , arr) => {
//     return acc += Math.pow(el , arr.length)
//   },0) === value
// }

// console.log(narcissistic(153));



// A triangle number is a number where n objects form an equilateral triangle (it's a bit hard to explain). 
// For example, 6 is a triangle number because you can arrange 6 objects into an equilateral triangle:

// function isTriangleNumber(number) {
//   //Your code here

// }



// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// function humanReadable (seconds) {
//   if(seconds > 359999) return
//   const minutes = parseInt((seconds - parseInt(seconds / 3600) * 3600) / 60);
//   const secunds = seconds - (parseInt(seconds / 3600) * 3600) - (minutes * 60);
//   return `${parseInt(seconds / 3600).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secunds.toString().padStart(2, '0')}`;
// }

// console.log(humanReadable(359999));

// Array.prototype.transpose = function() {
  //complete solution
  // const result = []
  // const firstArr = this.flatMap(el => el);
  // firstArr.length = firstArr.length / 2;
  // const secondArr = this.flatMap(el => el).slice(firstArr.length)
  //  firstArr.reduce((acc,el,idx) => {
  //   acc = [];
  //   acc.push(el, secondArr[idx]);
  //   result.push(acc)
  // },[]);
  // return result

  // if (!Array.length) {
  //   return [];
  //   } if(!this[0].length) {
  //   return [[]];
  // }

  // const rows = this.length;
  // const cols = this[0].length;

  // const result = [];
  // for (let j = 0; j < cols; j++) {
  //   const newRow = [];
  //   for (let i = 0; i < rows; i++) {
  //     newRow.push(this[i][j]);
  //   }
  //   result.push(newRow);
  // }

  // return result;
//   };

// console.log([[1,2,3,4,5],[6,7,8,9,10]].transpose());
// console.log([["b",15,20],[14,"c",19],[12,"e",5],["d",8,14],[9,15,"d"],[19,14,18]].transpose());

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// function moveZeros(arr) {
//   const result  = arr.filter(el => el !== 0);
//   for (let i = 0; i = arr.length - result.length; i += 1) {
//       result.push(0)
//   }
//   return result


// return [
//   ...(arr.filter(n => n !== 0)),
//   ...(arr.filter(n => n === 0))
// ];
// }

// console.log(moveZeros([false,1,0,1,2,0,0,1,3,"a"]));


// function add(num1, num2) {
//   let result = '';
//   let carry = 0;
//   let i = num1.length - 1;
//   let j = num2.length - 1;

//   while (i >= 0 || j >= 0 || carry !== 0) {
//     const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
//     const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

//     const sum = digit1 + digit2 + carry;
//     carry = Math.floor(sum / 10);
//     result = (sum % 10) + result;

//     i--;
//     j--;
//   }

//   return result;
// }

// console.log(add('63829983432984289347293874', '90938498237058927340892374089'));

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly 
// two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// function twoArePositive(a, b, c) {
//   return [...arguments].filter(el => el > 0).length === 1
// }

// console.log(twoArePositive(2, 4, -3));




// // Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів, повертає масив масивів 
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // [[1, 2], [3, 4],[5, 6],[7, 8], [10]] 
// function foo(arr, size) {
//   // const result = [];
//   //     for (let i =0; i < arr.length ; i += size) {
//   //       result.push(arr.slice(i, i + size));
//   //     }
//   //     return result

//  return arr.reduce((acc,el,idx,array) => {
//     if(idx % size === 0) {
//       acc.push(array.slice(idx,idx + size))
//     }
//     return acc
//   },[])
// }

// console.log(foo(data, 3));