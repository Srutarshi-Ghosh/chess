import { forwardRef } from "react";
import SquareColor from "../constants/SquareColor";
import styles from "../styles/Square.module.css";
import SquareData from "../types/SquareData";
import getPieceImageUrl from "../functions/GetImageUrl";

type SquareProps = {
	color: SquareColor;
	pieceData: SquareData;
	isSelected?: Boolean;
};

const Square = (squareProps: SquareProps) => {
	const { color, pieceData, isSelected } = squareProps;

	var pieceImageUrl, pieceImage;
	if (pieceData) pieceImageUrl = getPieceImageUrl(pieceData);

	pieceImage = pieceData ? require(`../assets/${pieceImageUrl}`) : null;

	var squareClasses = `${styles["square-dimensions"]} ${styles["square"]} ${pieceData ? styles["selectable"] : ""}`;

	return (
		<div
			style={{ backgroundColor: color }}
			className={squareClasses}
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
