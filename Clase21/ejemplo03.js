const numeros = [1, 7, 58, 200, 7, 15];

var mayor = 0;

for (var i=0; i<numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i]
    }
}

console.log(`El mayor de ${numeros} es ${mayor}`)