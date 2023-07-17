import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Board.module.css";
import initializeBoard from "../functions/InitializeBoard";
import SquareColor from "../constants/SquareColor";
import Square from "./Square";
import SquareData from "../types/SquareData";
import getDefaultSquareColorData from "../functions/GetDefaultSquareColorData";
import BoardIndex from "../types/BoardIndex";
import Player from "../constants/Player";
import getPieceMoves from "../functions/GetPieceMoves";
import changeSquareColorOnSelect from "../functions/ChangeSquareColorOnSelect";
import movePiece from "../functions/MovePiece";
import checkPlayerAndPieceColor from "../functions/CheckPlayerAndPieceColor";
import changePlayer from "../functions/ChangePlayer";

const Board = () => {
	const initialSquareColorData = getDefaultSquareColorData();
	const [squareColorData, setSquareColorData] = useState<SquareColor[][]>(initialSquareColorData);
	const [boardData, setBoardData] = useState<SquareData[][]>(initializeBoard());
	const [selectedPieceInex, setSelectedPieceIndex] = useState<BoardIndex | null>(null);

	var player: React.MutableRefObject<Player> = useRef(Player.WHITE);

	// const [shouldRender, setShouldRender] = useState<boolean>(true);
	// const squareReferenceMap = useRef<Array<Array<React.RefObject<HTMLDivElement>>>>([]);
	// squareReferenceMap.current = Array(8).fill(0).map(() => Array(8).fill(createRef())); // 2D Array(8*8) of Refs to Square
	// const [resetBoard, setResetBoard] = useState<Boolean>(true)

	const selectSquare = (position: BoardIndex, pieceData: SquareData, currentPlayer: Player) => {
		if (!selectedPieceInex) {
			if (!pieceData || !checkPlayerAndPieceColor(currentPlayer, pieceData.pieceColor)) return;

			const pieceMoves = getPieceMoves(boardData, position, pieceData);
			changeSquareColorOnSelect(position, pieceMoves, squareColorData, setSquareColorData);
			setSelectedPieceIndex(position);
			// setShouldRender(prevState => !prevState);
		} else {
			const { posX, posY } = position;
			if (squareColorData[posX][posY] === SquareColor.HIGHLIGHT) {
				movePiece(boardData, setBoardData, selectedPieceInex, position);
				player.current = changePlayer(player);
			}
		}
	};

	const deselectSquare = () => {
		if (!selectedPieceInex) return;
		setSquareColorData(initialSquareColorData);
		setSelectedPieceIndex(null);
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
										selectSquare={selectSquare}
										pieceData={pieceData}
										currentPlayer={player.current}
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
		<div
			className={styles.board}
			onClick={deselectSquare}
		>
			{drawBoard()}
		</div>
	);
};

export default Board;
