"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dog = {
    name: "tim",
    age: 10,
    colors: ["brown", "black"]
};
// Version 2 of typing
// const dog2 = {
//     name: "tim",
//     age: 10,
//     colors: ["brown", "black"]
// } as Animal;
const printAnimal = (animal) => {
    console.log(animal.name, animal.age);
};
printAnimal(dog);
const monk = {
    diet: "food",
    name: "Time1",
    age: 2,
    colors: ["brown", "black"]
};
// Choose the lesser evil;
const s = new Set();
const s2 = new Set();
const printName = (animal) => {
    console.log(animal.name);
};
var ShirtSize;
(function (ShirtSize) {
    ShirtSize["Small"] = "small";
    ShirtSize["Medium"] = "medium";
    ShirtSize["Large"] = "large";
})(ShirtSize || (ShirtSize = {}));
// ENUMS
const getShirtPrice = (shirtSize) => {
    switch (shirtSize) {
        case ShirtSize.Small:
            return 10;
        case ShirtSize.Medium:
            return 20;
        case ShirtSize.Large:
            return 30;
    }
};
const price = getShirtPrice(ShirtSize.Small);
// custom type guard
const isFish = (animal) => {
    return animal.swim !== undefined;
};
const callAnimalFunc = (animal) => {
    // (animal as Fish).swim(); - nope
    if (isFish(animal)) {
        animal.swim();
        return;
    }
    animal.bark();
};
// ignoring type
let v = 2;
// @ts-ignore
x = "hello";
