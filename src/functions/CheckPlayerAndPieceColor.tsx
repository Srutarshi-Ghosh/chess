import PieceColor from "../constants/PieceColor";
import Player from "../constants/Player";

const checkPlayerAndPieceColor = (player: Player, pieceColor: PieceColor) => {
	return Player[player] === PieceColor[pieceColor];
};
export default checkPlayerAndPieceColor;
