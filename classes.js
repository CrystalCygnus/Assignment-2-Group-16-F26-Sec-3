
Class Vehicle {
  constructor(make, model, year) {
    vehicle.make = make;
    vehicle.model = model;
    vehicle.year = year;
  }

}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    car.doors = doors;
  }
}

const vehicle = new Vehicle('Mazda', 'Mata', 2005);

const car = new Car('Jeep','Wrangle', 2024);
