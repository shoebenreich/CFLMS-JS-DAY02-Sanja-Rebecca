function calcAge(birthYear) {
	currYear = new Date().getFullYear();
	age = currYear - birthYear;
	document.write(`You are either ${age} or ${age - 1}.`);
}

calcAge(1987);
