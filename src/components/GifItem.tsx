import PropTypes from 'prop-types';

import { GifResponse } from '../helpers/getGifs'

export const GifItem = ({ title, url }: GifResponse) => {
  return (
    <div className="card--item">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
