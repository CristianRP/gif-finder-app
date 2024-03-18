import { useState } from 'react'

import { AddCategory } from './components/AddCategory';

export default function GifExpertApp() {

  const [ categories, setCategories ] = useState([ 'Spiderman', 'Youngla' ]);

  const onAddCategory = (category: string) => {
    if ( categories.includes(category) ) return;

    setCategories([ category, ...categories ]);
  }

  return (
    <>
      {/* title */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory 
        // onAddCategory={ setCategories } 
        onNewCategory={ (value) => onAddCategory(value) }
        />

      {/* Gif list */}
      <ol>
        {
          categories.map(category => {
            return <li key={category}>{ category }</li>
          })
        }
      </ol>
        {/* Gif item */}
    </>
  )
}

