export class Greeter {
    constructor(private name: string) {}
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  
  export function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
  }
  