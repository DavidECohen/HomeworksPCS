/* global google*/
/* global $*/
window.initMap = function() {
    'use strict';

    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const placesList = $('#sidebar ul');
    const tagInput = $("#tag");
    const rowsInput = $("#rows");
    const infoWindow = new google.maps.InfoWindow({ maxWidth: 500 });

    // let selectedPlace;

    $('#searchform').submit(e => {
        e.preventDefault();

        fetch(`http://api.geonames.org/wikipediaSearch?q=${tagInput.val()}&maxRows=${rowsInput.val()}&username=DavidECohen&type=json`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(wikiData => {
                console.log(wikiData);

                const bounds = new google.maps.LatLngBounds();

                wikiData.geonames.forEach(place => {
                    const marker = new google.maps.Marker({
                        position: { lat: place.lat, lng: place.lng },
                        map: map,
                        animation: google.maps.Animation.DROP,
                        title: place.title,
                        icon: place.thumbnailImg ? {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        } : null
                    });

                    const placeElem = $(`<li>
              <img src="${place.thumbnailImg || 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png'}" alt="${place.title}">
              <span class="title">${place.title}</span>
              <div class="summary">${place.summary}</div>
            </li>`)
                        .appendTo(placesList)
                        .click(() => {
                            const b = map.getBounds();
                            b.extend(marker.position);
                            map.fitBounds(b);

                            //setTimeout(() => map.panTo(marker.position), 1000);
                            //setTimeout(() => map.setZoom(18), 2000);

                            setTimeout(() => {
                                map.panTo(marker.position);
                                setTimeout(() => map.setZoom(18), 1000);
                            }, 1000);

                            //$('.summary').slideUp('slow');
                            /*if (selectedPlace) {
                              selectedPlace.slideUp('slow');
                            }
                            selectedPlace = placeElem;*/
                            //placeElem.find('.summary').slideDown('slow');

                            placeSelected();
                        });

                    function placeSelected() {
                        infoWindow.setContent(`${place.summary}<hr>
                <a target="_blank" href="http://${place.wikipediaUrl}">more info</a>`);
                        infoWindow.open(map, marker);
                        $('.summary').slideUp('slow');
                        placeElem.find('.summary').slideDown('slow');
                    }

                    marker.addListener('click', () => {
                        //infoWindow.setContent(`${place.summary}<hr>
                        //  <a target="_blank" href="http://${place.wikipediaUrl}">more info</a>`);
                        // infoWindow.open(map, marker);
                        placeSelected();
                    });

                    bounds.extend(marker.position);
                });

                map.fitBounds(bounds);
            })
            .catch(e => alert(e.message));
    });

    //////////////////////////////////////
    const markers = [];
    const circles = [];
    const polygons = [];
    const rectangles = [];
    const polyLines = [];

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event);
        if (event.type === 'marker') {
            console.log(event.overlay.position.lat(), event.overlay.position.lng());
            markers.push(event.overlay.position);
            localStorage.markers = JSON.stringify(markers);
        }

        if (event.type === 'circle') {
            console.log(event.overlay.center, event.overlay.radius);
            circles.push({ center: event.overlay.center, radius: event.overlay.radius });
            localStorage.circles = JSON.stringify(circles);
        }

        if (event.type === 'polyline') {
            // console.log(event.overlay.latLngs);
            polyLines.push(event.overlay.latLngs.i);
            localStorage.polyLines = JSON.stringify(polyLines);
        }

        if (event.type === 'polygon') {
            //console.log(event.overlay.center, event.overlay.radius);
            polygons.push(event.overlay.latLng);
            localStorage.polygons = JSON.stringify(polygons);
        }

        if (event.type === 'rectangle') {
            console.log(event.overlay.bounds);
            rectangles.push(event.overlay.bounds);
            localStorage.rectangles = JSON.stringify(rectangles);
        }




    });
    if (localStorage.polygons) {
        const rec = JSON.parse(localStorage.polygons);
        rec.forEach(r => {
            new google.maps.Polygon({
                map: map,
                paths: r,
                //fillColor: '#FFFF00'

            });
        });
    }

    if (localStorage.rectangles) {
        const rec = JSON.parse(localStorage.rectangles);
        rec.forEach(r => {
            new google.maps.Rectangle({
                map: map,
                bounds: r,
                fillColor: '#FFFF00'

            });
        });
    }

    if (localStorage.circles) {
        const cir = JSON.parse(localStorage.circles);
        cir.forEach(c => {
            new google.maps.Circle({
                map: map,
                center: c.center,
                radius: c.radius
            });

        });
    }

    if (localStorage.markers) {
        const m = JSON.parse(localStorage.markers);
        m.forEach(pos => {
            new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP,
                fillColor: '#0000FF'
            });
        });
    }
    if (localStorage.polyLines) {
        const pl = JSON.parse(localStorage.polyLines);
        pl.forEach(p => {
            new google.maps.Polyline({
                path: p.i,
                map: map,
                // geodesic: true,
                // strokeColor: '#FF0000',
                // strokeOpacity: 1.0,
                // strokeWeight: 2,

            });

        });
    }
};