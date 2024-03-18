import { useState } from 'react'

export default function GifExpertApp() {

  const [ categories, setCategories ] = useState([ 'Spiderman', 'Youngla' ]);

  return (
    <>
      {/* title */}
      <div>GifExpertApp</div>

      {/* Input */}

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

