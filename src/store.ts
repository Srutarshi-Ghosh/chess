import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/playerReducer";
import { enableMapSet } from "immer";
import boardReducer from "./reducers/boardReducer";

enableMapSet();

const store = configureStore({
	reducer: {
		player: playerReducer,
		board: boardReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
