const valor1 = prompt('Ingrese su primer numero',''); // 5
const valor2 = prompt('Ingrese su segundo numero',''); // 2

const suma = parseInt(valor1) + parseInt(valor2);

const producto = valor1 * valor2; // con multiplicacion no concatena, no es necesario la funcion parseInt

// parseInt > funcion que el dato lo convierte en un numero entero. En otro caso lo concatena. 
// sin parseInt el resultado seria 52.
console.log(suma) // con parseInt 7 - sin parseInt 52
