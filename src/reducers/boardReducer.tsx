import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import SquareData from "../types/SquareData";
import initializeBoard from "../functions/InitializeBoard";

interface BoardState {
	boardData: SquareData[][];
	boardDataHistory: SquareData[][][];
}

const initialBoardState = initializeBoard();

const initialState: BoardState = {
	boardData: initialBoardState,
	boardDataHistory: [structuredClone(initialBoardState)],
};

const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		addBoardState: (state: BoardState, action: PayloadAction<SquareData[][]>) => {
			const newBoardData = action.payload;
			state.boardData = newBoardData;
			state.boardDataHistory.push(structuredClone(newBoardData));
		},
		getLastBoardState: (state) => {
			const length = state.boardDataHistory.length;
			if (length > 1) {
				state.boardData = state.boardDataHistory[length - 1];
				state.boardDataHistory.pop();
			}
		},
		resetBoardState: (state: BoardState) => {
			state.boardData = initialState.boardData;
			state.boardDataHistory = initialState.boardDataHistory;
		},
	},
});

export const { addBoardState, getLastBoardState, resetBoardState } = boardSlice.actions;
export default boardSlice.reducer;
