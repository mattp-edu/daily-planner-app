$(document).ready(function () {
    // page setup  -- START --

    const BUSINESS_HOURS = [9,10,11,12,13,14,15,16,17];

    const TODAY = dayjs().format('DD MMMM YYYY');
    const TIME = dayjs().format('HH:mm');
    $('#currentDay').text(TODAY + ' [' + TIME + ']');

    parseRows(BUSINESS_HOURS, localStorage, $('#calendar'));

    // page setup -- END --


    // on hit the local storage will be updated
    $('.theSaveButton').on('click', event => {
        var text_field = $(event.target).parent().prev().children().eq(0).val();
        var hour_id = $(event.target).parent().prev().children().eq(0).attr('id');

        if(text_field === '') { 
            localStorage.removeItem(hour_id, text_field);
        }
        else {
            localStorage.setItem(hour_id, text_field);
        }
        
    });
});