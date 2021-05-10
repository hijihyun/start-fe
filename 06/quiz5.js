const $box = document.querySelector('.box');
const $box1 = document.querySelector('.box1');
let offset = {x:0, y:0, x1:0, y1:0};
let isDown = false;
let clickedBox; // box, box1 구분

$box.addEventListener('mousedown', (event) => {
    isDown = true;
    clickedBox = $box.className;

    offset.x = $box.offsetLeft - event.clientX;
    offset.y = $box.offsetTop - event.clientY;
});

$box1.addEventListener('mousedown', (event) => {
    isDown = true;
    clickedBox = $box1.className;

    offset.x1 = $box1.offsetLeft - event.clientX;
    offset.y1 = $box1.offsetTop - event.clientY;
});

document.body.addEventListener('mousemove', (event)=> {
    if(!isDown) return;

    if(clickedBox === 'box') {
        $box.style.left = event.clientX + offset.x + 'px';
        $box.style.top = event.clientY + offset.y + 'px';
    } else {
        $box1.style.left = event.clientX + offset.x1 + 'px';
        $box1.style.top = event.clientY + offset.y1 + 'px';
    }
});

$box.addEventListener('mouseup', mouseup);
$box1.addEventListener('mouseup', mouseup);

function mouseup() {
    isDown = false;
    clickedBox = null;
}
