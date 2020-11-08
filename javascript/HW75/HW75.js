(function() {
    'use strict';

    const canvas = document.getElementById('theCanvas');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        // # experimental private so no one can change it - but makes jshint very unhappy
        // static #SIZE = 2;

        // js hint not ready for this experimental syntax yet
        static SIZE = 8; // jshint ignore:line

        constructor(context, distance, color = 'black', ) {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.color = color;
            this.context = context;
            this.distance = distance;
            this.draw();
            this.maintain();

            // static without using experimental syntax
            /*if (! Ant.SIZE) {
              Ant.SIZE = 2;
            }*/
        }

        draw() {
            this.context.beginPath();
            this.context.fillRect(this.x, this.y, Ant.SIZE, Ant.SIZE);
            this.context.fillStyle = this.color;
        }

        move() {
            this.x += Ant.getRandomNumber(-1, 1);
            this.y += Ant.getRandomNumber(-1, 1);

            if (this.x < Ant.SIZE) {
                this.x = Ant.SIZE;
            } else if (this.x > canvas.width - Ant.SIZE) {
                this.x = canvas.width - Ant.SIZE;
            }

            if (this.y < Ant.SIZE) {
                this.y = Ant.SIZE;
            } else if (this.y > canvas.height - Ant.SIZE) {
                this.y = canvas.height - Ant.SIZE;
            }

            this.draw();
            this.maintain();
            this.maintain2();

        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        maintain() {
            let i = 0;
            for (i = 0; i < 5; i++) {
                this.x = this.x + i;
            }


        }
        maintain2() {
            let i = 0;
            for (i = 0; i < 5; i++) {
                this.y = this.y + i;
            }

        }
    }
    const context = canvas.getContext('2d');
    const ants = [];
    for (let i = 0; i < 20; i++) {
        ants.push(new Ant(context));
    }

    const colorPicker = document.getElementById('color');


    function createAnt(e) {
        e.preventDefault();
        ants.push(new Ant(context, null, colorPicker.value));
    }




    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move());
    }, 1000); //17);

    document.getElementById('button').addEventListener('click', createAnt);
    // document.getElementById('color').addEventListener('click', getColor);


    //Ant.SIZE = 10;
}());