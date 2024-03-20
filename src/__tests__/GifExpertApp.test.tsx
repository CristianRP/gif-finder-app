import { render, screen } from '@testing-library/react';
import 'jest-environment-jsdom';

import GifExpertApp from '../GifExpertApp';

describe('Tests on <GifExpertApp /> component', () => { 

  test('should match snapshot', () => { 
    const { container } = render( <GifExpertApp /> );

    expect( container ).toMatchSnapshot();
  });

  test('should render title', () => {
    render(<GifExpertApp />);

    expect( screen.findByText('GifExpertApp') ).toBeTruthy()
  });
});
