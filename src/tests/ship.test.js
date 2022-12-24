import {ship} from "../ship.js";

let testShip;
beforeEach(() => {
    testShip = ship([0, 1, 2, 3]);
});


test("whether ship hit count is remembered", () => {
    testShip.hit(0);
    expect(testShip.getHitCount()).toBe(1);
});

test("whether ship sinks when hit count is less than length", () => {
    testShip.hit(2);
    testShip.hit(3);
    expect(testShip.isSunk()).toBe(false);
});

test("whether ship sinks when hit count is equal to length", () => {
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    expect(testShip.isSunk()).toBe(true);
});

test("whether ship registers same coordinate twice", () => {
    testShip.hit(0);
    testShip.hit(0);
    expect(testShip.getHitCount()).toBe(1);
})