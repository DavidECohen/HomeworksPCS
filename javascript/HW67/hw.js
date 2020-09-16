/* global $*/
(function() {

    "use strict";
    console.log("hw.json");
    /////button creator function
    // function createButton(a) {
    //     $("#chooserButtons").append(`<button>${a}</button>`);
    // }
    /////using button creator function to create button 
    ///for each recipe in recipebook and attach to div called chooserButtons in HTML page
    const playlist = $("#list");
    const vid = $("#video");
    const div = $("#div");

    fetch("hw.json")
        .then(r => r.json())

    .then(list => {
            list.forEach(elem => {
                $(`<li><span>${elem.title}</span> <img src=${elem.photo}></img></li>`).appendTo(playlist).click(() =>
                    vid.attr({
                        src: elem.url
                    }).appendTo(div) //.play()
                );

            });
        }


        // .click() { /* $().append(elem.title, )); */ }vid.attrsrc.....


    );
    const player = document.getElementById("vid");
    player.play();

})();