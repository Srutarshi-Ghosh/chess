import React from "react";
import styles from "../styles/GamePage.module.css"
import Chess from "./Chess";

const GamePage = () => {
	return (
		<div className={`centered ${styles["game-page"]}`}>
			<Chess />
		</div>
	);
};

export default GamePage;
