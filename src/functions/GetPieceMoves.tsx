import PieceColor from "../constants/PieceColor";
import PieceType from "../constants/PieceType";
import BoardIndex from "../types/BoardIndex";
import ChessPiece from "../types/ChessPiece";
import SquareData from "../types/SquareData";
import getPieceFromValue from "./GetPieceFromValue";


const checkValidMove = (boardData: SquareData[][], position: BoardIndex, selectedPieceColor: PieceColor): Boolean => {
	const { posX, posY } = position;
	if (posX < 0 || posX >= 8 || posY < 0 || posY >= 8) return false;

	if (boardData[posX][posY] && boardData[posX][posY]?.pieceColor === selectedPieceColor) return false;

	return true;
};

const checkEnemy = (boardData: SquareData[][], position: BoardIndex, selectedPieceColor: PieceColor): Boolean => {
	const { posX, posY } = position;
	return (boardData[posX][posY] && boardData[posX][posY]?.pieceColor !== selectedPieceColor) ? true : false;
};

const getMovesForPawn = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
	const { posX, posY } = position;
	const validMoves: BoardIndex[] = [];

	if (pieceColor === PieceColor.BLACK) {
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
	} else {
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
				if (checkEnemy(boardData, newPosition, pieceColor)) break;
			} else break;
		}
	}

	return validMoves;
};

const getMovesForHorse = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
	const { posX, posY } = position;
	const validMoves: BoardIndex[] = [];
	const directions: number[][] = [
		[1, 2],
		[-1, 2],
		[2, 1],
		[-2, 1],
		[2, -1],
		[1, -2],
		[-2, -1],
		[-1, -2],
	];
	var newPosition: BoardIndex;

	for(const direction of directions) {
		newPosition = {
			posX: posX + direction[0],
			posY: posY + direction[1]
		};
		if (checkValidMove(boardData, newPosition, pieceColor))
			validMoves.push(newPosition);
	}

	return validMoves
};

const getMovesForBishop = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
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
				if (checkEnemy(boardData, newPosition, pieceColor)) break;
			} else break;
		}
	}

	return validMoves;
};

const getMovesForQueen = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
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
				if (checkEnemy(boardData, newPosition, pieceColor)) break;
			} else break;
		}
	}

	return validMoves;
};

const getMovesForKing = (boardData: SquareData[][], position: BoardIndex, pieceColor: PieceColor): BoardIndex[] => {
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
		newPosition = {
			posX: posX + direction[0],
			posY: posY + direction[1],
		};
		if (checkValidMove(boardData, newPosition, pieceColor)) validMoves.push(newPosition);
	}

	return validMoves;
};

const getPieceMoves = (boardData: SquareData[][], position: BoardIndex, piece: ChessPiece) => {
	const { pieceColor, pieceType } = piece
	const pieceTypeValue = getPieceFromValue(pieceType)
	let pieceMoves: BoardIndex[]

	switch(pieceTypeValue) {
		case PieceType.PAWN:
			pieceMoves = getMovesForPawn(boardData, position, pieceColor)
			break
		case PieceType.ROOK:
			pieceMoves = getMovesForRook(boardData, position, pieceColor)
			break 
		case PieceType.HORSE:
			pieceMoves = getMovesForHorse(boardData, position, pieceColor)
			break
		case PieceType.BISHOP:
			pieceMoves = getMovesForBishop(boardData, position, pieceColor)
			break
		case PieceType.QUEEN:
			pieceMoves = getMovesForQueen(boardData, position, pieceColor)
			break
		case PieceType.KING:
			pieceMoves = getMovesForKing(boardData, position, pieceColor)
			break
		default:
			pieceMoves = []
	}
	return pieceMoves
};
export default getPieceMoves;