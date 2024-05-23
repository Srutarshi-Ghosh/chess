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
		addMove: (state, action: PayloadAction<string>) => {
			state.movesList = [...state.movesList, action.payload];
		},
		resetMoves: (state) => {
			state.movesList = [];
		},
	},
});

export const { addMove, resetMoves } = movesSlice.actions;
export default movesSlice.reducer;
