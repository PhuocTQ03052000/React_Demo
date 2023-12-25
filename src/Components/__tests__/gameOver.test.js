import { render, screen, cleanup} from '@testing-library/react';
import GameOver from '../GameOver';
import GameState from "../GameState";

afterEach(() => {cleanup();});

test('should render GameOver component', () => {
    render(<GameOver />);
    const boardElement = screen.getAllByTestId(GameOver.testId);
    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent();
});
// inprogress
test('should render GameOver component inprogress', () => {
    render(<GameOver gameState={GameState.inProgress}/>);
    const boardElement = screen.getAllByTestId(GameOver.testId);
    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent('');
});
// X win
test('should render GameOver component player X win', () => {
    render(<GameOver gameState={GameState.playerXWin}/>);
    const boardElement = screen.getAllByTestId(GameOver.testId);
    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent('X Wins');
});
// O Win
test('should render GameOver component player O win', () => {
    render(<GameOver gameState={GameState.playerOWin}/>);
    const boardElement = screen.getAllByTestId(GameOver.testId);
    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent('X Wins');
});
// Draw
test('should render GameOver component draw', () => {
    render(<GameOver gameState={GameState.draw}/>);
    const boardElement = screen.getAllByTestId(GameOver.testId);
    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent('Draw');
});

