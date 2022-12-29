export function loadUI() {
    const header = createHeader();
    const mainContent = createMainContent();
    const footer = createFooter();

    document.body.append(header, mainContent, footer);
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

function createMainContent() {
    const mainContent = document.createElement("section");
    mainContent.classList.add("main");
    let userBoard = createInitialBoard();
    let enemyBoard = createInitialBoard();
    mainContent.append(userBoard, enemyBoard);

    return mainContent;
}

function createInitialBoard() {
    let board = document.createElement("div");
    board.classList.add("board");
    
    for (let x = 0; x < 10; ++x) {
        let boardRow = document.createElement("div");
        boardRow.classList.add("board-row");

        for (let y = 0; y < 10; ++y) {
            let square = document.createElement("div");
            square.classList.add("board-square");
            //TODO Make it so that clicking the enemy board's square attacks it
            boardRow.appendChild(square);
        }
        board.appendChild(boardRow);
    }
    return board;
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