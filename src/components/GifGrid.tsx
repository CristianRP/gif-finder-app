import { FC } from 'react';
import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

type GifGridProps = {
  category: string;
}

export const GifGrid: FC<GifGridProps> = ({ category }) => {

  const { images } = useFetchGifs( category );
  
  return (
    <>
      <h3>{ category }</h3>
      <div className='card-grid'>
        {
          images.map( image => (
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
