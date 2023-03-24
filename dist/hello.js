"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = exports.Greeter = void 0;
class Greeter {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}
exports.Greeter = Greeter;
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
exports.sayHello = sayHello;
