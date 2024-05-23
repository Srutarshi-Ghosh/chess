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
	boardDataHistory: [],
};

const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		updateBoardState: (state: BoardState, action: PayloadAction<SquareData[][]>) => {
			const newBoardData = action.payload;
			state.boardDataHistory = [...state.boardDataHistory, state.boardData];
			state.boardData = newBoardData;
		},
		getLastBoardState: (state: BoardState) => {
			const boardDataHistoryLength = state.boardDataHistory.length;
			if (boardDataHistoryLength > 0) {
				state.boardData = state.boardDataHistory[boardDataHistoryLength - 1];
				state.boardDataHistory.pop();
			}
		},
		resetBoardState: (state: BoardState) => {
			state.boardData = initialState.boardData;
			state.boardDataHistory = [];
		},
	},
});

export const { updateBoardState, getLastBoardState, resetBoardState } = boardSlice.actions;
export default boardSlice.reducer;
