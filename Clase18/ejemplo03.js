const empleados =[
{
    nombre: 'Flavia', trabajo: 'desarrollador'
},
{
    nombre: 'Sabrina', trabajo: 'abogado'
},
{
    nombre: 'Federico', trabajo: 'jardinero'
},
{
    nombre: 'Carlos', trabajo: 'maestro'
},
{
    nombre: 'Martina', trabajo: 'desarrollador'
}
]


const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)

const noDesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador' // !== es para seleccionar los que no pertenecen a la familia desarrollador
)

console.log(desarrollador)
console.log(noDesarrollador)