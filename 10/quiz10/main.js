import avg from './avg.js';
import random from './random.js';

document.getElementById('avg').innerHTML = avg([1, 3, 5], 9, 5, 'a');
document.getElementById('random').innerHTML = random(5);
