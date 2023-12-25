import { render, screen, cleanup} from '@testing-library/react';
import Strike from '../Strike';

afterEach(() => {cleanup();});
test('should render Strike component', () => {
    render(<Strike />);
    const strikeElement = screen.getAllByTestId(Strike.testId);
    expect(strikeElement).toBeInTheDocument();
});