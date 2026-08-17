//                                     //
//   01: Ejercicios sobre Objetos      //
//                                     //
//   Alumna: Mas Duarte, Melina        //

// PUNTO 1
console.log ("----------------- Punto 1 ---------------------");
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
}

console.log("Titulo: ", libro.titulo); 
console.log("Autor:  ", libro.autor); 
console.log("Anio: ", libro.anio); 


//PUNTO 2
console.log ("----------------- Punto 2 ---------------------");
const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    direccion: {
        calle: "Maipu 5",
        ciudad: "Usuahia",
        pais: "Argentina",
    }
};

console.log ("Direccion del estudiante: ", estudiante.nombre);
console.log (
  `Dirección: ${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`
);


//PUNTO 3
console.log ("----------------- Punto 3 ---------------------");
libro.descripción = function() {
  return `"${this.titulo}" fue escrito por ${this.autor}.`;
};

console.log(libro.descripción());


//PUNTO 4
console.log ("----------------- Punto 4 ---------------------");
const producto = {
    nombre: "Kindel",
    precio: 500,
    disponible: true,
}

for (let propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`);
}


//PUNTO 5
console.log ("----------------- Punto 5 ---------------------");
producto.precio = 1350;

console.log("Producto Actualizado: ", producto);


//PUNTO 6
console.log ("----------------- Punto 6 ---------------------");
function tienePropiedad(objeto, propiedad) {
  return propiedad in objeto;
}

console.log("¿Tiene la propiedad 'precio'?:", tienePropiedad(producto, "precio"));
console.log("¿Tiene la propiedad 'descuento'?:", tienePropiedad(producto, "descuento"));


//PUNTO 7
console.log ("----------------- Punto 7 ---------------------");
console.log("Antes de eliminar 'disponible': ", producto);
delete producto.disponible;
console.log("Despues de eliminar 'disponible': ", producto);


//PUNTO 8
console.log ("----------------- Punto 8 ---------------------");
const persona1 = { nombre: "Carlos", edad: 30 };
const persona2 = { profesion: "Ingeniero", ciudad: "Mendoza" };

console.log("Objeto no combinado:", persona1);
console.log("Objeto no combinado:", persona2);

const personaCombinada = Object.assign({}, persona1, persona2);

console.log("Objeto combinado:", personaCombinada);


//PUNTO 9
console.log ("----------------- Punto 9 ---------------------");
const estudianteCopia = JSON.parse(JSON.stringify(estudiante));

// Modificacion de la copia
estudianteCopia.nombre = "Sofia";
estudianteCopia.direccion.ciudad = "Córdoba";

console.log("Copia modificada:", estudianteCopia.nombre, "-", estudianteCopia.direccion.ciudad);
console.log("Original sin alteración:", estudiante.nombre, "-", estudiante.direccion.ciudad);


//PUNTO 10
console.log ("----------------- Punto 10 ---------------------");
Object.defineProperty(libro, "anioPublicacion", {   //definicion de reglas de acceso al objeto
  get() {
    return this.anioDePublicacion;
  },
  set(nuevoAnio) {
    if (typeof nuevoAnio === "number" && nuevoAnio > 0) {
      this.anioDePublicacion = nuevoAnio;
    } else {
      console.log("Año no válido");
    }
  }
});

console.log("Año de publicación actual:", libro.anio); //antes de modificar

libro.anioPublicacion = 1970; //le asigna la modificacion del  dato

// Uso del getter
console.log("Año de publicación actualizado vía Getter:", libro.anioPublicacion); //printea la modificacion