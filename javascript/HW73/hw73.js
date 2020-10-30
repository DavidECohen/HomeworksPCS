(function() {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }
        go(speed) {
            this.speed = speed;
            console.log('now going at speed' + speed);
        }
        print() { console.log(this.color, this.speed); }
    }
    class Plane extends Vehicle {

        go(speed) {
            this.speed = speed;
            console.log('now flying at speed' + speed);
        }
    }
    const car = new Vehicle('green');
    car.go(100);
    car.print();


    const gulfstream = new Plane('blue');
    gulfstream.go(450);
    gulfstream.print();


})();