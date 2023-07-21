import React from "react";
import styles from "../styles/Board.module.css";
import SquareNamesRow from "../constants/SquareNamesRow";
import SquareNamesCol from "../constants/SquareNamesCol";

type BoardProps = {
	drawBoard: () => React.ReactNode;
};

const Board = (boardProps: BoardProps) => {
	const { drawBoard } = boardProps;

	return (
		<div className={styles["board"]}>
			<div className={styles["square-names-row-container"]}>
				{SquareNamesRow.map((value) => (
					<div className={styles["square-names-row"]}>{value} </div>
				))}
			</div>

			<div className={styles["board-row"]}>
				<div className={styles["square-names-col-container"]}>
					{SquareNamesCol.map((value) => (
						<div className={styles["square-names-col"]}>{value} </div>
					))}
				</div>
				{drawBoard()}
			</div>
		</div>
	);
};

export default Board;
