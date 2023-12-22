import { render, screen, cleanup} from '@testing-library/react';
import MainTicTac from '../MainTicTac';
test('should render tictac component', () => {
    render(<MainTicTac />);
    const tictacElement = screen.getByTestId('tictac-1');
    expect(tictacElement).toBeInTheDocument();
    expect(tictacElement).toHaveTextContent('X');
})