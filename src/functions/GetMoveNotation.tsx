import PieceColor from "../constants/PieceColor";
import BoardIndex from "../types/BoardIndex";
import SquareData from "../types/SquareData";
import getSquareName from "./GetSquareName";

const getMoveNotation = (boardData: SquareData[][], oldPosition: BoardIndex, newPosition: BoardIndex): string => {
	const { posX: oldPosX, posY: oldPosY } = oldPosition;
	const { posX: newPosX, posY: newPosY } = newPosition;
	const pieceData = boardData[oldPosX][oldPosY];
	if (!pieceData) return "";

	const oldPositionSquareName = getSquareName(oldPosition);
	const newPositionSquareName = getSquareName(newPosition);

	var moveNotation = `${PieceColor[pieceData.pieceColor]} - ${oldPositionSquareName} ${newPositionSquareName}`;
	const capturingPiece = boardData[oldPosX][oldPosY];
	const capturedPiece = boardData[newPosX][newPosY];
	if (capturedPiece && capturingPiece) 
		moveNotation += ` | ${capturingPiece.pieceType} takes ${capturedPiece.pieceType}`;

	return moveNotation;
};
export default getMoveNotation;
