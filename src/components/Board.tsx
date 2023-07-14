import React from "react";
import styles from "../styles/Board.module.css";
import Square from "./Square";
import { SquareColor } from "../constants/SquareColor";

const Board = () => {

	var squareColor = SquareColor.WHITE;
	const toogleColor = () => {
		squareColor = squareColor === SquareColor.BLACK ? SquareColor.WHITE : SquareColor.BLACK;
	};

	return (
		<div className={styles.board}>
			<div className={styles["board-container"]}>
					{Array.from(Array(8), () => {
						toogleColor();
						return (
							<div className={styles["board-row"]}>
								{Array.from(Array(8), () => {
									toogleColor();
									return <Square color={squareColor} />;
								})}
							</div>
						);
					})}
				</div>
			</div>
	);
};

export default Board;
