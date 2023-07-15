import React, { createRef, useEffect, useRef, useState } from "react";
import styles from "../styles/Board.module.css";
import initializeBoard from "../functions/InitializeBoard";
import SquareColor from "../constants/SquareColor";
import Square from "./Square";
import toogleSquareColor from "../functions/ToogleSquareColor";

const Board = () => {
	const [boardData, setBoardData] = useState(initializeBoard());

	const squareReferenceMap = useRef<Array<Array<React.RefObject<HTMLDivElement>>>>([]);
	squareReferenceMap.current = Array(8).fill(0).map(() => Array(8).fill(createRef())); // 2D Array(8*8) of Refs to Square

		useEffect(() => {
			console.log(squareReferenceMap.current);
		}, []);


	const drawBoard = () => {
		var squareColor = SquareColor.WHITE;
		

		return (
			<div className={styles["board-container"]}>
				{boardData.map((_, rowIndex) => {
					squareColor = toogleSquareColor(squareColor);

					return (
						<div className={styles["board-row"]}>
							{boardData[rowIndex].map((_, colIndex) => {
								squareColor = toogleSquareColor(squareColor);
								let squareData = boardData[rowIndex][colIndex];

								return (
									<Square
										key={`${rowIndex},${colIndex}`}
										color={squareColor}
										pieceData={squareData}
										ref={squareReferenceMap.current[rowIndex][colIndex]}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	};

	return <div className={styles.board}>{drawBoard()}</div>;
};

export default Board;
