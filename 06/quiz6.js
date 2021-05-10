const $result = document.getElementById('result');
const $num = document.getElementById('num');
const $btn = document.getElementById('btn');
let times = '';

timesTable(); 
function timesTable() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            times += `
            ${i} * ${j} = ${i * j}`;
        }
    }
}

$result.append(times);

