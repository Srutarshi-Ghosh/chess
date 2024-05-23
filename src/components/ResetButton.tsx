import React from "react";
import { useDispatch } from "react-redux";
import { resetBoardState } from "../reducers/boardReducer";
import { resetPlayer } from "../reducers/playerReducer";
// import styles from "../styles/ResetButton.module.css";


const ResetButton = () => {
	const dispatch = useDispatch()

	const resetBoard = () => {
		dispatch(resetBoardState());
		dispatch(resetPlayer());
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