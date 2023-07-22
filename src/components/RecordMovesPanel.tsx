import React from "react";
import styles from "../styles/RecordMovesPanel.module.css";

type RecordMovesPanelProps = {
	movesList: React.MutableRefObject<Array<string>>;
};

const RecordMovesPanel = (recordMovesPaneProps: RecordMovesPanelProps) => {
	const { movesList } = recordMovesPaneProps;
	// console.log(movesList)

	return (
		<div className={styles["container"]}>
			<div className={styles["title"]}>
				<h3>Recorded Moves</h3>
			</div>

			<div className={styles["moves-list"]}>
				{movesList.current.map((move) => (
					<div className={styles["moves-list-item"]}>{move}</div>
				))}
			</div>
		</div>
	);
};

export default RecordMovesPanel;
