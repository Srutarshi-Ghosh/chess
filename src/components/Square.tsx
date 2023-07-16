import React from "react";
import SquareColor from "../constants/SquareColor";
import styles from "../styles/Square.module.css";
import SquareData from "../types/SquareData";
import getPieceImageUrl from "../functions/GetImageUrl";
import BoardIndex from "../types/BoardIndex";

type SquareProps = {
	color: SquareColor;
	pieceData: SquareData;
	position: BoardIndex;
	selectPiece: Function;
};

const Square = (squareProps: SquareProps) => {
	const { color, pieceData, selectPiece, position } = squareProps;
	const isSelectable = pieceData || color === SquareColor.HIGHLIGHT ? true : false;

	const pieceImageUrl = pieceData ? getPieceImageUrl(pieceData) : null;
	const pieceImage = pieceImageUrl ? require(`../assets/${pieceImageUrl}`) : null;

	var squareClasses = `${styles["square-dimensions"]} ${styles["square"]} ${isSelectable ? styles["selectable"] : ""}`;

	return (
		<div
			style={{ backgroundColor: color }}
			className={squareClasses}
			onClick={() => selectPiece(position, pieceData)}
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
