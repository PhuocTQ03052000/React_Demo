import { render, screen, cleanup} from '@testing-library/react';
import MainTicTac from '../MainTicTac';

afterEach(() => {cleanup();});
test('should render MainTicTac component', () => {
    render(<MainTicTac />);
    const boardElement = screen.getAllByTestId(MainTicTac.testId);
    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent('X'|'O'|'');
});