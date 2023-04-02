import { IAnimal } from './IAnimal';

export class Dog implements IAnimal {
  speak(): string {
    return "I am a Dog";
  }
}