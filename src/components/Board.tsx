import React from "react";
import styles from "../styles/Board.module.css";
import  drawBoard from "../functions/DrawBoard"


const Board = () => {

	return (
		<div className={styles.board}>
			{
				drawBoard()
			}
		</div>
	);
};

export default Board;
