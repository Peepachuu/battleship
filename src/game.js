import {player} from "./player";

export const game = function() {
    let user = player();
    let enemy = player();

    function playRound(userCordChoice) {
        if (enemy.ownGameboard.hasBeenAttacked(userCordChoice))
            return ;
        user.attack(userCordChoice, enemy);
        enemy.randomAttack(user);
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
