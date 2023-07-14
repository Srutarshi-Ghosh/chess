import styles from "../styles/Board.module.css";
import Square from "../components/Square";
import SquareColor from "../constants/SquareColor";
import SquareData from "../types/SquareData";
import getPieceImageUrl from "./GetImageUrl";

const drawBoard = (boardData: SquareData[][]) => {
	var squareColor = SquareColor.WHITE;
	const toogleSquareColor = () => {
		squareColor = squareColor === SquareColor.BLACK ? SquareColor.WHITE : SquareColor.BLACK;
	};

	return (
		<div className={styles["board-container"]}>
			{boardData.map((_, rowIndex) => {
				toogleSquareColor();
				var hasPiece: boolean, pieceImageUrl: string | null;

				return (
					<div className={styles["board-row"]}>
						{boardData[rowIndex].map((_, colIndex) => {
							toogleSquareColor();
							let squareData = boardData[rowIndex][colIndex];

							if (squareData === null) {
								hasPiece = false;
								pieceImageUrl = null;
							} else {
								hasPiece = true;
								pieceImageUrl = getPieceImageUrl(squareData);
							}

							return (
								<Square
									color={squareColor}
									hasPiece={hasPiece}
									pieceImageUrl={pieceImageUrl}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default drawBoard;
