import { IBell } from "../Product/Bell/IBell";
import { IWheel } from "../Product/Wheel/IWheel";

export interface IFactory {
  createWheel(): IWheel;
  createBell(): IBell;
}