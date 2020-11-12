/* global $ */


(function() {

    'use strict';

    // fetch('info.json')
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    function addToPage(elem) {
        let div = document.createElement('div');
        div.innerHTML = `<div>${elem}</div>`;
        document.body.appendChild(div);
    }


    fetch('info.json')
        .then(response => response.json())
        .then(r => {
            //console.log(r);
            for (let i = 0; i < r.length; i++) {
                let obj = r[i];

                let order = (obj.items);
                loop(order);
                console.log(order);
            }
            // let u = r.map(r => r.items.item);
            // let v = r.map(r => r.Items.quantity);
            //let w = r.map(r => r.Items);
            let x = r.map(r => r.customer);
            let y = r.map(r => r.address);
            let z = r.map(r => r.items);
            console.log(x, y, z); // => addToPage(elem))
            // loop(u);
            // loop(v);
            //loop(w);
            loop(x);
            loop(y);
            let itemList = loop(z);
            //loop(itemList);
            console.log(itemList);

            //let h = z.forEach(elem => console.log(h, elem));
            //console.log(elem);
            // let i = h.forEach(elem => console.log(elem));
            // let p = i.map(o => {
            //     return o.item;
            // });
            // console.log(p);
            // loop(i);


        });

    function loop(y) {
        y.forEach(elem => addToPage(elem));
    }
    class Item {
        constructor(name, price, quantity) {

            this.name = name; //r.customer;
            this.price = price;
            this.quantity = quantity;

            // dom('quan', this.quantity);
            // dom('price', this.price);
            // addToPage(name);
            // addToPage(this.name);
        }
        get totalCost() { return this.quantity * this.price; }

    }




    // function placeInto(elem1, elem2) {
    //     elem1 = elem2;
    //     console.log(elem1);
    // }
    // placeInto(Item.name, )

    // function dom(elem, elem2) {
    //     (document.getElementById(elem)).innerHTML = (elem2);
    // }



    class Order {
        constructor(name, address, arr = [Item]) {
            this.name = customer;
            this.address = this.address;
            this.arr = arr; //[this.Item];

            // dom('cust', this.name);
            // dom('add', this.address);
            // dom('arr', this.arr);
        }

    }


    //this.name = document.getElementById('name');

    //.then(data => dom('quan', data[0].))


    let y = new Order('d', 222, ['car', 'bus']);
    console.log(y);
    // console.log(con);
    new Item('name', 3, 3);
})();