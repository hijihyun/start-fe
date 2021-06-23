function random() {
	let min, max;

	if (arguments[0].length === 1) {
		max = parseInt(arguments[0][0]);
		min = 0;
	} else {
		min = parseInt(arguments[0][0]);
		max = parseInt(arguments[0][1]);
	}
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	return randomNumber;
}

export default random;
