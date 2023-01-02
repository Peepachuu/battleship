import { gameboard } from "./gameboard";

export const player = function() {
    const ownGameboard = gameboard();

    function attack(cord, playerToAttack) {
        playerToAttack.ownGameboard.receiveAttack(cord);
    }

    function randomAttack(playerToAttack) {
        let cordX;
        let cordY;
        do {
            cordX = Math.floor(Math.random() * 10);
            cordY = Math.floor(Math.random() * 10);
        } while (playerToAttack.ownGameboard.hasBeenAttacked([cordX, cordY]));
        playerToAttack.ownGameboard.receiveAttack([cordX, cordY]);
    }

    function placeShipsRandomly() {
        let length = 5;
        let isHorizontal;
        while (ownGameboard.shipCount() != 5) {
            isHorizontal = Math.random() < 0.5; 
            ownGameboard.placeShip(findPlaceableCord(length, isHorizontal), length, isHorizontal);
            if (length == 3) {
                isHorizontal = Math.random() < 0.5;
                ownGameboard.placeShip(findPlaceableCord(length, isHorizontal), length, isHorizontal);
            }
            length--;
        }
    }

    function findPlaceableCord(length, isHorizontal) {
        let cordX;
        let cordY;
        do {
            cordX = Math.floor(Math.random() * 10);
            cordY = Math.floor(Math.random() * 10);
        } while (ownGameboard.isOutOfBounds([cordX, cordY], length, isHorizontal) || ownGameboard.willCollide([cordX, cordY], length, isHorizontal));
        return [cordX, cordY];
    }

    return {
        ownGameboard,
        attack,
        randomAttack,
        placeShipsRandomly
    }
}