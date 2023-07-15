import SquareColor from "../constants/SquareColor";

const toogleSquareColor = (squareColor: SquareColor) => {
	return squareColor === SquareColor.BLACK ? SquareColor.WHITE : SquareColor.BLACK;
};

export default toogleSquareColor;
