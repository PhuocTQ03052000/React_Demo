import { render, screen, cleanup} from '@testing-library/react';
import Reset from '../Reset';

afterEach(() => {cleanup();});
test('should render Reset component', () => {
    render(<Reset />);
    const resetElement = screen.getAllByTestId(Reset.testId);
    expect(resetElement).toBeInTheDocument();
});