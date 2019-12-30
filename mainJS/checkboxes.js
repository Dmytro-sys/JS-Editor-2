// get area with data from DOM

let dataForStyle = document.querySelector('#styleData');

// get checkbox elements from DOM

let checkFontWeight = document.querySelector('#bold');

let checkFontStyle = document.querySelector('#italic');

let checkTextUnderline = document.querySelector('#underline');

let checkTextLineThrough = document.querySelector('#line-through');

// get checkbox container from DOM

let checkStyle = document.querySelector('.checkbox__container');

// set listener to checkbox container

checkStyle.addEventListener('click', setTextStyle);

function setTextStyle() {
    if (checkFontWeight.checked) {
        dataForStyle.style.fontWeight = 'bold';
    } else {
        dataForStyle.style.fontWeight = '';
    }

    if (checkFontStyle.checked) {
        dataForStyle.style.fontStyle = 'italic';
    } else {
        dataForStyle.style.fontStyle = '';
    }

    if (checkTextUnderline.checked) {
        dataForStyle.style.textDecoration = 'underline';
    } else {
        dataForStyle.style.textDecoration = '';
    }

    if (checkTextLineThrough.checked) {
        dataForStyle.style.textDecoration = 'line-through';
    } else {
        return;
    }
}