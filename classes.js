
Class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }

}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  }
}

const vehicle = new Vehicle('Mazda', 'Mata', 2005);

console.log('Vehicle Details:');
vehicle.displayDetails();

const car = new Car('Jeep','Wrangle', 2024);

console.log('Car Details:');
car.displayDetails();
