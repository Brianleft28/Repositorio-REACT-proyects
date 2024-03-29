import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
	// revisamos todas las combinaciones ganadoras
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo

		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a]
		}
	}
	return null
}

// chequear si todos los tableros estan ocupados y no hay ganador
export const checkEndGame = (newBoard) => {
	return newBoard.every((square) => square != null)
}
