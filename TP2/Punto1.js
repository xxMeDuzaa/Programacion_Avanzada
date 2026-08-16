//                                  //
//   01: Ejercicios sobre Objetos   //
//                                  //

// PUNTO 1
console.log ("----------------- Punto 1 ---------------------")
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
}

console.log("Titulo: ", libro.titulo); 
console.log("Autor:  ", libro.autor); 
console.log("Anio: ", libro.anio); 


//PUNTO 2
console.log ("----------------- Punto 2 ---------------------")
const estudiante = {
    nombre_completo: "Juan Pérez",
    edad: 20,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Usuahia",
        pais: "Argentina",
    }
};

console.log ("Direccion del estudiante: ", estudiante.nombre_completo)
console.log (
  `Dirección: ${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`
);


//PUNTO 3
console.log ("----------------- Punto 3 ---------------------")
libro.descripción = function() {
  return `"${this.titulo}" fue escrito por ${this.autor}.`;
};

console.log(libro.descripción());

//PUNTO 4
console.log ("----------------- Punto 4 ---------------------")
const producto = {
    nombre: "Kindel",
    precio: 500,
    disponible: true,
}

for (let propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`);
}
