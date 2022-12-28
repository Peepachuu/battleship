import {player} from "../player";

let testPlayer;
let enemyPlayer;
beforeEach(() => {
    testPlayer = player();
    enemyPlayer = player();
}); 

it("can be attacked", () => {
    enemyPlayer.attack([5, 3], testPlayer);
    expect(testPlayer.gameboard.hasBeenAttacked([5, 3])).toBe(true);
});

it("can make random attacks", () => {
    enemyPlayer.randomAttack(testPlayer);
    let cordsHit = 0;
    for (let x = 0; x < 10; ++x) {
        for (let y = 0; y < 10; ++y) {
            if (testPlayer.gameboard.hasBeenAttacked([x, y]))
                ++cordsHit;
        } 
    }
    expect(cordsHit).toBe(1);
});