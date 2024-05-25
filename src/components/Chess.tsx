import React, { useRef, useState } from "react";
import Board from "./Board";
import DisplayScreen from "./DisplayScreen";
import styles from "../styles/Chess.module.css";
import Player from "../constants/Player";
import SquareColor from "../constants/SquareColor";
import getDefaultSquareColorData from "../functions/GetDefaultSquareColorData";
import BoardIndex from "../types/BoardIndex";
import SquareData from "../types/SquareData";
import GameControlPanel from "./GameControlPanel";
import SelectableSquareColors from "../constants/SelectableSquareColors";
import RecordMovesPanel from "./RecordMovesPanel";
import getMoveNotation from "../functions/GetMoveNotation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import selectSquare from "../functions/SelectSquare";

const Chess = () => {
	const dispatch = useDispatch();

	const initialSquareColorData = getDefaultSquareColorData();

	const boardData: SquareData[][] = useSelector((state: RootState) => state.board.boardData);
	const currentPlayer: Player = useSelector((state: RootState) => state.player.currentPlayer);
	const movesList: string[] = useSelector((state: RootState) => state.moves.movesList);

	const [squareColorData, setSquareColorData] = useState<SquareColor[][]>(initialSquareColorData);
	const [selectedPieceIndex, setSelectedPieceIndex] = useState<BoardIndex | null>(null);

	// const displayScreenText = `Player ${Player[player.current]}'s turn`;
	// const changeDisplayScreenText = (displayScreenText: string) => setDisplayScreenText(displayScreenText);

	const handleSelectSquare = (position: BoardIndex, pieceData: SquareData) => {
		selectSquare(position, pieceData, currentPlayer, boardData, squareColorData, setSquareColorData, selectedPieceIndex, setSelectedPieceIndex, movesList, dispatch);
	};


	const deselectSquare = () => {
		if (!selectedPieceIndex) return;
		setSquareColorData(initialSquareColorData);
		setSelectedPieceIndex(null);
	};

	return (
		<div
			className={`centered ${styles["chess"]}`}
			onClick={deselectSquare}
		>
			{/* <DisplayScreen displayText={displayScreenText} /> */}
			{/* <GameControlArea
				resetBoard={resetBoard}
				// undoMove={undoMove}
			/> */}
			<div className={styles["game-area"]}>
				<RecordMovesPanel />
				<Board
					squareColorData={squareColorData}
					selectSquare={handleSelectSquare}
				/>
				<GameControlPanel />
			</div>
		</div>
	);
};
export default Chess;
