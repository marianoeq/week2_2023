// cuando creo un onbjeto siempre lo guardo en una cosntante, ya que no voy a queder modificar el objeto.

const obj = { 0: 'A', foo: 'B', 1: 2 }; // objeto literal
const obj1 = new Object();

// Obtener el valor de un objeto a partir de bracket notation
console.log(obj[0]);
console.log(obj['foo']);
console.log(obj[1]);

const arr = ['a'];
arr.foo = 'agregado';
console.log(arr[1]);

const func = () => {};

func.prop = 23;

console.log(func);

isNaN(''); // True
Number.isNaN(''); // True
Number.isNaN('' * 2); // False

let ticket = { id: 0 };
let sameTicket = ticket;
if (ticket === sameTicket) {
  console.log('this is true');
}

if (ticket === { id: 0 }) {
  // => Nunca va a entrar al if xq hay dos objetos distintos. tickey y {id:0}
  console.log('this is false');
}
