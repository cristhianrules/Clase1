const link = document.getElementById('link');

link.addEventListener('click', function(e){
    e.preventDefault(); // frena el funcionamiento del link para alertar sobre la funcion.
    alert('Quisiste ir a: ' + e.currentTarget.href)
})