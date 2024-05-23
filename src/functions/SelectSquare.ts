import { updateBoardState } from "../reducers/boardReducer";
import { changePlayer } from "../reducers/playerReducer";
import checkPlayerAndPieceColor from "./CheckPlayerAndPieceColor";
import getPieceMoves from "./GetPieceMoves";
import changeSquareColorOnSelect from "./ChangeSquareColorOnSelect";
import movePiece from "./MovePiece";
import getMoveNotation from "./GetMoveNotation";
import SquareData from "../types/SquareData";
import BoardIndex from "../types/BoardIndex";
import Player from "../constants/Player";
import SelectableSquareColors from "../constants/SelectableSquareColors";
import SquareColor from "../constants/SquareColor";
import { addMove } from "../reducers/movesReducer";

const selectSquare = (
	position: BoardIndex,
	pieceData: SquareData,
	currentPlayer: Player,
	boardData: SquareData[][],
	squareColorData: SquareColor[][],
	setSquareColorData: (squareColorData: SquareColor[][]) => void,
	selectedPieceIndex: BoardIndex | null,
	setSelectedPieceIndex: (index: BoardIndex | null) => void,
	movesList: string[],
	dispatch: Function
) => {
	if (!selectedPieceIndex) handlePieceSelection(position, pieceData, currentPlayer, boardData, squareColorData, setSquareColorData, setSelectedPieceIndex);
	else handlePieceMovement(position, boardData, selectedPieceIndex, squareColorData, setSelectedPieceIndex, movesList, dispatch);
};

const handlePieceSelection = (
	position: BoardIndex,
	pieceData: SquareData,
	currentPlayer: Player,
	boardData: SquareData[][],
	squareColorData: SquareColor[][],
	setSquareColorData: (squareColorData: SquareColor[][]) => void,
	setSelectedPieceIndex: (index: BoardIndex | null) => void
) => {
	if (!pieceData || !checkPlayerAndPieceColor(currentPlayer, pieceData.pieceColor)) return;

	const pieceMoves = getPieceMoves(boardData, position, pieceData);
	changeSquareColorOnSelect(boardData, position, pieceMoves, squareColorData, setSquareColorData);
	setSelectedPieceIndex(position);
};

const handlePieceMovement = (
	position: BoardIndex,
	boardData: SquareData[][],
	selectedPieceIndex: BoardIndex,
	squareColorData: SquareColor[][],
	setSelectedPieceIndex: (index: BoardIndex | null) => void,
	movesList: string[],
	dispatch: Function
) => {
	const { posX, posY } = position;
	if (SelectableSquareColors.includes(squareColorData[posX][posY])) {
		const moveNotation = getMoveNotation(boardData, selectedPieceIndex, position);
		const newBoardData = movePiece(boardData, selectedPieceIndex, position);
		
		dispatch(addMove(moveNotation));
		dispatch(updateBoardState(newBoardData));
		dispatch(changePlayer());

		// changeDisplayScreenText(`Player ${Player[player.current]}'s turn`);
	}
	setSelectedPieceIndex(null);
};

export default selectSquare;
