import {game} from "./game";

function loadUI() {

}

function createShipPlacementForm() {

}

function createHeader() {
    const header = document.createElement("header");
    const heading = document.createElement("h1");

    heading.textContent = "Battleship";
    header.appendChild(heading);
    return header;
}

function createBody() {

}

function renderBoard(boardToRender) {

}

function createFooter() {
    const footer = document.createElement("footer");
    const authorNote = document.createElement("p");

    authorNote.textContent = "Copyright © 2022 Peepachu";
    footer.appendChild(authorNote);
    return footer;
}