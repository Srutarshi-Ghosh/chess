import { createSlice } from "@reduxjs/toolkit";
import Player from "../constants/Player";

interface PlayerState {
	currentPlayer: Player;
}

const initialState: PlayerState = {
	currentPlayer: Player.WHITE,
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		changePlayer: (state) => {
			state.currentPlayer = state.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE;
		},
		resetPlayer: (state) => {
			state.currentPlayer = Player.WHITE;
		},
	},
});

export const { changePlayer, resetPlayer } = playerSlice.actions;
export default playerSlice.reducer;
