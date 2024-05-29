import SquareColor from "../constants/SquareColor"


const toogleSquareColor = (squareColor: SquareColor) => {
	return squareColor === SquareColor.BLACK ? SquareColor.WHITE : SquareColor.BLACK;
};

const getDefaultSquareColorData = () => {
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

export default getDefaultSquareColorData