import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests on useFetchGifs hook', () => { 

  test('should return the initial state', () => {

    const { result } = renderHook( () => useFetchGifs('Test') );
    const { images, isLoading } = result.current;

    expect( images ).toHaveLength( 0 );
    expect( isLoading ).toBeTruthy();
  });

  test('should return an array of images and isLoading false', async() => { 
    const { result } = renderHook(() => useFetchGifs('Test'));
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
      {
        timeout: 1000
      }
    );

    const { images, isLoading } = result.current;
    expect( images ).toHaveLength( 10 );
    expect( isLoading ).toBeFalsy();
  });
});
