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
    const gameOverElement = screen.getAllByText('O Wins');
    expect(gameOverElement).toBeInTheDocument();
  });

  it('Case 3: renders "X Wins" message when game state is playerXwin', () => {
    render(<GameOver gameState={GameState.playerXWin} />);
    const gameOverElement = screen.getAllByText('X Wins');
    expect(gameOverElement).toBeInTheDocument();
  });

  it('Case 4: renders "Draw" message when game state is draw', () => {
    render(<GameOver gameState={GameState.draw} />);
    const gameOverElement = screen.getAllByText('Draw');
    expect(gameOverElement).toBeInTheDocument();
  });

  it('Case 5: renders default case when game state is invalid', () => {
    render(<GameOver gameState={-1} />); // Trạng thái không hợp lệ
    const defaultElement = screen.getAllByText("");
    expect(defaultElement).toBeInTheDocument();
  });
});
