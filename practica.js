/*
1 .- Crear una función que encuentre el número más repetido en un array
Ejemplo Input - [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6
*/
function NumeroMasRepetido(arr){
    const arregloUnicos = arr.filter((x, i, a) => a.indexOf(x) == i)
    let cantValorIni=0
    let nuevoArreglo=[]
    for (let i = 0; i < arregloUnicos.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arregloUnicos[i]==arr[j]){
                cantValorIni++
            }
        }
        nuevoArreglo.push({'item':arregloUnicos[i], 'cant': cantValorIni})
        cantValorIni=0
    }
    let mayor=0
    let itemB
    for (let k = 0; k < nuevoArreglo.length; k++) {
        if(nuevoArreglo[k].cant>=mayor)
        {
            mayor=nuevoArreglo[k].cant
            itemB=nuevoArreglo[k].item
        }
    }
    return itemB
}
console.log(NumeroMasRepetido([3,6,1,8,2,3,6,3,2,5,6]))
/*
2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
Ejemplo input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
Salida → ['e','a','d','f']
*/
function BuscarLetras(arr){
    let arregloLetras=[]
    for (let index = 0; index < arr.length; index++) {
        if(typeof(arr[index]) == 'string') {
            arregloLetras.push(arr[index])
        }
    }
    return arregloLetras
}
//console.log(BuscarLetras([8,'e',7,2,'a','d','f',2,3,1,4,3]))

/*
3.- Crear una función que busque el número más grande en un arreglo
Ejemplo input [1,4,7,2,4,1,9,4,0,2,4,5,12]
Salida -> 12
*/

function NroGrande(arr){
    let puntero=arr[0]
    for (let index = 0; index < arr.length; index++) {
        if(puntero < arr[index]) {
            puntero=arr[index]
        }
    }
    return puntero
}
//console.log(NroGrande([1,4,7,2,4,1,9,4,0,2,4,5,12]))

/*
4.- Crear una función que busque el número más pequeño en el arreglo
Ej. [1,4,5,-1,-7,2,3,9]
Salida -->  -7
*/

function NroPequeno(arr){
    let puntero=arr[0]
    for (let index = 0; index < arr.length; index++) {
        if(puntero > arr[index]) {
            puntero=arr[index]
        }
    }
    return puntero
}
//console.log(NroPequeno([1,4,5,-1,-7,2,3,9]))

/*
5.- Crear una clase llamada  Contacto con los siguientes datos
Nombre
Apellidos
Telefono
Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre
*/
class Contacto{
    constructor(nombre, apellidos, telefono){
        this.Nombre = nombre
        this.Apellidos = apellidos
        this.Telefono = telefono
    }
}
class ListaContactos{
    constructor(){
        this.lista=[]
    }
    Agregar(contacto){
        this.lista.push(contacto)
    }
    Buscar(nombre){
        for (let index = 0; index < this.lista.length; index++) {
            if(nombre == this.lista[index].Nombre){
                return this.lista[index]
            }
        }
        return 'No existe contacto'
    }
}
const contacto_1 = new Contacto('Juan','Perez','1')
const contacto_2 = new Contacto('Saul','Ticona','2')

const listaContactos = new ListaContactos()
listaContactos.Agregar(contacto_1)
listaContactos.Agregar(contacto_2)

// console.log(listaContactos)
// console.log(listaContactos.Buscar('Saul'))
// console.log(listaContactos.Buscar('Juan'))
// console.log(listaContactos.Buscar('Marco'))