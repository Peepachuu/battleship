import {gameboard} from "../gameboard";

let testGameboard;
beforeEach(() => {
    testGameboard = gameboard();
});

test("whether gameboard can place ships horizontally", () => {
    testGameboard.placeShip(12, 3, true);
    expect(testGameboard.hasShip(12, 3, true)).toBe(true);
});

test("whether gameboard can place ships vertically", () => {
    testGameboard.placeShip(12, 2, false);
    expect(testGameboard.hasShip(12, 2, false)).toBe(true);
});

it("doesn't place a ship which would intersect with existing ones", () => {
    testGameboard.placeShip(12, 5, true);
    testGameboard.placeShip(12, 5, false);

    expect(testGameboard.hasShip(12, 5, true)).toBe(true);
    expect(testGameboard.hasShip(12, 5, false)).toBe(false);
});

it("doesn't place ship out of board", () => {
    testGameboard.placeShip(9, 4, true);
    expect(testGameboard.hasShip(9, 4, true)).toBe(false);
});

