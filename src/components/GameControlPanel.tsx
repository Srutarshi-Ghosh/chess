import React from "react";
import styles from "../styles/GameControlPanel.module.css";
import ResetButton from "./ResetButton";
import BackButton from "./BackButton";

type GameControlPanelProps = {
	resetBoard: Function;
	undoMove: Function;
};

const GameControlPanel = (gameControlPanelProps: GameControlPanelProps) => {
	const { resetBoard, undoMove } = gameControlPanelProps;

	return (
		<div className={styles["game-control-panel-container"]}>
			<BackButton undoMove={undoMove} />
			<ResetButton resetBoard={resetBoard} />
		</div>
	);
};
export default GameControlPanel;
