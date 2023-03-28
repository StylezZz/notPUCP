//Un objeto puede tener funciones como atributos
const vehiculo={
    marca: 'Audi',
    modelo: 'q5',
    mantenimientos: [
        {
            fecha: '2020-01-01',
            kilometraje: 10000,
        }
        ,
        {
            fecha: '2020-02-01',
            kilometraje: 20000,
        }
    ],
    imprimirMarcayModelo: function() {
        console.log("This: ", this)
        console.log("Marca: ", this.marca)
        console.log("Modelo: ", this.modelo)
    }
}

vehiculo.imprimirMarcayModelo()

//NO COPIAR OBJETOS DE LA SIGUIENTE MANERA

const vehiculo2 = vehiculo;
vehiculo2.modelo = 'q3';

console.log("vehiculo1: ", vehiculo)
console.log("vehiculo2: ", vehiculo2)

//Funcion que crea objetos
function crearVehiculo(pMarca,pModelo,pAnio,pMantenimientos) {
    const vehiculoGenerico = {
        marca: pMarca,
        modelo: pModelo,
        anio: pAnio,
        mantenimientos: pMantenimientos
    };
    return vehiculoGenerico;
}

//funcion creadora de mantenimientos
function creadorMantemiento(){
    const objMantenimiento = {
        fecha: '',
        kilometraje: 0,
        aceite: false
    }
    return objMantenimiento;
};

const mazdaCX3 = crearVehiculo('Mazda','q3',2023,[]);
const bmwX4 = crearVehiculo('BMW','X4',2024,[]);


console.log("mazdaCX3: ", mazdaCX3);
console.log("bmwX4: ", bmwX4);