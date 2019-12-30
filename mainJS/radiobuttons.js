// get radiobutton elements from DOM

let alignItems = document.getElementsByName('textalign');

document.addEventListener('click', () => {

    for (let i = 0; i < alignItems.length; i++) {
        if (alignItems[i].checked) {
            dataForStyle.style.textAlign = alignItems[i].dataset.align;
        }
    }
});

// let alignLeft = document.querySelector('#alignleft');

// let alignCenter = document.querySelector('#aligncenter');

// let alignRight = document.querySelector('#alignright');

// document.addEventListener('click', () => {

//     for (let i = 0; i < alignItems.length; i++) {
//         if (alignLeft.checked) {
//             dataForStyle.style.textAlign = 'left';
//         } else if (alignCenter.checked) {
//             dataForStyle.style.textAlign = 'center';
//         } else if (alignRight.checked) {
//             dataForStyle.style.textAlign = 'right';
//         } else {
//             return;
//         }
//     }
// });