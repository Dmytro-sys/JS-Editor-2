// get popup buttom from DOM
let colorBtn = document.querySelector('#colorpopupbtn');
// get color box from DOM
let colorBox = document.querySelector('#popupbox');

// show popup when click to button
colorBtn.addEventListener('click', (event) => {

    if (event.target.classList.contains('popup__btn')) {
        colorBox.classList.add('show__popup');
        // add class with css styles
    } else {
        colorBox.classList.remove('show__popup');
    }
});

// close popup when clicked to X.
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-times')) {
        colorBox.classList.remove('show__popup');
        // remove class with css styles
    }
})

// set text color from popup.
colorBox.addEventListener('click', function (e) {
    let textColor = e.target.dataset.color;
    dataForStyle.style.color = textColor;
});