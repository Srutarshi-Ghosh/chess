import React from "react"
import styles from "../styles/GameControlArea.module.css"
import ResetButton from "./ResetButton"
import BackButton from "./BackButton"

type GameControlAreaProps = {
	resetBoard: Function
	undoMove: Function
}

const GameControlArea = (gameControlAreaProps: GameControlAreaProps) => {
	const {resetBoard, undoMove} = gameControlAreaProps

	return (
		<div className={`centered ${styles["game-control-area"]}`}>
			<BackButton undoMove={undoMove} />
			<ResetButton resetBoard={resetBoard}/>
		</div>
	)
}
export default GameControlArea