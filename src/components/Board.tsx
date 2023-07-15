import React, { createRef, useEffect, useRef, useState } from "react";
import styles from "../styles/Board.module.css";
import initializeBoard from "../functions/InitializeBoard";
import SquareColor from "../constants/SquareColor";
import Square from "./Square";
import toogleSquareColor from "../functions/ToogleSquareColor";
import SquareData from "../types/SquareData";
import getInitialSquareColorData from "../functions/GetInitialSquareColorData";
import highlightSquares from "../functions/HighlightSquares";

const Board = () => {
	const [boardData, setBoardData] = useState<SquareData[][]>(initializeBoard());
	const [squareColorData, setSquareColorData] = useState<SquareColor[][]>(getInitialSquareColorData())
	
	const squareReferenceMap = useRef<Array<Array<React.RefObject<HTMLDivElement>>>>([]);
	squareReferenceMap.current = Array(8).fill(0).map(() => Array(8).fill(createRef())); // 2D Array(8*8) of Refs to Square
	var [resetBoard, setResetBoard] = useState<Boolean>(true)


	const highlight = [[1, 2], [3, 4]]

	useEffect(() => {
		console.log(squareColorData);
		//func(1, 2)
		highlightSquares(highlight, squareColorData, setSquareColorData)
	}, [squareColorData, highlight]);

	const handleSquareClick = (rowIndex: number, colIndex: number) => {
    const squareData = boardData[rowIndex][colIndex];

    if (squareData) {
      const updatedBoardData = squareReferenceMap.current.map((row, rIndex) =>
        row.map((square, cIndex) =>
          rowIndex === rIndex && colIndex === cIndex
            ? { ...square, color: SquareColor.HIGHLIGHT }
            : square
        )
      );

      
    }
  };


	const drawBoard = () => {
		// setResetBoard(false)

		return (
			<div className={styles["board-container"]}>
				{boardData.map((_, rowIndex) => {

					return (
						<div className={styles["board-row"]}>
							{boardData[rowIndex].map((_, colIndex) => {
								let squareColor = squareColorData[rowIndex][colIndex]
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

	const updateBoard = () => {		

		console.log(1)
		return (
			<div className={styles["board-container"]}>
				{boardData.map((_, rowIndex) => {

					return (
						<div className={styles["board-row"]}>
							{boardData[rowIndex].map((_, colIndex) => {
								let squareColor = squareColorData[rowIndex][colIndex]
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

	return (
		<div className={styles.board}>
			{
				 
				drawBoard()
			}
		</div>
	);
};

export default Board;
