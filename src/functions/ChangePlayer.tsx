import Player from "../constants/Player";

const changePlayer = (player: React.MutableRefObject<Player>) => {
	console.log(player)
	return player.current === Player.WHITE ? Player.BLACK : Player.WHITE
}
export default changePlayer