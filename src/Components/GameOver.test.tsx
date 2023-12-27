/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render, screen } from '@testing-library/react';
import GameOver from './GameOver';
import GameState from './GameState';

describe('GameOver component', () => {
  it('Case 1: renders nothing when game is in progress', () => {
    render(<GameOver gameState={GameState.inProgress} />);
    const gameOverElement = screen.queryByText(/(O Wins|X Wins|Draw)/);
    expect(gameOverElement).not.toBeInTheDocument();
  });

  it('Case 2: renders "O Wins" message when game state is playerOwin', () => {
    render(<GameOver gameState={GameState.playerOWin} />);
    const gameOverElement = screen.getByText('O Wins');
    expect(gameOverElement).toBeInTheDocument();
  });

  it('Case 3: renders "X Wins" message when game state is playerXwin', () => {
    render(<GameOver gameState={GameState.playerXWin} />);
    const gameOverElement = screen.getByText('X Wins');
    expect(gameOverElement).toBeInTheDocument();
  });

  it('Case 4: renders "Draw" message when game state is draw', () => {
    render(<GameOver gameState={GameState.draw} />);
    const gameOverElement = screen.getByText('Draw');
    expect(gameOverElement).toBeInTheDocument();
  });

  it('Case 5: renders default case when game state is invalid', () => {
    render(<GameOver dataTestStateId='state-component' gameState={-1} />); // Trạng thái không hợp lệ
    const defaultElement = screen.getAllByTestId("state-component");
    screen.debug();
    expect(defaultElement[0]).toBeInTheDocument();
  });
});
