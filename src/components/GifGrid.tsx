import { FC, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { GifResponse, getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

type GifGridProps = {
  category: string;
}

export const GifGrid: FC<GifGridProps> = ({ category }) => {

  const [images, setImages] = useState<GifResponse[]>([]);

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages( newImages );
  }

  useEffect(() => {
    getImages()
  })
  
  return (
    <>
      <h3>{ category }</h3>
      <div className='cardGrid'>
        {
          images.map( image => (
            // <GifItem key={ id } title={title}></GifItem>
            <GifItem key={ image.id } { ...image } />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
