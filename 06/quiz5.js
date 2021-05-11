const $box = document.querySelector('.box');
const $box1 = document.querySelector('.box1');
let offset = {x:0, y:0, x1:0, y1:0};
let isDown = false;
let clickedBox; // box, box1 구분

function mousedown(box, event) {
    isDown = true;
    clickedBox = box.className;

    if(clickedBox === 'box') {
        offset.x = box.offsetLeft - event.clientX;
        offset.y = box.offsetTop - event.clientY;
    } else if(clickedBox === 'box box1') {
        offset.x1 = box.offsetLeft - event.clientX;
        offset.y1 = box.offsetTop - event.clientY;
    } else {
        return;
    }
}

function mousemove(event) {
    if(!isDown) return;

    if(clickedBox === 'box') {
        $box.style.left = event.clientX + offset.x + 'px';
        $box.style.top = event.clientY + offset.y + 'px';
    } else if(clickedBox === 'box box1') {
        $box1.style.left = event.clientX + offset.x1 + 'px';
        $box1.style.top = event.clientY + offset.y1 + 'px';
    } else {
        return;
    }
}

function mouseup() {
    isDown = false;
    clickedBox = null;
}

$box.addEventListener('mousedown', (event) => mousedown($box, event));
$box1.addEventListener('mousedown', (event) => mousedown($box1, event));
document.body.addEventListener('mousemove', (event)=> mousemove(event));
$box.addEventListener('mouseup', mouseup);
$box1.addEventListener('mouseup', mouseup);
