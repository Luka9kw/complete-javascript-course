'use scrict';


const cutFruitPieces = fruit => fruit * 4;

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges`;

    return juice;
};

console.log(fruitProcessor(3, 8))