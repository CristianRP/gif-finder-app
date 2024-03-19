import { GifResponse } from '../helpers/getGifs'

interface Props extends Omit<GifResponse, "id" | "url"> {
  id?: string;
  url?: string;
  key: string;
}

export const GifItem = ({ id, title }: Props) => {
  return (
    <li key={ id }>{ title }</li>
  )
}
