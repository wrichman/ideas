class Vehicle {
    constructor(name, brand, year, value) {
        this.name = name;
        this.brand = brand;
        this.year = year;
        this.value = value;
    }

    // Method to return vehicle information
    info() {
        return {
            name: this.name,
            brand: this.brand,
            year: this.year,
            value: this.value,
            age: this.getAge()
        };
    }

    // Method to calculate the age of the vehicle
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    // Method to update the value of the vehicle
    updateValue(newValue) {
        this.value = newValue;
    }

    // Method to display vehicle details
    displayDetails() {
        console.log(`Name: ${this.name}, Brand: ${this.brand}, Year: ${this.year}, Age: ${this.getAge()} years, Value: $${this.value}`);
    }

    // Static method to compare the value of two vehicles
    static compareValue(vehicle1, vehicle2) {
        if (vehicle1.value > vehicle2.value) {
            return `${vehicle1.name} is more valuable than ${vehicle2.name}`;
        } else if (vehicle1.value < vehicle2.value) {
            return `${vehicle2.name} is more valuable than ${vehicle1.name}`;
        } else {
            return `${vehicle1.name} and ${vehicle2.name} have the same value`;
        }
    }

    // Method to simulate a depreciation of the vehicle's value
    depreciate(rate) {
        this.value -= this.value * (rate / 100);
    }

    // Destructor to clean up resources
    cleanup() {
        delete this.name;
        delete this.brand;
        delete this.year;
        delete this.value;
    }

    // Constructor method to create a vehicle from a JSON object
    static fromJSON(json) {
        const data = JSON.parse(json);
        return new Vehicle(data.name, data.brand, data.year, data.value);
    }
}

class Car extends Vehicle {
    constructor(name, brand, year, value, fuelType) {
        super(name, brand, year, value);
        this.fuelType = fuelType;
    }

    // Method to return car information
    info() {
        const vehicleInfo = super.info();
        return {
            ...vehicleInfo,
            fuelType: this.fuelType
        };
    }

    // Method to display car details
    displayDetails() {
        super.displayDetails();
        console.log(`Fuel Type: ${this.fuelType}`);
    }

    // Method to update the fuel type of the car
    updateFuelType(newFuelType) {
        this.fuelType = newFuelType;
    }

    // Method to check if the car is electric
    isElectric() {
        return this.fuelType.toLowerCase() === 'electric';
    }

    // Method to simulate refueling or recharging
    refuelOrRecharge() {
        if (this.isElectric()) {
            console.log(`${this.name} is recharging...`);
        } else {
            console.log(`${this.name} is refueling with ${this.fuelType}...`);
        }
    }
}

let myCar = new Car("Model S", "Tesla", 2018, 80000, "Electric");
myCar.displayDetails();
myCar.refuelOrRecharge();

myCar.updateFuelType("Gasoline");
myCar.displayDetails(); 
myCar.refuelOrRecharge();

let anotherCar = new Vehicle("Civic", "Honda", 2016, 20000);
console.log(Vehicle.compareValue(myCar, anotherCar));

myCar.depreciate(10);
myCar.displayDetails();

let carJSON = '{"name":"Mustang","brand":"Ford","year":2019,"value":55000}';
let mustang = Vehicle.fromJSON(carJSON);
mustang.displayDetails();

myCar.cleanup();
