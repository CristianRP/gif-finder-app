import { ChangeEvent,  FormEvent, useState } from 'react'
import PropTypes from 'prop-types';

interface AddCategoryProps {
  onNewCategory: (category: string) => void
}

export const AddCategory = ( { onNewCategory }: AddCategoryProps) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue( target.value );
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit } aria-label='form'>
      <input
        type="text"
        placeholder='Search Gif'
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
