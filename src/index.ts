import { Artwork } from "./artwork";
import { Statue } from "./statue";

const titleRegex = new RegExp('[A-Za-z ,.-]+$')

let artworks: Artwork[] = [];
let amount = 0;
let priceSum = 0;
document.addEventListener('DOMContentLoaded', init)

function init() {
    document.getElementById('add')?.addEventListener('click', felvesz)
}

function felvesz() {
    let title = (document.getElementById('title') as HTMLInputElement).value;
    let year = (document.getElementById('year') as HTMLInputElement).value;
    let currentYear = new Date().getFullYear();
    let price = (document.getElementById('price') as HTMLInputElement).value;
    let height = (document.getElementById('height') as HTMLInputElement).value;
    let validateValue = true;

    if(title.length == 0) {
        (document.getElementById('titleErrorMsg') as HTMLElement).textContent = "A műtermék címe nem lehet üres!"
        validateValue = false;
    }

    else if(!titleRegex.test(title)){
        (document.getElementById('titleErrorMsg') as HTMLElement).textContent = "A műtermék csak az angol ABC betűit tartalmazhatja, illetve pontot, vesszőt, kötőjelet és szóközt!"
        validateValue = false;
    }
    
    else {
        (document.getElementById('titleErrorMsg') as HTMLElement).textContent = ""
    }



    if (parseInt(year) > currentYear){
        (document.getElementById('yearErrorMsg') as HTMLElement).textContent = "Az év max " + currentYear + " lehet!"
        validateValue = false;
    }
    else if (year.length == 0){
        (document.getElementById('yearErrorMsg') as HTMLElement).textContent = "Az év nem lehet üres!"
        validateValue = false;
    }
    else {
        (document.getElementById('yearErrorMsg') as HTMLElement).textContent = ""
    }


    if (parseInt(price) < 1){
        (document.getElementById('priceErrorMsg') as HTMLElement).textContent = "Az ár nem lehet kisebb, mint 1!"
        validateValue = false;
    }
    else if (price.length == 0){
        (document.getElementById('priceErrorMsg') as HTMLElement).textContent = "Az ár nem lehet üres!"
        validateValue = false;
    }
    else {
        (document.getElementById('priceErrorMsg') as HTMLElement).textContent = ""
    }

    if (parseInt(height) < 20){
        (document.getElementById('heightErrorMsg') as HTMLElement).textContent = "A magasság nem lehet kisebb, mint 20!"
        validateValue = false;
    }
    else if (height.length == 0){
        (document.getElementById('heightErrorMsg') as HTMLElement).textContent = "A magasság nem lehet üres!"
        validateValue = false;
    }
    else {
        (document.getElementById('heightErrorMsg') as HTMLElement).textContent = ""
    }

    console.log(validateValue);

    if(validateValue){
        artworks.push(new Statue(title, parseInt(year), parseInt(price), parseInt(height)))
        amount++;
        priceSum += parseInt(price);
        (document.getElementById('amount') as HTMLElement).textContent = "" + amount;
        (document.getElementById('priceSum') as HTMLElement).textContent = "" + priceSum;
    }



}