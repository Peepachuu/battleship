export const ship = function(shipCoordinates) {
    let cordsHit = [];

    function hit(cord) {
        if (cordsHit.includes(cord))
            return ;
        
        if (shipCoordinates.includes(cord))
            cordsHit.push(cord); 
    }

    function isSunk() {
        return (cordsHit.length >= shipCoordinates.length);
    }

    function getHitCount() {
        return cordsHit.length;
    }

    return {
        hit,
        isSunk,
        getHitCount
    }
};