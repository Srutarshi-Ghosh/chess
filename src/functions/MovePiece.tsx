import PieceColor from "../constants/PieceColor";
import BoardIndex from "../types/BoardIndex";
import SquareData from "../types/SquareData";

const checkValidMove = (boardData: SquareData[][], position: BoardIndex, selectedPieceColor: PieceColor): Boolean => {
	const { posX, posY } = position;
	if (posX < 0 || posX >= 8 || posY < 0 || posY >= 8) return false;

	if (boardData[posX][posY]?.pieceColor === selectedPieceColor) return false;

	return true;
};

const checkEnemy = (boardData: SquareData[][], position: BoardIndex, selectedPieceColor: PieceColor): Boolean => {
	const { posX, posY } = position;
	return boardData[posX][posY]?.pieceColor !== selectedPieceColor ? true : false;
};

const getMovesForPawn = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
	const { posX, posY } = position;
	const validMoves: BoardIndex[] = [];

	if (pieceColor === PieceColor.BLACK) {
		let newPosition = { posX: posX - 1, posY: posY };
		if (checkValidMove(boardData, newPosition, pieceColor) && !checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);

		if (posX === 6) {
			//If pawn is moved for the first time it can move 2 places
			newPosition = { posX: posX - 2, posY: posY };
			if (validMoves.length > 0 && checkValidMove(boardData, newPosition, pieceColor) && !checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);
		}

		newPosition = { posX: posX - 1, posY: posY - 1 };
		if (checkValidMove(boardData, newPosition, pieceColor) && checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);

		newPosition = { posX: posX - 1, posY: posY + 1 };
		if (checkValidMove(boardData, newPosition, pieceColor) && checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);
	} else {
		let newPosition = { posX: posX + 1, posY: posY };
		if (checkValidMove(boardData, newPosition, pieceColor) && !checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);

		if (posX === 1) {
			//If pawn is moved for the first time it can move 2 places
			newPosition = { posX: posX + 2, posY: posY };
			if (validMoves.length > 0 && checkValidMove(boardData, newPosition, pieceColor) && !checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);
		}

		newPosition = { posX: posX + 1, posY: posY - 1 };
		if (checkValidMove(boardData, newPosition, pieceColor) && checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);

		newPosition = { posX: posX + 1, posY: posY + 1 };
		if (checkValidMove(boardData, newPosition, pieceColor) && checkEnemy(boardData, newPosition, pieceColor)) validMoves.push(newPosition);
	}

	return validMoves;
};

const getMovesForRook = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
	const { posX, posY } = position;
	const validMoves: BoardIndex[] = [];
	const directions: number[][] = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	var newPosition: BoardIndex;

	for (const direction of directions) {
		for (let multiplicativeFactor = 1; multiplicativeFactor < 8; multiplicativeFactor++) {
			newPosition = {
				posX: posX + direction[0] * multiplicativeFactor,
				posY: posY + direction[1] * multiplicativeFactor,
			};
			if (checkValidMove(boardData, newPosition, pieceColor)) {
				validMoves.push(newPosition);
				if (checkEnemy(boardData, position, pieceColor)) break;
			} else break;
		}
	}

	return validMoves;
};

const getMovesForBishop = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
	const { posX, posY } = position;
	const validMoves: BoardIndex[] = [];
	const directions: number[][] = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 1],
		[-1, 1],
		[1, -1],
		[-1, -1],
	];
	var newPosition: BoardIndex;

	for (const direction of directions) {
		for (let multiplicativeFactor = 1; multiplicativeFactor < 8; multiplicativeFactor++) {
			newPosition = {
				posX: posX + direction[0] * multiplicativeFactor,
				posY: posY + direction[1] * multiplicativeFactor,
			};
			if (checkValidMove(boardData, newPosition, pieceColor)) {
				validMoves.push(newPosition);
				if (checkEnemy(boardData, position, pieceColor)) break;
			} else break;
		}
	}

	return validMoves;
};

const getMovesForQueen = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
	const { posX, posY } = position;
	const validMoves: BoardIndex[] = [];
	const directions: number[][] = [
		[1, 1],
		[-1, 1],
		[1, -1],
		[-1, -1],
	];
	var newPosition: BoardIndex;

	for (const direction of directions) {
		for (let multiplicativeFactor = 1; multiplicativeFactor < 8; multiplicativeFactor++) {
			newPosition = {
				posX: posX + direction[0] * multiplicativeFactor,
				posY: posY + direction[1] * multiplicativeFactor,
			};
			if (checkValidMove(boardData, newPosition, pieceColor)) {
				validMoves.push(newPosition);
				if (checkEnemy(boardData, position, pieceColor)) break;
			} else break;
		}
	}

	return validMoves;
};


const MovePiece = () => {};
export default MovePiece;
