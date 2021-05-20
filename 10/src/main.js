import sum from './sum';

//const sum = require('./sum');

console.log(sum(1, 2));
//alert(1, 3); // 브라우저에만 있으므로 에러

document.getElementById('debug').innerHTML = sum(1, 2);
