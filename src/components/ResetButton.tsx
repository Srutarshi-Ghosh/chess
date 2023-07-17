import React from "react";
// import styles from "../styles/ResetButton.module.css";

type ResetButtonProps = {
	resetBoard: Function;
};

const ResetButton = (resetButtonProps: ResetButtonProps) => {
	const resetBoard = resetButtonProps.resetBoard;

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