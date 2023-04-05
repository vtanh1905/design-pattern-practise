import { AnimalService } from "./AnimalService";

console.log(AnimalService.getInstance().name);
AnimalService.getInstance().name = "Min Min"
console.log(AnimalService.getInstance().name);