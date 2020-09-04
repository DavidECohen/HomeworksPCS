/* global $*/
(function() {
    'use strict';

    $('#submitter').attr('disabled', true);

    function enable() {
        $('#submitter').attr('disabled', false);
    }
    $('#submitter')
        .click(function(event) {
            let test = '';
            $('.a').each(function() {
                test += $(this).val() + '  ';
            });
            $('p').text(test);
            event.preventDefault();
        });
    $('#checkbox').click(function() {
        if ($(this).is(':checked')) {
            enable();
        }
    });

})();