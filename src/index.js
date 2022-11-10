"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statue_1 = require("./statue");
const titleRegex = new RegExp('[A-Za-z ,.-]+$');
let artworks = [];
let amount = 0;
let priceSum = 0;
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
    let height = document.getElementById('height').value;
    let validateValue = true;
    if (title.length == 0) {
        document.getElementById('titleErrorMsg').textContent = "A műtermék címe nem lehet üres!";
        validateValue = false;
    }
    else if (!titleRegex.test(title)) {
        document.getElementById('titleErrorMsg').textContent = "A műtermék csak az angol ABC betűit tartalmazhatja, illetve pontot, vesszőt, kötőjelet és szóközt!";
        validateValue = false;
    }
    else {
        document.getElementById('titleErrorMsg').textContent = "";
    }
    if (parseInt(year) > currentYear) {
        document.getElementById('yearErrorMsg').textContent = "Az év max " + currentYear + " lehet!";
        validateValue = false;
    }
    else if (year.length == 0) {
        document.getElementById('yearErrorMsg').textContent = "Az év nem lehet üres!";
        validateValue = false;
    }
    else {
        document.getElementById('yearErrorMsg').textContent = "";
    }
    if (parseInt(price) < 1) {
        document.getElementById('priceErrorMsg').textContent = "Az ár nem lehet kisebb, mint 1!";
        validateValue = false;
    }
    else if (price.length == 0) {
        document.getElementById('priceErrorMsg').textContent = "Az ár nem lehet üres!";
        validateValue = false;
    }
    else {
        document.getElementById('priceErrorMsg').textContent = "";
    }
    if (parseInt(height) < 20) {
        document.getElementById('heightErrorMsg').textContent = "A magasság nem lehet kisebb, mint 20!";
        validateValue = false;
    }
    else if (height.length == 0) {
        document.getElementById('heightErrorMsg').textContent = "A magasság nem lehet üres!";
        validateValue = false;
    }
    else {
        document.getElementById('heightErrorMsg').textContent = "";
    }
    console.log(validateValue);
    if (validateValue) {
        artworks.push(new statue_1.Statue(title, parseInt(year), parseInt(price), parseInt(height)));
        amount++;
        priceSum += parseInt(price);
        document.getElementById('amount').textContent = "" + amount;
        document.getElementById('priceSum').textContent = "" + priceSum;
    }
}
