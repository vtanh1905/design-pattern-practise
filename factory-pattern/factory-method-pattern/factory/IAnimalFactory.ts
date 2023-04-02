import { IAnimal } from "../animal/IAnimal";

export interface IAnimalFactory {
  createAnimal(): IAnimal;
}