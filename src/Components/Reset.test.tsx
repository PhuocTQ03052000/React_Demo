import { render, cleanup} from '@testing-library/react';
import Reset from './Reset';
import React from 'react';

afterEach(() => {cleanup();});
test('Case 1: render Reset component', () => {
    render(<Reset gameState={0} onReset={function (): void {
        throw new Error('Function not implemented.');
    } } />);
});