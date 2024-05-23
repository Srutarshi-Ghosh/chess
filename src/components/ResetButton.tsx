import React from "react";
import { useDispatch } from "react-redux";
import { resetBoardState } from "../reducers/boardReducer";
import { resetPlayer } from "../reducers/playerReducer";
import { resetMoves } from "../reducers/movesReducer";
// import styles from "../styles/ResetButton.module.css";


const ResetButton = () => {
	const dispatch = useDispatch()

	const resetBoard = () => {
		dispatch(resetBoardState());
		dispatch(resetPlayer());
		dispatch(resetMoves())
	}

	return (
		<button
			className={`game-button`}
			onClick={() => resetBoard()}
		>
			RESET
		</button>
	);
};

export default ResetButton;