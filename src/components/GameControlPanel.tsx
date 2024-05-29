import React from "react";
import styles from "../styles/GameControlPanel.module.css";
import ResetButton from "./ResetButton";
import BackButton from "./BackButton";
import DisplayScreen from "./DisplayScreen";
import getDisplayScreenText from "../functions/GetDisplayScreenText";

const GameControlPanel = () => {
	const displayScreenText = getDisplayScreenText();

	return (
		<div className={styles["game-control-panel-container"]}>
			<DisplayScreen displayText={displayScreenText} />
			<BackButton />
			<ResetButton />
		</div>
	);
};
export default GameControlPanel;
