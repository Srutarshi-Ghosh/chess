import PieceColor from "../constants/PieceColor";
import PieceType from "../constants/PieceType";
import SquareData from "../types/SquareData";

const getPieceImageUrl = (squareData: SquareData): string => {
	if (squareData === null) return "";

	const prefix = squareData.pieceColor === PieceColor.BLACK ? "b" : "w";
	const pieceValue = PieceType[squareData.pieceType];
	const url = prefix + "_piece" + pieceValue + ".png";

	return url;
};

export default getPieceImageUrl;
