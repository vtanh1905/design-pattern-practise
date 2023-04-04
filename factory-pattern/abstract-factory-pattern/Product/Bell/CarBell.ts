import { IBell } from "./IBell";

export class CarBell implements IBell {
  stopNow(): void {
    console.log("The Car stopped");
  }
}