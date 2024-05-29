import PieceType from "../constants/PieceType";

const getPieceFromValue = (value: number): PieceType => {
	return PieceType[value] as unknown as PieceType
};

export default getPieceFromValue;
