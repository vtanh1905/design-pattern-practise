import { IWheel } from "./IWheel";

export class MotobikeWheel implements IWheel {
  amount: number = 2;
  
  getAmount(): number {
    return this.amount;
  }
}