import React from "react";
import { useDispatch } from "react-redux";
import { resetBoardState } from "../reducers/BoardReducer";
import { resetPlayer } from "../reducers/PlayerReducer";
import { resetMoves } from "../reducers/MovesReducer";
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