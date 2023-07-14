import React from "react";
import SquareColor from "../constants/SquareColor";
import styles from "../styles/Square.module.css";

type SquareProps = {
	color: SquareColor;
};

const Square = (squareProps: SquareProps) => {
	const { color } = squareProps;

	return (
		<div
			style={{ backgroundColor: color }}
			className={`${styles["square-dimensions"]} ${styles["square"]}`}
		></div>
	);
};

export default Square;
