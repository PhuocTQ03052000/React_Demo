import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Board from "./Board";
import { act } from "react-dom/test-utils";

describe("Board component", () => {
  it("renders 9 tiles with the correct props and handles click event", async () => {
    const tiles = ["", "X", "", "O", "X", "", "O", "", ""];
    const strikeClass = "strike-class";
    const playerTurn = "X";
    const onTileClick = jest.fn();

    render(
      <Board
        tiles={tiles}
        strikeClass={strikeClass}
        onTileClick={onTileClick}
        playerTurn={playerTurn}
      />
    );

    const renderedTiles = screen.getAllByTestId("tile-test");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(renderedTiles[0]);
    });
  });
});
