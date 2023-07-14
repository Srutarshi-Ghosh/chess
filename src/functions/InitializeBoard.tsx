import SquareData from "../types/SquareData";
import BoardMap from "../constants/BoardMap";
import PieceColor from "../constants/PieceColor";
import getPieceFromValue from "./GetPieceFromValue";

const initializeBoard = (): SquareData[][] => {
	const board: SquareData[][] = [];
	var squareData: SquareData = null;

	for (let row = 0; row < 8; row++) {
		board.push([]);
		for (let col = 0; col < 8; col++) {
			let squareValue = BoardMap[row][col];

			if (squareValue > 0)
				squareData = {
					pieceColor: PieceColor.WHITE,
					pieceType: getPieceFromValue(squareValue),
				};
			else if (squareValue < 0)
				squareData = {
					pieceColor: PieceColor.BLACK,
					pieceType: getPieceFromValue(Math.abs(squareValue)),
				};
			else squareData = null;

			board[row].push(squareData);
		}
	}

	return board

};

export default initializeBoard
