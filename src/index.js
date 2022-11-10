"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const titleRegex = new RegExp('[A-Za-z ,.-]+$');
let artworks = [];
document.addEventListener('DOMContentLoaded', init);
function init() {
    var _a;
    (_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', felvesz);
}
function felvesz() {
    let title = document.getElementById('title').value;
    let year = document.getElementById('year').value;
    let currentYear = new Date().getFullYear();
    let price = document.getElementById('price').value;
    let magassag = document.getElementById('height').value;
    if (title.length == 0) {
        document.getElementById('titleErrorMsg').textContent = "A műtermék címe nem lehet üres!";
    }
    else if (!titleRegex.test(title)) {
        document.getElementById('titleErrorMsg').textContent = "A műtermék csak az angol ABC betűit tartalmazhatja, illetve pontot, vesszőt, kötőjelet és szóközt!";
    }
    else {
        document.getElementById('titleErrorMsg').textContent = "";
    }
    if (parseInt(year) > currentYear) {
        document.getElementById('yearErrorMsg').textContent = "Az év max " + currentYear + " lehet!";
    }
    else if (year.length == 0) {
        document.getElementById('yearErrorMsg').textContent = "Az év nem lehet üres!";
    }
    else {
        document.getElementById('yearErrorMsg').textContent = "";
    }
    if (parseInt(price) < 1) {
        document.getElementById('priceErrorMsg').textContent = "Az ár nem lehet kisebb, mint 1!";
    }
    else if (price.length == 0) {
        document.getElementById('priceErrorMsg').textContent = "Az ár nem lehet üres!";
    }
    else {
        document.getElementById('priceErrorMsg').textContent = "";
    }
}
