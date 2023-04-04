import { IBell } from "../Product/Bell/IBell";
import { MotobikeBell } from "../Product/Bell/MotobikeBell";
import { IWheel } from "../Product/Wheel/IWheel";
import { MotobikeWheel } from "../Product/Wheel/MotobikeWheel";
import { IFactory } from "./IFactory";

export class MotobikeFactory implements IFactory {
  createWheel(): IWheel {
    return new MotobikeWheel();
  }
  createBell(): IBell {
    return new MotobikeBell();
  }

}