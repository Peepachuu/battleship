export const ship = function(length) {

    let hitCount = 0;
    function hit() {
        ++hitCount;
    }

    function isSunk() {
        return (hitCount >= length);
    }

    function getHitCount() {
        return hitCount;
    }

    return {
        hit,
        isSunk,
        getHitCount
    }
};