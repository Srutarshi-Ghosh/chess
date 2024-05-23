import React from "react";
import { useDispatch } from "react-redux";
import { getLastBoardState } from "../reducers/boardReducer";
import { changePlayer } from "../reducers/playerReducer";
// import styles from "../styles/ResetButton.module.css";

const BackButton = () => {
	const dispatch = useDispatch();

	const undoMove = () => {
		dispatch(getLastBoardState());
		dispatch(changePlayer());
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
