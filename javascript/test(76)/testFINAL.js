(function() {
    'use strict';

    fetch('info.json')
        .then(response => response.json())
        .then(r => {
            //console.log(r[0].address);
            for (let i = 0; i < r.length; i++) {
                let obj = r[i];

                //let order = (obj.items);
                //loop(order);
                console.log(obj.customer);
                //let customer = obj.customer;
            }
        });
    class Item {
        constructor(name, price, quantity) {

            this.name = name; //r.customer;
            this.price = price;
            this.quantity = quantity;

        }
        get totalCost() { return this.quantity * this.price; }

    }

    class Order {
        constructor(name, address, arr = [Item]) {
            this.name = obj.customer;
            this.obj.customer = name;
            address = this.obj.address;
            this.arr = arr;
        }
    }
    console.log(address);












})()