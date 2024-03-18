import { ChangeEvent,  FormEvent, useState } from 'react'

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
