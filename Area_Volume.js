function area_volume(width, height, depth) {
	area = width * height;
	volume = width * height * depth;

	document.write(`The area of the box is: ${area} <br> The volume of the box is : ${volume}`)
}

area_volume(3, 5, 7)