import { render, screen, cleanup} from '@testing-library/react';
import Tile from '../Tile';

afterEach(() => {cleanup();});
test('should render Tile component', () => {
    render(<Tile />);
    // const tileElement = screen.getAllByTestId(Tile.testId);

    

    // eslint-disable-next-line testing-library/no-node-access
    // const  = document.querySelectorAll(`[data-testid="${Tile.testId}]"`);
    // expect(tileElement).toBeInTheDocument();
});