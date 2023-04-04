import { IBell } from "./IBell";

export class MotobikeBell implements IBell {
  stopNow(): void {
    console.log("The Mobike stopped!");
  }
}