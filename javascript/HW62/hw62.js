window.pcs = window.pcs || {};
window.pcs.messageBox = (function() {
    'use strict';

    const offset = 30;
    let leftOffset = -150;
    let topOffset = -75;
    const width = 300;
    const height = 150;
    let nextZindex = 1;

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.left = '0';
    modalOverlay.style.top = '0';
    modalOverlay.style.backgroundColor = 'lightgray';
    modalOverlay.style.opacity = '.5';
    modalOverlay.style.display = 'none';
    document.body.appendChild(modalOverlay);

    function show(msg, options = ['okay'], myEntry = null) {
        const messageBox = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = msg;
        messageBox.appendChild(span);

        const buttons = document.createElement('div');
        messageBox.appendChild(buttons);
        document.body.appendChild(messageBox);
        messageBox.addEventListener('click', () => {
            messageBox.style.zIndex = nextZindex++;
        });

        messageBox.className = 'messageBox';

        function optionalEntry() {
            yesButton();
            noButton();
            maybeButtton();
        }

        options.forEach((elem) => {
            const okButton = document.createElement('button');
            okButton.innerHTML = elem;
            buttons.appendChild(okButton);

            okButton.addEventListener('click', () => {
                document.body.removeChild(messageBox);
                modalOverlay.style.display = 'none';
                optionalEntry();
            });
        });

        function yesButton() {
            if (buttons === 'Yes') {
                myEntry = 'Thanks for visiting';
                console.log(myEntry);
            }
        }

        function noButton() {
            if (buttons === 'No') {
                myEntry = 'we hope you consider us again';
                console.log(myEntry);
            }
        }

        function maybeButtton() {
            if (buttons === 'Maybe') {
                myEntry = 'please come again';
                console.log(myEntry);
            }
        }

        // probably should move this all to css file....
        messageBox.style.backgroundColor = 'lightblue';
        messageBox.style.padding = '1em';
        messageBox.style.paddingBottom = '38px';
        messageBox.style.boxSizing = 'border-box';
        messageBox.style.width = `${width}px`;
        messageBox.style.height = `${height}px`;
        messageBox.style.position = 'absolute';
        messageBox.style.top = '50%';
        messageBox.style.left = '50%';
        messageBox.style.marginLeft = `${leftOffset}px`;
        messageBox.style.marginTop = `${topOffset}px`;
        messageBox.style.border = '1px solid black';
        messageBox.style.zIndex = nextZindex++;

        span.style.overflow = 'auto';
        span.style.height = '100%';
        span.style.display = 'inline-block';

        buttons.style.position = 'absolute';
        buttons.style.bottom = '8px';
        buttons.style.left = 0;
        buttons.style.width = '100%';
        buttons.style.textAlign = 'center';

        leftOffset += offset;
        topOffset += offset;

        if (parseFloat(getComputedStyle(messageBox).left) + leftOffset + width > window.innerWidth) {
            leftOffset -= window.innerWidth - width;
        }

        if (parseFloat(getComputedStyle(messageBox).top) + topOffset + height > window.innerHeight) {
            topOffset -= window.innerHeight - height;
        }
    }

    return {
        show: show,
    };
}());