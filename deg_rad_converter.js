function converter(deg) {
	rad = deg * (Math.PI / 180);
	document.write(`${deg} degrees are ${rad} radians.`);
}

converter(45);
