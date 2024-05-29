import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/PlayerReducer";
import { enableMapSet } from "immer";
import boardReducer from "./reducers/BoardReducer";
import movesReducer from "./reducers/MovesReducer";

enableMapSet();

const store = configureStore({
	reducer: {
		player: playerReducer,
		board: boardReducer,
		moves: movesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
