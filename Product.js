function product(array) {
	result = 1;
	console.log(array.length);
	for (i = 0; i < array.length; i++) {
		result *= array[i];
		console.log(i);
	}
	document.write(`The product of your array is ${result}`);
}
var b = [1, 3, 7, 10, 2];
console.log(b);
product(b);