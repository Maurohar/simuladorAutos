class Auto{
    constructor(id, autoI,marcaI, precioI){
        this.id = id,
        this.auto = autoI,
        this.marca = marcaI,
        this.precio = precioI
        
    }
    //los metodos en class se declaran fuera del constructor.
    mostrarDatosAutos(){
        console.log(`El Auto fue creado por ${this.auto} y su modelo es ${this.marca} y su precio es de ${this.precio}`)
    }
}


//interaciones con los autos.

const auto1 = new Auto(1,"BMW", "318ticompact",1000000)

const auto2 = new Auto(2,"Merecedes Benz", "SLK330", 1500000)

const auto3 = new Auto (3,"Lamborguini", "Diablo", 3000000)

const auto4 = new Auto (4,"Pagani", "Zonda", 4000000)

const auto5 = new Auto (5,"Ford", "Mustang", 500000)

const auto6 = new Auto (6,"Toyota", "Corola", 500000)

const consesionario = [Auto]
console.log(consesionario)
consesionario.push(auto1, auto2, auto3, auto4, auto5, auto6)
console.log(consesionario)



// se va a declarar objetos {}
//const marcaAuto1 = {
    //marca : "BMW",
    //nombre : "318ti",
    //precio : 1000000}

//auto1.mostrarDatosAutos()
//auto2.mostrarDatosAutos()

//Simulador de compra venta de autos.//
function agregarMarca(){
    let marcaIngresada = prompt("Ingrese la Marca del Automotor")
    let nombreModelo = prompt ("Ingrese el Modelo del auto")
    let precioAuto = parseInt(prompt ("Ingrese el precio del Automotor"))
    const autoNuevo = new Auto (consesionario.length+1, marcaIngresada, nombreModelo, precioAuto)
    autoNuevo.mostrarDatosAutos()
    console.log(autoNuevo)
    consesionario.push(autoNuevo)
}

//esta funcion muestra los datos de los autos.
function mostrarDatosAutos(auto){
    console.log(`El modelo del auto fue creado por ${auto.marca} su modelo es ${auto.nombre} y su precio es ${auto.precio}`);

}

//llamamos a la funcion para el prompt se ejecute

agregarMarca()

//ciclo array para recorrer los objetos. FOR OF (for: desde, hasta, actualizacion)

function verAutos(array){
    console.log(`Nuestros Autos son: `)
    for(let auto of consesionario){
        console.log(auto.id, auto.marca, auto.modelo, auto.precio) 
    }
}

//Menu del simulador//
function menu(){
let salirMenu = false

do{
let opcionIngresada = parseInt(prompt(`Ingrese la opcion deseada
        1 - Agregar Marca y modelo
        2 - Borrar datos    
        3 - Consultar catálogo
        0 - Salir del menu`))
    switch(opcionIngresada){
        case 1:
            mostrarDatosAutos()
            console.log("Agregar Marca")
            break
        case 2:
            console.log("Borrar datos")
            break
        case 3: 
            verAutos(consesionario)
            console.log("Consultar catalogo")
            break
        case 0:
            console.log("Gracias por utilizar nuestra APP")
            salirMenu = true
        break   
        default:
            console.log("Opcion no válida, vuelva a intentar")
        break
    }

}while(!salirMenu)
}
menu()
