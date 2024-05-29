import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovesState {
	movesList: string[];
}

const initialState: MovesState = {
	movesList: [],
};

const movesSlice = createSlice({
	name: "moves",
	initialState,
	reducers: {
		addMove: (state: MovesState, action: PayloadAction<string>) => {
			state.movesList = [...state.movesList, action.payload];
		},
		undoLastMove: (state: MovesState) => {
			state.movesList = state.movesList.splice(0, state.movesList.length - 1);
		},
		resetMoves: (state: MovesState) => {
			state.movesList = [];
		},
	},
});

export const { addMove, undoLastMove, resetMoves } = movesSlice.actions;
export default movesSlice.reducer;
