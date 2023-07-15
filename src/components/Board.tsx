import React, { useEffect, useState } from "react";
import styles from "../styles/Board.module.css";
import initializeBoard from "../functions/InitializeBoard";
import SquareColor from "../constants/SquareColor";
import Square from "./Square";
import SquareData from "../types/SquareData";
import getInitialSquareColorData from "../functions/GetInitialSquareColorData";

const Board = () => {
	const [boardData, setBoardData] = useState<SquareData[][]>(initializeBoard());
	const [squareColorData, setSquareColorData] = useState<SquareColor[][]>(getInitialSquareColorData());

	// const squareReferenceMap = useRef<Array<Array<React.RefObject<HTMLDivElement>>>>([]);
	// squareReferenceMap.current = Array(8).fill(0).map(() => Array(8).fill(createRef())); // 2D Array(8*8) of Refs to Square
	// const [resetBoard, setResetBoard] = useState<Boolean>(true)

	useEffect(() => {});

	const drawBoard = () => {
		return (
			<div className={styles["board-container"]}>
				{boardData.map((_, rowIndex) => {
					return (
						<div className={styles["board-row"]}>
							{boardData[rowIndex].map((_, colIndex) => {
								let squareColor = squareColorData[rowIndex][colIndex];
								let pieceData = boardData[rowIndex][colIndex];

								return (
									<Square
										key={`${rowIndex},${colIndex}`}
										color={squareColor}
										pieceData={pieceData}
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
