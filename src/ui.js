import {game} from "./game";

export function loadUI() {
    const header = createHeader();
    const mainContent = createMainContent();
    const footer = createFooter();
    const overlay = createShipPlacementPopUp();

    document.body.append(header, mainContent, footer, overlay);
}

function createShipPlacementPopUp() {
    const background = document.createElement("div");
    background.classList.add("overlay");

    const popUp = document.createElement("div");
    popUp.classList.add("popUp");

    const heading = document.createElement("h2");
    heading.textContent = "Welcome to the battleship game";

    const info = document.createElement("span");
    info.textContent = "Place your ships";

    const rotateButton = document.createElement("button");
    rotateButton.addEventListener('click', () => {
        isHorizontal = !isHorizontal;
    });
    rotateButton.textContent = "Rotate";

    const userBoard = createInitialBoard();
    userBoard.classList.add("interactible");
    let isHorizontal = true;
    let length = 5;

    const boardRows = userBoard.childNodes;
    const board = game.getUser().ownGameboard;
    for (let x = 0; x < 10; ++x) {
        const boardSquares = boardRows[x].childNodes;
        for (let y = 0; y < 10; ++y) {
            boardSquares[y].addEventListener('click', () => {
                if (board.isOutOfBounds([x, y], length, isHorizontal) || board.willCollide([x, y], length, isHorizontal))
                    return ;
                board.placeShip([x, y], length--, isHorizontal);
                renderBoard(board, userBoard);

                if (length == 1) {
                    const boardOnScreen = document.querySelector(".user");
                    renderBoard(board, boardOnScreen);
                    background.remove();
                }
            });
        }
    }

    popUp.append(heading, info, rotateButton, userBoard);
    background.appendChild(popUp);

    return background;
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
    enemyBoard.classList.add("interactible");
    userBoard.classList.add("user");
    makeAttackable(enemyBoard, userBoard);

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
            boardRow.appendChild(square);
        }
        board.appendChild(boardRow);
    }
    return board;
}

function renderBoard(boardToRender, boardOnScreen) {
    const rootStyles = getComputedStyle(document.documentElement);
    const boardOnScreenRows = boardOnScreen.childNodes;
    for (let x = 0; x < 10; ++x) {
        const boardSquares = boardOnScreenRows[x].childNodes;
        for (let y = 0; y < 10; ++y) {
            if (boardToRender.hasShip([x, y]) != -1) {
                if (boardToRender.hasBeenAttacked([x, y]))
                    boardSquares[y].style.backgroundColor = rootStyles.getPropertyValue("--hit-ship-square-color");
                else if (boardToRender == game.getUser().ownGameboard)
                    boardSquares[y].style.backgroundColor = rootStyles.getPropertyValue("--ship-square-color");
            } else {
                if (boardToRender.hasBeenAttacked([x, y]))
                    boardSquares[y].style.backgroundColor = rootStyles.getPropertyValue("--empty-square-color");
            }
        }
    }
}

function makeAttackable(enemyBoard, userBoard) {
    game.getEnemy().placeShipsRandomly();
    const enemyBoardRows = enemyBoard.childNodes;
    for (let x = 0; x < 10; ++x) {
        const boardSquares = enemyBoardRows[x].childNodes;
        for (let y = 0; y < 10; ++y) {
            boardSquares[y].addEventListener('click', () => {
                game.playRound([x, y]);
                renderBoard(game.getEnemy().ownGameboard, enemyBoard);
                renderBoard(game.getUser().ownGameboard, userBoard);
            });
        }
    }
}

function createFooter() {
    const footer = document.createElement("footer");
    const authorNote = document.createElement("p");

    authorNote.textContent = "Copyright © 2022 Peepachu";
    footer.appendChild(authorNote);
    return footer;
}

function createGameEndingPopUp() {

}
//TODO Make the user able to place ships in their board
//TODO Create a pop up when the game ends