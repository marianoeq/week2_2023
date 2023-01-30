const mammal = { hasHair: true };
const human = { teeth: 32 };
//const gwen = { age: 19 };

//gwen.__proto__ = human; // Ahora gwen apuna a las propiedades q tiene human
// gwen.teeth = 30;
//console.log(gwen);

//console.log(gwen.hasOwnProperty('age'));

let gwen = Object.create(human);
console.log(gwen);
