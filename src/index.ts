import { Artwork } from "./artwork";
import { Statue } from "./statue";

const titleRegex = new RegExp('[A-Za-z ,.-]+$')

let artworks: Artwork[] = [];

document.addEventListener('DOMContentLoaded', init)

function init() {
    document.getElementById('add')?.addEventListener('click', felvesz)
}

function felvesz() {
    let title = (document.getElementById('title') as HTMLInputElement).value;

    let year = (document.getElementById('year') as HTMLInputElement).value;
    let currentYear = new Date().getFullYear();

    let price = (document.getElementById('price') as HTMLInputElement).value;

    let magassag = (document.getElementById('height') as HTMLInputElement).value;

    if(title.length == 0) {
        (document.getElementById('titleErrorMsg') as HTMLElement).textContent = "A műtermék címe nem lehet üres!"
    }

    else if(!titleRegex.test(title)){
        (document.getElementById('titleErrorMsg') as HTMLElement).textContent = "A műtermék csak az angol ABC betűit tartalmazhatja, illetve pontot, vesszőt, kötőjelet és szóközt!"
    }
    
    else {
        (document.getElementById('titleErrorMsg') as HTMLElement).textContent = ""
    }



    if (parseInt(year) > currentYear){
        (document.getElementById('yearErrorMsg') as HTMLElement).textContent = "Az év max " + currentYear + " lehet!"
    }
    else if (year.length == 0){
        (document.getElementById('yearErrorMsg') as HTMLElement).textContent = "Az év nem lehet üres!"
    }
    else {
        (document.getElementById('yearErrorMsg') as HTMLElement).textContent = ""
    }


    if (parseInt(price) < 1){
        (document.getElementById('priceErrorMsg') as HTMLElement).textContent = "Az ár nem lehet kisebb, mint 1!"
    }
    else if (price.length == 0){
        (document.getElementById('priceErrorMsg') as HTMLElement).textContent = "Az ár nem lehet üres!"
    }
    else {
        (document.getElementById('priceErrorMsg') as HTMLElement).textContent = ""
    }



}