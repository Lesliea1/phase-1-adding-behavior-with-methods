// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}

const fluffyCat = new Cat("Fluffy", "female");
console.log(fluffyCat.speak()); // Output: "Fluffy says meow!"

const maxDog = new Dog("Max", "male");
console.log(maxDog.speak()); // Output: "Max says woof!"

const pollyBird = new Bird("Polly", "male");
console.log(pollyBird.speak()); // Output: "It's me! Polly, the parrot!"

const lucyBird = new Bird("Lucy", "female");
console.log(lucyBird.speak()); // Output: "Lucy says squawk!"
