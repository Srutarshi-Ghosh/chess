import BoardIndex from "../types/BoardIndex";
import SquareData from "../types/SquareData";

const movePiece = (boardData: SquareData[][], setBoardData: Function, oldPosition: BoardIndex, newPosition: BoardIndex) => {
	const { posX: oldPosX, posY: oldPosY } = oldPosition;
	const { posX: newPosX, posY: newPosY } = newPosition;

	boardData[newPosX][newPosY] = boardData[oldPosX][oldPosY];
	boardData[oldPosX][oldPosY] = null;

	setBoardData(boardData);
};
export default movePiece;
