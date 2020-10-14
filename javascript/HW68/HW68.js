/*global $*/
(function() {
    'use strict';

    const input = $('#searchbar');
    const div = $('#div');

    input.change(() => {
        const url = $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=${input.val()}&format=json&jsoncallback=?')
            .then(pictureData => {
                console.log(pictureData);
                div.attr('src', 'https://api.flickr.com/services/feeds/photos_public.gne?tags=${input.val()}');
            });
        console.log(url);
    });
    // document.body.append(url);
    // .then(picture.json()),
    // then(pictureData.forEach(elem => document.body.append(elem))
    //     .catch(e => console.error(e));

    // $.ajax({
    //     url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=${input.val()}&format=json&jsoncallback=foo',
    //     dataType: 'jsonp',
    //     jsonpCallback: 'foo'
    // })
    // .done(x => console.log('jquery.ajax got', x));
}());