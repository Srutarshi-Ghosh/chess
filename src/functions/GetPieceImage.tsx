import PieceColor from "../constants/PieceColor";
import PieceType from "../constants/PieceType";
import SquareData from "../types/SquareData";

const getPieceImage = (squareData: SquareData): any => {
	if (squareData === null) return "";

	const prefix = squareData.pieceColor === PieceColor.BLACK ? "b" : "w";
	const pieceValue = PieceType[squareData.pieceType];
	const pieceImageUrl = prefix + "_piece" + pieceValue + ".png";
	const pieceImage = pieceImageUrl ? require(`../assets/${pieceImageUrl}`) : null;
	
	return pieceImage;
};

export default getPieceImage;
