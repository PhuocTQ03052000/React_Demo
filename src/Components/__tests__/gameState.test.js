import { render, screen, cleanup} from '@testing-library/react';
import GameState from '../GameState';

afterEach(() => {cleanup();});
test('should render GameState component', () => {
    render(<GameState />);
    const stateElement = screen.getAllByTestId(GameState.testId);
    expect(stateElement).toBeInTheDocument();
});