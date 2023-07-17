import React from "react";
import styles from "../styles/DisplayScreen.module.css";

type DisplayScreenProps = {
	displayText: string;
};

const DisplayScreen = (displayScreenProps: DisplayScreenProps) => {
	const { displayText } = displayScreenProps;

	return <label className={styles["game-display-screen"]}>{displayText}</label>;
};

export default DisplayScreen;
