import { Cat } from "../animal/Cat";
import { IAnimal } from "../animal/IAnimal";
import { IAnimalFactory } from "./IAnimalFactory";

export class CatFactory implements IAnimalFactory {
  createAnimal(): IAnimal {
    return new Cat();
  }
}