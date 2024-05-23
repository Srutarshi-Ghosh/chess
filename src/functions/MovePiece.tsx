import BoardIndex from "../types/BoardIndex";
import SquareData from "../types/SquareData";

const movePiece = (boardData: SquareData[][], oldPosition: BoardIndex, newPosition: BoardIndex) => {
	const { posX: oldPosX, posY: oldPosY } = oldPosition;
	const { posX: newPosX, posY: newPosY } = newPosition;
	const newBoardData = structuredClone(boardData);
	newBoardData[newPosX][newPosY] = boardData[oldPosX][oldPosY];
	newBoardData[oldPosX][oldPosY] = null;
	return newBoardData;
};
export default movePiece;
