import React from "react";
import { useDispatch } from "react-redux";
import { getLastBoardState } from "../reducers/boardReducer";
// import styles from "../styles/ResetButton.module.css";

const BackButton = () => {
	const dispatch = useDispatch();

	const undoMove = () => {
		dispatch(getLastBoardState());
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
