import { IAnimal } from './IAnimal';

export class Cat implements IAnimal {
  speak(): string {
    return "I am a Cat";
  }
}