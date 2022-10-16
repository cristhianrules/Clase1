const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
const numeros = [12,34,56,68,70,998]

console.log(dias);
console.log(numeros);

console.log(dias.length); // cantidad // 5
console.log(dias[1]); // Martes, porque la posicion siempre comienza desde 0.
 const ultimo =dias[dias.length-1]; // JUEVES = 5 (cantidad total) -1 (cantidad de dias en descuento)
 console.log(ultimo);

 const frutas = ['palta', 'frutilla', 'manzana', 'banana', 'naranja', 'mandarinas', 'pomelo']
 console.log(frutas);
 console.log(frutas.length); // 7
 console.log(frutas[frutas.length-1]); // 7 - 1 = 6

 let seleccionado = 2;
 console.log(frutas[seleccionado]) // manzana

 seleccionado = 3;
 console.log(frutas[seleccionado]); // banana
