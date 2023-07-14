import React from "react";
import SquareColor from "../constants/SquareColor";
import styles from "../styles/Square.module.css";

type SquareProps = {
	color: SquareColor;
	hasPiece: Boolean;
	pieceImageUrl: string | null;
};

const Square = (squareProps: SquareProps) => {
	const { color, hasPiece, pieceImageUrl } = squareProps;
	const pieceImage = hasPiece ? require(`../assets/${pieceImageUrl}`) : null;

	return (
		<div
			style={{ backgroundColor: color }}
			className={`${styles["square-dimensions"]} ${styles["square"]}`}
		>
			{
				(pieceImage) &&
					<img src={pieceImage} alt="" />
			}
		</div>
	);
};

export default Square;
