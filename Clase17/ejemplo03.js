const numeros = [1, 5, 10, 15];

const dobles = numeros.map(function(num){
    return num*2;
})
// de esta forma genero un nuevo array a la info de numeros
console.log(dobles); // 2, 10, 20, 30
console.log(numeros);