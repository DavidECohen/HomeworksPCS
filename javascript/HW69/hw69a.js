/* global google */
/*global $*/
//(function () {
function initMap() {
    'use strict';
    const anotherLoc = { lat: 40.1, lng: -74.23 };
    let userInput = $('#userChoice');
    const button = $('#button');
    let list = $('#list');
    let loc;
    // let marker;
    // const div = $('#div');

    button.click(() => {
        fetch(`http://api.geonames.org/wikipediaSearch?q=${userInput.val()}&maxRows=10&username=DavidECohen&type=json`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(location => {
                //console.log(location.geonames[0].summary);
                console.log(location);
                // let x = location.geonames.forEach(elem => console.log(elem));
                for (let index = 0; index < location.geonames.length; index++) {
                    // console.log(location.geonames[index].summary);

                    let loc = {
                        lat: location.geonames[index].lat,
                        lng: location.geonames[index].lng
                    };
                    let photo = location.geonames[index].thumbnailImg;
                    let summ = location.geonames[index].summary;
                    let wiki = location.geonames[index].wikipediaUrl;
                    let title = location.geonames[index].title;
                    let visited = title + photo;

                    let info = (summ + '<a href="http://' + wiki + '">' + "read more");

                    const createMarker = new google.maps.Marker({
                        position: loc,
                        map: map,
                        icon: {
                            url: 'https://t4.ftcdn.net/jpg/01/36/70/67/240_F_136706734_KWhNBhLvY5XTlZVocpxFQK1FfKNOYbMj.jpg',
                            //url: 'https://t4.ftcdn.net/jpg/02/66/48/17/240_F_266481764_VywacDC0mdPG5iaaGvM56BwdtT33epM0.jpg',
                            scaledSize: new google.maps.Size(50, 50),
                            title: title //userInput.val()
                        }

                    });
                    //list.attr('src', photo);
                    list.append(title);
                    const infoWindow = new google.maps.InfoWindow();
                    createMarker.addListener('click', () => {
                        infoWindow.setContent(info);
                        // infoWindow.setContent(wiki);
                        infoWindow.open(map, createMarker);
                    });
                    // var bounds = new google.maps.LatLngBounds();
                    // map.fitBounds(bounds);
                    map.panTo(loc);
                }

            });

    });
    const map = new google.maps.Map(document.getElementById('div'), {
        center: 'anotherLoc',
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    //const infoWindow = new google.maps.InfoWindow();

    // const bmgMarker = new google.maps.Marker({
    //     position: 'anotherLoc',
    //     map: map,
    //     animation: google.maps.Animation.DROP,
    //     title: 'BMG',
    //     // icon: 'https://media-exp1.licdn.com/dms/image/C560BAQHeo1T77FjcCw/company-logo_200_200/0?e=2159024400&v=beta&t=dlX613tUCPpkqDhLmmYfn3bFn08IipBXkgVzw1z4MJw'
    //     icon: {
    //         url: 'https://media-exp1.licdn.com/dms/image/C560BAQHeo1T77FjcCw/company-logo_200_200/0?e=2159024400&v=beta&t=dlX613tUCPpkqDhLmmYfn3bFn08IipBXkgVzw1z4MJw',
    //         scaledSize: new google.maps.Size(50, 50)
    //     }
    // });






    setTimeout(() => {
        map.setCenter(loc);
        map.panTo(loc);
    }, 5000);



    map.addListener('center_changed', () => {
        const center = map.getCenter();
        console.log(center.lat(), center.lng());

    });



}
//}());