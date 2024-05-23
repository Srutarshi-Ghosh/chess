import React from "react";
import styles from "../styles/Board.module.css";
import SquareNamesRow from "../constants/SquareNamesRow";
import SquareNamesCol from "../constants/SquareNamesCol";
import SquareData from "../types/SquareData";
import SquareColor from "../constants/SquareColor";
import BoardIndex from "../types/BoardIndex";
import Square from "./Square";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type BoardProps = {
	selectSquare: Function;
	squareColorData: SquareColor[][];
};

const Board = (boardProps: BoardProps) => {
	const { squareColorData, selectSquare } = boardProps;

	const boardData = useSelector((state: RootState) => state.board.boardData);

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
		<div className={styles["board"]}>
			<div className={styles["square-names-row-container"]}>
				{SquareNamesRow.map((value) => (
					<div className={styles["square-names-row"]}>{value} </div>
				))}
			</div>

			<div className={styles["board-row-container"]}>
				<div className={styles["square-names-col-container"]}>
					{SquareNamesCol.map((value) => (
						<div className={styles["square-names-col"]}>{value} </div>
					))}
				</div>
				{drawBoard()}
			</div>
		</div>
	);
};

export default Board;
