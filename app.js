function createInstructor(firstName, lastName) {
  return { firstName, lastName };
}

const favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  }
};

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    }
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");

console.log(createInstructor("Elie", "Schoppik"));
console.log(instructor[favoriteNumber]);
console.log(instructor2.sayHi());
console.log(instructor2.sayBye());
console.log(d.bark());
console.log(s.bleet());
