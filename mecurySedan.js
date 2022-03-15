import { Vehicle } from "./vehicleBaseClass";

// //this includes the vehicle class as a module
// const VehicleModule = require("./vehicle")

// //this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends Vehicle {
  constructor (make, model, year, color, mileage) {
  super (make, model, year, color, mileage)
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 200;
    this.fuel = 100;
    this.scheduleService = false;
  }

  loadPassenger () {
    if (this.passenger < this.maxPassengers) {
      console.log ('true')
      availableRoom = true;
      }
      else {
        alert ('No room for any more passengers')
      }
  }

  start () {
    if (this.fuel > 0) {
      console.log ('Start the car')
      start = true;
    }
      else {
        console.log ('No fuel')
      }
  }

  scheduleService () {
    if (mileage > 30000) {
      console.log ('Time for some maintenaince')
      timeForMaintence = true;
    }
      else {
        console.log ('It runs like a dream!')
      }
  }
}