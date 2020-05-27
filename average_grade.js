let math = document.getElementByld(math_grade).value
let physics = document.getElementByld(physics_grade).value
let english = document.getElementByld(english_grade).value

const grades = function(math, physics, english) {
	sum = math + physics + english;
	aver = sum / 3;
	document.write(`Sum: ${sum} <br> Average: ${aver}`);
}

grades(math, physics, english);

let result = document.getElementById("result").innerHTML= result;