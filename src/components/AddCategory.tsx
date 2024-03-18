import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'

interface AddCategoryProps {
  setCategories: Dispatch<SetStateAction<string[]>>;
}

export const AddCategory = ( { setCategories }: AddCategoryProps) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue( target.value );
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setCategories( (categories: string[]) => [ inputValue, ...categories ] );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder='Search Gif'
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

