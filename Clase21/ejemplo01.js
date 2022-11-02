const edad = parseInt(prompt('Ingrese edad en números', ''));

if (Number.isNaN(edad)){
    alert('Debes ingresar un numero')
} else if (edad >= 18) {
    document.write('Podes conducir.')
} else {
    document.write('NO podes conducir.')
}