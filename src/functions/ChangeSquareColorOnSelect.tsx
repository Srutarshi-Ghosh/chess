import SquareColor from "../constants/SquareColor";
import BoardIndex from "../types/BoardIndex";

const changeSquareColorOnSelect = (selectedSquareIndex: BoardIndex, squareIndexes: BoardIndex[], squareColorData: SquareColor[][], setSquareColorData: Function) => {
	
	const { posX, posY } = selectedSquareIndex
	squareColorData[posX][posY] = SquareColor.SELECTED
	
	squareIndexes.forEach((squareIndex) => {
		const rowIndex = squareIndex.posX,
			colIndex = squareIndex.posY;
		squareColorData[rowIndex][colIndex] = SquareColor.HIGHLIGHT;
	});
	// console.log(squareColorData)
	setSquareColorData(squareColorData)
};

export default changeSquareColorOnSelect;
