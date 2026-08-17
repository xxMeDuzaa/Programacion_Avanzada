//                                                          //
//   03: Ejercicios sobre Funciones (Consumo de Datos,      //
//    Mapeo de Información, Autenticación de Usuarios)      //
//                                                          //
//          Alumna: Mas Duarte, Melina                      //



//NOTAS PROPIAS
// Usamos "async" porque consultar una API toma tiempo (es asíncrono)
// "fetch" realiza la petición HTTP GET a la URL de la API.
// "await" pausa la ejecución hasta que la API responde.



// Funcion auxiliar para simular btoa en Node.js
function btoa(str) {
    return Buffer.from(str).toString('base64');
}

// PUNTO 1: Consumo de Datos desde una API
async function obtenerUsuarios() {
    try {
        console.log('Obteniendo usuarios de la API...');
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        console.log('Lista de usuarios obtenida:');
        console.log(JSON.stringify(usuarios, null, 2));
    } catch (error) {
        console.error('Error al obtener usuarios:', error.message);
    }
}

// PUNTO 2: Procesamiento de Datos de una API
async function imprimirNombresDeUsuarios() {
    console.log('Procesando nombres de usuarios...');
    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => {
            console.error('Error al obtener usuarios:', err.message);
            return [];
        });
    
    if (usuarios.length === 0) {
        console.log('No se pudieron obtener usuarios');
        return;
    }
    
    console.log('Nombres de usuarios:');
    usuarios.forEach(usuario => {
        console.log(usuario.name);
    });
}

// PUNTO 3: Autenticacion Simulada
const USUARIO_PREDEFINIDO = {
    usuario: 'admin',
    contrasena: '123456'
};

function autenticarUsuario(credenciales) {
    const esValido = credenciales.usuario === USUARIO_PREDEFINIDO.usuario &&
                    credenciales.contrasena === USUARIO_PREDEFINIDO.contrasena;
    
    console.log(`Autenticacion ${esValido ? 'exitosa' : 'fallida'}`);
}

// PUNTO 4: Transformacion de Datos
async function mapearUsuarios() {
    console.log('Mapeando usuarios (nombre y email)...');
    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => {
            console.error('Error al obtener usuarios:', err.message);
            return [];
        });
    
    if (usuarios.length === 0) {
        console.log('No se pudieron obtener usuarios para mapear');
        return;
    }
    
    console.log('Usuarios mapeados (solo nombre y email):');
    usuarios.forEach(usuario => {
        console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
    });
}

// PUNTO 5: Validacion de Formularios
function validarFormulario(formulario) {
    const nombreValido = formulario.nombre && formulario.nombre.trim() !== '';
    const emailValido = formulario.email && formulario.email.trim() !== '';
    const passwordValido = formulario.password && formulario.password.trim() !== '';
    
    const esValido = nombreValido && emailValido && passwordValido;
    
    console.log(`Formulario ${esValido ? 'valido' : 'invalido'}`);
    console.log('Campos:');
    console.log(`  nombre: ${nombreValido ? 'OK' : 'Falta o vacio'}`);
    console.log(`  email: ${emailValido ? 'OK' : 'Falta o vacio'}`);
    console.log(`  password: ${passwordValido ? 'OK' : 'Falta o vacio'}`);
}

// PUNTO 6: Paginacion de Datos
function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    const indiceInicio = (numeroPagina - 1) * elementosPorPagina;
    const indiceFin = indiceInicio + elementosPorPagina;
    const pagina = datos.slice(indiceInicio, indiceFin);
    
    console.log(`Pagina ${numeroPagina}:`);
    pagina.forEach(elemento => {
        console.log(`  ${elemento}`);
    });
    console.log(`Elementos en pagina: ${pagina.length}`);
}

// PUNTO 7: Envio de Datos a una API
async function enviarDatos(data) {
    try {
        console.log('Enviando datos a la API...');
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const respuestaJson = await respuesta.json();
        console.log('Datos enviados correctamente:');
        console.log('Respuesta de la API:');
        console.log(JSON.stringify(respuestaJson, null, 2));
    } catch (error) {
        console.error('Error al enviar datos:', error.message);
    }
}

// PUNTO 8: Busqueda de Usuarios
async function buscarUsuarioPorEmail(email) {
    console.log(`Buscando usuario con email: ${email}...`);
    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => {
            console.error('Error al obtener usuarios:', err.message);
            return [];
        });
    
    if (usuarios.length === 0) {
        console.log('No se pudieron obtener usuarios para buscar');
        return;
    }
    
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
    
    if (usuarioEncontrado) {
        console.log('Usuario encontrado:');
        console.log(JSON.stringify(usuarioEncontrado, null, 2));
    } else {
        console.log(`No se encontro usuario con email ${email}`);
    }
}

// PUNTO 9: Generacion de Token de Autenticacion
function generarToken(usuario) {
    const usuarioString = JSON.stringify(usuario);
    const token = btoa(usuarioString);
    
    console.log('Token generado:');
    console.log(`  Usuario: ${usuario.nombre || usuario.name}`);
    console.log(`  Token: ${token}`);
}

// PUNTO 10: Actualizacion de Informacion del Usuario
function actualizarUsuario(usuario, cambios) {
    console.log('Usuario original:');
    console.log(JSON.stringify(usuario, null, 2));
    
    for (let clave in cambios) {
        if (cambios.hasOwnProperty(clave)) {
            usuario[clave] = cambios[clave];
        }
    }
    
    console.log('Usuario actualizado:');
    console.log(JSON.stringify(usuario, null, 2));
}

// ============================================================
// FUNCION PRINCIPAL QUE ORQUESTA TODA LA EJECUCION
// ============================================================
async function ejecutarTodo() {
    console.log('\n=== INICIANDO EJECUCION COMPLETA ===\n');
    
    // Punto 1
    console.log("------------------ Punto 1 ------------------");
    await obtenerUsuarios();
    
    // Punto 2
    console.log("\n------------------ Punto 2 ------------------");
    await imprimirNombresDeUsuarios();
    
    // Punto 3
    console.log("\n------------------ Punto 3 ------------------");
    const credencialesCorrectas = { usuario: 'admin', contrasena: '123456' };
    const credencialesIncorrectas = { usuario: 'user', contrasena: 'password' };
    autenticarUsuario(credencialesCorrectas);
    autenticarUsuario(credencialesIncorrectas);
    
    // Punto 4
    console.log("\n------------------ Punto 4 ------------------");
    await mapearUsuarios();
    
    // Punto 5
    console.log("\n------------------ Punto 5 ------------------");
    const formularioCompleto = {
        nombre: 'Melina',
        email: 'melina@email.com',
        password: 'secreto123'
    };
    const formularioIncompleto = {
        nombre: 'Melina',
        email: '',
        password: 'secreto123'
    };
    validarFormulario(formularioCompleto);
    validarFormulario(formularioIncompleto);
    
    // Punto 6
    console.log("\n------------------ Punto 6 ------------------");
    const datosPrueba = Array.from({ length: 12 }, (_, i) => `Elemento ${i + 1}`);
    obtenerPagina(datosPrueba, 1);
    obtenerPagina(datosPrueba, 2);
    obtenerPagina(datosPrueba, 3);
    
    // Punto 7
    console.log("\n------------------ Punto 7 ------------------");
    const nuevoPost = {
        title: 'Mi primer post desde JavaScript',
        body: 'Este es el contenido de mi post',
        userId: 1
    };
    await enviarDatos(nuevoPost);
    
    // Punto 8
    console.log("\n------------------ Punto 8 ------------------");
    await buscarUsuarioPorEmail('Sincere@april.biz');
    await buscarUsuarioPorEmail('email_inexistente@test.com');
    
    // Punto 9
    console.log("\n------------------ Punto 9 ------------------");
    const usuarioToken = {
        id: 1,
        nombre: 'Melina Mas Duarte',
        email: 'melina@email.com',
        rol: 'estudiante'
    };
    generarToken(usuarioToken);
    
    // Punto 10
    console.log("\n------------------ Punto 10 ------------------");
    const usuarioOriginal = {
        nombre: 'Ana Garcia',
        edad: 25,
        email: 'ana@email.com',
        ciudad: 'Buenos Aires'
    };
    const cambiosUsuario = {
        edad: 26,
        ciudad: 'Cordoba',
        telefono: '123456789'
    };
    actualizarUsuario(usuarioOriginal, cambiosUsuario);
    
    console.log('\n=== EJECUCION COMPLETA FINALIZADA ===\n');
}


ejecutarTodo();