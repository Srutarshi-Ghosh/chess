import SquareColor from "../constants/SquareColor";
import BoardIndex from "../types/BoardIndex";
import SquareData from "../types/SquareData";

const changeSquareColorOnSelect = (
	boardData: SquareData[][],
	selectedSquareIndex: BoardIndex,
	squareIndexes: BoardIndex[],
	squareColorData: SquareColor[][],
	setSquareColorData: Function
) => {
	const { posX, posY } = selectedSquareIndex;
	squareColorData[posX][posY] = SquareColor.SELECTED;

	squareIndexes.forEach((squareIndex) => {
		const rowIndex = squareIndex.posX,
			colIndex = squareIndex.posY;
		if (boardData[rowIndex][colIndex]) squareColorData[rowIndex][colIndex] = SquareColor.DANGER;
		else squareColorData[rowIndex][colIndex] = SquareColor.HIGHLIGHT;
	});
	setSquareColorData(squareColorData);
};

export default changeSquareColorOnSelect;
