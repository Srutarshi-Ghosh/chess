import React, { useRef, useState } from "react";
import Board from "./Board";
import DisplayScreen from "./DisplayScreen";
import styles from "../styles/Chess.module.css";
import Player from "../constants/Player";
import SquareColor from "../constants/SquareColor";
import changePlayer from "../functions/ChangePlayer";
import changeSquareColorOnSelect from "../functions/ChangeSquareColorOnSelect";
import checkPlayerAndPieceColor from "../functions/CheckPlayerAndPieceColor";
import getDefaultSquareColorData from "../functions/GetDefaultSquareColorData";
import getPieceMoves from "../functions/GetPieceMoves";
import initializeBoard from "../functions/InitializeBoard";
import movePiece from "../functions/MovePiece";
import BoardIndex from "../types/BoardIndex";
import SquareData from "../types/SquareData";
import Square from "./Square";
import GameControlPanel from "./GameControlPanel";
import SelectableSquareColors from "../constants/SelectableSquareColors";
import RecordMovesPanel from "./RecordMovesPanel";
import getMoveNotation from "../functions/GetMoveNotation";

const Chess = () => {
	const initialSquareColorData = getDefaultSquareColorData();
	const initialBoardData = initializeBoard();

	const [squareColorData, setSquareColorData] = useState<SquareColor[][]>(initialSquareColorData);
	const [boardData, setBoardData] = useState<SquareData[][]>(initialBoardData);
	const [selectedPieceIndex, setSelectedPieceIndex] = useState<BoardIndex | null>(null);

	var boardDataHistory: React.MutableRefObject<SquareData[][][]> = useRef([initialBoardData]);
	var movesList: React.MutableRefObject<Array<string>> = useRef([]);
	var player: React.MutableRefObject<Player> = useRef(Player.WHITE);
	const displayScreenText = `Player ${Player[player.current]}'s turn`;

	// const changeDisplayScreenText = (displayScreenText: string) => setDisplayScreenText(displayScreenText);

	const selectSquare = (position: BoardIndex, pieceData: SquareData, currentPlayer: Player) => {
		if (!selectedPieceIndex) {
			if (!pieceData || !checkPlayerAndPieceColor(currentPlayer, pieceData.pieceColor)) return;

			const pieceMoves = getPieceMoves(boardData, position, pieceData);
			changeSquareColorOnSelect(boardData, position, pieceMoves, squareColorData, setSquareColorData);
			setSelectedPieceIndex(position);
		} else {
			const { posX, posY } = position;
			if (SelectableSquareColors.includes(squareColorData[posX][posY])) {
				const moveNotation = getMoveNotation(boardData, selectedPieceIndex, position);
				movesList.current.push(moveNotation);

				boardDataHistory.current.push(boardData);
				movePiece(boardData, setBoardData, selectedPieceIndex, position);

				player.current = changePlayer(player);
				console.log(boardDataHistory.current);
				// changeDisplayScreenText(`Player ${Player[player.current]}'s turn`);
			} 
		}
	};

	const deselectSquare = () => {
		if (!selectedPieceIndex) return;
		setSquareColorData(initialSquareColorData);
		setSelectedPieceIndex(null);
	};

	const resetBoard = () => {
		setBoardData(initialBoardData);
		player.current = Player.WHITE;
		// changeDisplayScreenText(`Player ${Player[player.current]}'s turn`);
	};

	const undoMove = () => {
		if (boardDataHistory.current.length === 0) return;
		const previousMove = boardDataHistory.current.pop();
		if (previousMove) {
			player.current = changePlayer(player);
			setBoardData(previousMove);
		}
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
			className={`centered ${styles.chess}`}
			onClick={deselectSquare}
		>
		
			<div className={styles["game-area"]}>
				<RecordMovesPanel movesList={movesList} />
				<Board drawBoard={drawBoard} />
				<GameControlPanel
					resetBoard={resetBoard}
					undoMove={undoMove}
				/>
			</div>
		</div>
	);
};
export default Chess;
