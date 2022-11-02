function validarLargo (texto,LargoRequerido){
    return texto.lenght >= LargoRequerido
}

function validarForm (){
    const nombreValido = true;
    const passWordValido = validarLargo (document,form1.text1.value, 5);

    const resultado = nombreValido && passWordValido;

    if(resultado){
        alert('Es válido')
    } else {
        alert('NO es válido')
    }
}