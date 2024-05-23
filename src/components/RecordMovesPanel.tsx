import React from "react";
import styles from "../styles/RecordMovesPanel.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const RecordMovesPanel = () => {
	const movesList: string[] = useSelector((state: RootState) => state.moves.movesList);
	// console.log(movesList)

	return (
		<div className={styles["container"]}>
			<div className={styles["title"]}>
				<h3>Recorded Moves</h3>
			</div>

			<div className={styles["moves-list"]}>
				{movesList.map((move) => (
					<div className={styles["moves-list-item"]}>{move}</div>
				))}
			</div>
		</div>
	);
};

export default RecordMovesPanel;
