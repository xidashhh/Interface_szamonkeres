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
    if (title.length < 1) {
        document.getElementById('titleerrorMsg').textContent = "A műtermék címe nem lehet üres!";
    }
    else if (!titleRegex.test(title)) {
        document.getElementById('titleerrorMsg').textContent = "A műtermék csak az angol ABC betűit tartalmazhatja, illetve pontot, vesszőt, kötőjelet és szóközt!";
    }
    else {
        document.getElementById('titleerrorMsg').textContent = "";
    }
}
