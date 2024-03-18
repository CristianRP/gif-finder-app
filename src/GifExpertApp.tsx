import { useState } from 'react'

import { AddCategory } from './components/AddCategory';

export default function GifExpertApp() {

  const [ categories, setCategories ] = useState<string[]>([ 'Spiderman', 'Youngla' ]);

  return (
    <>
      {/* title */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory setCategories={ setCategories } />

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

