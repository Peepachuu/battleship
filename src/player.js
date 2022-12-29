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

    return {
        ownGameboard,
        attack,
        randomAttack
    }
}