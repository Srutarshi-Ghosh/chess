import SquareNamesCol from "../constants/SquareNamesCol";
import SquareNamesRow from "../constants/SquareNamesRow";
import BoardIndex from "../types/BoardIndex";

const getSquareName = (position: BoardIndex) => {
	const { posX, posY } = position;
	return SquareNamesRow[posY] + SquareNamesCol[posX];
};
export default getSquareName;
