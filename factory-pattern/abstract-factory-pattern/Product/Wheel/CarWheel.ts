import { IWheel } from "./IWheel";

export class CarWheel implements IWheel {
  amount: number = 4;

  getAmount(): number {
    return this.amount;
  }
}