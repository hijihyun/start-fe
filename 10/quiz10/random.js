function random(min, max) {
	if (!max) {
		max = min;
		min = 0;
	}
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	return randomNumber;
}

export default random;
