// get the font-family button from DOM

let fontFamilyBtn = document.querySelector('#fontFamilyDropdownBtn');

// get the font-family dropdown from DOM

let fontFamilyList = document.getElementById("fontFamilyDropdown");

/* set listener for fontFamilyBtn, show font-family
 dropdown menu, hide font-size dropdown menu */

fontFamilyBtn.addEventListener('click', () => {
    fontFamilyList.classList.add('show');
    fontSizeList.classList.remove('show');
});

// close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.fontfamily__btn')) {
        fontFamilyList.classList.remove('show');
    }

    if (!event.target.matches('.fontsize__btn')) {
        fontSizeList.classList.remove('show');
    }
}

// set the font-family dropdown elements from DOM

fontFamilyList.addEventListener('click', function (e) {
    let font = e.target.dataset.font;
    dataForStyle.style.fontFamily = font;
    fontFamilyList.classList.remove('show');
});



// get the font-size button from DOM

let fontSizeBtn = document.querySelector('#fontSizeDropdownBtn');

// get the font-size dropdown from DOM

let fontSizeList = document.querySelector('#fontSizeDropdown');

/* set listener for fontSizeBtn, show font-size
 dropdown menu, hide font-family dropdown menu */

fontSizeBtn.addEventListener('click', () => {
    fontSizeList.classList.add('show');
    fontFamilyList.classList.remove('show');
});

// set the font-size dropdown elements from DOM

fontSizeList.addEventListener('click', function (e) {
    let fontSize = e.target.dataset.fontsize;
    dataForStyle.style.fontSize = fontSize + 'px';
    fontSizeList.classList.remove('show');
});