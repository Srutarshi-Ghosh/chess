import React, { useEffect, useState } from "react";
import styles from "../styles/Board.module.css";
import initializeBoard from "../functions/InitializeBoard";
import SquareColor from "../constants/SquareColor";
import Square from "./Square";
import SquareData from "../types/SquareData";
import getDefaultSquareColorData from "../functions/GetDefaultSquareColorData";
import BoardIndex from "../types/BoardIndex";
import Player from "../constants/Player";
import getAllValidMoves from "../functions/GetAllValidMoves";
import getHighlightSquaresData from "../functions/GetHighlightSquaresData";

const Board = () => {
	const initialSquareColorData = getDefaultSquareColorData();

	const [boardData, setBoardData] = useState<SquareData[][]>(initializeBoard());
	const [squareColorData, setSquareColorData] = useState<SquareColor[][]>(initialSquareColorData);
	const [selectedPieceInex, setSelectedPieceIndex] = useState<BoardIndex | null>(null);
	const [shouldRender, setShouldRender] = useState<boolean>(true);

	var currentPlayer: Player = Player.WHITE;

	// const squareReferenceMap = useRef<Array<Array<React.RefObject<HTMLDivElement>>>>([]);
	// squareReferenceMap.current = Array(8).fill(0).map(() => Array(8).fill(createRef())); // 2D Array(8*8) of Refs to Square
	// const [resetBoard, setResetBoard] = useState<Boolean>(true)

	const selectSquare = (position: BoardIndex, pieceData: SquareData) => {
		if (!pieceData) return;

		const validMoves = getAllValidMoves(boardData, position, pieceData);
		// console.log(validMoves);
		const highlightedSquareColorData = getHighlightSquaresData(validMoves, squareColorData);
		// console.log(highlightedSquareColorData);
		setSquareColorData(highlightedSquareColorData);
		console.log(squareColorData);
		setShouldRender(prevState => !prevState);
	};

	const drawBoard = () => {

		return (
			<div className={styles["board-container"]}>
				{boardData.map((_, rowIndex) => {
					return (
						<div className={styles["board-row"]}>
							{boardData[rowIndex].map((_, colIndex) => {
								let squareColor = squareColorData[rowIndex][colIndex];
								let pieceData = boardData[rowIndex][colIndex];
								let postion: BoardIndex = { posX: rowIndex, posY: colIndex };

								return (
									<Square
										key={`${rowIndex},${colIndex}`}
										color={squareColor}
										position={postion}
										selectPiece={selectSquare}
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
