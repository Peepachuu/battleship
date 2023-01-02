import {ship} from "./ship";

export const gameboard = function() {

    let board = [];
    let ships = [];

    for (let x = 0; x < 10; ++x) {
        let row = [];
        for (let y = 0; y < 10; ++y) {
            row.push({containsShip: -1, beenHit: false});
        }
        board.push(row);
    }

    function placeShip(start, length, isHorizontal) {
        let shipToPlace = ship(length);
        ships.push(shipToPlace);
        if (isHorizontal) {
            for (let i = start[1]; i < start[1] + length; ++i) {
                board[start[0]][i].containsShip = ships.length - 1;
            }
        } else {
            for (let i = start[0]; i < start[0] + length; ++i) {
                board[i][start[1]].containsShip = ships.length - 1;
            }
        }
    }
    
    function receiveAttack(coordinate) {
        board[coordinate[0]][coordinate[1]].beenHit = true;
    }

    function hasBeenAttacked(coordinate) {
        return (board[coordinate[0]][coordinate[1]].beenHit);
    }

    function hasShip(coordinate) {
        return (board[coordinate[0]][coordinate[1]].containsShip);
    }

    function getBoard() {
        return board;
    }

    function isOutOfBounds(start, length, isHorizontal) {
        if (isHorizontal) {
            return start[1] + length - 1 > 9;
        }
        return start[0] + length - 1> 9;
    }

    function willCollide(start, length, isHorizontal) {
        if (isHorizontal) {
            for (let i = start[1]; i < start[1] + length; ++i) {
                if (board[start[0]][i].containsShip != -1)
                    return true;
            }
        } else {
            for (let i = start[0]; i < start[0] + length; ++i) {
                if (board[i][start[1]].containsShip != -1)
                    return true;
            }
        }
        return false;
    }

    function allShipsSunk() {
        for (const shipToCheck of ships) {
            if (!shipToCheck.isSunk())
                return false;
        }
        return true;
    }

    function shipCount() {
        return ships.length;
    }

    return {
        placeShip,
        receiveAttack,
        hasBeenAttacked,
        getBoard,
        isOutOfBounds,
        willCollide,
        hasShip,
        allShipsSunk,
        shipCount
    }
}