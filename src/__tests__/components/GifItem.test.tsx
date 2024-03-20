import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components';

describe('Tests on <GifItem /> component', () => {

  const img = {
    id: new Date().toISOString(),
    title: 'Test',
    url: 'http://images.com/image.png'
  }

  test('should match snapshot', () => {
    const { container } = render( <GifItem { ...img } /> );

    expect( container ).toMatchSnapshot();
  });

  test('should show the image with the URL and ALT', () => { 
    render( <GifItem {...img} />)
    // screen.debug()
    // expect(screen.getByRole<HTMLImageElement>('img').src).toBe( img.url );
    // expect(screen.getByRole<HTMLImageElement>('img').alt).toBe( img.url );
    const { src, alt } = screen.getByRole<HTMLImageElement>('img');
    expect( src ).toBe( img.url );
    expect( alt ).toBe( img.title );
  });

  test('should show the title in the component', () => {
    render( <GifItem {...img} /> );
    expect( screen.getByText( img.title ) ).toBeTruthy();
  });

});
