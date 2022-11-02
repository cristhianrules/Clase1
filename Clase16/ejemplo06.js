const alternar = document.getElementsByClassName('alternar')[0]

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo');
});

// classList > representa a una lista de clases asignadas
// toggle > cambiar una clase
// add > agregar una clase
// remove > remueve una o + clases