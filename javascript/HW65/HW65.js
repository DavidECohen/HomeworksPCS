/* global $*/
(function() {
        "use strict";
        $("#loader").hide();


        $("#button").click(() => {
            $("#loader").show();

            let filename = $("#filename").val();

            setTimeout(
                function() {
                    $("#loader").hide();
                    fetch(filename)

                    .then(e => e.text())
                        .then(text => document.body.append(text))

                    .catch(() => alert("WHATS THAT ? "));
                }, 2000);


        });
    }
    ());