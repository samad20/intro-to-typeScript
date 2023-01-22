class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
/////////////////////////////////////////////////
// private

class Animal1 {
  protected name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal {
  constructor(name: string) {
    super("Rhino");
  }
}

class Employee1 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal1("Goat");
let rhino = new Rhino("cat");
/////////////////////////////////////////////////
// Accessors

const fullNameMaxLen = 10;

class Employee2 {
  private _fullName: string = "";

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLen) {
      throw new Error("fullName has a max length of " + fullNameMaxLen);
    }
    this._fullName = newName;
  }
  get fullName(): string {
    return this._fullName;
  }
}

let employee2 = new Employee2();

employee2.fullName = "musaab m";
console.log(employee2.fullName);
