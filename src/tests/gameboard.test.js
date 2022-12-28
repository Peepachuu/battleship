import {gameboard} from "../gameboard";

let testGameboard;
let board;

beforeEach(() => {
    testGameboard = gameboard();
    board = [];
    for (let x = 0; x < 10; ++x) {
        let row = [];
        for (let y = 0; y < 10; ++y) {
            row.push({containsShip: -1, beenHit: false});
        }
        board.push(row);
    }
});

it("can place ships horizontally", () => {
    testGameboard.placeShip([2, 3], 3, true);
    board[2][3].containsShip = 0;
    board[2][4].containsShip = 0;
    board[2][5].containsShip = 0;
    expect(testGameboard.getBoard()).toEqual(board);
});

it("can place ships vertically", () => {
    testGameboard.placeShip([2, 3], 2, false);
    board[2][3].containsShip = 0;
    board[3][3].containsShip = 0;
    expect(testGameboard.getBoard()).toEqual(board);
});

it("rejects intersecting ship positions", () => {
    testGameboard.placeShip([5, 5], 3, true);
    expect(testGameboard.willCollide([5, 5], 3, false)).toEqual(true);
});

it("rejects placement that are out of bounds", () => {
    expect(testGameboard.isOutOfBounds([8, 8], 4, true)).toEqual(true);
});

it("registers a hit", () => {
    testGameboard.receiveAttack([4, 2]);
    expect(testGameboard.hasBeenAttacked([4, 2])).toBe(true);
});

