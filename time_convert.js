function time_converter() {
	input = Number(document.getElementById('input').value);
	minutes = input % 60;
	hours = (input - minutes) / 60;

	document.write(`${input} minutes in hours are: ${hours}:${minutes}.`);
}
