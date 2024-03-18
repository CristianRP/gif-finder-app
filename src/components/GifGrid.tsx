import { FC } from 'react';
import PropTypes from 'prop-types';

type GifGridProps = {
  category: string;
}

const gifs = [1, 12, 3, 4];

export const GifGrid: FC<GifGridProps> = ({ category }) => {
  return (
    <div key={ category }>
      <h3>{ category }</h3>
      {
        gifs.map(e => (
          <h1>{ e }</h1>
        ))
      }
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
