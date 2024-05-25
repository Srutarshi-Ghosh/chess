import React from "react";
import { useDispatch } from "react-redux";
import { undoBoardState } from "../reducers/boardReducer";
import { changePlayer } from "../reducers/playerReducer";
import { undoLastMove } from "../reducers/movesReducer";
// import styles from "../styles/ResetButton.module.css";

const BackButton = () => {
	const dispatch = useDispatch();

	const undoMove = () => {
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
