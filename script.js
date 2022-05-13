


let a = "hello world";

console.log(a);

const obj = {
    anna: 500,
    alice: 800
};

console.log(obj.alice);







// const obj = { a: 1 };
// const copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }

// let eu = 32;
// let dis = 0.9;

// function convert(amount, i) {
//     return amount * i;
// }

// function prom(res) {
//     console.log(res * dis);
// }


// const rrs = convert(500, eu);
// prom(rrs);




























// YouTube https://www.youtube.com/watch?v=CxgOKJh4zWE&t=1232s&ab_channel=BogdanStashchuk


// обьекты 

// const obj = {
//     me: "beka",
//     years: '21'
// };

// obj.city = 'almaty';

// console.log(obj);

// obj['pop'] = true;

// console.log(obj.pop);

// обьекты использование перемынных

// const nam = "beka";
// const postsQty = 23;

// const userProfile = {
//     nam,
//     postsQty,
//     hass: 23
// };


// глобальные обьекты

    //window  в браузере

    //global в node js

    // Универсальный обьекты

        // globalThis


// как избежать мутаций
    
    // const person2 = Object.assign({}, person)
    // const person2 = {...person}
    // const person2 = JSON.parse(JSON.stringify(person ))

// обьекты 

// функций

// function myFn (a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// myFn(5, 10);


// функций


// const arr = [1, 2, 3, 4];

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");




// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 3,
//     c: {
//         x: 7,
//         k: 5
//     }
// };


// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);




// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {

// }

// function showProgrammingLangs(plan) {

// }










// let a = +prompt('skolko vam let?', 18);

// if (a === 18) {
//     console.log("privet");
// } else if (a === a > 18) {
//     console.log("ty malish");
// }


// let a = prompt("number 1");
// a = Number(a);

// let b = prompt("number 2");
// b = Number(b);

// let quoto = prompt('operator (/,+,*,-)');

// switch (quoto) {
//     case '+':
//         alert (a + b);
//         break;
//     case '-':
//         alert (a - b);
//         break;
//     case '/':
//         alert (a / b);
//         break;
//     case '*':
//         alert (a * b);
// }






// for (let i = 2; i < 10; i++) {
// if (!(i % 2)) console.log(i) // если i НЕ true.
// }

// for (let i = 2; i < 21; i++) {
// if (i % 2) continue;
// console.log(i);
// }

// for (let i = 0; i < 3; i++) {
// console.log( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
// console.log(`number ${i++}!`);
// }
// let currentlyNumber;
// do {
// currentlyNumber = +prompt('Please enter a number greater than 100', '');
// console.log(typeof currentlyNumber);

// } while (currentlyNumber && currentlyNumber < 100 && typeof currentlyNumber === 'number')

// let n = 10;
// happyNumber: for (let i = 2; i <= n; i++) {
// for (let j = 2; j < i; j++) {
// if (i % j === 0) continue happyNumber;
// }
// console.log(i);
// }

// for (let i = 2; i <= 10; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }


// const calc = function() {

//     const myDB = {
//         resultExecution: {}
//     };
//     console.log(myDB);

//     let questionFirst,
//         questionSecond,
//         fulfillment,
//         result;

//     fulfillment = prompt('+ - * /');
//     questionFirst = +prompt("Выберете одну цифру", "");
//     // while (questionFirst == '' || questionFirst == null || isNaN(questionFirst)) {
//     //     questionFirst = +prompt('Выберете одну цифру', '');
//     // }
//     if (questionFirst > 10) {
//         questionFirst = +prompt("Выберете одну цифру", "");
//         // console.log("введите меньше цифры");
//     }
    
//     questionSecond = +prompt("Выберете одну цифру", "");
//     // while (questionSecond == '' || questionSecond == null || isNaN(questionSecond)) {
//     //     questionSecond = +prompt('Выберете одну цифру', '');
//     // }
//     if (questionSecond > 10) {
//         questionSecond = +prompt("Выберете одну цифру", "");
//         // console.log("введите меньше цифры");
//     }


//     if (fulfillment == "+") {
//         result = questionFirst + questionSecond;
//         alert(result);
//         console.log(result);
//     } else if (fulfillment == '-') {
//         result = questionFirst - questionSecond;
//         alert(result);
//         console.log(result);
//     } else if (fulfillment == '*') {
//         result = questionFirst * questionSecond;
//         alert(result);
//         console.log(result);
//     } else if (fulfillment == '/') {
//         result = questionFirst / questionSecond;
//         alert(result);
//         console.log(result);
//     }
// };

// calc();



// const personalMovieDB =  {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             } 
            
//             // Альтернативный вариант из урока
            
//             // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             // if (genres === '' || genres == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres = genres.split(', ');
//             //     personalMovieDB.genres.sort();
//             // } 
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };
