import React from "react";
import { useDispatch } from "react-redux";
import { undoBoardState } from "../reducers/BoardReducer";
import { changePlayer } from "../reducers/PlayerReducer";
import { undoLastMove } from "../reducers/MovesReducer";
import checkResetBoard from "../functions/CheckResetBoard";
// import styles from "../styles/ResetButton.module.css";

const BackButton = () => {
	const dispatch = useDispatch();

	const undoMove = () => {
		if (checkResetBoard()) return;
		
		dispatch(undoBoardState());
		dispatch(changePlayer());
		dispatch(undoLastMove());
	};

	return (
		<button
			className={`game-button`}
			onClick={() => undoMove()}
		>
			BACK
		</button>
	);
};

export default BackButton;
