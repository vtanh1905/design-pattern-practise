import { CarBell } from "../Product/Bell/CarBell";
import { IBell } from "../Product/Bell/IBell";
import { CarWheel } from "../Product/Wheel/CarWheel";
import { IWheel } from "../Product/Wheel/IWheel";
import { IFactory } from "./IFactory";

export class CarFactory implements IFactory {
  createWheel(): IWheel {
    return new CarWheel();
  }
  createBell(): IBell {
    return new CarBell();
  }

}