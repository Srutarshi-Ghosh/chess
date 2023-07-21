import React from "react"
import styles from "../styles/GameControlArea.module.css"
import ResetButton from "./ResetButton"
import BackButton from "./BackButton"

type GameControlPanelProps = {
	resetBoard: Function
	// undoMove: Function
}

const GameControlPanel = (gameControlPanelProps: GameControlPanelProps) => {
	const {resetBoard} = gameControlPanelProps

	return (
		<div className={`centered ${styles["game-control-area"]}`}>
			{/* <BackButton undoMove={undoMove} /> */}
			<ResetButton resetBoard={resetBoard}/>
		</div>
	)
}
export default GameControlPanel