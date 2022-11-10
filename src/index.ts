import { Artwork } from "./artwork";
import { Statue } from "./statue";

let artworks: Artwork[] = [];

document.addEventListener('DOMContentLoaded', init)

function init() {
    document.getElementById('add')?.addEventListener('click', felvesz)
}

function felvesz() {
    let title = (document.getElementById('title') as HTMLInputElement).value;
    console.log(title)
}