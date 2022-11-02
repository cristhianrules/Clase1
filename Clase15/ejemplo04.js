function todoslosParrafos() {
    const allparrafos = document.getElementsByTagName("p"); // tambien se puede usar querySelectorAll().
    console.log(allparrafos)

    const num = allparrafos.length; // 7

    alert(`Hay ${num} elementos <p> dentro de este documento.`);

    //alert(`La suma de los p es ` + allparrafos.length);
}

function parrafosCaja1() {
    
const caja1 = document.getElementById('caja1');
const caja1parrafos = caja1.getElementsByTagName('p');

const num = caja1parrafos.length;

alert(`Hay ${num} elementos <p> dentro de este documento.`);
}

function parrafosCaja2() {
    
    const caja2parrafos = document.querySelectorAll('#caja2 p');
    console.log(caja2parrafos);
    
    const num = caja2parrafos.length;
    
    alert(`Hay ${num} elementos <p> dentro de este documento.`);
    }