const board = document.getElementById("board");
const colors = [
    "red", "blue", "purple", "green", "white"
];

var mouseColor = "red";

(() => {
    colors.forEach(color => {
        let square = document.createElement("div");
        square.classList.add("colored", "square");
        square.style.backgroundColor = color;
        square.onclick = () => mouseColor = square.style.backgroundColor;

        document.getElementById("boardPalette").appendChild(square);
    });
})();

const createNewBoard = (width, height) => {
    board.style.gridTemplateRows = `repeat(${width}, 50px)`;
    board.style.gridTemplateColumns = `repeat(${height}, 50px)`;

    for (let boardHeight = 0; boardHeight < height; boardHeight++) {
        for (let boardWidth = 0; boardWidth < width; boardWidth++) {
            let square = document.createElement("div");
            square.classList.add("uncolored", "square");
            square.onclick = () => {
                square.style.backgroundColor = mouseColor;

                switch (mouseColor) {
                    case "white":
                        square.classList.add('uncolored');
                        square.classList.remove("colored");
                        break;

                    default:
                        square.classList.remove('uncolored');
                        square.classList.add("colored");
                        break;
                }
            }

            board.appendChild(square);
        }
    }

}

createNewBoard(20, 20);