export type Animal = {
    name: string;
    age: number;
    colors: string[] | string;
    legs?: number;
}

const dog: Animal = {
    name: "tim",
    age: 10,
    colors: ["brown", "black"]
}

// Version 2 of typing
// const dog2 = {
//     name: "tim",
//     age: 10,
//     colors: ["brown", "black"]
// } as Animal;


const printAnimal = (animal: Animal): void => {
    console.log(animal.name, animal.age)
}

printAnimal(dog);

type Farm = {
    animals: Animal[],
    animalNamesToObject: {
        [name: string]: Animal
    }
}

// intersection of 2 types
type Monkey = {
    diet: string;
} & Animal;

const monk: Monkey = {
    diet: "food",
    name: "Time1",
    age: 2,
    colors: ["brown", "black"]
}

// Choose the lesser evil;
const s: Set<number> = new Set();
const s2: Set<number> = new Set<number>();


interface Animal2 {
    name: string
}

type Fish = {
    name: string,
    swim: () => void
}

type Doggie = {
    name: string,
    bark: () => void
}
const printName = (animal: Animal2) => {
    console.log(animal.name)
}

enum ShirtSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

// ENUMS
const getShirtPrice = (shirtSize: ShirtSize) => {
    switch (shirtSize) {
        case ShirtSize.Small: 
            return 10;
        case ShirtSize.Medium:
            return 20;
        case ShirtSize.Large:
            return 30;
    }
}

const price = getShirtPrice(ShirtSize.Small);

// custom type guard
const isFish = (animal: Fish | Doggie): animal is Fish => {
    return (animal as Fish).swim !== undefined;
}

const callAnimalFunc = (animal: Fish | Doggie) => {
    // (animal as Fish).swim(); - nope
    if (isFish(animal)) {
        animal.swim();
        return;
    }

    animal.bark()
}


// ignoring type
let v : number = 2;

// @ts-ignore
x = "hello";