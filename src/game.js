import {player} from "./player";

export const game = function() {
    let user = player();
    let enemy = player();

    enemy.ownGameboard.placeShip([3, 4], 3, true);
    user.attack([3, 4], enemy);

    function playRound(userCordChoice) {
        
    }

    function getUser() {
        return user;
    }

    function getEnemy() {
        return enemy;
    }

    return {
        playRound,
        getEnemy,
        getUser
    }
}();
