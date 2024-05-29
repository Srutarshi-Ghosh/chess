import store from "../store";

const checkResetBoard = () => {
	return store.getState().board.boardDataHistory.length === 0;
};

export default checkResetBoard;
