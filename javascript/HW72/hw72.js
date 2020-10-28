'use strict';
(function() {

    function Vehicle(color) {
        this.color = color;


    }

    function Plane(color) {
        this.color = color;


    }
    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function(speed) {
        this.speed = speed;
        console.log('flying at:' + speed + 'mph');
    };


    Vehicle.prototype.go = function(speed) {
        this.speed = speed;
        console.log('driving at:' + speed + 'mph');
    };
    Vehicle.prototype.print = function() {
        if (this.speed <= 300) {
            console.log(this.color + 'car, speed:' +
                this.speed);
        } else {
            (
                console.log(this.color + 'plane, speed:' +
                    this.speed));
        }
    };



    const car = new Vehicle('yellow');
    car.go(100);
    car.print();
    // console.log(car);
    const plane = new Plane('concorde');
    plane.go(1500);
    plane.print();
})();