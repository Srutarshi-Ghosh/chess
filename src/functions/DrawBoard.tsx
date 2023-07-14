import styles from "../styles/Board.module.css";
import Square from "../components/Square";
import SquareColor from "../constants/SquareColor";

const drawBoard = () => {
	var squareColor = SquareColor.WHITE;
	const toogleSquareColor = () => {
		squareColor = squareColor === SquareColor.BLACK ? SquareColor.WHITE : SquareColor.BLACK;
	};

	return (
		<div className={styles["board-container"]}>
			{Array.from(Array(8), () => {
				toogleSquareColor();
				return (
					<div className={styles["board-row"]}>
						{Array.from(Array(8), () => {
							toogleSquareColor();
							return <Square color={squareColor} />;
						})}
					</div>
				);
			})}
		</div>
	);

};

export default drawBoard;