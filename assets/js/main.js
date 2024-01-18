$(document).ready(function () {
    // page setup  -- START --

    const BUSINESS_HOURS = [9,10,11,12,13,14,15,16,17];

    const TODAY = dayjs().format('DD MMMM YYYY');
    const TIME = dayjs().format('HH:mm');
    $('#currentDay').text(TODAY + ' [' + TIME + ']');

});