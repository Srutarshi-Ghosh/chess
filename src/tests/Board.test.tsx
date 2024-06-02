/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Board from "../components/Board";
import { Provider } from "react-redux";
import store from "../store";
import SquareColor from "../constants/SquareColor";
import SquareNamesRow from "../constants/SquareNamesRow";
import SquareNamesCol from "../constants/SquareNamesCol";

describe("Board Component", () => {
	const mockSelectSquare = jest.fn();
	const squareColorData = Array.from({ length: 8 }, () => Array(8).fill(SquareColor.WHITE));

	it("renders the board with the correct number of squares", () => {
		const { container } = render(
			<Provider store={store}>
				<Board
					selectSquare={mockSelectSquare}
					squareColorData={squareColorData}
				/>
			</Provider>
		);
		const squares = container.querySelectorAll(".square");
		fireEvent.click(squares[0]);
		expect(squares.length).toBe(64);
	});

	it("renders the row and column labels", () => {
		render(
			<Provider store={store}>
				<Board
					selectSquare={mockSelectSquare}
					squareColorData={squareColorData}
				/>
			</Provider>
		);
		SquareNamesRow.forEach((label) => {
			expect(screen.getByText(label)).toBeInTheDocument();
		});
		SquareNamesCol.forEach((label) => {
			expect(screen.getByText(label)).toBeInTheDocument();
		});
	});

	it("calls selectSquare when a square is clicked", () => {
		const { container } = render(
			<Provider store={store}>
				<Board
					selectSquare={mockSelectSquare}
					squareColorData={squareColorData}
				/>
			</Provider>
		);
		const squares = container.querySelectorAll(".square");
		fireEvent.click(squares[0]);
		expect(mockSelectSquare).toHaveBeenCalled();
	});
});
