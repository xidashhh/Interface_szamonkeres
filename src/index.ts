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

    if(title.length < 1) {
        (document.getElementById('titleerrorMsg') as HTMLElement).textContent = "A műtermék címe nem lehet üres!"
    }

    else if(!titleRegex.test(title)){
        (document.getElementById('titleerrorMsg') as HTMLElement).textContent = "A műtermék csak az angol ABC betűit tartalmazhatja, illetve pontot, vesszőt, kötőjelet és szóközt!"
    }
    
    else {
        (document.getElementById('titleerrorMsg') as HTMLElement).textContent = ""
    }




}