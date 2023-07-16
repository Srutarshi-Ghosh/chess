import SquareColor from "../constants/SquareColor";
import BoardIndex from "../types/BoardIndex";

const getHighlightSquaresData = (listOfBoardIndexes: BoardIndex[], squareColorData: SquareColor[][]): SquareColor[][] => {
	listOfBoardIndexes.forEach((squareIndex) => {
		const rowIndex = squareIndex.posX,
			colIndex = squareIndex.posY;
		squareColorData[rowIndex][colIndex] = SquareColor.HIGHLIGHT;
	});
	// console.log(squareColorData)
	return squareColorData;
};

export default getHighlightSquaresData;
