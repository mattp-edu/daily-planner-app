// setting up templates

const ROW_TEMPLATE = $('<div>').addClass('row time-block');
const CELL0_TEMPLATE = $('<div>').addClass('hour col-2');
const CELL1_TEMPLATE = $('<div>').addClass('present col-8');
const CELL2_TEMPLATE = $('<div>').addClass('saveBtn col-2 d-flex justify-content-center align-items-center');
const CELL0_TEMPLATE_VALUE = $('<span>').addClass('hourDigit pt-3');
const CELL1_TEMPLATE_VALUE = $('<textarea>').addClass('textarea');
const CELL2_TEMPLATE_VALUE = $('<i>').addClass('bi bi-save theSaveButton');


// function that draws the timetable and parses data

function parseRows(hours, events, parent) {

    hours.forEach(hour => {
        var row = ROW_TEMPLATE.clone();
        var cell0 = CELL0_TEMPLATE.clone();
        var cell1 = CELL1_TEMPLATE.clone();
        var cell1_textArea = CELL1_TEMPLATE_VALUE.clone();
        var cell2 = CELL2_TEMPLATE.clone().append(CELL2_TEMPLATE_VALUE.clone());
        
        cell0.append(CELL0_TEMPLATE_VALUE.clone().text(hour+':00'));
        cell1_textArea.attr('id', 'h'+hour);

        if (dayjs().format('HH') < hour) cell1.removeClass('present').addClass('future');
        if (dayjs().format('HH') > hour) cell1.removeClass('present').addClass('past');
       
        if (events['h'+hour] !== undefined) {
            cell1_textArea.val(events['h'+hour]);
        }        
        cell1.append(cell1_textArea);
        row.append(cell0, cell1, cell2);

        parent.append(row);
    });
}

