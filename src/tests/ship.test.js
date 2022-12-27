import {ship} from "../ship.js";

let testShip;
beforeEach(() => {
    testShip = ship(4);
});


it("can register hits", () => {
    testShip.hit();
    expect(testShip.getHitCount()).toBe(1);
});

it("can sink", () => {
    for (let i = 0; i < 4; ++i)
        testShip.hit();
    expect(testShip.isSunk()).toBe(true);
})