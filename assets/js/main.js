$(document).ready(function () {
    // page setup  -- START --

    const TODAY = dayjs().format('DD MMMM YYYY');
    const TIME = dayjs().format('HH:mm');
    $('#currentDay').text(TODAY + ' [' + TIME + ']');

});