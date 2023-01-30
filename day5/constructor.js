const p1 = {
  name: 'pepe',
  age: 22,
  greetings() {
    console.log(`Hello ${this.name}`);
  },
};
const p2 = {
  name: 'Ernesto',
  age: 28,
};

function Persona(name, age) {
  this.name = name;
  this.age = age;
}

Persona.prototype.greetings = function () {
  console.log(`Hola soy ${this.name}`);
};

const p3 = new Persona('Luisa', 25);
p3.greetings();
