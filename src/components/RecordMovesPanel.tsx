import React from "react"
import styles from "../styles/RecordMovesPanel.module.css"

const RecordMovesPanel = () => {

	return (
		<div className={styles["container"]}>
			<div className={styles["title"]}>
				<h3>Recorded Moves</h3>
			</div>

			<div className={styles["moves-list"]}>
				<div className={styles["moves-list-item"]}>
					1. WHITE: c1 - c2
				</div>
				<div className={styles["moves-list-item"]}>
					1. WHITE: c1 - c2
				</div>
			</div>
		</div>
	)
}

export default RecordMovesPanel