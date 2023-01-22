// no constructors
// class Employee {
//   id!: number;
//   name!: string;
//   address!: string;
// }

// let john = new Employee();
// john.id = 1122;
// john.name = "john";
// john.address = "11 Lake Cypress";
// console.log(john);

// with constructors
class Employee {
  private id: number;
  private name: string;
  private address: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  getnameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1122, "john", "11 Lake Cypres");
console.log(john.getnameWithAddress());
// isn't accessible from outside the class since it's private
// console.log(john.name);
