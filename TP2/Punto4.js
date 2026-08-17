//                                                   //
//   04: Ejercicios sobre Operaciones con Arrays     //
//                                                   //
//          Alumna: Mas Duarte, Melina               //


// PUNTO 1: Agregar y Eliminar Elementos
console.log("------------------ Punto 1 ------------------");
const frutas = ["manzana", "banana", "pera"];

frutas.push("uva"); // Agrega al final
console.log("Array tras push:", frutas);

frutas.pop(); // Elimina el último elemento
console.log("Array tras pop:", frutas);


// PUNTO 2: Array Bidimensional
console.log("------------------ Punto 2 ------------------");
const matriz = [
    [1, 2, 3], //0
    [4, 5, 6],  //1
    [7, 8, 9]  //2
];

const filaBuscada = 1;
const columnaBuscada = 1;
const elemento = matriz[filaBuscada][columnaBuscada];

console.log(`Buscando en la fila ${filaBuscada} y columna ${columnaBuscada}...`);
console.log("Elemento encontrado:", elemento);

    
// PUNTO 3: Iterar sobre un Array
console.log("------------------ Punto 3 ------------------");
for (let i = 0; i < frutas.length; i++) {     //imprime cada elemento
    console.log(frutas[i]);
}


// PUNTO 4: Uso de map
console.log("------------------ Punto 4 ------------------");
function elevarAlCuadrado(arrayNumeros) {
    const cuadrados = arrayNumeros.map(num => num ** 2);
    console.log(cuadrados);
    return cuadrados;
}

elevarAlCuadrado([2, 4, 6, 8]);


// PUNTO 5: Uso de filter
console.log("------------------ Punto 5 ------------------");
function filtrarMayoresDe(arrayNumeros, valorReferencia) {
    const filtrados = arrayNumeros.filter(num => num > valorReferencia);
    console.log(filtrados);
    return filtrados;
}

filtrarMayoresDe([5, 12, 8, 20, 3, 15], 10);


// PUNTO 6: Uso de reduce
console.log("------------------ Punto 6 ------------------");
function sumarElementos(arrayNumeros) {
    const suma = arrayNumeros.reduce((acumulador, num) => acumulador + num, 0);
    console.log("La suma total es:", suma);
    return suma;
}

sumarElementos([10, 20, 30, 40]);


// PUNTO 7: Uso de some
console.log("------------------ Punto 7 ------------------");
const numerosSome = [3, 7, 9, 12, 5];
//const numerosSome = [3, 7, 9, 2, 5];
const hayMayorQue10 = numerosSome.some(num => num > 10);

console.log("¿Hay algun numero mayor que 10?:", hayMayorQue10);


// PUNTO 8: Uso de every
console.log("------------------ Punto 8 ------------------");
const numerosEvery = [4, 8, 15, 16, 23, 42];
//const numerosEvery = [4, 8, 15, 16, 23, -15, 42];
const todosPositivos = numerosEvery.every(num => num > 0);

console.log("¿Todos los números son positivos?:", todosPositivos);


// PUNTO 9: Uso de find
console.log("------------------ Punto 9 ------------------");
const personas = [
    { nombre: "Lucia", edad: 29 },
    { nombre: "Carlos", edad: 38 },
    { nombre: "Mariana", edad: 42 },
    { nombre: "Juan", edad: 20 }
];

const primeraMayorDe30 = personas.find(persona => persona.edad > 30);
console.log("Primera persona mayor de 30 años:", primeraMayorDe30);


// PUNTO 10: Uso de sort
console.log("------------------ Punto 10 ------------------");
const palabras = ["pera", "manzana", "banana", "durazno", "anana"];
palabras.sort();

console.log("Palabras ordenadas alfabeticamente:", palabras);