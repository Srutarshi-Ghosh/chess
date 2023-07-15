import SquareColor from "../constants/SquareColor"
import toogleSquareColor from "./ToogleSquareColor"

const getInitialSquareColorData = () => {
  var squareColorData: SquareColor[][] = []
	var squareColor = SquareColor.WHITE


	for(var row = 0; row < 8; row++) {
		squareColorData.push([])
		squareColor = toogleSquareColor(squareColor)
		for(var col = 0; col < 8; col++) {
			squareColor = toogleSquareColor(squareColor)
			squareColorData[row].push(squareColor)
		}
	}

	return squareColorData
}

export default getInitialSquareColorData