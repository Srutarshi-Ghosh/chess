import styles from "../styles/Board.module.css";
import Square from "../components/Square";
import SquareColor from "../constants/SquareColor";
import SquareData from "../types/SquareData";
import { useRef } from "react";

const drawBoard = (boardData: SquareData[][], squareReferenceMap: any[][]) => {
	var squareColor = SquareColor.WHITE;
	const toogleSquareColor = () => {
		squareColor = squareColor === SquareColor.BLACK ? SquareColor.WHITE : SquareColor.BLACK;
	};

	return (
		<div className={styles["board-container"]}>
			{boardData.map((_, rowIndex) => {
				toogleSquareColor();
				squareReferenceMap.push([])

				
				console.log(squareReferenceMap[rowIndex-2])

				return (
					<div className={styles["board-row"]}>
						{boardData[rowIndex].map((_, colIndex) => {
							toogleSquareColor();
							let squareData = boardData[rowIndex][colIndex];
							let squareRef = useRef(null)
							squareReferenceMap[rowIndex].push(squareRef)

							return (
								<Square
									key={`${rowIndex},${colIndex}`}
									color={squareColor}
									pieceData={squareData}
									ref={squareRef}
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
