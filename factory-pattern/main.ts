interface ICar {
  view(): void;
}

class Hoda implements ICar {
  constructor() {}

  view(): void {
    console.log("Hoda View");
  }
}

class Nexus implements ICar {
  constructor() {}

  view(): void {
    console.log("Nexus View");
  }
}

class Toyota implements ICar {
  constructor() {}

  view(): void {
    console.log("Toyota View");
  }
}

class CarFactory {
  constructor() {}

  viewCar(carType: string) {
    let car;
    switch (carType) {
      case "Hoda":
        car = new Hoda();
        car.view();
        break;
      case "Nexus":
        car = new Nexus();
        car.view();
        break;
      case "Toyota":
        car = new Toyota();
        car.view();
        break;
    }
  }
}

export default function main(): number {
  let carFactory = new CarFactory();
  carFactory.viewCar("Toyota"); // Phương thức sẽ được gọi tùy thuộc vào chuỗi được chuyền vào
  return 1;
}
