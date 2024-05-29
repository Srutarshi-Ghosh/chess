import Player from "../constants/Player";
import store from "../store";

const getDisplayScreenText = () => {
	const currentPlayer = store.getState().player.currentPlayer;
	const displayScreenText = `${Player[currentPlayer]}'s turn`;
	return displayScreenText;
};

export default getDisplayScreenText;
