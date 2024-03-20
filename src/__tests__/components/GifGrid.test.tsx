import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => { 

  const category = 'Playstation';

  test('should show the loading text on init', () => {
    jest.mocked(useFetchGifs).mockReturnValue({
      images: [],
      isLoading: true
    });
    
    render( <GifGrid category={ category } /> )

    expect( screen.getByText( 'Loading...' ) );
    expect( screen.getByText( category ));
  });

  test('should show items when the iamges are load useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Spiderman',
        url: 'https://images/sp.jpg'
      },
      {
        id: 'XYZ',
        title: 'Venom',
        url: 'https://images/vv.jpg'
      }
    ];

    jest.mocked(useFetchGifs).mockReturnValue({
      images: gifs,
      isLoading: true
    });

    render(<GifGrid category={ category } />);

    expect( screen.getAllByRole('img') ).toHaveLength(2);
  })

});
