function calcAge(birthYear, currYear) {
	age = currYear - birthYear
	document.write(`You are either ${age} or ${age - 1}.`);
}

calcAge(1987, 2020)