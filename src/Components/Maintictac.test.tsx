/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TicTacToe from "./MainTicTac";
import { act } from "react-dom/test-utils";

describe("TicTacToe component", () => {
//   it("renders the TicTacToe component with initial state", () => {
//     render(<TicTacToe />);
//     const h1Element = screen.getByText("Tic Tac Toe");
//     const currentPlayerElement = screen.getByText("Next player: X");
//     const boardElement = screen.getByTestId("board-component");
//     const resetElement = screen.getByTestId("reset-component");
//     const gameOverElement = screen.queryByTestId("game-over-component");

//     expect(h1Element).toBeInTheDocument();
//     expect(currentPlayerElement).toBeInTheDocument();
//     expect(boardElement).toBeInTheDocument();
//     expect(resetElement).toBeInTheDocument();
//     expect(gameOverElement).not.toBeInTheDocument();
//   });

//   it("updates the state and renders the Next player correctly after a tile click", () => {
//     render(<TicTacToe />);
//     const tileElements = screen.getAllByTestId("tile-test");
//     const currentPlayerElement = screen.getByText("Next player: X");

//     fireEvent.click(tileElements[0]);
//     expect(tileElements[0]).toHaveTextContent("X");
//     expect(currentPlayerElement).toHaveTextContent("Next player: O");
//   });

//   it("displays the correct Game Over message when a player wins or it is a draw", () => {
//     render(<TicTacToe />);
//     const tileElements = screen.getAllByTestId("tile-test");

//     fireEvent.click(tileElements[0]);
//     fireEvent.click(tileElements[3]);
//     fireEvent.click(tileElements[1]);
//     fireEvent.click(tileElements[4]);
//     fireEvent.click(tileElements[2]);

//     const gameOverElement = screen.getByTestId("game-over-component");
//     expect(gameOverElement).toHaveTextContent("X Wins");
//   });

  it("resets the game state when the Reset button is clicked", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");
   
    
    await act(async () => {
        fireEvent.click(tileElements[0]);
    })

    await act(async () => {
        fireEvent.click(tileElements[3]);
    })
    await act(async () => {
        fireEvent.click(tileElements[1]);
    })
    await act(async () => {
        fireEvent.click(tileElements[4]);
    })
    await act(async () => {
        fireEvent.click(tileElements[2]);
    })


    expect(screen.getByTestId("game-over-component")).toHaveTextContent(
                "X Wins"
                );
        
    const resetButton = screen.getByTestId("reset-test");
    //eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(resetButton);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(resetButton);
      expect(screen.getByText("Next player: X")).toBeInTheDocument();
      expect(
        screen.queryByTestId("game-over-component")
      ).not.toBeInTheDocument();
    });
  });
});
