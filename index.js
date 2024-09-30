// function avg(a, b) {
//     return (a+b)/2
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);

// //console.log(c1, c2);

// let myDate = new Date();

// // console.log(myDate.getSeconds());

// Dom Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

// elemClass[0].style.background = 'yellow'
elemClass[0].classList.add('bg-primary')
elemClass[0].classList.add('text-success')
