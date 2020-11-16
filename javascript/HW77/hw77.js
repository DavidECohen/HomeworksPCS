(function() {
    'use strict';
    let score = 0;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    //const audio = 'service-bell_daniel_simion.mp3';
    //playAudio('van-sliding-door-daniel_simon.mp3');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let xway = canvas.width;
        let xx = xway % 64;
        canvas.width = xway - xx;
        console.log(canvas.width);

        canvas.height = window.innerHeight;
        let yway = canvas.height;
        let yy = yway % 64;
        canvas.height = yway - yy;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();


    //const img = document.getElementById('snakeHead');
    const img = new Image();
    const img2 = new Image();

    let a;
    let b;
    let x = 0;
    let y = 0;

    img.src = 'snakehead.png';
    var canva = document.getElementById('theCanvas');
    var ctx = canva.getContext('2d');
    ctx.font = '30px Arial';
    ctx.fillText('press arrows to start moving', 10, 30);

    img.addEventListener('load', () => {
        const SNAKE_SIZE = 64;
        let direction; // = 'ArrowRight';
        score += 0;
        setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y, SNAKE_SIZE, SNAKE_SIZE);
            context.drawImage(img2, a, b, 64, 64);
            crash();
            crash2();
            bite();
            //crash();

            context.font = 'bold 48px serif';
            context.fillText(score, canvas.width - 120, 50);


            switch (direction) {
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }
            //crash();
            console.log(x); // crash2();
        }, 300);


        document.addEventListener('keydown', e => {
            //console.log(e);
            switch (e.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    direction = e.key;
            }
        });
    });

    function addapple() {

        let xway = Math.floor((Math.random() * screenWidth));
        console.log(xway);
        let xx = xway % 64;
        console.log(xx);
        a = xway - xx;
        console.log(a);

        let yway = Math.floor((Math.random() * screenHeight));
        let yy = yway % 64;
        b = yway - yy;
        // console.log(a, b);
        // const image = document.createElement('img')
        img2.src = 'redapple.png';
        img2.addEventListener('load', () => {
            context.drawImage(img2, a, b, 64, 64);
            //bite();
        });

    }

    // function newGame() {
    //     context.clearRect(0, 0, canvas.width, canvas.height);

    //     context.drawImage(img, 0, 0, 64, 64);

    // }


    function playAudio(url) {
        new Audio(url).play();
    }



    function crash() {
        if (x > canvas.width + 1 || x < 0) {
            var myWindow = window.open('', '', 10, 10);
            myWindow.document.write(`<p>'  GAME OVER!   REFRESH TO PLAY AGAIN '</p>`);
            setTimeout(function() { myWindow.close(); }, 5000);
            setTimeout(playAudio('Glass_Break-stephan_schutze-958181291.mp3'), 3000);
            context.clearRect(0, 0, canvas.width, canvas.height);
            score = 0;
            // newGame();
            // window.confirm('PLAY AGAIN?');
            // if (confirm) {
            // newGame();
            //console.log('crashed!');


        }
        // context.clearRect(0, 0, canvas.width, canvas.height); // newGame();
    }

    function crash2() {
        if (y > canvas.height + 1 || y < 0) {
            var myWindow = window.open('', '', 60, 10);
            myWindow.document.write(`<p>  GAME OVER! REFRESH TO PLAY AGAIN </p>`);
            setTimeout(function() { myWindow.close(); }, 5000);
            setTimeout(playAudio('Glass_Break-stephan_schutze-958181291.mp3'), 3000);
            context.clearRect(0, 0, canvas.width, canvas.height);
            score = 0;
        }
    }
    // function crash2() {
    //     if (y === canvas.width || y === 0) {
    //         playAudio('Glass_Break-stephan_schutze-958181291.mp3 ');
    //         newGame();
    //     }
    // }

    function bite() {
        if (x === a && y === b) {
            score += 10;
            addapple();
            playAudio('service-bell_daniel_simion.mp3');
            // context.drawImage(img, x, y, 64 + 64, 64);
        }



        //}

    }

    addapple();



}());