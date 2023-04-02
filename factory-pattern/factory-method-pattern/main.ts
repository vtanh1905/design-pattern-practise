import { IAnimal } from "./animal/IAnimal";
import { CatFactory } from "./factory/CatFactory";
import { DogFactory } from "./factory/DogFactory";
import { IAnimalFactory } from "./factory/IAnimalFactory";

// Imagine Boy will like Dog, Girl will like Cat
let animalFactory: IAnimalFactory;
const gender: string = "girl";
if (gender === "boy") {
  animalFactory = new DogFactory();
} else {
  animalFactory = new CatFactory();
}

let animal = animalFactory.createAnimal();
console.log(animal.speak());
