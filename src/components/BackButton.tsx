import React from "react";
// import styles from "../styles/ResetButton.module.css";

type BackButtonProps = {
	undoMove: Function;
};

const BackButton = (backButtonProps: BackButtonProps) => {
	const { undoMove } = backButtonProps;

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
