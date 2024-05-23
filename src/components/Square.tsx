import React from "react";
import SquareColor from "../constants/SquareColor";
import styles from "../styles/Square.module.css";
import SquareData from "../types/SquareData";
import getPieceImageUrl from "../functions/GetImageUrl";
import BoardIndex from "../types/BoardIndex";
import checkPlayerAndPieceColor from "../functions/CheckPlayerAndPieceColor";
import SelectableSquareColors from "../constants/SelectableSquareColors";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type SquareProps = {
	color: SquareColor;
	pieceData: SquareData;
	position: BoardIndex;
	selectSquare: Function;
};

const Square = (squareProps: SquareProps) => {
	const { color, pieceData, selectSquare, position } = squareProps;
	const currentPlayer = useSelector((state: RootState) => state.player.currentPlayer);
	const isSelectable = (pieceData && checkPlayerAndPieceColor(currentPlayer, pieceData.pieceColor)) || SelectableSquareColors.includes(color) ? true : false;

	const pieceImageUrl = pieceData ? getPieceImageUrl(pieceData) : null;
	const pieceImage = pieceImageUrl ? require(`../assets/${pieceImageUrl}`) : null;

	var squareClasses = `${styles["square-dimensions"]} ${styles["square"]} ${isSelectable ? styles["selectable"] : ""}`;

	return (
		<div
			style={{ backgroundColor: color }}
			className={squareClasses}
			onClick={() => selectSquare(position, pieceData, currentPlayer)}
		>
			{pieceImage && (
				<img
					src={pieceImage}
					alt=""
				/>
			)}
		</div>
	);
};

export default Square;
