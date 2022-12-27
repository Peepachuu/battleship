import {gameboard} from "../gameboard";

let testGameboard;
beforeEach(() => {
    testGameboard = gameboard();
});

test("whether gameboard can place ships horizontally", () => {
    testGameboard.placeShip([2, 3], 3, true);
    expect(testGameboard.hasShip([2, 3], 3, true)).toBe(true);
});

test("whether gameboard can place ships vertically", () => {
    testGameboard.placeShip([2, 3], 2, false);
    expect(testGameboard.hasShip([2, 3], 2, false)).toBe(true);
});

it("doesn't place a ship which would intersect with existing ones", () => {
    testGameboard.placeShip([5, 5], 3, true);
    testGameboard.placeShip([5, 5], 4, false);

    expect(testGameboard.hasShip([5, 5], 3, true)).toBe(true);
    expect(testGameboard.hasShip([5, 5], 4, false)).toBe(false);
});

it("doesn't place ship out of board", () => {
    testGameboard.placeShip([8, 0], 4, true);
    expect(testGameboard.hasShip([8, 0], 4, true)).toBe(false);
});


it("registers a hit", () => {
    testGameboard.receiveAttack([4, 2]);
    expect(testGameboard.hasBeenAttacked([4, 2])).toBe(true);
});

