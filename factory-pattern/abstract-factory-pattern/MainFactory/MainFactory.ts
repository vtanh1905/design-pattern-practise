import { IFactory } from "../Factory/IFactory";
import { IBell } from "../Product/Bell/IBell";
import { IWheel } from "../Product/Wheel/IWheel";

export class MainFactory {
  private bell: IBell;
  private wheel: IWheel;

  constructor(factory: IFactory) {
    this.bell = factory.createBell();
    this.wheel = factory.createWheel();
  }

  public run() : void {
    this.bell.stopNow();
    console.log(this.wheel.getAmount());
  }
}