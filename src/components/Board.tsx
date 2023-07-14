import React from "react";
import styles from "../styles/Board.module.css";
import  drawBoard from "../functions/DrawBoard"
import  initializeBoard from "../functions/InitializeBoard"


const Board = () => {

	const board = initializeBoard()
	console.log(board)

	return (
		<div className={styles.board}>
			{
				drawBoard(board)
			}
		</div>
	);
};

export default Board;
