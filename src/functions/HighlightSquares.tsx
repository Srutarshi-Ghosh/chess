import SquareColor from "../constants/SquareColor";

const highlightSquares = (listOfSquareIndexes: number[][], squareColorData: SquareColor[][], setSquareColorData: Function) => {
	listOfSquareIndexes.forEach((squaewIndex) => {
		const rowIndex = squaewIndex[0],
			colIndex = squaewIndex[1];
		squareColorData[rowIndex][colIndex] = SquareColor.HIGHLIGHT;
	});
	
    setSquareColorData(squareColorData)
};

export default highlightSquares;
