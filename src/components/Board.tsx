import React, {  } from "react";
import styles from "../styles/Board.module.css";

type BoardProps = {
	drawBoard: () => React.ReactNode
}

const Board = (boardProps: BoardProps) => {

	const {drawBoard} = boardProps
	
	return (
		<div
			className={styles.board}
		>
			{drawBoard()}
		</div>
	);
};

export default Board;
