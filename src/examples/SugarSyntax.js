//SPREAD OPERATE (...)

const numeros = [1, 2, 3, 4, 5];
const mas_numeros = numeros.concat([6, 7, 8, 9, 10]);

//spread operator

const mas_numeros_spread = [...numeros, 6, 7, 8, 9, 10];
console.log(mas_numeros_spread);

//---------------------------------------------------------------------------

//DESTRUCTURING ASSIGNMENT

//arrays
const frutas = ['manzana', 'banana', 'cereza', 'durazno'];

const banana = frutas[1];

//destructuring
const [ , fruta2 ] = frutas;
console.log(fruta2);

//objects
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

console.log(persona.nombre);

//destructuring

const { nombre, edad, ciudad } = persona;

console.log(nombre, edad, ciudad);

//---------------------------------------------------------------------------

//CONDICIONAL

let mensaje;

if (edad >= 18) {
    mensaje = 'Sos mayor de edad';
} else {
    mensaje = 'Sos menor de edad';
}
console.log(mensaje);

const sugarMensaje = edad >= 18 ? 'Sos mayor de edad' : 'Sos menor de edad';

console.log(sugarMensaje);

//---------------------------------------------------------------------------

