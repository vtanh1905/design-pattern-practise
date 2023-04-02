import { Dog } from '../animal/Dog';
import { IAnimal } from '../animal/IAnimal';
import { IAnimalFactory } from './IAnimalFactory';

export class DogFactory implements IAnimalFactory {
  createAnimal(): IAnimal {
    return new Dog();
  }
}