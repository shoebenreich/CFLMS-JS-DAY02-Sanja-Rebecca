function grades() {
	math = Number(document.getElementById('math_grade').value); // #math_grade
	physics = Number(document.getElementById('physics_grade').value);
	english = Number(document.getElementById('english_grade').value);
	sum = math + physics + english;
	aver = sum / 3;
	document.write(`Sum: ${sum} <br> Average: ${aver}`);
}
