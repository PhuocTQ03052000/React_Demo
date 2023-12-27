/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TicTacToe from "./MainTicTac";
import { act } from "react-dom/test-utils";

describe("TicTacToe component", () => {
  it("renders the TicTacToe component with initial state", () => {
    render(<TicTacToe />);
    const h1Element = screen.getByText("Tic Tac Toe");
    const currentPlayerElement = screen.getByText("Next player: X");
    const boardElement = screen.getByTestId("board-component");

    expect(h1Element).toBeInTheDocument();
    expect(currentPlayerElement).toBeInTheDocument();
    expect(boardElement).toBeInTheDocument();
  });

  it("updates the state and renders the Next player correctly after a tile click", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");
    const currentPlayerElement = screen.getByText("Next player: X");

    await act(async () => {
      fireEvent.click(tileElements[0]);
    });
    expect(tileElements[0]).toHaveTextContent("X");
    expect(currentPlayerElement).toHaveTextContent("Next player: O");
  });

  it("displays the correct Game Over message when a player X wins", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");

    await act(async () => {
      fireEvent.click(tileElements[0]);
    });
    await act(async () => {
      fireEvent.click(tileElements[3]);
    });
    await act(async () => {
      fireEvent.click(tileElements[1]);
    });
    await act(async () => {
      fireEvent.click(tileElements[4]);
    });
    await act(async () => {
      fireEvent.click(tileElements[2]);
    });

    const gameOverElement = screen.getByText("X Wins");
    expect(gameOverElement).toHaveTextContent("X Wins");
  });

  it("displays the correct Game Over message when a player O wins", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");

    await act(async () => {
      fireEvent.click(tileElements[0]);
    });
    await act(async () => {
      fireEvent.click(tileElements[1]);
    });
    await act(async () => {
      fireEvent.click(tileElements[3]);
    });
    await act(async () => {
      fireEvent.click(tileElements[4]);
    });
    await act(async () => {
      fireEvent.click(tileElements[5]);
    });
    await act(async () => {
      fireEvent.click(tileElements[7]);
    });
    const gameOverElement = screen.getByText("O Wins");
    expect(gameOverElement).toHaveTextContent("O Wins");
  });

  it("displays the correct Game Over message when draw", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");

    await act(async () => {
      fireEvent.click(tileElements[0]);
    });
    await act(async () => {
      fireEvent.click(tileElements[3]);
    });
    await act(async () => {
      fireEvent.click(tileElements[1]);
    });
    await act(async () => {
      fireEvent.click(tileElements[2]);
    });
    await act(async () => {
      fireEvent.click(tileElements[5]);
    });
    await act(async () => {
      fireEvent.click(tileElements[8]);
    });
    await act(async () => {
      fireEvent.click(tileElements[6]);
    });
    await act(async () => {
      fireEvent.click(tileElements[7]);
    });
    await act(async () => {
      fireEvent.click(tileElements[4]);
    });
    const gameOverElement = screen.getByText("Draw");
    expect(gameOverElement).toHaveTextContent("Draw");
  });

  it("displays the correct Game Over message when both 2 players win", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");

    await act(async () => {
      fireEvent.click(tileElements[0]);
    });
    await act(async () => {
      fireEvent.click(tileElements[1]);
    });
    await act(async () => {
      fireEvent.click(tileElements[3]);
    });
    await act(async () => {
      fireEvent.click(tileElements[4]);
    });
    await act(async () => {
      fireEvent.click(tileElements[6]);
    });
    await act(async () => {
      fireEvent.click(tileElements[7]);
    });
    await act(async () => {
      fireEvent.click(tileElements[2]);
    });
    await act(async () => {
      fireEvent.click(tileElements[8]);
    });
    await act(async () => {
      fireEvent.click(tileElements[5]);
    });
    const gameOverElement = screen.getByText("X Wins");
    expect(gameOverElement).toHaveTextContent("X Wins");
  });

  it("resets the game state when the Reset button is clicked", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");

    await act(async () => {
      fireEvent.click(tileElements[0]);
    });
    await act(async () => {
      fireEvent.click(tileElements[3]);
    });
    await act(async () => {
      fireEvent.click(tileElements[1]);
    });
    await act(async () => {
      fireEvent.click(tileElements[4]);
    });
    await act(async () => {
      fireEvent.click(tileElements[2]);
    });
    expect(screen.getByText("X Wins")).toHaveTextContent("X Wins");

    const resetButton = screen.getByTestId("reset-test");
    await act(async () => {
      fireEvent.click(resetButton);
      expect(screen.getByText("Next player: O")).toBeInTheDocument();
      expect(
        screen.queryByTestId("game-over-component")
      ).not.toBeInTheDocument();
    });
  });

  it("the game state when the tile button is clicked twice", async () => {
    render(<TicTacToe />);
    const tileElements = screen.getAllByTestId("tile-test");

    await act(async () => {
        fireEvent.click(tileElements[0]);
      });

    await act(async () => {
      fireEvent.click(tileElements[0]);
      expect(screen.getByText("Next player: O")).toBeInTheDocument();
      expect(
        screen.queryByTestId("game-over-component")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Next player: O")).toHaveTextContent("Next player: O");
  });
});
