import Player from "../constants/Player";

const changePlayer = (currentPlayer: Player) => {
	return currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE
}
export default changePlayer