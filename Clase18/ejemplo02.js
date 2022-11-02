const alumnos =[
{
    nombre: 'Flavia', edad: 10
},
{
    nombre: 'Santi', edad: 3
},
{
    nombre: 'Juan', edad: 5
},
{
    nombre: 'Marcos', edad: 2
},
{
    nombre: 'Rodrigo', edad: 7
},
]

const chicos = alumnos.filter(
    alumno => alumno.edad <=4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<p> Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}.</p>`)
}