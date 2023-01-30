//Literal object => Creation of an object.

const obj = { breed: 'husky' };

const obj1 = Object.create(obj);
console.log('obj', obj);
console.log('obj1', obj1.breed);

//Factory

function createFoo() {
  //TO DO...
  return { foo: 'foo' };
}

//Patron Constructor

function bar() {
  console.log('soy bar');
}
//Patrones de ejecucion
//USO: patron funcion
bar();
//USO: patron method
const obj2 = {
  tururu: bar,
};

obj2.tururu();

//USO: patron constructor

const newObject = new bar();
