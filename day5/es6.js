export class PersonClass {
  isLive;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isLive = true;
  }

  greetings() {
    console.log(`Hola soy ${this.name}`);
  }

  kill() {
    this.isLive = false;
  }
}

const p4 = new PersonClass('nico', 32);
p4.greetings();
p4.kill();

class Student extends PersonClass {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  greetings() {
    super.greetings();
    console.log(`mi edad es ${this.age} y estudio ${this.course}`);
  }
}

const s1 = new Student('Mariano', 32, 'programming');
s1.greetings();
console.log(s1);
