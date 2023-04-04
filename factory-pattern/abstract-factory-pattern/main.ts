import { MotobikeFactory } from "./Factory/MotobikeFactory";
import { CarFactory } from "./Factory/CarFactory";
import { MainFactory } from "./MainFactory/MainFactory";

// Imagine user typing
const personType: string = 'poor';
let mainFactory: MainFactory;
if (personType === 'poor') {
  mainFactory = new MainFactory(new MotobikeFactory());
} else {
  mainFactory = new MainFactory(new CarFactory());
}

mainFactory.run();

