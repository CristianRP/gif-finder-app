import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components';

describe('Tests on <AddCategory />', () => { 
  
  test('should change the value of the input text', () => { 
    render( <AddCategory onNewCategory={() => {}} /> );
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.input(input, { target: { value: 'Spiderman' } })

    expect( input.value ).toBe('Spiderman');
  });

  test('should call onNewCategory if the input has a value', () => { 
    const inputValue = 'Test';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole<HTMLInputElement>('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );

    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('should not call onNewCategory if the input is empty', () => {
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> );
    const form = screen.getByRole('form');

    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();
  });

});