/*global $ */
(function() {
    'use strict';
    //  const table = $('#menu ');
    let offset;
    let dragReady;
    $(document).on('mousedown', 'grid-item', e => {
        console.log('mousedown', e);
        offset = { x: e.offsetX, y: e.offsetY };
        // dragging = true;
        dragReady = $(e.target);
    });
    //addMouseDownListener($('.box'));

    $(document /*.body*/ ).mousemove(e => {
        if (dragReady) {
            e.preventDefault(); // occasional dragging wierdness in browser...

            console.log('mousemove', e);
            //theBox.css({ top: e.pageY - offset.y, left: e.pageX - offset.x});
            dragReady.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
    }).mouseup(e => {
        if (dragReady) {
            console.log('mouseup', e);
            //dragging = false;
            dragReady = null;
        }
    });


}());