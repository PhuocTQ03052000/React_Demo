import React from 'react';
import { render, cleanup} from '@testing-library/react';
import Tile from './Tile';

afterEach(() => {cleanup();});

test('Case 2: render Tile component', () => {
    render(<Tile className={''} value={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    } } playerTurn={''} />);
});