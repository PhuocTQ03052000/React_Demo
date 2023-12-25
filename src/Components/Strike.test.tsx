import React from 'react';
import { render, cleanup} from '@testing-library/react';
import Strike from './Strike';

afterEach(() => {cleanup();});
test('Case 3: render Strike component', () => {
    render(<Strike strikeClass={''} />);
});