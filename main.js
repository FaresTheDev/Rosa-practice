//select elemnt finction
const selectElemnt = function (elemnt) {
    return document.querySelector(elemnt)
};

let menuToggler = selectElemnt('.menu-toggle');
let body = selectElemnt('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open')
});