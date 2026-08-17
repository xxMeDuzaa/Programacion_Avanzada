//                                          //
//   02: Ejercicios sobre Funciones         //
//                                          //
//    Alumna: Mas Duarte, Melina            //

// PUNTO 1
console.log ("----------------- Punto 1 ---------------------");
function suma(a,b){
    console.log("La suma es:", a+b);
};

suma(5,10);
suma(-2,8);


// PUNTO 2
console.log ("----------------- Punto 2 ---------------------");
function multiplicar(a,b){
    console.log("El producto es:", a*b);
};

multiplicar(5,10);
multiplicar(-2,8);


// PUNTO 3
console.log ("----------------- Punto 3 ---------------------");
function saludar(nombre = "Invitado") {
    console.log(`Hola ${nombre}`);
}

saludar('Melina');
saludar();


// PUNTO 4
console.log("------------------ Punto 4 ------------------");
function crearPersona(nombre, edad) {
    const persona = { nombre: nombre, edad: edad };
    console.log(persona);
}

crearPersona('Melina', 24);


// PUNTO 5
console.log("------------------ Punto 5 ------------------");
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
    console.log(persona);
}

const usuario = { nombre: 'Ana', edad: 20 };
actualizarEdad(usuario, 21);


// PUNTO 6
console.log("------------------ Punto 6 ------------------");
function factorial(numero, base = 1, resultado = 1) {
    if (base > numero) {
        console.log(`El factorial es: ${resultado}`);
        return;
    }
    factorial(numero, base + 1, resultado * base);
}

factorial(5);
factorial(20);


// PUNTO 7
console.log("------------------ Punto 7 ------------------");
function despedir(nombre) {
    function adios() {
        console.log(`¡Hasta luego, ${nombre}!`);
    }
    adios();
}

despedir('Melina');
despedir('Ana');


// PUNTO 8
console.log("------------------ Punto 8 ------------------");
function procesarArray(array, funcion) {
    for (let i = 0; i < array.length; i++) {
        funcion(array[i]);
    }
}

function multiplicarxDos(numero) {
    console.log(numero * 2);
}

procesarArray([1, 2, 3, 4], multiplicarxDos);


// PUNTO 9
console.log("------------------ Punto 9 ------------------");
function crearMultiplicador(x) {
    function multiplicar(numero) {
        console.log(numero * x);
    }
    multiplicar(y);
}
y=10                              //valor de multiplicar
crearMultiplicador(5);           //valor de x


// PUNTO 10
console.log("------------------ Punto 10 ------------------");
const sumarAnonima = function(a, b) {
    console.log(a + b);
};

sumarAnonima(10, 15);