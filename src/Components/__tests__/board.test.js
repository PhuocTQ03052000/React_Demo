import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer'
import Board from '../Board';

const mockProps = {
    playerTurn: 'X',
    tiles: Array(9).fill(null),
    strikeClass: '',
    onTileClick: jest.fn(),
  };

afterEach(() => {cleanup();});

test('should render Board component', () => {
    render(<Board />);
    const boardElement = screen.getAllByTestId(Board.testId);
    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent('');
});

test('renders 9 tiles', () => {
    render(<Board {...mockProps} />);
    const tiles = screen.getAllByTestId(Board.testId);
    expect(tiles).toHaveLength(9);
  });
  
  test('calls onTileClick when a tile is clicked', () => {
    render(<Board {...mockProps} />);
    const tile = screen.getByTestId(Board.testId);
    fireEvent.click(tile);
    expect(mockProps.onTileClick).toHaveBeenCalledWith(0);
  });