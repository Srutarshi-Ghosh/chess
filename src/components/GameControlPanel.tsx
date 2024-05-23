import React from "react";
import styles from "../styles/GameControlPanel.module.css";
import ResetButton from "./ResetButton";
import BackButton from "./BackButton";

const GameControlPanel = () => {
	return (
		<div className={styles["game-control-panel-container"]}>
			<BackButton />
			<ResetButton />
		</div>
	);
};
export default GameControlPanel;
