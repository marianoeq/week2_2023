const arrOfNum = [10, 20, 40, 50];
console.log(arrOfNum);
let user = 'Mariano';

console.log(user[1]);
console.log(user[0]);
arrOfNum[0] = 1000;
//
// user[0] = 'l';

const arrOfNumFreeze = Object.freeze(arrOfNum);
console.log(arrOfNumFreeze);

//Casting => Proceso de convertir
console.log('4' + 4); //44 string
console.log(4 + '4'); // 44 string
let z = 4;
console.log('cuatro' * z); //NaN

//Casting booleans
//Falsy
console.log('Falsey values');
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(''));
console.log(Boolean(NaN));

//Truthy values => todos los que no figuran arrriba
